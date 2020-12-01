//E1(metro,lim,min,max,env,dur,buffer);
//by(Byramp,ByV);
//flang(metro,lim,fmin,fmax,dmin,dmax);
//flangG(gain);
//WHarmo(s, metro1,metro2,lim,min,max);
//del(s,metro,lim,min,max);
//RandomG(s,metro,sMin,sMax,dMin,dMax,rMin,rMax,Rs);
//RandomD(s,mode);
//setMSwitch(V); set max switch
//setRmax(a, b, c, d, e, f, g);
//setGSwitch(v); 1 = aléatoire 2 = amp

//----------------------------------------------------------------------------------------//
var classTest = function() {

	On();
	
	Imatrix(1);
	Imatrix2(2);
	Fmatrix(1);
	Gmatrix(1);
	Hmatrix(2);
	Amatrix(3);
	setRamp(5000);
	
	E1(1000,50, 5000, 5000, 5000, 5000,"A.5");
	E2(1000,40, 5000, 5000, 5000, 5000,"A.5");
	E3(1000,30, 5000, 5000, 5000, 5000,"A.5");
	by(500, 0.6);
	
	flang(1000,10,0.1,0.8,100,400);
	flangG(0.15);

	del(1,100,50,10,30);
	WHarmo(1, 100,100,50,30,100);

	RandomD(1, 1);
	RandomG(1, 500, 100, 100, 500, 1000, 0.5, 0.8, 0);
	setGSwitch(1);

	setRmax(0.8, 0.9, 0.7, 0.6, 0.5, 0.6, 0.9); 
	

	setGlobalParameters(1, 300, 50);		
	H_setHStretch(1, 1, 1, 1, 1, 1, 1);
	setFd(0.4);

	
	//G_setSize(100, 200, 300, 400, 500, 600, 700);
	//G_setDel(1000, 2000, 3000, 4000, 5000, 3000, 2000);
	//G_setRare(1, 0.3, 0.5, 0.8, 0.9, 0.1, 1);
	setFdx(0.4);

	ByHarmo(0.3);
	
	displayAll();
	}

var classTest2 = function() {

	On();
	
	Imatrix(1);
	Imatrix2(4);
	Fmatrix(1);
	Gmatrix(1);
	Hmatrix(2);
	Amatrix(3);
	setRamp(3000);
	
	E1(500,30, 5000, 5000, 5000, 5000,"A.1");
	E2(800,20, 5000, 5000, 5000, 5000,"A.14");
	E3(1000,30, 5000, 5000, 5000, 5000,"A.15");
	by(500, 0.2);
	
	flang(100,50,0.1,0.8,50,1000);
	flangG(0.15);

	del(1,100,50,10,30);
	WHarmo(0, 100,100,30,30,500);

	RandomD(1, 1);
	RandomG(1, 50, 40, 80, 1000, 5000, 0.2, 0.8, 1);
	setGSwitch(2);

	setRmax(0.8, 0.9, 0.7, 0.6, 0.5, 0.6, 0.9); 


	setGlobalParameters(1, 300, 100);		
	H_setHStretch(1, 1, 1, 1, 1, 1, 1);
	setFd(0.4);

	
	//G_setSize(100, 200, 300, 400, 500, 600, 700);
	//G_setDel(1000, 2000, 3000, 4000, 5000, 3000, 2000);
	//G_setRare(1, 0.3, 0.5, 0.8, 0.9, 0.1, 1);
	setFdx(0.4);

	ByHarmo(0.3);
	
	displayAll();

		post("__________Classe :", "classTest2", "\n");
	}
	

var Primeiro = function() {

	On();
	
	Imatrix(1);
	Imatrix2(2);
	Fmatrix(1);
	Gmatrix(1);
	Hmatrix(2);
	Amatrix(3);
	setRamp(5000);
	
	E1(1000,50, 5000, 5000, 5000, 5000,"A.5");
	E2(1000,40, 5000, 5000, 5000, 5000,"A.5");
	E3(1000,30, 5000, 5000, 5000, 5000,"A.5");
	by(500, 0.3);
	
	flang(1000,30,0.1,0.8,100,300);
	flangG(0.3);

	del(1,100,50,10,30);


	RandomD(0, 1);
	WHarmo(1, 100,100,50,30,100);
	H_setTransposition(100, 200, 300, 400, 500, 600, 700);


	RandomG(1, 500, 100, 100, 500, 1000, 0.5, 0.8, 0);
	setGSwitch(1);

	setRmax(0.8, 0.9, 0.7, 0.6, 0.5, 0.6, 0.9); 


	setGlobalParameters(1, 300, 50);		
	H_setHStretch(1, 1, 1, 1, 1, 1, 1);
	setFd(0.4);

	
	//G_setSize(100, 200, 300, 400, 500, 600, 700);
	//G_setDel(1000, 2000, 3000, 4000, 5000, 3000, 2000);
	//G_setRare(1, 0.3, 0.5, 0.8, 0.9, 0.1, 1);
	setFdx(0.4);

	ByHarmo(0.3);
	
	displayAll();
	}

	
var grave = function() {
	

	On();		
	Imatrix(2);
	Fmatrix(1);
	Gmatrix(5);
	Hmatrix(7);
	Amatrix(5); // puis messnamed("Amatrix", "clear");
	
	
	by(50, 0.2);
	E1(100,30, 5000, 10000, 7);
	E2(20,80, 1000, 2000, 7); 
	E3(30,40, 30, 400, 1);
	
	grain2(2);

	mode(3);
	Random(1, 1, 500, 70, 100, 800, 1000, 0.8, 0);
	
	H_setDuration(0, 10, 250, 500, 600, 450, 200, 150);
	setHStretch(1);
	setGlobalParameters(1, 300, 50);
	setFdx(0.5); setFd(0.3);
	 
	setByHarmo(0.3);
	setRamp(3000);

	setRmin(0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5); 
	
	displayAll();
	post("__________Classe :", "grave", "\n");
	}
	
	var grave2 = function() {
	

	On();		
	Imatrix(1);
	Fmatrix(1);
	Gmatrix(1);
	Hmatrix(2);
	Amatrix(4); // puis messnamed("Amatrix", "clear");
	
	
	by(50, 0.2);
	E1(150,10, 5000, 10000, 7);
	E2(20,10, 5000, 10000, 7); 
	E3(30,5, 30, 40, 1);
	
	grain2(2);

	mode(1);
	Random(1, 0, 500, 70, 100, 0000, 1000, 0.8, 0);
	
	H_setDuration(0, 100, 25, 50, 60, 200, 500, 350);
	setHStretch(1);
	setGlobalParameters(1, 300, 50);
	setFdx(0.4); setFd(0.3);
	
	G_setSize(100, 200, 300, 400, 500, 600, 700);
	G_setDel(0, 0, 0, 0, 0, 0, 0);
	G_setRare(1, 0.3, 0.5, 0.8, 0.9, 0.1, 1);
		 
	setByHarmo(0.3);
	setRamp(3000);
	
	displayAll();
	post("__________Classe :", "grave", "\n");
	}

