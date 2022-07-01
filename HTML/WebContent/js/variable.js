/**
 *조건문
 */

/*
	 if(조건식){ 
	     참일때의 문장
        }

ex. 평균이 60점 이상(합격을 하기위한 조건) 이면 합격 
-평균을 내기 위해 변수를 만들어야 함.
*/
//var avg=70;
//var sum300;
// 평균 (avg)라는 변수에 70 저장
//if(avg >=60){
//			alert("합격")
//					}

/*
if(조건식){
	     참일때의 문장
 }else{
  	거짓일때의 문장
}
ex. 평균이 60점 이상이면 합격 그렇지 않으면 불합격
(합격을 위한 조건:평균이 60점 이상)(불합격을 위한 조건:그렇지 않으면)

*/
//if(avg >=60){
//			alert("합격")
//}
//else{
//	alert("불합격")
//}

/*
 if(조건식){
	참일때의 문장
}else if(조건식){
	참일때의 문장} else {거짓일때의 문장}

ex.평균이 60점 이상이면 합격, 평균이 59점 이상이면 보류, 그렇지 않으면 불합격
*/
//if(avg>=60){
	//	alert("합격")
//} else if(avg>=59){
	// 	alert("보류")
//}else{
	//   alert("불합격")
//}


//평균이 60점 이상이고 총점이 300점 이상(조건) 이면 합격 -end 조건(조건이 총 2개)(&& 이표시가 end조건 표시)
//그렇지 않으면 불합격

//if(평균이 60점 이상 && 총점이 300점 이상){
//	합격
//}else{
//	불합격
//}


//if(avg>=60 &&sum>300){
//		alert("합격")
//}
//else{
//alert("불합격")
//}



//var num=10;

//switch(num){
	//case 10:
		//alert("num값은 10입니다.")
		//break;
	//case 20:
	//	alert("num값은 20입니다.")
		//break;
	//case 30: 
		//alert("num값은 30입니다.")
		//break;
//}
	
	
//if(num==10){
	//alert("num값은 10입니다.")
//}else if(num==20){
	//alert("num값은 20입니다.")
//}else{
	//alert("num값은 30입니다.")
//}

//var input=prompt('안녕을 입력하세요')

//if(input===true){
//		alert('안녕하세요')
//} else {
//		alert('안녕하세요')
//}
//var input=prompt('잘자 또는 잘 자를 입력하세요 ')
 //if(input===true){
//	 	alert('안녕히주무세요')
 //}else{
//	 alert('안녕히 주무세요')
 //}
	
// 


/*
var hi=prompt("인사말을 입력하세요.");

if(hi=="안녕"){
	alert("안녕하세요")
}else if(hi=="잘자" || hi=="잘 자"){
	alert("안녕히주무세요")
}

삼항연산자
var hi=prompt("인사말을 입력하세요.");
hi=="안녕"? alert("안녕하세요"): hi=="잘자" || hi=="잘 자"? alert("안녕히 주무세요"): alert("안녕 또는 잘자 또는 잘 자 이외에 문자는 다시 입력하세요.")
*/

/*
var id=prompt('안녕을 입력해주세요')
if(id=='안녕'){
	alert('인사를 안 하다니')
}

삼항연산자(단순 if)
*/
/*
var id=prompt('안녕을 입력해주세요')
hi!="안녕"? alert("인사룰 안 하다니"):""
	*/



/*
var num=prompt("숫자를 입력하세요.")
	

if(num%4==0){
	alert("4로 나울수 있는 숫자입니다.")
}

var num=prompt("숫자를 입력하세요.")
 num%4==0? alert("4로 나울수 있는 숫자입니다.")
		 : alert("4로 나올수 없습니다.")
*/
	

/*
var num=prompt("숫자를 입력하세요");

	if(num>0){
		alert("양수입니다.");
	}
	else if(num<0){
    	alert("음수입니다.");
   } 
	else if(num==0){
	   alert("0입니다.");
   }	 
*/

/*
var num=prompt("숫자를 입력하세요");
	if(num%2==0){
			alert("짝수");
	}
	else{
		 	alert("홀수");
	}
*/	
	
	
	
	
	
