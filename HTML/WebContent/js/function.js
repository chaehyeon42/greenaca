/**
 * 
 */
// 함수 선언(더하기를 하기 위한 함수)
//function은 함수 add는 함수 이름 (a,b)는 매개변수 

/*리턴이 없는 경우- 값이 선언부가 가지고 있기 때문에 괄호 안에 alert를 적어야 값이 보임
function add(a,b){
		
			alert(a+b)
}

// 함수 호출
add(5,7)
/*
 * 
 */ //리턴이 있는경우에 값은 호출부에 있음 즉, return을 통해 호출부가 12가됨
/*function add(a,b){
		return (a+b)
}

alert(add(5,7))
*/

//가로(밑변):3 세로(높이):4 일때 삼각형의 넓이를 구하는 함수를 작성하시오

/*
function triangle(a,b){					//함수에 함수이름과 매개변수 지정(넓이와 높이의 값이 달라질수 있기때문에 따로 하는것보다 함수로 묶어서 하는것이 효율적)
			return (a*b)/2;		//어떻게 계산하는지 함수이름에 지정,return이 있으므로 호출부에 값을 전달
}

alert(triangle(3,4))     						//return으로 인해 계산한 값을 전달받아 실행
*/

//익명 항수(함수명 없이 사용가능)-함수명이 없기때문에 호출이 안됨

//alert(add(5,7));
//var add=function(a,b) {
//		return a+b
//}

//콜백함수(익명함수를 사용하는 이유)-매개변수 안에 함수를 넣어서 그 함수를 전달할때 사용

/*
// callbacktest 함수선언
function callbacktest(callback){					//콜백함수
													//3번반복				
	for(var i=0;i<3;i++){
													//매개변수로 전달된 함수를 호출	
		callback();
								}				
						}

//익명함수   (function부터 익명함수)
var callback=function(){
	alert("콜백함수 호출")
}

//callbacktest 함수 호출
callbacktest(callback); 

//익명함수를 callbacktest(callback) 이 부분 callback에 넣어서 바로 호출을 할수 있음(이 경우 익명함수를 굳이 따로 적지 않아도 됨)

ㅇ
*/
/*
function test(a,b,c){
		 alert(a)
		 alert(a*b)
		 alert(a*b*c)
		}
test(10,100)

//함수를 선언(test)해서 a에는 10이 b에는 100이 들어가지만 c에는 아무런 숫자가 없기 때문에 
//alert(a)에는 10의 값이  alert(a*b)에는 두 수의 곱인 1000의 값이  alert(a*b*c)에는 c에 아무런 숫자가 없으니  NaN(나온 값이 숫자가 아니라는 의미)이라는 실행창이 뜬다.
//test(10,100)으로 함수 호출함

*/

/*
function power(a,b){ 									//함수이름 power와 매개변수 (a,b)지정 (함수선언)
 		if(b){											//if 조건문을 이용하여 매개변수 b실행문 지정	
 			var output=1								//1에 자신의 수를 곱하면 자신의 수가 나오기 때문에 1을 써줌
			for(var i=0;i<b;i++){						//함수를 선언(b 매개변수 지정)	
				output *=a;								// output=1xa
			}											
				return output;
		}else{
			    return a*a;								 //매개변수 하나에 제곱이니 같은 매개변수인 a를 두번 곱해준다				
		}
	}
	alert(power(2));										//함수호출		
	alert(power(2,3));  									//함수호출			
	
	
*/
//위에 식과 다른 방법

/*
function power(a,b=2){                    //매개변수 하나만 넣고 제곱하는거와 두개를 넣는것 총 두개의 값이 나와야 하므로 b에다 2를 지정(매개변수 하나인 경우에 사용)
		console.log(Math.pow(a,b));		 //Math.pow는 제곱에 사용되는 함수로 Math에서 M이 소문자면 실행이 안됨
}
	power(2,3);								//2의 세제곱을 해야 되기때문에 a에 2를 b에 3을 지정해주고 b에 원래 지정해주었던 2의 값을 3이 덮어 씌워 계산(함수호출)
	power(2);								//이미 b에 2의 값이 저장되었기 때문에 a의 값만 지정 해줌(함수호출)
*/	
	
/*
function multiply(){											//매개변수 지정
		var output=1											//0을 써주면 값이 0만 나오기 때문에 1을 써줌
		for (var i=0; i <arguments.length; i++){                //arguments가 매개변수의 갯수를 알려주는 함수
			output *=arguments[i];								//매개변수의 갯수를 통해 서로 곱함	
	     	}
		return output;
		}	

	alert(multiply(1,2,3,4,5));								//값:120
*/	
/*
function multiply(){											//매개변수 지정
		var output=1											//0을 써주면 값이 0만 나오기 때문에 1을 써줌
		for (var i=0; i <arguments.length; i++){                //arguments가 매개변수의 갯수를 알려주는 함수
			output *=arguments[i];								//매개변수의 갯수를 통해 서로 곱함	
	     	}
		return output;
		}	

	alert(multiply(1,2,3));									//값:6
*/
/*
	function multiply(){											//매개변수 지정
		var output=1											//0을 써주면 값이 0만 나오기 때문에 1을 써줌
		for (var i=0; i <arguments.length; i++){                //arguments가 매개변수의 갯수를 알려주는 함수(argiment의 길이만큼 반복하여 값이나옴)
			output *=arguments[i];								//매개변수의 갯수를 통해 서로 곱함	
	     	}
		return output;
		}	

	alert(multiply(3,4,5,9));							//값:540
*/








































