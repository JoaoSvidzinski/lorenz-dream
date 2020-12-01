//E1(metro,lim,min,max,env,dur,buffer);
//by(Byramp,ByV);
//flang(metro,lim,fmin,fmax,dmin,dmax);
//flangG(gain);
//WHarmo(s, metro1,metro2,lim,min,max);
//setGlobalParameters(tStre, smooth, wH); 
//del(s,metro,lim,min,max);
//Grain2(gMetro, sMin, sMax, dMin, dMax, rMin, rMax);
//RandomG(s,metro,sMin,sMax,dMin,dMax,rMin,rMax,Rs);
//RandomD(s,mode);
//setMSwitch(V); set max switch
//setRmax(a, b, c, d, e, f, g);
//setGSwitch(v); 1 = aléatoire 2 = amp

//----------------------------------------------------------------------------------------//
var classTest = function() {

	On();
	
	Imatrix(0);
	Imatrix2(0);
	Fmatrix(1);
	Gmatrix(1);
	Hmatrix(2);
	Amatrix(3);
	setRamp(1000);
	
	E1(1000,50, 5000, 5000, 5000, 5000,"A.5");
	E2(1000,40, 5000, 5000, 5000, 5000,"A.5");
	E3(1000,30, 5000, 5000, 5000, 5000,"A.5");
	E4(1000,50, 5000, 5000, 5000, 5000,"A.5");
	E5(1000,40, 5000, 5000, 5000, 5000,"A.5");
	E6(1000,30, 5000, 5000, 5000, 5000,"A.5");	
	E7(1000,30, 5000, 5000, 5000, 5000,"A.5");
	
	by(500, 0.8);
	
	flang(1000,10,0.1,0.8,100,500);
	flangG(0.15);

	del(1000,100,50,10,30);
	WHarmo(1, 100,100,50,30,100);

	RandomD(0, 1);
	
	RandomG(1, 500, 100, 100, 500, 1000, 0.5, 0.8, 0);
	setGSwitch(1);

	setRmax(0.8, 0.9, 0.7, 0.6, 0.5, 0.6, 0.9); 

	Grain2(100, 50, 150, 100, 1000, 0.3, 0.8);
	g2Switch(1);

	setGlobalParameters(1, 300, 50);		
	H_setHStretch(1, 1, 1, 1, 1, 1, 1);
	setFd(0.4);

	
	//G_setSize(100, 200, 300, 400, 500, 600, 700);
	//G_setDel(1000, 2000, 3000, 4000, 5000, 3000, 2000);
	//G_setRare(1, 0.3, 0.5, 0.8, 0.9, 0.1, 1);
	setFdx(0.4);

	ByHarmo(0.8);
	
	displayAll();
	}

var Intro = function() {

	Imatrix(4);
	Imatrix2(0);
	Fmatrix(1);
	Gmatrix(1);
	Hmatrix(2);
	Amatrix(3);
	setRamp(2000);
	
	
	
	E1 (50,  20, 500, 100, 500, 1000, "A.2");
	E2 (500, 5, 500, 800, 500, 500, "A.2");
	E3 (50,  60, 20,  500, 500, 800,  "A.2");
	E4 (50,  60, 20,  550, 500, 800,  "A.2");
	E5 (50,  20, 500, 100, 500, 1000, "A.2");
	E6 (50,  60, 20,  550, 500, 800,  "A.2");
	E7 (500, 5,  500, 800, 500, 500, "A.2");
	
	Ev(0, 0, 500, 2000);
	
	
	/*
	E1(50,20, 500, 100, 500, 1000,"A.2");
	E2(500,5, 500, 500, 500, 300,"A.2");
	E3(50,60, 20, 550, 500, 800,"A.2");
	E4(50,60, 20, 550, 500, 800,"A.2");
	E5(50,20, 500, 100, 500, 1000,"A.2");
	E6(50,60, 20, 550, 500, 800,"A.2");
	E7(500,5, 500, 500, 500, 300,"A.2");
	*/
	by(2000, 0.8);
	
	flang(1000,10,0.1,0.8,100,500);
	flangG(0.8);

	del(1,1000,80,10,100);
	
	//WHarmo(0, 100,100,50,30,100);
	Wstop();

	RandomD(0, 1);
	H_setTransposition(50, 80, 22, 38, 54, 42, 46);
	
	
	RandomG(1, 1000, 50, 300, 500, 3000, 0.8, 0.9,1);
	setGSwitch(1);

	setRmax(0.8, 0.9, 0.7, 0.6, 0.5, 0.6, 0.9); 

	setGlobalParameters(1, 300, 100);		
	H_setHStretch(1, 1, 1, 1, 1, 1, 1);
	setFd(0.8);
	setFdx(0.8);

	ByHarmo(0.5);
	
	displayAll();
	}
	

var Primeiro = function() {


	Imatrix(4);
	Imatrix2(0);
	Fmatrix(1);
	Gmatrix(1);
	Hmatrix(2);
	Amatrix(3);
	setRamp(2000);
	
	
	by(2000, 0.8);
	
	flang(1000,10,0.1,0.8,1,10);
	flangG(0.8);

	del(1,1000,50,10,1000);
	
	//WHarmo(0, 100,100,50,30,100);
	Wstop();

	RandomD(0, 1);
	H_setTransposition(-888, -408, -72, 216, 696, 1080, 1896);
	
	RandomG(1, 200, 50, 150, 500, 3000, 0.8, 0.9,1);
	setGSwitch(1);

	setRmax(0.8, 0.9, 0.7, 0.6, 0.5, 0.6, 0.9); 

	setGlobalParameters(1, 300, 100);		
	H_setHStretch(1, 1, 1, 1, 1, 1, 1);
	setFd(0.8);
	setFdx(0.8);

	ByHarmo(0.5);
	
	displayAll();

	}
var Segundo = function() {
	

	Imatrix(1);
	Imatrix2(2);
	Fmatrix(1);
	Gmatrix(1);
	Hmatrix(2);
	Amatrix(3);
	setRamp(100);
	
	E1(800,50, 5000, 5000, 5000, 5000,"A.23");
	E2(800,40, 5000, 5000, 5000, 5000,"A.24");
	E3(800,30, 5000, 5000, 5000, 5000,"A.22");
	E4(8000,30, 5000, 5000, 5000, 5000,"A.22");
	E5(800,40, 5000, 5000, 5000, 5000,"A.25");
	E6(800,30, 5000, 5000, 5000, 5000,"A.26");	
	E7(800,30, 5000, 5000, 5000, 5000,"A.27");
	by(500, 0.2);
	
	flang(10,10,0.1,0.8,100,500);
	flangG(0.15);

	del(1,100,50,10,30);
	WHarmo(0, 100,100,50,30,100);
	Wstop();

	RandomD(0, 1);
	RandomG(1, 500, 100, 100, 500, 1000, 0.5, 0.8, 1);
	setGSwitch(1);

	setRmax(0.8, 0.9, 0.7, 0.6, 0.5, 0.6, 0.9); 

	Grain2(100, 50, 150, 100, 1000, 0.3, 0.8);
	g2Switch(1);

	setGlobalParameters(1, 300, 80);		
	H_setHStretch(1, 1, 1, 1, 1, 1, 1);
	setFd(0.4);

	setFdx(0.4);

	ByHarmo(0.3);
	
	displayAll();

	post("__________Classe :", "Segundo", "\n");
	}

var Terceiro = function() {

	Imatrix(1);
	Imatrix2(0);
	Fmatrix(1);
	Gmatrix(1);
	Hmatrix(2);
	Amatrix(3);
	setRamp(1000);
	
	E1(0,0, 1000, 1000, 1000, 1000,"A.31");
	E2(0,0, 1000, 1000, 1000, 1000,"A.31");
	E3(0,0, 1000, 1000, 1000, 1000,"A.31");
	E4(0,0, 1000, 1000, 1000, 1000,"A.31");
	E5(0,0, 1000, 1000, 1000, 1000,"A.31");
	E6(0,0, 1000, 1000, 1000, 1000,"A.31");
	E7(0,0, 1000, 1000, 1000, 1000,"A.31");
	by(500, 0.2);
	
	flang(10,10,0.1,0.8,100,500);
	flangG(0.15);

	del(1,100,50,100,300);
	WHarmo(0, 100,100,50,30,100);
	Wstop();

	RandomD(0, 1);
	RandomG(1, 1, 50, 100, 1000, 5000, 0.5, 0.8, 1);
	setGSwitch(2);

	setRmax(0.8, 0.9, 0.7, 0.6, 0.5, 0.6, 0.9); 

	Grain2(1, 50, 80, 1000, 5000, 0.5, 0.8);
	g2Switch(1);

	setGlobalParameters(1, 300, 100);		
	H_setHStretch(1, 1, 1, 1, 1, 1, 1);


	ByHarmo(0.3);
	
	displayAll();

	post("__________Classe :", "Terceiro", "\n");
	}
