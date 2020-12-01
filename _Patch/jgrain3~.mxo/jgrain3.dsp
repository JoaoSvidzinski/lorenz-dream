declare compilation_options    "-single -scal";
declare library_path "jgrain3";
declare library_path "/Users/joaosvidzinski/.FaustLive-CurrentSession-2.0/Libs/stdfaust.lib";
declare library_path "/Users/joaosvidzinski/.FaustLive-CurrentSession-2.0/Libs/signals.lib";
declare library_path "/Users/joaosvidzinski/.FaustLive-CurrentSession-2.0/Libs/basics.lib";
declare library_path "/Users/joaosvidzinski/.FaustLive-CurrentSession-2.0/Libs/delays.lib";
declare library_path "/Users/joaosvidzinski/.FaustLive-CurrentSession-2.0/Libs/noises.lib";
declare library_path "/Users/joaosvidzinski/.FaustLive-CurrentSession-2.0/Libs/maths.lib";
declare library_path "/Users/joaosvidzinski/.FaustLive-CurrentSession-2.0/Libs/oscillators.lib";
declare basics_lib_name "Faust Basic Element Library";
declare basics_lib_version "0.0";
declare delays_lib_name "Faust Delay Library";
declare delays_lib_version "0.0";
declare maths_lib_author "GRAME";
declare maths_lib_copyright "GRAME";
declare maths_lib_license "LGPL with exception";
declare maths_lib_name "Faust Math Library";
declare maths_lib_version "2.0";
declare name "Jgrain 7";
declare noises_lib_name "Faust Noise Generator Library";
declare noises_lib_version "0.0";
declare oscillators_lib_name "Faust Oscillator Library";
declare oscillators_lib_version "0.0";
declare signals_lib_name "Faust Signal Routing Library";
declare signals_lib_version "0.0";
declare version "1.0";
process = (_,(hslider("h:Grain/v:Input/inp 0 [5]", 1.0f, 0.0f, 1.0f, 0.01f) : _,(1.0f,0.999f : -) : * : +~(_,0.999f : *)) : *),(_,(hslider("h:Grain/v:Input/inp 1 [5]", 1.0f, 0.0f, 1.0f, 0.01f) : _,(1.0f,0.999f : -) : * : +~(_,0.999f : *)) : *),(_,(hslider("h:Grain/v:Input/inp 2 [5]", 1.0f, 0.0f, 1.0f, 0.01f) : _,(1.0f,0.999f : -) : * : +~(_,0.999f : *)) : *) : (_,_,_,_,_,_<:_,!,!,!,!,!,!,!,!,_,!,!,!,_,!,!,!,!,!,!,!,!,_,!,!,!,_,!,!,!,!,!,!,!,!,_ : (+ : _,1 : * : \(x8).(((x8,((((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : +),hslider("h:Grain/v:Grain_Delay/del 0", 0.0f, 0.0f, 5000.0f, 0.10000000000000001f) : * : _,((192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min),1000.0f : /) : * : _,((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *) : int : int),(262144,1 : -) : &) : @),(1,((((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : +),hslider("h:Grain/v:Grain_Delay/del 0", 0.0f, 0.0f, 5000.0f, 0.10000000000000001f) : * : _,((192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min),1000.0f : /) : * : _,((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *)),(((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : +),hslider("h:Grain/v:Grain_Delay/del 0", 0.0f, 0.0f, 5000.0f, 0.10000000000000001f) : * : _,((192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min),1000.0f : /) : * : _,((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *) : floor) : -) : -) : *),((x8,(((((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : +),hslider("h:Grain/v:Grain_Delay/del 0", 0.0f, 0.0f, 5000.0f, 0.10000000000000001f) : * : _,((192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min),1000.0f : /) : * : _,((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *) : int),1 : + : int),(262144,1 : -) : &) : @),((((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : +),hslider("h:Grain/v:Grain_Delay/del 0", 0.0f, 0.0f, 5000.0f, 0.10000000000000001f) : * : _,((192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min),1000.0f : /) : * : _,((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *)),(((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : +),hslider("h:Grain/v:Grain_Delay/del 0", 0.0f, 0.0f, 5000.0f, 0.10000000000000001f) : * : _,((192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min),1000.0f : /) : * : _,((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *) : floor) : -) : *) : +) : _,(((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : + : _,0.5f : *),hslider("h:Grain/v:Grain_Rarefaction/rar 0", 0.5f, 0.0f, 1.0f, 0.0001f) : < : _,((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x3).(x3,(x3 : floor) : -))~_ : _,(1 : float) : * : \(x4).(x4,(x4 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x3).(x3,(x3 : floor) : -))~_ : _,(1 : float) : * : \(x4).(x4,(x4 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x3).(x3,(x3 : floor) : -))~_ : _,(1 : float) : * : \(x4).(x4,(x4 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x3).(x3,(x3 : floor) : -))~_ : _,(1 : float) : * : \(x4).(x4,(x4 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *) : _,(192000,((((_,1 : +)~_,1 : - : float),(2.0f,3.1415926535897931f : *) : *),(192000 : float) : / : sin<:*),(((1000,hslider("h:Grain/v:Grain_Size/size 0", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x7).(x7,(x7 : floor) : -))~_ : _,(1 : float) : *),192000 : * : int) : rdtable) : *) : *),(+ : _,1 : * : \(x19).(((x19,((((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : +),hslider("h:Grain/v:Grain_Delay/del 1", 0.0f, 0.0f, 5000.0f, 0.10000000000000001f) : * : _,((192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min),1000.0f : /) : * : _,((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *) : int : int),(262144,1 : -) : &) : @),(1,((((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : +),hslider("h:Grain/v:Grain_Delay/del 1", 0.0f, 0.0f, 5000.0f, 0.10000000000000001f) : * : _,((192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min),1000.0f : /) : * : _,((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *)),(((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : +),hslider("h:Grain/v:Grain_Delay/del 1", 0.0f, 0.0f, 5000.0f, 0.10000000000000001f) : * : _,((192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min),1000.0f : /) : * : _,((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *) : floor) : -) : -) : *),((x19,(((((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : +),hslider("h:Grain/v:Grain_Delay/del 1", 0.0f, 0.0f, 5000.0f, 0.10000000000000001f) : * : _,((192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min),1000.0f : /) : * : _,((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *) : int),1 : + : int),(262144,1 : -) : &) : @),((((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : +),hslider("h:Grain/v:Grain_Delay/del 1", 0.0f, 0.0f, 5000.0f, 0.10000000000000001f) : * : _,((192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min),1000.0f : /) : * : _,((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *)),(((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : +),hslider("h:Grain/v:Grain_Delay/del 1", 0.0f, 0.0f, 5000.0f, 0.10000000000000001f) : * : _,((192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min),1000.0f : /) : * : _,((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *) : floor) : -) : *) : +) : _,(((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : + : _,0.5f : *),hslider("h:Grain/v:Grain_Rarefaction/rar 1", 0.5f, 0.0f, 1.0f, 0.0001f) : < : _,((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x3).(x3,(x3 : floor) : -))~_ : _,(1 : float) : * : \(x4).(x4,(x4 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x3).(x3,(x3 : floor) : -))~_ : _,(1 : float) : * : \(x4).(x4,(x4 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x3).(x3,(x3 : floor) : -))~_ : _,(1 : float) : * : \(x4).(x4,(x4 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x3).(x3,(x3 : floor) : -))~_ : _,(1 : float) : * : \(x4).(x4,(x4 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *) : _,(192000,((((_,1 : +)~_,1 : - : float),(2.0f,3.1415926535897931f : *) : *),(192000 : float) : / : sin<:*),(((1000,hslider("h:Grain/v:Grain_Size/size 1", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x7).(x7,(x7 : floor) : -))~_ : _,(1 : float) : *),192000 : * : int) : rdtable) : *) : *),(+ : _,1 : * : \(x20).(((x20,((((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : +),hslider("h:Grain/v:Grain_Delay/del 2", 0.0f, 0.0f, 5000.0f, 0.10000000000000001f) : * : _,((192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min),1000.0f : /) : * : _,((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *) : int : int),(262144,1 : -) : &) : @),(1,((((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : +),hslider("h:Grain/v:Grain_Delay/del 2", 0.0f, 0.0f, 5000.0f, 0.10000000000000001f) : * : _,((192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min),1000.0f : /) : * : _,((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *)),(((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : +),hslider("h:Grain/v:Grain_Delay/del 2", 0.0f, 0.0f, 5000.0f, 0.10000000000000001f) : * : _,((192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min),1000.0f : /) : * : _,((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *) : floor) : -) : -) : *),((x20,(((((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : +),hslider("h:Grain/v:Grain_Delay/del 2", 0.0f, 0.0f, 5000.0f, 0.10000000000000001f) : * : _,((192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min),1000.0f : /) : * : _,((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x13).(x13,(x13 : floor) : -))~_ : _,(1 : float) : * : \(x14).(x14,(x14 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *) : int),1 : + : int),(262144,1 : -) : &) : @),((((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : +),hslider("h:Grain/v:Grain_Delay/del 2", 0.0f, 0.0f, 5000.0f, 0.10000000000000001f) : * : _,((192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min),1000.0f : /) : * : _,((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *)),(((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : +),hslider("h:Grain/v:Grain_Delay/del 2", 0.0f, 0.0f, 5000.0f, 0.10000000000000001f) : * : _,((192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min),1000.0f : /) : * : _,((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x17).(x17,(x17 : floor) : -))~_ : _,(1 : float) : * : \(x18).(x18,(x18 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *) : floor) : -) : *) : +) : _,(((_,12345 : +)~(_,1103515245 : *),2147483647.0f : / : _,1 : + : _,0.5f : *),hslider("h:Grain/v:Grain_Rarefaction/rar 2", 0.5f, 0.0f, 1.0f, 0.0001f) : < : _,((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x3).(x3,(x3 : floor) : -))~_ : _,(1 : float) : * : \(x4).(x4,(x4 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x3).(x3,(x3 : floor) : -))~_ : _,(1 : float) : * : \(x4).(x4,(x4 : floor) : -)),1 : @),0.001f : <=) : *) : * : +~(_,(1,((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x3).(x3,(x3 : floor) : -))~_ : _,(1 : float) : * : \(x4).(x4,(x4 : floor) : -)),0.001f : >),((((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x3).(x3,(x3 : floor) : -))~_ : _,(1 : float) : * : \(x4).(x4,(x4 : floor) : -)),1 : @),0.001f : <=) : *) : -) : *) : _,(192000,((((_,1 : +)~_,1 : - : float),(2.0f,3.1415926535897931f : *) : *),(192000 : float) : / : sin<:*),(((1000,hslider("h:Grain/v:Grain_Size/size 2", 50.0f, 0.0f, 1000.0f, 0.01f) : /),(192000.0f,(1.0f,fconstant(int fSamplingFreq, <math.h>) : max) : min : float) : / : (+ : \(x7).(x7,(x7 : floor) : -))~_ : _,(1 : float) : *),192000 : * : int) : rdtable) : *) : *))~((_,(hslider("h:Grain/v:Grain_FeedBackext/fdx 0", 1.0f, 0.0f, 1.0f, 0.01f) : _,(1.0f,0.999f : -) : * : +~(_,0.999f : *)) : *),(_,(hslider("h:Grain/v:Grain_FeedBackext/fdx 1", 1.0f, 0.0f, 1.0f, 0.01f) : _,(1.0f,0.999f : -) : * : +~(_,0.999f : *)) : *),(_,(hslider("h:Grain/v:Grain_FeedBackext/fdx 2", 1.0f, 0.0f, 1.0f, 0.01f) : _,(1.0f,0.999f : -) : * : +~(_,0.999f : *)) : *) : _,_,_<:((_,checkbox("h:Lines/h:Reinjection_Matrix/v:Grain 0-->/r  0") : *),(_,checkbox("h:Lines/h:Reinjection_Matrix/v:Grain 1-->/r  1") : *),(_,checkbox("h:Lines/h:Reinjection_Matrix/v:Grain 2-->/r  2") : *):>_),((_,checkbox("h:Lines/h:Reinjection_Matrix/v:Grain 0-->/r  3") : *),(_,checkbox("h:Lines/h:Reinjection_Matrix/v:Grain 1-->/r  4") : *),(_,checkbox("h:Lines/h:Reinjection_Matrix/v:Grain 2-->/r  5") : *):>_),((_,checkbox("h:Lines/h:Reinjection_Matrix/v:Grain 0-->/r  6") : *),(_,checkbox("h:Lines/h:Reinjection_Matrix/v:Grain 1-->/r  7") : *),(_,checkbox("h:Lines/h:Reinjection_Matrix/v:Grain 2-->/r  8") : *):>_)) : (_,(hslider("h:Grain/v:Output/out 0 [6]", 1.0f, 0.0f, 1.0f, 0.01f) : _,(1.0f,0.999f : -) : * : +~(_,0.999f : *)) : *),(_,(hslider("h:Grain/v:Output/out 1 [6]", 1.0f, 0.0f, 1.0f, 0.01f) : _,(1.0f,0.999f : -) : * : +~(_,0.999f : *)) : *),(_,(hslider("h:Grain/v:Output/out 2 [6]", 1.0f, 0.0f, 1.0f, 0.01f) : _,(1.0f,0.999f : -) : * : +~(_,0.999f : *)) : *);