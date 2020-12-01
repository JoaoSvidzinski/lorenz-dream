//----------------------------------------------------------------------------------------// 
function displayAll() {
	messnamed ("toMTap",'displayAll');
	messnamed ("toGrain",'displayAll');
}
//----------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------//
//Harmoniser fonctions//
//----------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------// 
function setDuration(i, v) messnamed ("toMTap",'setDuration', i, v);
function setTransposition(i, v) messnamed ("toMTap",'setTransposition', i, v);
function setFd(i, v) messnamed ("toMTap",'setFd', i, v);
function setHStretch(i, v) messnamed ("toMTap",'sethStretch', i, v);
function outputAllFds(v) messnamed ("toMTap",'setFd', v);
function H_setInp(i, v) messnamed ("toMTap",'setInp', i, v); 
function H_setOut(i, v) messnamed ("toMTap",'setOut', i, v);
//----------------------------------------------------------------------------------------// 
function setGlobalParameters(tStre, smooth, wH) {
	messnamed ("toMTap",'tStretch', tStre);
	messnamed ("toMTap",'smoothDuration', smooth);
	messnamed ("toMTap", 'wHarmo', wH);
}
function ByHarmo(v) messnamed ("ByHarmo", v);
//----------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------//
//Granular fonctions//
//----------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------// 
function setSize(i, v) messnamed ("toGrain",'setSize', i, v);
function setDel(i, v)  messnamed ("toGrain", 'setDel', i, v);
function setRare(i, v) messnamed ("toGrain", 'setRare', i, v);
function setFdx(i, v) messnamed ("toGrain", 'setFdx', i, v);
function G_setInp(i, v) messnamed ("toGrain", 'setInp', i, v); 
function G_setOut(i, v) messnamed ("toGrain",'setOut', i, v);
//----------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------// 
function updateMTapDisplays() {
	outputAllDurations();
	outputAllTranspositions();
	outputAllFds();
	outputAllHvds();
	outputAllInps();
	outputAllOuts();
}
//----------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------// 
//allReset function
//----------------------------------------------------------------------------------------// 
function allReset() {
	messnamed ("toMTap",'setDuration', 0);
	messnamed ("toMTap",'setFd',  0);
	messnamed ("toMTap",'setTransposition', 0);
	messnamed ("toMTap",'tStretch', 1);
	messnamed ("toMTap",'setInp',  1);
	messnamed ("toMTap",'setOut',  1);
	setGlobalParameters(0.4, 20, 50);
	messnamed ("toGrain", 'setSize', 100);
	messnamed ("toGrain", 'setDel', 0);
	messnamed ("toGrain", 'setRare', 0.5);
	messnamed ("toGrain", 'setFdx', 0);
	messnamed ("toGrain", 'setInp', 1);
	messnamed ("toGrain",'setOut', 1);
	RandomG(0, 0, 0, 0, 0, 0, 0, 0, 0);
	RandomD(0,0);
	Estop();
	setRamp(100);Imatrix(0); Imatrix2(0); Fmatrix(0); Gmatrix(0); Hmatrix(0); Amatrix(0);
	displayAll();
	}
 
function On() {
	H_setInp(1); H_setOut(1); G_setInp(1); G_setOut(1); }

function G_setSize(a, b, c, d, e, f, g) {
	setSize(0, a); setSize(1, b); setSize(2, c); setSize(3, d); setSize(4, e); setSize(5, f); setSize(6, g); 
}
function G_setDel(a, b, c, d, e, f, g) {
	setDel(0, a); setDel(1, b); setDel(2, c); setDel(3, d); setDel(4, e); setDel(5, f); setDel(6, g); 
}
function G_setRare(a, b, c, d, e, f, g) {
	setRare(0, a); setRare(1, b); setRare(2, c); setRare(3, d); setRare(4, e); setRare(5, f); setRare(6, g); 
}
function H_setDuration(a, b, c, d, e, f, g) {
	setDuration(0, a); setDuration(1, b); setDuration(2, c); setDuration(3, d); setDuration(4, e); setDuration(5, f); setDuration(6, g); 
}
function H_setTransposition(a, b, c, d, e, f, g) {
	setTransposition(0, a); setTransposition(1, b); setTransposition(2, c); setTransposition(3, d); setTransposition(4, e); setTransposition(5, f); setTransposition(6, g); 
}
function H_setHStretch(a, b, c, d, e, f, g) {
	setHStretch(0, a); setHStretch(1, b); setHStretch(2, c); setHStretch(3, d); setHStretch(4, e); setHStretch(5, f); setHStretch(6, g); 
}
//----------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------// 
//echantillons functions//
//----------------------------------------------------------------------------------------// 
//----------------------------------------------------------------------------------------// 
function E1(a, b, c, d, e, f, g){
messnamed ("E1", "metro", a); messnamed ("E1", "lim", b); messnamed ("E1", "min", c);  messnamed ("E1", "max", d); 
messnamed ("E1", "env", e);  messnamed ("E1", "dur", f);  messnamed ("E1", "buffer", g); 
}
function E2(a, b, c, d, e, f, g){
messnamed ("E2", "metro", a); messnamed ("E2", "lim", b); messnamed ("E2", "min", c);  messnamed ("E2", "max", d); 
messnamed ("E2", "env", e); messnamed ("E2", "dur", f);  messnamed ("E2", "buffer", g); 
}
function E3(a, b, c, d, e, f, g){
messnamed ("E3", "metro", a); messnamed ("E3", "lim", b); messnamed ("E3", "min", c);  messnamed ("E3", "max", d); 
messnamed ("E3", "env", e); messnamed ("E3", "dur", f);  messnamed ("E3", "buffer", g); 
}
function E4(a, b, c, d, e, f, g){
messnamed ("E4", "metro", a); messnamed ("E4", "lim", b); messnamed ("E4", "min", c);  messnamed ("E4", "max", d); 
messnamed ("E4", "env", e);  messnamed ("E4", "dur", f);  messnamed ("E4", "buffer", g); messnamed ("E4s", "s", 1); 
}
function E4s(y, x) {
messnamed ("E4s", "s", 2);  messnamed ("E4s", "min", y);  messnamed ("E4s", "max", x); 
}
function E5(a, b, c, d, e, f, g){
messnamed ("E5", "metro", a); messnamed ("E5", "lim", b); messnamed ("E5", "min", c);  messnamed ("E5", "max", d); 
messnamed ("E5", "env", e);  messnamed ("E5", "dur", f);  messnamed ("E5", "buffer", g); messnamed ("E5s", "s", 1); 
}
function E5s(y, x) {
messnamed ("E5s", "s", 2);  messnamed ("E5s", "min", y);  messnamed ("E5s", "max", x); 
}
function E6(a, b, c, d, e, f, g){
messnamed ("E6", "metro", a); messnamed ("E6", "lim", b); messnamed ("E6", "min", c);  messnamed ("E6", "max", d); 
messnamed ("E6", "env", e);  messnamed ("E6", "dur", f);  messnamed ("E6", "buffer", g); messnamed ("E6s", "s", 1); 
}
function E6s(y, x) {
messnamed ("E6s", "s", 2);  messnamed ("E6s", "min", y);  messnamed ("E6s", "max", x); 
}
function E7(a, b, c, d, e, f, g){
messnamed ("E7", "metro", a); messnamed ("E7", "lim", b); messnamed ("E7", "min", c);  messnamed ("E7", "max", d); 
messnamed ("E7", "env", e);  messnamed ("E7", "dur", f);  messnamed ("E7", "buffer", g); messnamed ("E7s", "s", 1); 
}
function E7s(y, x) {
messnamed ("E7s", "s", 2);  messnamed ("E7s", "min", y);  messnamed ("E7s", "max", x); 
}

function Estop() {
	messnamed ("E1", "lim", 0); messnamed ("E2", "lim", 0); messnamed ("E3", "lim", 0);
}
//----------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------// 
//echantillons functions 2//
//----------------------------------------------------------------------------------------// 
//----------------------------------------------------------------------------------------// 
function Ev(a, b, c, d){
messnamed ("Ev", "metro", a); messnamed ("Ev", "lim", b); messnamed ("Ev", "min", c);  messnamed ("Ev", "max", d); 
}

/*
function E1b(a, b, c, d, e, f){
messnamed ("E1", "metro", a); messnamed ("E1", "lim", b); messnamed ("E1", "min", c);  messnamed ("E1", "max", d); 
messnamed ("E1", "env", e);  messnamed ("E1", "dur", f);  
}
function E2b(a, b, c, d, e, f){
messnamed ("E2", "metro", a); messnamed ("E2", "lim", b); messnamed ("E2", "min", c);  messnamed ("E2", "max", d); 
messnamed ("E2", "env", e); messnamed ("E2", "dur", f); 
}
function E3b(a, b, c, d, e, f){
messnamed ("E3", "metro", a); messnamed ("E3", "lim", b); messnamed ("E3", "min", c);  messnamed ("E3", "max", d); 
messnamed ("E3", "env", e);  messnamed ("E3", "dur", f);  messnamed ("E3s", "s", 1); 
}
*/
//----------------------------------------------------------------------------------------// 
//echantillons 2 functions//
//----------------------------------------------------------------------------------------// 
function En2(x) messnamed ("En2", x); 
function En2G(x) messnamed ("En2G", x); 
//----------------------------------------------------------------------------------------//
//Matrix functions//
//----------------------------------------------------------------------------------------// 
function Amatrix (x) messnamed("toAmatrix", x);
function Imatrix (x) messnamed("toImatrix", x);
function Imatrix2 (x) messnamed("toImatrix2", x);
function Fmatrix (x) messnamed("toFmatrix", x);
function Gmatrix (x) messnamed("toGmatrix", x);
function Hmatrix (x) messnamed("toHmatrix", x);
//----------------------------------------------------------------------------------------// 
function setRamp(v) messnamed("ramp", v);
function by(t,x) {
	messnamed("Byramp", t); messnamed("ByV", x);
}
function trig(x) messnamed("Ttrig", x);
//----------------------------------------------------------------------------------------// 
//----------------------------------------------------------------------------------------//
//ToFlang functions//
//----------------------------------------------------------------------------------------//
function flang(a, b, c, d, e, f){
messnamed ("toFlang", "metro", a); messnamed ("toFlang", "lim", b); messnamed ("toFlang", "fmin", c);  messnamed ("toFlang", "fmax", d); 
messnamed ("toFlang", "dmin", e); messnamed ("toFlang", "dmax", f);
}
function flangG(x) messnamed ("FlangG", x);
//----------------------------------------------------------------------------------------//
//ToWHarmo functions//
//----------------------------------------------------------------------------------------//
function WHarmo(a, b, c, d, e, f){
messnamed ("toWHarmo", "s", a); messnamed ("toWHarmo", "metro1", b); messnamed ("toWHarmo", "metro2", c); messnamed ("toWHarmo", "lim", d);  messnamed ("toWHarmo", "min", e); 
messnamed ("toWHarmo", "max", f);
}
function Wstop(){
messnamed ("toWHarmo", "s", 0);
} 
//----------------------------------------------------------------------------------------// 
//----------------------------------------------------------------------------------------//
//ToDel functions//
//----------------------------------------------------------------------------------------//
function del(a, b, c, d, e){
messnamed ("toDel", "s", a); messnamed ("toDel", "metro", b); messnamed ("toDel", "lim", c);  messnamed ("toDel", "min", d); 
messnamed ("toDel", "max", e); 
} 
//----------------------------------------------------------------------------------------//
//Random (ToGrain) et RandomD functions//
//----------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------// 
function setCent(v) messnamed ("toRandom", 'cent', v);
function setGrain(v) messnamed ("toRandom", 'grain', v);
function setMetro(v) messnamed ("toRandom", 'gMetro', v);
function setMSwitch(v) messnamed ("toRandom",  "rSwitch", v);
function setGSwitch(v) messnamed ("toRandom",  "gSwitch", v);

function setMSize(Vmin, Vmax) {
	messnamed ("toRandom",'sMax', Vmax);
	messnamed ("toRandom",'sMin', Vmin);
}
function setMDel(Vmin, Vmax) {
	messnamed ("toRandom", 'dMax', Vmax);
	messnamed ("toRandom", 'dMin', Vmin);
}
function setMRar(Vmin, Vmax) {
	messnamed ("toRandom",  'rMax', Vmax);
	messnamed ("toRandom",  'rMin', Vmin);
} 
function setRmax(a, b, c, d, e, f, g) messnamed ("toRandom","rMaxL", a, b, c, d, e, f, g);

function RandomG(a, b, c, d, e, f, g, h,i) {
	setGrain(a); setMetro(b); setMSize(c, d); setMDel(e, f); setMRar(g,h); setMSwitch(i);
} 
function RandomD(a,b){
	setCent(a); messnamed ("toRandom", "mode", b);	
}
//----------------------------------------------------------------------------------------//
//Grain functions//
//----------------------------------------------------------------------------------------//
function Grain2(a, b, c, d, e, f, g) {
messnamed ("to2Grain",'gMetro', a); 
messnamed ("to2Grain",'sMin', b); messnamed ("to2Grain",'sMax', c);
messnamed ("to2Grain", 'dMin', d);	messnamed ("to2Grain", 'dMax', e);
messnamed ("to2Grain",  'rMin', f);	messnamed ("to2Grain",  'rMax', g);
}
function g2Switch(a) messnamed ("to2Grain",'gSwitch', a); 
