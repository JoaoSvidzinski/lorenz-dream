//--------------------------------------------------------------------------------------//
//-------------------------------mTDelHarmo7--------------------------------------------//
//
//-------------------------BY ALAIN BONARDI - 2015 - 2017-------------------------------//
//--------------------------------------------------------------------------------------//

//CHANGES
//Doppler pitchshifters remains with 4 overlapped blocks
//Maximum delay size in samples is now 1048576 (and no longer 2097152)
//that is more than 21 seconds at 48 KHz

import("stdfaust.lib");


//--------------------------------------------------------------------------------------//
//GENERAL MATRIX//
//--------------------------------------------------------------------------------------//
//matrix of N x M toggles//
//
toggle(c, in) = checkbox("h:Lines/h:Reinjection_Matrix/v:Del%2c-->/r%3in");
Mixer(N,out) 	= par(in, N, *(toggle(in, in+out*N)) ) :> _ ;
Matrix(N,M) 	= par(in, N, _) <: par(out, M, Mixer(N, out));


//--------------------------------------------------------------------------------------//
tablesize = 1 << 16;
sinustable = os.sinwaveform(tablesize);
millisec = ma.SR / 1000.0;

//--------------------------------------------------------------------------------------//
//CONTROL PARAMETERS
//--------------------------------------------------------------------------------------//


//Size of the harmonizer window for Doppler effect//
hWin(ind) = hslider("h:Lines/v:Windows/hWin%2ind", 64, 1, 127, 0.01) : pdLineDrive4096;

//Duration of smoothing//
smoothDuration = hslider("h:Global_Parameters/smoothDuration", 20, 10, 5000, 1)/1000;

//Delay line parameters//

d(ind) = int(hslider("h:Lines/v:Del_Durations/d%2ind", (100*(ind+1)), 0, 21000, 1)*millisec*hslider("h:Global_Parameters/dStretch [7]", 1, 0.01, 10, 0.01));
fd(ind) = hslider("h:Lines/v:Del_Feedbacks/fd%2ind", 0, 0, 0.99, 0.01):smoothLine;

//Dispatching between harmonizer (1) and simple delay (0)//
xvd(ind) = 0.5;

hStretch(ind) = hslider("h:Lines/v:Stretch/hStretch%2ind", 1, -10, 10, 0.01);

//Transposition in midicents//
tr(ind) = hslider("h:Lines/v:Harmo_Transpositions/tr%2ind", 0, -2400, 2400, 1);

//Input gains//
//from 0 to 1//
inp(ind) = hslider("h:Lines/v:Line_input/inp%2ind [5]", 1, 0, 1, 0.01):smoothLine;

//OUTPUT GAINS//
//from 0 to 1//
out(ind) = hslider("h:Lines/v:Line_output/out%2ind [6]", 1, 0, 1, 0.01):smoothLine;

//--------------------------------------------------------------------------------------//
//FEEDBACK REINJECTION MATRICES N x N
//--------------------------------------------------------------------------------------//
fdMatrix(N) = Matrix(N, N);

//--------------------------------------------------------------------------------------//
//DEFINITION OF A SMOOTHING FUNCTION FOR CONTROLLERS
//--------------------------------------------------------------------------------------//
smoothLine = si.smooth(ba.tau2pole(smoothDuration));


//--------------------------------------------------------------------------------------//
// GENERATORS
//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//
// PHASOR THAT ACCEPTS BOTH NEGATIVE AND POSITIVE FREQUENCES
//--------------------------------------------------------------------------------------//
pdPhasor(f) = os.phasor(1, f);

//--------------------------------------------------------------------------------------//
// SINUS ENVELOPE
//--------------------------------------------------------------------------------------//
sinusEnvelop(phase) = s1 + d * (s2 - s1)
	with {
			zeroToOnePhase = phase : ma.decimal;
			myIndex = zeroToOnePhase * float(tablesize);
			i1 = int(myIndex);
			d = ma.decimal(myIndex);
			i2 = (i1+1) % int(tablesize);
			s1 = rdtable(tablesize, sinustable, i1);
			s2 = rdtable(tablesize, sinustable, i2);
};

//-------------------------------------------------------------------------
// Implementation of Max/MSP line~. Generate signal ramp or envelope
//
// USAGE : line(value, time)
// 	value : the desired output value
//	time  : the interpolation time to reach this value (in milliseconds)
//
// NOTE : the interpolation process is restarted every time the desired
// output value changes. The interpolation time is sampled only then.
//
// comes from the maxmsp.lib - no longer standard library
//
//-------------------------------------------------------------------------
line (value, time) = state~(_,_):!,_
	with {
		state (t, c) = nt, ba.if (nt <= 0, value, c+(value - c) / nt)
		with {
			nt = ba.if( value != value', samples, t-1);
			samples = time*ma.SR/1000.0;
		};
	};

//--------------------------------------------------------------------------------------//
//DEFINITION OF A PUREDATA LIKE LINEDRIVE OBJECT
//--------------------------------------------------------------------------------------//
pdLineDrive(vol, ti, r, f, b, t) = transitionLineDrive
	with {
			//vol = current volume in Midi (0-127)
			//ti = current time of evolution (in msec)
			//r is the range, usually Midi range (127)
			//f is the factor, usually 2
			//b is the basis, usually 1.07177
			//t is the ramp time usually 30 ms

			pre_val = ba.if (vol < r, vol, r);
			val = ba.if (pre_val < 1, 0, f*pow(b, (pre_val - r)));
			pre_ti = ba.if (ti < 1.46, t, ti);
			transitionLineDrive = line(val, pre_ti);
		};
pdLineDrive4096 = (_, 30, 127, 4096, 1.07177, 30) : pdLineDrive;

//--------------------------------------------------------------------------------------//
//CLIP FUNCTION BETWEEN -1 AND 1
//--------------------------------------------------------------------------------------//
clip(x) = (-1) * infTest + 1 * supTest + x * rangeTest
	with {
			infTest = (x < -1);
			supTest = (x > 1);
			rangeTest = (1 - infTest) * (1 - supTest);
};

//--------------------------------------------------------------------------------------//
//DOUBLE OVERLAPPED DELAY
//--------------------------------------------------------------------------------------//
//
//nsamp is an integer number corresponding to the number of samples of delay
//freq is the frequency of envelopping for the overlapping between the 2 delay lines
//--------------------------------------------------------------------------------------//

maxSampSize = 1048576;
delay21s(nsamp) = de.delay(maxSampSize, nsamp);

overlappedDoubleDelay21s(nsamp, freq) = doubleDelay
	with {
			env1 = freq : pdPhasor : sinusEnvelop : *(0.5) : +(0.5);
			env1c = 1 - env1;
			th1 = (env1 > 0.001) * (env1@1 <= 0.001); //env1 threshold crossing
			th2 = (env1c > 0.001) * (env1c@1 <= 0.001); //env1c threshold crossing
			nsamp1 = nsamp : ba.sAndH(th1);
			nsamp2 = nsamp : ba.sAndH(th2);
			doubleDelay =	_ <: (delay21s(nsamp1), delay21s(nsamp2)) : (*(env1), *(env1c)) : + ;
		};

doubleDelay21s(nsamp) = overlappedDoubleDelay21s(nsamp, 30);

//--------------------------------------------------------------------------------------//
//DEFINITION OF AN ELEMENTARY TRANSPOSITION BLOCK
//--------------------------------------------------------------------------------------//
transpoBlock(moduleOffset, midicents, win) = dopplerDelay
with {
			freq = midicents : +(6000) : *(0.01) : ba.midikey2hz : -(261.625977) : *(-3.8224) /(float(win));
			//shifted phasor//
			adjustedPhasor = freq : pdPhasor : +(moduleOffset) : ma.decimal;
			//threshold to input new control values//
			th_trigger = (adjustedPhasor > 0.001) * (adjustedPhasor@1 <= 0.001);
			trig_win = win : ba.sAndH(th_trigger);
			delayInSamples = adjustedPhasor : *(trig_win) : *(millisec);
			variableDelay = de.fdelay(262144, delayInSamples);
			cosinusEnvelop = adjustedPhasor : *(0.5) : sinusEnvelop;
			dopplerDelay = (variableDelay, cosinusEnvelop) : * ;
};


overlapped4Harmo(tra, win) = _ <: par(i, 4, transpoBlock(i/4, tra, win)) :> *(0.5);

overlapped4HarmoDryWet(tra, alpha, win) = _ <: (*(alpha), *(1-alpha)) : (overlapped4Harmo(tra, win), _) :> _ ;


//--------------------------------------------------------------------------------------//
//INPUT DISPATCHING
//--------------------------------------------------------------------------------------//
//
//starting with 2n values sigA1, sigA2, ... sigAn, sigB1, sigB2, ... sigBn
//the result is the vector sigA1, sigB1, sigA2, sigB2, ..., sigAn, sigBn
//--------------------------------------------------------------------------------------//
inputSort(n) = si.bus(2*n) <: par(i, n, (ba.selector(i, 2*n), ba.selector(i+n, 2*n)));

//--------------------------------------------------------------------------------------//
//BLOCK DEFINITIONS
//--------------------------------------------------------------------------------------//
//delay block//
DelBlock(n) = par(i, n, (+ : doubleDelay21s(d(i))));

//harmonizer block//
HarmoBlock(n) = par(i, n, (clip : overlapped4HarmoDryWet(tr(i)*hStretch(i), xvd(i), hWin(i))));

//delay and harmonizer block//
DelHarmoBlock(n) = DelBlock(n) : HarmoBlock(n);

//feedback block//
fdBlock(n) = par(i, n, *(fd(i) : *(1 - xvd(i) * 0.75)));

//feedback and dispatching block//
fdToMatrixBlock(n) = fdBlock(n) : fdMatrix(n);

//n inlets with n gain controls//
inputBlock(n) = par(i, n, *(inp(i)));

//output gain block with n gain controls//
outputBlock(n) = par(i, n, *(out(i)));


//--------------------------------------------------------------------------------------//
//MTAP PROCESSES
//DELAY COMBINED WITH HARMONIZERS
//--------------------------------------------------------------------------------------//
//
//mTDel(n) = n delay lines with reinjection
//mTDelHarmo(n) = n {delay lines + harmonizers} with reinjection
//
//each of them with two possibilities:
//-either autoReinj which means a delay line can reinject sound only into itself (A)
//-or multReinj which means a delay line can reinject sound into any delay line (M)
//--------------------------------------------------------------------------------------//
mTDelA(n) = (inputSort(n) : DelBlock(n)) ~ (fdBlock(n));
mTDelHarmoA(n) = (inputSort(n) : DelHarmoBlock(n)) ~ (fdBlock(n));

mTDelM(n) = (inputSort(n) : DelBlock(n)) ~ (fdToMatrixBlock(n));
mTDelHarmoM(n) = (inputSort(n) : DelHarmoBlock(n)) ~ (fdToMatrixBlock(n));


//--------------------------------------------------------------------------------------//
//DELAYS WITH HARMONIZERS
mTDelHarmoMG(n) = inputBlock(n) : mTDelHarmoM(n) : outputBlock(n);


//--------------------------------------------------------------------------------------//
//PROCESS
//--------------------------------------------------------------------------------------//
process = mTDelHarmoMG(7);
