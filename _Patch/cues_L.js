//----------------------------------------------------------------------------------------// 
//Après 21/10/2019
//GLOBAL VARIABLES AND MESSAGES
//----------------------------------------------------------------------------------------// 
inlets = 1;
outlets = 1;

//---------------------------------------------------------------------------------------//
// CLASS INSTANCES//
//----------------------------------------------------------------------------------------//
var Test, Init, Gra1, Gra2, Gra3, Ob1, Ob2, Ob3;
//----------------------------------------------------------------------------------------// 
// INCLUDE FUNCTIONS
//----------------------------------------------------------------------------------------//
include("incFunc_L"); 
include("incClass_L"); 	
//----------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------// 
// DESCRIPTION OF SEQUENCES
//----------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------//
function Test() {
	allReset();
	Test = new classTest();
	post("start", "\n");
	displayAll(); 	
	}
//En2(En2);
//En2G(En2G);
//----------------------------------------------------------------------------------------//
//SEQUENCE 0
//----------------------------------------------------------------------------------------//
function seq0() {
	
	allReset();
	post("open", "\n");
	
}
//----------------------------------------------------------------------------------------//
//SEQUENCE 1
//----------------------------------------------------------------------------------------//

function seq1() {
	
	allReset();
	Init = new Intro();

	messnamed ("En2","g1b");
	messnamed ("En3","g3a");

	displayAll(); 
	post("start", "\n");
	post("Sequencia 1", "\n");
}
//----------------------------------------------------------------------------------------//
//SEQUENCE 2
//----------------------------------------------------------------------------------------//
function seq2() {
	
	setRamp(1000);
	Amatrix(3);
	
	E1(50,20, 500, 100, 500, 1000,"A.2");
	//E2(500,5, 500, 500, 500, 300,"A.2");
	E2(500,5, 200, 600, 500, 500,"A.2");
	E3(50,60, 20, 550, 500, 800,"A.2");
	E4(50,60, 20, 550, 500, 800,"A.2");
	E5(50,20, 500, 100, 500, 1000,"A.2");
	E6(50,60, 20, 550, 500, 800,"A.2");
	//E7(500,5, 500, 500, 500, 300,"A.2");
	E7(500,5, 400, 800, 500, 500,"A.2");
	
	setFd(0.5);
	setFdx(0.5);
	
	del(1,100,50,10,500);
	
	displayAll(); 
	post("Sequencia 2", "\n");
}

function seq3() {
	
	setRamp(1000);
	Amatrix(9);

	E1(50,20, 500, 100, 500, 1000,"A.2");
	//E2(500,5, 500, 500, 500, 300,"A.2");
	E2(500,5, 200, 800, 500, 500,"A.2");
	E3(50,60, 20, 550, 500, 800,"A.2");
	E4(50,60, 20, 550, 500, 800,"A.2");
	E5(50,20, 500, 100, 500, 1000,"A.2");
	E6(50,60, 20, 550, 500, 800,"A.2");
	//E7(500,5, 500, 500, 500, 300,"A.2");
	E7(500,5, 400, 600, 500, 500,"A.2");

	del(1,100,50,10,1000);
	H_setTransposition(150, 280, 322, 138, 254, 342, 446);
		
	setFd(0.8);
	setFdx(0.8);
	
	
	messnamed ("En2","g3");
	displayAll(); 
	post("Sequencia 3", "\n");
}

function seq4() {
	
	Imatrix(2);
	//Amatrix(2);
	
	RandomG(1, 100, 50, 100, 500, 5000, 0.8, 0.9, 0);
	
	
	E2(500,5, 200, 800, 500, 500,"A.2");
	E3(50,60, 20, 550, 500, 800,"A.2");
	E4(50,60, 20, 550, 500, 800,"A.2");
	E5(50,20, 500, 100, 500, 1000,"A.2");
	E6(50,60, 20, 550, 500, 800,"A.2");
	
	setFd(0.5);
	setFdx(0.5);
	
	//by(4000, 0.4);

	displayAll(); 
	post("Sequencia 4", "\n");
}

function seq5() {
	
	Amatrix(9);
	//RandomG(1, 500, 80, 150, 500, 2000, 0.2, 0.9, 0);
	del(1,100,50,10,2000);
	
	Gmatrix(2);
	
	setFd(0.8);
	setFdx(0.8);
	
	H_setTransposition(850, 480, 322, 938, 354, 942, 546);

	
	displayAll(); 
	post("Sequencia 5", "\n");
}
function seq6() {
	
	Amatrix(5);
	Imatrix2(5);


	//messnamed ("En2","g1c");	
	messnamed ("En3b",800);	
	
	
	E4(1000,60, 20, 550, 500, 800,"A.2");
	E5(1000,20, 500, 100, 500, 1000,"A.2");
	E6(1000,60, 20, 550, 500, 800,"A.2");


	del(1,100,50,1000,3000);

	setFd(0.5);
	setFdx(0.5);

	displayAll(); 
	
	post("Sequencia 6", "\n");
}
function seq7() {

	Amatrix(9);

	E1(3000,20, 500, 100, 500, 1000,"A.2");
	E3(2000,60, 20, 550, 500, 800,"A.2");

	
	H_setTransposition(1150, 680, 722, 938, 854, 542, 1246);
	
	displayAll(); 
	post("Sequencia 7", "\n");
}
function seq8() {

	
	allReset();
	Init = new Intro();

	messnamed ("En2","g1b");
	messnamed ("En3","g3a");

	Imatrix(5);
	Imatrix2(5);

	del(1,100,50,100,3000);
	
	H_setTransposition(1150, 680, 722, 938, 854, 542, 1246);


	E2(250,30, 200, 800, 500, 500,"A.2");
	E7(250,5, 400, 600, 500, 500,"A.2");


	E1(500,20, 200, 500, 500, 1000,"A.2");
	E3(500,30, 200, 500, 500, 1000,"A.2");
	E4(500,20, 200, 500, 500, 1000,"A.2");
	E5(500,30, 200, 500, 500, 1000,"A.2");
	E6(500,60, 200, 500, 500, 1000,"A.2");
	
			
	post("Sequencia 8", "\n");
}

function seq9() {
	
	messnamed("En3b",3000);	
	
	Imatrix2(2);

	E1(500,20, 150, 500, 500, 1000,"A.2");
	E3(500,30, 200, 400, 500, 1000,"A.2");
	E4(500,20, 150, 500, 500, 1000,"A.2");
	E5(500,30, 200, 400, 500, 1000,"A.2");
	E6(500,60, 150, 500, 500, 1000,"A.2");


	Amatrix(6);
	del(1,100,50,10,5000);


	post("Sequencia 9", "\n");
}
function seq10() {
	
	//messnamed("En3b",2500);	
	messnamed("En3","g3b");	
	
	E1(100,20, 10, 500, 300, 500,"A.9");
	E1(100,20, 10, 500, 300, 500,"A.9");
	E3(100,60, 10, 500, 300, 500,"A.9");
	E4(100,20, 10, 500, 300, 500,"A.9");
	E5(100,30, 10, 500, 300, 500,"A.9");
	E6(100,60, 10, 500, 300, 500,"A.9");
	E7(100,60, 10, 500, 300, 500,"A.9");	
	

	Amatrix(9);
	del(1,100,50,10,500);
	flang(1000,5,0.1,0.2,2,5);

	post("Sequencia 10", "\n");
}
function seq11() {
	
	messnamed("En3b",2200);	
	messnamed("En2b",6000);	
	
	
	E1(100,20, 150, 350, 500, 1000,"A.2");
	E1(100,20, 150, 350, 500, 1000,"A.2");
	E3(100,60, 150, 350, 500, 1000,"A.2");
	E4(100,20, 150, 350, 500, 1000,"A.2");
	E5(100,30, 150, 350, 500, 1000,"A.2");
	E6(100,60, 150, 350, 500, 1000,"A.2");
	E7(100,60, 150, 350, 500, 1000,"A.2");
	

	Amatrix(6);
	del(1,100,50,10,500);
	flang(1000,5,0.1,0.2,2,5);

	post("Sequencia 11", "\n");
}
function seq12() {
	
	messnamed("En3b",2000);	
	messnamed("En2b",3000);	

	E1(80,20, 150, 300, 500, 1000,"A.2");
	E1(80,20, 150, 300, 500, 1000,"A.2");
	E3(80,60, 150, 300, 500, 1000,"A.2");
	E4(80,20, 150, 300, 500, 1000,"A.2");
	E5(80,30, 150, 300, 500, 1000,"A.2");
	E6(80,60, 150, 300, 500, 1000,"A.2");
	E7(80,60, 150, 300, 500, 1000,"A.2");

	Amatrix(9);
	del(1,100,50,10,500);


	post("Sequencia 12", "\n");
}
function seq13() {
	
	messnamed("En3b",1500);
	messnamed("En2b",2000);		
	
	E1(50,20, 100, 300, 500, 1000,"A.2");
	E1(50,20, 100, 300, 500, 1000,"A.2");
	E3(50,60, 100, 300, 500, 1000,"A.2");
	E4(50,20, 100, 300, 500, 1000,"A.2");
	E5(50,30, 100, 300, 500, 1000,"A.2");
	E6(50,60, 100, 300, 500, 1000,"A.2");
	E7(50,60, 100, 300, 500, 1000,"A.2");

	Amatrix(6);
	del(1,100,50,10,500);


	post("Sequencia 13", "\n");
}
function seq14() {
	
	messnamed("En3b",1000);	
	messnamed("En2b",1000);	
	messnamed("En3","g3e");	
	
	/*
	E1(500,20, 1000, 8000, 1000, 4000,"A.22");
	E1(500,20, 1000, 8000, 1000, 4000,"A.22");
	E3(500,60, 1000, 8000, 1000, 4000,"A.22");
	E4(500,20, 1000, 8000, 1000, 4000,"A.22");
	E5(500,30, 1000, 8000, 1000, 4000,"A.22");
	E6(500,60, 1000, 8000, 1000, 4000,"A.22");
	E7(500,60, 1000, 8000, 1000, 4000,"A.22");
	*/
	
	E1(500,20, 500, 2500, 2500, 2500,"A.12");
	E1(500,20, 500, 2500, 2500, 2500,"A.12");
	E3(500,60, 500, 2500, 2500, 2500,"A.12");
	E4(500,20, 500, 2500, 2500, 2500,"A.12");
	E5(500,30, 500, 2500, 2500, 2500,"A.12");
	E6(500,60, 500, 2500, 2500, 2500,"A.12");
	E7(500,60, 500, 2500, 2500, 2500,"A.12");

	Amatrix(9);
	del(1,100,50,10,500);
	flang(1000,5,0.1,0.2,2,5);

	post("Sequencia 14", "\n");
}
function seq15() {
	
	Imatrix(11);
	
	E1(50,20, 200, 500, 500, 1000,"A.2");
	E1(50,20, 200, 500, 500, 1000,"A.2");
	E3(50,60, 200, 500, 500, 1000,"A.2");
	E4(50,20, 200, 500, 500, 1000,"A.2");
	E5(50,30, 200, 500, 500, 1000,"A.2");
	E6(50,60, 200, 500, 500, 1000,"A.2");
	E7(50,60, 200, 500, 500, 1000,"A.2");
	
	setFd(0.5);
	setFdx(0.5);

	post("Sequencia 15", "\n");
	
		displayAll(); 
}
function seq16() {
	
	
	E1(50,20, 200, 500, 500, 1000,"A.24");
	E1(50,20, 200, 500, 500, 1000,"A.24");
	E3(50,60, 200, 500, 500, 1000,"A.24");
	E4(50,20, 200, 500, 500, 1000,"A.24");
	E5(50,30, 200, 500, 500, 1000,"A.24");
	E6(50,60, 200, 500, 500, 1000,"A.24");
	E7(50,60, 200, 500, 500, 1000,"A.24");
	
	post("Sequencia 16", "\n");
}
//----------------------------------------------------------------------------------------//
//SEQUENCE 17
//----------------------------------------------------------------------------------------//

function seq17() {
	
	Init = new Intro();
	
	Imatrix(11);
	Imatrix2(9);


	setFd(0.6);
	setFdx(0.6);

	messnamed("En3b",12000);	
	messnamed("En2","g4");
	messnamed ("En2","g1b");
	messnamed ("En3","g3a");
	
	/*
	E1(100,80, 10, 300, 500, 500,"A.9");
	E2(100,70, 10, 300, 500, 500,"A.9");
	E3(100,50, 10, 300, 500, 500,"A.9");
	E4(100,80, 10, 300, 500, 500,"A.9");
	E5(100,90, 10, 300, 500, 500,"A.9");
	E6(100,80, 10, 300, 500, 500,"A.9");
	E7(100,70, 10, 300, 500, 500,"A.9");
	*/
	
	
	E1(50,80, 200, 500, 500, 500,"A.2");
	E2(50,70, 200, 500, 500, 500,"A.2");
	E3(50,90, 200, 500, 500, 500,"A.2");
	E4(50,80, 200, 500, 500, 500,"A.2");
	E5(50,70, 200, 500, 500, 500,"A.2");
	E6(50,90, 200, 500, 500, 500,"A.2");
	E7(50,80, 200, 500, 500, 500,"A.2");

	
	displayAll(); 

	RandomG(1, 10, 50, 80, 5000, 8000, 0.8, 0.9, 0);
	setFdx(0.5);
	
	
	H_setTransposition(1896, 1080, 696, 216, -72, -408, -888);
	
	del(1,100,50,10,300);
	flang(1000,5,0.1,0.2,2,5);
	
	Amatrix(9);

	displayAll(); 	
	post("Sequencia 17", "\n");
}	
function seq18() {

	setFd(0.5);
	setFdx(0.5);

	by(500, 1);

	En2('gra2');	
	Amatrix(4);
	
	E1(50,80, 200, 500, 500, 500,"A.2");
	E2(100,20, 200, 800, 500, 500,"A.2");
	E3(50,90, 200, 500, 500, 500,"A.2");
	E4(50,80, 200, 500, 500, 500,"A.2");
	E5(50,70, 200, 500, 500, 500,"A.2");
	E6(50,90, 200, 500, 500, 500,"A.2");
	E7(100,20, 200, 800, 500, 500,"A.2");

	post("Sequencia 18", "\n");
	
	displayAll(); 
}
function seq19() {

	Imatrix(10);
	Imatrix2(0);

	Amatrix(9);
	
	setFd(0.6);
	setFdx(0.6);


	E2(50,20, 800, 1300, 1200, 1200,"A.18");
	E4(50,20, 800, 1300, 1200, 1200,"A.18");
	E6(50,20, 800, 1300, 1200, 1200,"A.18");	
	E7(50,20, 800, 1300, 1200, 1200,"A.18");	


	E1(50,80, 200, 500, 500, 500,"A.2");
	//E2(50,80, 200, 500, 500, 1000,"A.24");
	E3(50,80, 200, 500, 500, 500,"A.2");
	//E4(50,80, 200, 500, 500, 1000,"A.24");
	E5(50,80, 200, 500, 500, 500,"A.2");
	//E6(50,80, 200, 500, 500, 1000,"A.24");
	//E7(50,80, 200, 500, 500, 1000,"A.24");

	H_setTransposition(200, 300, 500, 250, 700, 300, 600);

	displayAll(); 	
	post("Sequencia 19", "\n");
	
	
}
function seq20() {

	Imatrix2(11);
	
	setFd(0.5);
	setFdx(0.5);

	E1(100,80, 10, 300, 500, 500,"A.9");
	E2(100,70, 10, 300, 500, 500,"A.9");
	E3(100,50, 10, 300, 500, 500,"A.9");
	E4(100,80, 10, 300, 500, 500,"A.9");
	E5(100,90, 10, 300, 500, 500,"A.9");
	E6(100,80, 10, 300, 500, 500,"A.9");
	E7(100,70, 10, 300, 500, 500,"A.9");
	
	displayAll(); 

	RandomG(1, 10, 50, 80, 5000, 8000, 0.8, 0.9, 0);
	setFdx(0.5);
	
	
	H_setTransposition(1896, 1080, 696, 216, -72, -408, -888);
		
	Amatrix(6);


	displayAll(); 
	
	post("Sequencia 20", "\n");
}
function seq21() {

	Imatrix(7);
	
	Amatrix(4);

	E2(0,0, 500, 500, 10, 500,"A.25");
	E4(0,0, 500, 500, 10, 500,"A.25");
	E6(0,0, 500, 500, 10, 500,"A.25");	
	E7(0,0, 500, 500, 10, 500,"A.25");

	
	post("Sequencia 21", "\n");
}/*	
function seq22() {
	
	Amatrix(9);
	
	Imatrix2(4);
	Imatrix(1);
	H_setHStretch(1, 1, 1, 1, 1, 1, 1);
	RandomD(1, 1);
	E2(50,20, 200, 600, 500, 5000,"A.10");
	E4(50,20, 200, 600, 500, 5000,"A.10");
	E6(50,20, 200, 600, 500, 5000,"A.10");	
	E7(50,20, 200, 600, 500, 5000,"A.10");	
	post("Sequencia 16", "\n");
	
		displayAll(); 
	
}	
function seq23() {
	
	Amatrix(4);	
	Imatrix(1)
	
	E1(500,50, 450, 550, 200, 500,"A.22");
	E3(500,30, 300, 550, 300, 5000,"A.24");
	E5(400,40, 300, 550, 300, 5000,"A.24");
	

	post("Sequencia 17", "\n");
	setFdx(0.5);
	displayAll(); 
	
}*/	
function seq22() {
	
	Init = new Intro();
	
	Imatrix(11);
	Imatrix2(9);


	setFd(0.8);
	setFdx(0.8);

	messnamed("En3b",12000);	
	messnamed("En2","g4");
	messnamed ("En2","g1b");
	messnamed ("En3","g3a");
	
	/*
	E1(100,80, 10, 300, 500, 500,"A.9");
	E2(100,70, 10, 300, 500, 500,"A.9");
	E3(100,50, 10, 300, 500, 500,"A.9");
	E4(100,80, 10, 300, 500, 500,"A.9");
	E5(100,90, 10, 300, 500, 500,"A.9");
	E6(100,80, 10, 300, 500, 500,"A.9");
	E7(100,70, 10, 300, 500, 500,"A.9");
	*/
	
	
	//E1(50,80, 200, 500, 500, 500,"A.2");
	E2(50,70, 200, 500, 500, 500,"A.2");
	//E3(50,90, 200, 500, 500, 500,"A.2");
	E4(50,80, 200, 500, 500, 500,"A.2");
	//E5(50,70, 200, 500, 500, 500,"A.2");
	E6(50,90, 200, 500, 500, 500,"A.2");
	E7(50,80, 200, 500, 500, 500,"A.2");

	
	displayAll(); 

	RandomG(1, 10, 50, 80, 5000, 8000, 0.8, 0.9, 0);
	setFdx(0.5);
	
	
	H_setTransposition(1896, 1080, 696, 216, -72, -408, -888);
	
	del(1,100,50,10,300);
	flang(1000,5,0.1,0.2,2,5);
	
	Amatrix(9);

	displayAll(); 	
	post("Sequencia 22", "\n");
}
	
function seq23() {
	
	Amatrix(4);	
	Imatrix(1)
	
	E2(50,70, 200, 500, 500, 500,"A.24");
	E4(50,80, 200, 500, 500, 500,"A.24");
	E6(50,90, 200, 500, 500, 500,"A.24");
	E7(50,80, 200, 500, 500, 500,"A.24");
	
	RandomG(1, 1000, 50, 150, 3000, 5000, 0.5, 0.9, 0);


	setFdx(0.5);
	setFd(0.5)
	displayAll(); 
	
	post("Sequencia 23", "\n");
	
}
function seq24() {
	
	Amatrix(9);	
	Imatrix(1);
	
	messnamed ("En3","g3e");
	messnamed("En3b",3000);

	E2(50,70, 200, 500, 500, 500,"A.24");
	E4(50,80, 200, 500, 500, 500,"A.24");
	E6(50,90, 200, 500, 500, 500,"A.24");
	E7(40,80, 200, 500, 500, 500,"A.24");
	
	E1(50,80, 10, 300, 500, 500,"A.9");
	E3(50,50, 10, 300, 500, 500,"A.9");
	E5(50,90, 10, 300, 500, 500,"A.9");


	displayAll(); 
	
	post("Sequencia 24", "\n");
		
}


function seq25() {

	Amatrix(4);	
	

	E2(50,70, 200, 500, 500, 500,"A.24");
	E4(150,80, 200, 500, 500, 500,"A.2");
	E6(100,90, 200, 500, 500, 500,"A.2");
	E7(100,80, 200, 500, 500, 500,"A.24");
	
	E1(250,80, 10, 300, 500, 500,"A.9");
	E3(50,50, 10, 300, 500, 500,"A.9");
	E5(80,90, 10, 300, 500, 500,"A.9");
	
	RandomG(1, 500, 50, 150, 3000, 5000, 0.3, 0.8, 0);
	
	
	post("Sequencia 25", "\n");


}
function seq26() {

	messnamed("En3b",12000);	
	messnamed("En2","g4");
	messnamed ("En2","g1b");
	messnamed ("En3","g3a");	

	Amatrix(9);	
	

	E2(50,70, 200, 500, 500, 500,"A.2");
	E4(50,80, 200, 500, 500, 500,"A.24");
	E6(50,90, 200, 500, 500, 500,"A.2");
	E7(50,80, 200, 500, 500, 500,"A.24");

	E1(150,80, 10, 300, 500, 500,"A.9");
	E3(50,50, 10, 300, 500, 500,"A.9");
	E5(180,90, 10, 300, 500, 500,"A.9");
	
	RandomG(1, 500, 50, 150, 3000, 5000, 0.5, 0.8, 0);
	
	
	post("Sequencia 26", "\n");

}
function seq27() {

	messnamed("En3b",3000);		

	Amatrix(4);	
	

	E2(50,70, 200, 400, 500, 500,"A.2");
	E4(50,80, 200, 400, 500, 500,"A.24");
	E6(50,90, 200, 400, 500, 500,"A.2");
	E7(50,80, 200, 400, 500, 500,"A.24");

	E1(50,80, 10, 200, 500, 500,"A.9");
	E3(50,50, 10, 200, 500, 500,"A.9");
	E5(50,90, 10, 200, 500, 500,"A.9");
	
	RandomG(1, 500, 50, 150, 3000, 5000, 0.7, 0.8, 0);
	
	
	post("Sequencia 27", "\n");

}	
function seq28() {

	messnamed("En3b",1200);		

	Amatrix(9);	
	

	E2(45,70, 100, 300, 500, 500,"A.24");
	E4(50,80, 100, 300, 500, 500,"A.24");
	E6(45,90, 100, 300, 500, 500,"A.24");
	E7(100,80, 100, 300, 500, 500,"A.24");

	E1(45,80, 10, 100, 500, 500,"A.9");
	E3(50,50, 10, 200, 500, 500,"A.9");
	E5(40,90, 10, 200, 500, 500,"A.9");
	
	RandomG(1, 500, 50, 150, 3000, 5000, 0.5, 0.9, 0);

	
	post("Sequencia 28", "\n");
}	
function seq29() {

	messnamed("En3b",100);		

	Amatrix(4);	
	

	E2(50,70, 100, 300, 500, 500,"A.24");
	E4(50,80, 100, 300, 500, 500,"A.2");
	E6(50,90, 100, 300, 500, 500,"A.24");
	E7(50,80, 100, 300, 500, 500,"A.2");

	E1(250,80, 10, 100, 500, 500,"A.9");
	E3(250,50, 10, 200, 500, 500,"A.9");
	E5(500,90, 10, 200, 500, 500,"A.9");
	
	RandomG(1, 500, 50, 150, 3000, 5000, 0.3, 0.8, 0);
	
	
	post("Sequencia 29", "\n");

}	
function seq30() {


	messnamed("En3b",500);		

	Amatrix(9);	
	
	E2(25,80, 10, 50, 500, 500,"A.9");
	E4(25,50, 10, 200, 500, 500,"A.9");
	E6(50,90, 10, 200, 500, 500,"A.9");

	E1(25,80, 10, 50, 500, 500,"A.9");
	E3(25,50, 10, 200, 500, 500,"A.9");
	E5(50,90, 10, 200, 500, 500,"A.9");
	
	RandomG(1, 500, 50, 150, 3000, 5000, 0.3, 0.8, 0);
	
	
	post("Sequencia 30", "\n");

}
function seq31() {
	
	Init = new Intro();
	
	Imatrix(10);
	Imatrix2(1);


	setFd(0.6);
	setFdx(0.6);

	messnamed("En3b",12000);	
	messnamed("En2","g4");
	messnamed ("En2","g1b");
	messnamed ("En3","g3a");
	//messnamed ("En3","g3b");
	messnamed ("En3","g3c");	
	//messnamed ("En3","g3d");	


	E1(100,80, 400, 2100, 1500, 2000,"A.15");
	E2(20,70, 10, 300, 500, 500,"A.9");
	E3(100,50, 400, 2100, 1500, 2000,"A.15");
	E4(20,80, 10, 300, 500, 500,"A.9");
	E5(100,90, 400, 2100, 1500, 2000,"A.15");
	E6(20,80, 10, 300, 500, 500,"A.9");
	E7(20,70, 10, 300, 500, 500,"A.9");
	
	
	displayAll(); 

	RandomG(1, 10, 50, 80, 5000, 8000, 0.8, 0.9, 0);
	
	H_setTransposition(1896, 1080, 696, 216, -72, -408, -888);
	
	del(1,100,50,10,300);
	flang(1000,10,0.05,0.1,50,250);
	//flang(1000,10,0.05,0.8,200,500);
	
	Amatrix(9);

	displayAll(); 	
	post("Sequencia 31", "\n");
}
function seq32() {


	messnamed("En3b",500);		

	Amatrix(4);	
	

	E1(500,80, 400, 2100, 1500, 2000,"A.25");
	E3(1000,50, 400, 2100, 1500, 2000,"A.25");
	E5(1000,90, 400, 2100, 1500, 2000,"A.25");
	
	RandomG(1, 500, 50, 150, 3000, 5000, 0.3, 0.8, 0);

	displayAll(); 	
	post("Sequencia 32", "\n");
}
function seq33() {


	messnamed("En3b",500);		

	Amatrix(9);	
	
	E2(250,80, 10, 50, 500, 500,"A.9");
	E4(250,50, 10, 200, 500, 500,"A.9");
	E6(500,90, 10, 200, 500, 500,"A.9");

	
	E1(500,80, 400, 2100, 1200, 1200,"A.15");
	E3(1000,50, 400, 2100, 1200, 1200,"A.15");
	E5(1000,70, 400, 2100, 1200, 1200,"A.15");
	
	del(1,1000,50,1000,5000);
	
	RandomG(1, 500, 50, 150, 3000, 5000, 0.3, 0.8, 0);
	
	
	post("Sequencia 33", "\n");

}

function seq34() {


	messnamed("En3b",500);		

	Amatrix(4);	
	Imatrix2(11);
	
	E2(250,80, 10, 50, 500, 500,"A.25");
	E4(250,50, 10, 200, 500, 500,"A.25");
	E6(500,90, 10, 200, 500, 500,"A.25");
	
	RandomG(1, 1500, 50, 500, 1000, 3000, 0.3, 0.8, 0);
	
	H_setTransposition(200, 300, 500, 250, 700, 300, 600);

	displayAll(); 	
	post("Sequencia 34", "\n");
}
function seq35() {


	Amatrix(9);	
	
	
	E1(1500,80, 400, 2100, 1200, 1200,"A.15");
	E3(2000,50, 400, 2100, 1200, 1200,"A.15");
	E5(4000,50, 400, 2100, 1200, 1200,"A.15");
	
	E2(2000,50, 3500, 13500, 14000, 14000,"A.18");
	E4(2000,40, 5000, 15000, 13000, 13000,"A.19"); 
	E6(2000,30, 2000, 12000, 14000, 14000,"A.18");
	
	
	RandomG(1, 1500, 50, 500, 1000, 3000, 0.3, 0.7, 0);
	del(1,1000,50,5000,10000);
		

	displayAll(); 	
	post("Sequencia 35", "\n");
}
/*
function seq35() {

	Amatrix(9);	
	
	E7(4000,50, 400, 2100, 1200, 1200,"A.25");
	
	RandomG(1, 1500, 50, 500, 1000, 3000, 0.3, 0.7, 0);

	displayAll(); 	
	post("Sequencia 36", "\n");
}*/
function seq36() {


	Amatrix(4);	
	Imatrix(2);
	
	
	E1(2400,20, 400, 2100, 1200, 12000,"A.15");
	E3(2500,30, 400, 2100, 1200, 12000,"A.15");
	E5(4000,50, 400, 2100, 1200, 12000,"A.15");
	
	E2(2300,50, 5500, 13500, 14000, 14000,"A.18");
	E4(2400,40, 5000, 15000, 13000, 13000,"A.19");
	E6(2500,30, 4000, 12000, 14000, 14000,"A.18");
	
	
	RandomG(1, 1500, 50, 500, 1000, 5000, 0.3, 0.7, 0);

	displayAll(); 	
	post("Sequencia 36", "\n");
}
function seq37() {

	Amatrix(9);	
	Imatrix2(3);
	
	flang(1000,10,0.05,0.8,50,100);
	
	displayAll(); 	
	post("Sequencia 37", "\n");
}

function seq38() {

	Amatrix(9);	
	Imatrix2(3);
	
	
	E1(2400,0, 400, 2100, 1200, 12000,"A.25");
	E3(2500,0, 400, 2100, 1200, 12000,"A.25");
	E5(4000,0, 400, 2100, 1200, 12000,"A.25");
	
	
	flang(1000,10,0.05,0.8,50,100);
	
	del(1,1000,20,8000,10000);
	
	displayAll(); 	
	post("Sequencia 38", "\n");
}
function seq39() {

	Init = new Intro();
	
	Imatrix(11);
	Imatrix2(9);


	setFd(0.8);
	setFdx(0.8);

	messnamed("En3b",12000);	
	messnamed("En2","g4");
	messnamed ("En2","g1b");
	messnamed ("En3","g3b");
	messnamed ("En3","g3d");
	
	
	E1(50,80, 200, 500, 500, 500,"A.2");
	E2(50,70, 200, 500, 500, 500,"A.2");
	E3(50,90, 200, 500, 500, 500,"A.2");
	E4(50,80, 200, 500, 500, 500,"A.2");
	E5(50,70, 200, 500, 500, 500,"A.2");
	E6(50,90, 200, 500, 500, 500,"A.2");
	E7(50,80, 200, 500, 500, 500,"A.2");
	
	
	E2(1000,80, 9000, 16000, 1000, 14000,"A.18");
	E4(1000,70, 5000, 15000, 1000, 13000,"A.19");
	E6(1000,60, 9000, 16000, 1000, 14000,"A.18");

	
	displayAll(); 

	RandomG(1, 10, 50, 80, 5000, 8000, 0.8, 0.9, 0);
	setFdx(0.5);
	
	
	H_setTransposition(1896, 1080, 696, 216, -72, -408, -888);
	
	del(1,100,50,10,300);
	flang(1000,5,0.1,0.2,2,5);
	
	Amatrix(9);

	displayAll(); 	
	post("Sequencia 39", "\n");

}
function seq40() {

	setFd(0.5);
	setFdx(0.5);

	by(500, 1);

	En2('gra2');	
	Amatrix(4);
	
	Ev(200, 50, 500, 2000);
	
	E1(50,80, 200, 500, 500, 500,"A.2");
	//E2(100,20, 200, 800, 500, 500,"A.2");
	E3(50,90, 200, 500, 500, 500,"A.2");
	//E4(50,80, 200, 500, 500, 500,"A.2");
	E5(50,70, 200, 500, 500, 500,"A.2");
	E6(50,90, 200, 500, 500, 500,"A.2");
	//E7(100,20, 200, 800, 500, 500,"A.2");
	E7(50,80, 200, 500, 500, 500,"A.2");


	post("Sequencia 40", "\n");
	
	displayAll(); 
}
function seq41() {

	Amatrix(9);	
	Imatrix2(3);

	messnamed("En3b",600);	
	messnamed("En2b",400);	
			
	
	E1(2400,20, 400, 2100, 1200, 12000,"A.25");
	E3(2500,30, 400, 2100, 1200, 12000,"A.25");
	E5(4000,50, 400, 2100, 1200, 12000,"A.25");

	
	flang(1000,10,0.05,0.8,50,100);
	
	del(1,1000,20,8000,10000);
	
	displayAll(); 	

	post("Sequencia 41", "\n");
	
	displayAll(); 
}
function seq42() {

	Amatrix(4);		
	
	Ev(0, 0, 500, 2000);
	
	E1(50,80, 200, 400, 500, 500,"A.2");
	E2(50,70, 200, 400, 500, 500,"A.2");
	E3(50,90, 200, 400, 500, 500,"A.2");
	E4(50,80, 200, 400, 500, 500,"A.2");
	E5(50,70, 200, 400, 500, 500,"A.2");
	E6(50,90, 200, 400, 500, 500,"A.2");
	E7(50,80, 200, 400, 500, 500,"A.2");	
	
	flang(1000,10,0.05,0.8,50,100);
	
	del(1,1000,20,8000,10000);
	
	displayAll(); 	

	post("Sequencia 42", "\n");
	
	displayAll(); 
}
function seq43() {

	Amatrix(9);		
	

	E1(50,80, 150, 350, 500, 500,"A.2");
	E2(50,70, 150, 350, 500, 500,"A.2");
	E3(50,90, 150, 350, 500, 500,"A.2");
	E4(50,80, 150, 350, 500, 500,"A.2");
	E5(50,70, 150, 350, 500, 500,"A.2");
	E6(50,90, 150, 350, 500, 500,"A.2");
	E7(50,80, 150, 350, 500, 500,"A.2");
	
	flang(1000,10,0.05,0.8,50,100);
	
	del(1,1000,20,8000,10000);
	
	displayAll(); 	

	post("Sequencia 43", "\n");
	
	displayAll(); 
}
function seq44() {

	Amatrix(4);		
	
	E1(50,80, 50, 150, 500, 500,"A.2");
	E2(50,70, 50, 150, 500, 500,"A.2");
	E3(50,90, 50, 150, 500, 500,"A.2");
	E4(50,80, 50, 150, 500, 500,"A.2");
	E5(50,70, 50, 150, 500, 500,"A.2");
	E6(50,90, 50, 150, 500, 500,"A.2");
	E7(50,80, 50, 150, 500, 500,"A.2");
	
	
	flang(1000,10,0.05,0.8,50,100);
	
	del(1,1000,20,8000,10000);
	
	displayAll(); 	

	post("Sequencia 44", "\n");
	
	displayAll(); 
}
function seq45() {

	Amatrix(9);	
	Imatrix2(3);

	//messnamed("En3b",600);	
	messnamed("En2b",400);	
			
	
	E1(50,80, 50, 100, 500, 500,"A.2");
	E2(50,70, 50, 100, 500, 500,"A.2");
	E3(50,90, 50, 100, 500, 500,"A.2");
	E4(50,80, 50, 100, 500, 500,"A.2");

	
	//flang(1000,10,0.05,0.8,50,100);
	
	del(1,1000,20,800,5000);
	
	displayAll(); 	

	post("Sequencia 45", "\n");
	
	displayAll(); 
}
function seq46() {

	Amatrix(4);	

	//messnamed("En3b",600);	
	messnamed("En2b",300);	
			
	
	E5(50,70, 25, 50, 500, 500,"A.2");
	E6(50,90, 25, 50, 500, 500,"A.2");
	E7(50,80, 25, 150, 500, 500,"A.2");

	
	//flang(1000,10,0.05,0.8,50,100);
	
	
	displayAll(); 	

	post("Sequencia 46", "\n");
	
	displayAll(); 
}
function seq47() {
	
	Amatrix(9);
	
	Imatrix(10);
	Imatrix2(11);
	
	messnamed("En3b",2500);	
	messnamed("En2b",6000);	
	
	messnamed("Evb",2000);	
	
	setFdx(0.8);
	setFd(0.8);
	
	
	E1(100,20, 200, 250, 500, 500,"A.2");
	E2(100,20, 200, 250, 500, 500,"A.2");
	E3(100,60, 200, 250, 500, 500,"A.2");
	E4(100,20, 200, 250, 500, 500,"A.2");
	E5(100,30, 400, 600, 500, 500,"A.2");
	E6(100,60, 400, 600, 500, 500,"A.2");
	E7(100,60, 400, 600, 500, 500,"A.2");
	


	RandomG(1, 100, 50, 150, 1000, 3000, 0.85, 0.9, 0);

	del(1,100,50,10,500);
	flang(1000,5,0.1,0.2,2,5);
	
	displayAll(); 

	post("Sequencia 47", "\n");
}
function seq48() {
	
	messnamed("En3b",2000);	
	messnamed("En2b",3000);	
	
	messnamed("Evb",1395);	

	E1(80,20, 150, 200, 500, 500,"A.2");
	E2(80,20, 150, 200, 500, 500,"A.2");
	E3(80,60, 150, 200, 500, 500,"A.2");
	E4(80,20, 150, 200, 500, 500,"A.2");
	E5(80,30, 400, 600, 500, 500,"A.2");
	E6(80,60, 400, 600, 500, 500,"A.2");
	E7(80,60, 400, 600, 500, 500,"A.2");

	Amatrix(9);
	del(1,100,50,10,500);


	post("Sequencia 48", "\n");
}
function seq49() {
	
	messnamed("En3b",1500);
	messnamed("En2b",2000);	
	
	messnamed("Evb",1000);	
	
	E1(50,20, 100, 150, 500, 500,"A.2");
	E2(50,20, 100, 150, 500, 500,"A.2");
	E3(50,60, 100, 150, 500, 500,"A.2");
	E4(50,20, 100, 150, 500, 500,"A.2");
	E5(50,30, 400, 600, 500, 500,"A.2");
	E6(50,60, 400, 600, 500, 500,"A.2");
	E7(50,60, 400, 600, 500, 500,"A.2");

	Amatrix(6);
	del(1,100,50,10,500);


	post("Sequencia 49", "\n");
}
function seq50() {
	
	messnamed("En3b",500);
	messnamed("En2b",1000);		
	
	messnamed("Evb",2500);
	
	E1(50,20, 50, 100, 500, 500,"A.2");
	E2(50,20, 50, 100, 500, 500,"A.2");
	E3(50,60, 50, 100, 500, 500,"A.2");
	E4(50,20, 50, 100, 500, 500,"A.2");
	E5(50,30, 400, 600, 500, 500,"A.2");
	E6(50,60, 400, 600, 500, 500,"A.2");
	E7(50,60, 400, 600, 500, 500,"A.2");

	Amatrix(6);
	del(1,100,50,10,500);


	post("Sequencia 50", "\n");
}
function seq51() {

	Gra1 = new Primeiro();
	

	messnamed("En3","g5");	
	
	messnamed("ramp",2000);	
	messnamed("Amatrix","clear");	

	messnamed("En3b",1500);
	messnamed("En2b",10000);		
	messnamed("Evb",900);
	
	setFdx(0.0);
	setFd(0.0);
	
	
	E1(50,20, 100, 300, 500, 1000,"A.25");
	E2(50,20, 100, 300, 500, 1000,"A.25");
	E3(50,60, 100, 300, 500, 1000,"A.25");
	E4(50,20, 100, 300, 500, 1000,"A.25");
	E5(50,30, 100, 300, 500, 1000,"A.25");
	E6(50,60, 100, 300, 500, 1000,"A.25");
	E7(50,60, 100, 300, 500, 1000,"A.25");


	post("Sequencia 51", "\n");
	
	displayAll(); 
}
function seq52() {
	
	
	setFdx(0.5);
	setFd(0.5);
	
	E1(5000,50, 200, 5000, 500, 500,"A.2");
	E2(5000,60, 200, 600, 500, 500,"A.2");
	E3(5000,60, 200, 5000, 500, 500,"A.2");
	E4(5000,20, 50, 100, 500, 1000,"A.2");
	E5(5000,50, 11000, 16000, 14000, 14000,"A.18");
	E4(5000,60, 12000, 15000, 13000, 13000,"A.19");
	E6(5000,30, 13000, 16000, 14000, 14000,"A.18");


	Amatrix(9);
	displayAll();	
	
	post("Sequencia 52", "\n");	
}
function seq53() {
	
	Amatrix(4);
	//Imatrix2(1);
	
	
	E1(1000,50, 200, 4000, 500, 500,"A.2");
	E2(150,40, 200, 600, 500, 500,"A.2");
	E3(500,60, 200, 3000, 500, 500,"A.2");
	E4(200,20, 50, 100, 500, 1000,"A.2");
	
	
	H_setTransposition(1896, 1080, 696, 216, -72, -408, -888);
	
	del(1,500,50,1000,10000);
	
	displayAll();	
	
	post("Sequencia 53", "\n");
}
function seq54() {
	
	Amatrix(9);
	
	
	E1(50,80, 200, 500, 500, 500,"A.2");
	E3(50,80, 200, 500, 500, 500,"A.2");	
	
	post("Sequencia 54", "\n");
}	
function seq55() {
	
	Imatrix(7);

	Amatrix(4);
			
	E1(50,80, 200, 500, 500, 500,"A.2");
	E2(50,70, 200, 600, 500, 500,"A.2");
	E3(150,60, 200, 600, 500, 500,"A.2");
	E4(150,80, 200, 800, 500, 500,"A.2");		
			
					
	post("Sequencia 55", "\n");
}
function seq56() {
	
	Imatrix(10);
	
	Amatrix(9);
	
	E1(50,80, 200, 500, 500, 500,"A.2");
	E2(50,70, 200, 600, 500, 500,"A.2");
	E3(150,60, 200, 600, 500, 500,"A.2");
	E4(150,80, 200, 800, 500, 500,"A.2");	

	
	del(1,500,50,1000,3000);
	
	
	post("Sequencia 56", "\n");
}
function seq57() {
	
	
	Amatrix(4);
	
	Imatrix(10);
	
	E1(50,80, 150, 200, 500, 500,"A.2");
	E2(50,70, 150, 200, 500, 500,"A.2");
	E3(50,60, 150, 200, 500, 500,"A.2");
	E4(50,80, 150, 200, 500, 1000,"A.2");
	E5(5000,50, 11000, 16000, 14000, 14000,"A.18");
	E4(5000,60, 12000, 15000, 13000, 13000,"A.19");
	E6(50,60, 150, 200, 500, 500,"A.2");
	E7(50,80, 150, 200, 500, 1000,"A.2");
	
	post("Sequencia 57", "\n");
}	
function seq58() {
	
	Amatrix(9);
		
	E1(50,80, 50, 100, 500, 500,"A.2");
	E2(50,70, 50, 100, 500, 500,"A.2");
	E3(50,60, 50, 100, 500, 500,"A.2");
	E6(50,60, 50, 100, 500, 500,"A.2");
	E7(50,80, 50, 100, 500, 1000,"A.2");
	
	
	post("Sequencia 58", "\n");
}		
function seq59() {
	
	
	Init = new Intro();
	
	Imatrix(11);
	Imatrix2(9);


	setFd(0.8);
	setFdx(0.8);

	messnamed("En3b",8000);	
	messnamed("En2","g4");
	messnamed ("En2","g1b");
	messnamed ("En3","g3a");
	
	
	
	E1(50,80, 200, 500, 500, 500,"A.2");
	E2(50,70, 200, 500, 500, 500,"A.2");
	E3(50,90, 200, 500, 500, 500,"A.2");
	E4(50,80, 200, 500, 500, 500,"A.2");
	E5(50,70, 200, 500, 500, 500,"A.12");
	E6(50,90, 200, 500, 500, 500,"A.12");
	E7(50,80, 200, 500, 500, 500,"A.12");

	
	displayAll();

	RandomG(1, 10, 50, 80, 5000, 8000, 0.8, 0.9, 0);
	setFdx(0.5);
	
	
	H_setTransposition(1896, 1080, 696, 216, -72, -408, -888);
	
	del(1,100,50,10,300);
	flang(1000,5,0.1,0.2,2,5);
	
	Amatrix(9);

	displayAll(); 	
	post("Sequencia 59", "\n");
}	
function seq60() {

	setFd(0.5);
	setFdx(0.5);

	by(500, 1);

	En2('gra2');	
	Amatrix(4);
	
	E1(50,80, 200, 500, 500, 500,"A.2");
	E2(100,20, 200, 800, 500, 500,"A.2");
	E3(50,90, 200, 500, 500, 500,"A.2");
	E4(50,80, 200, 500, 500, 500,"A.12");
	E5(50,70, 200, 500, 500, 500,"A.12");
	E6(50,90, 200, 500, 500, 500,"A.12");
	E7(100,20, 200, 800, 500, 500,"A.12");

	post("Sequencia 18", "\n");
	
	displayAll(); 
}
	
	
function seq61() {
	
	
	messnamed("En3b",2000);	
	messnamed("En2b",3000);	
	
	Amatrix(9);
	
	E1(50,80, 150, 200, 500, 500,"A.2");
	E2(50,70, 150, 200, 500, 500,"A.2");
	E3(50,90, 150, 200, 500, 500,"A.2");
	E4(100,80, 400, 600, 500, 500,"A.2");
	E5(100,70, 400, 600, 500, 500,"A.2");
	E6(100,90, 400, 600, 500, 500,"A.2");
	E7(100,80, 400, 600, 500, 500,"A.2");
	
	post("Sequencia 61", "\n");
	
	
}			
function seq62() {
	
	messnamed("En3b",1500);
	messnamed("En2b",2000);	
	
	Amatrix(4);
	
	E1(50,80, 50, 150, 500, 500,"A.2");
	E2(50,70, 50, 150, 500, 500,"A.2");
	E3(50,90, 50, 150, 500, 500,"A.2");
	E4(50,80, 400, 600, 500, 500,"A.2");
	E5(100,70, 400, 600, 500, 500,"A.2");
	E6(100,90, 400, 600, 500, 500,"A.2");
	E7(100,80, 400, 600, 500, 500,"A.2");
	
	
	post("Sequencia 62", "\n");
}	
			
function seq63() {
	
	Imatrix2(2);
	
	
	messnamed("En3","g6");	
	
	messnamed("ramp",2000);	
	messnamed("Amatrix","clear");	

	messnamed("En3b",1500);
	messnamed("En2b",10000);		
	messnamed("Evb",900);
	
	setFdx(0.0);
	setFd(0.0);
	
	
	E1(4000,100, 4000, 4000, 4000, 4000,"A.23");
	E2(4000,100, 4000, 4000, 4000, 4000,"A.25");
	E3(50,80, 100, 300, 500, 500,"A.2");
	E4(50,70, 100, 300, 500, 500,"A.2");
	E5(1000,30, 3500, 4500, 4000, 4000,"A.23");
	E6(1000,60, 3950, 4050, 4000, 4000,"A.2");
	E7(150,80, 200, 600, 500, 500,"A.2");

	
	
	RandomG(1, 10, 50, 80, 5000, 8000, 0.3, 0.5, 0);
	H_setTransposition(50, 80, 22, 38, 54, 42, 46);
	del(1,500,50,1000,10000);
	
	displayAll(); 
	
	
	post("Sequencia 63", "\n");
}
function seq64() {


	Imatrix(9);
	Imatrix2(7);
	
		
	setFdx(0.5);
	setFd(0.5);
	
	E1(50,20, 1000, 1000, 1000, 1000,"A.25");
	E5(50,60, 1000, 1000, 1000, 1000,"A.25");
	E6(50,20, 1000, 1000, 1000, 1000,"A.25");
	E7(1000,80, 200, 600, 500, 500,"A.2");
	
	
	Amatrix(9);


	post("Sequencia 64", "\n");	
}

function seq65() {
	
	
	Imatrix2(2);
	Imatrix(8);
	
	E7(1500,80, 200, 600, 500, 500,"A.2");
	E3(2500,80, 200, 600, 500, 500,"A.2");

	E1(4000,1, 1000, 1000, 1000, 1000,"A.25");
	E2(4000,1, 1000, 1000, 1000, 1000,"A.25");
	E4(4000,1, 1000, 1000, 1000, 1000,"A.25");
	
	
	RandomG(1, 10, 50, 80, 5000, 8000, 0.1, 0.4, 0);
	
	Amatrix(4);
	displayAll();	
	
	post("Sequencia 65", "\n");	
	
}	

function seq66() {


	messnamed("ramp",2000);	
	messnamed("Amatrix","clear");	

	Imatrix(9);
	Imatrix2(7);
	
	
	E1(50,20, 100, 300, 500, 1000,"A.25");
	E2(50,20, 100, 300, 500, 1000,"A.25");
	//E3(50,60, 100, 300, 500, 1000,"A.25");
	E4(50,20, 100, 300, 500, 1000,"A.25");
	E5(50,30, 100, 300, 500, 1000,"A.25");
	E6(50,60, 100, 300, 500, 1000,"A.25");
	//E7(50,60, 100, 300, 500, 1000,"A.25");
	
	del(1,500,50,100,500);
	
	
	post("Sequencia 66", "\n");
}
			
	
function seq67() {	
	
	Imatrix(2);
	Imatrix2(7);
	
	E7(2000,80, 200, 600, 500, 500,"A.2");
	E3(2500,80, 200, 600, 500, 500,"A.2");


	post("Sequencia 67", "\n");
}					

function seq68() {	

	Imatrix(8);
	Imatrix2(2);
	
	E7(3000,80, 200, 600, 500, 500,"A.2");
	E3(2000,80, 200, 600, 500, 500,"A.2");

	
	post("Sequencia 68", "\n");
		
	
}
function seq69() {	

	
	
	E3(50,30, 100, 300, 500, 1000,"A.25");
	E7(50,60, 100, 300, 500, 1000,"A.25");
	
	post("Sequencia 69", "\n");
	
}



function anything()
{
	//does nothing
}



	
