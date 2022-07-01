/**
 * 
 */

// "출력" 이라는 문자열을 알림창으로 10번 띄우세요
/*
for(var i=0;i<10;i++){
			alert("출력="+i)
}
*/
//for문을 while문으로

/*
var i=11;
while(i<10){
	alert("출력=" +1)
	i++
}
*/
//이 경우 조건에 맞지 않기 때문에 아예 실행이 안됨. 
/*
var i=11;
do{
	alert("출력="+1)
} while(i<10)

/*
alert("출력")
alert("출력")
alert("출력")
alert("출력")
alert("출력")
alert("출력")
alert("출력")
alert("출력")
*/

//반복문에서 사용이 되는 break 키워드와 continue 키워드

/*
for(var i=0; i<10; i++){
                  alert(i+"번째 반복문입니다.");  
                 //진행 여부를 물어봐서 진행하지 않겠다고 하면 반복을 멈춰라(네 할경우 계속 반복, 아니요 할 경우 반복 취소)
                  if(confirm ("계속하시겠습니까?")==false){ 
                	  break;
                  }
            }
alert("프로그램 종료")
*/

//1부터 10까지 짝수만 알림창으로 알리기

/*
for(var i=1;i<10;i++){
		//i가 홀수이면 멈추고 다시 실행(조건)
		if(i%2==1){
			continue; //해당이 되는 부분만 skip하고 반복은 계속됨
		}
		alert(i);
}
*/

//예제문제

 //1번
/*
while(true){
		let value=prompt("안녕을 입력하세요");
		if(!value||value.includes('잘 있어')) break ;
	}
*/

/* 2번
let sum=0;
for(let i=1; i<=100;i++){
		sum=sum+i;
}
 
 alert(sum);
*/

/*3번
let num=0;	
let num1= Number(prompt("숫자를 적으세요"));
let num2= Number(prompt("숫자를 적으세요"));
	


for(var i=num1; i<=num2;i++){
		num+=i;
	}

	alert(num);

	//조건:num1이 num2보다 크면
	if(num1>num2){
	
		//num2에 있는 값을 num1에 넣고 num1에 있는 값을 num2에 넣는다.
		tmp=num1;
		num1=num2;
		num2=tmp;
	}
		//tmp에 num1에 있던 원래 값을 넣고 그 값을 다시 num2에 준다.// num2에 있는 값은 num1로 준다.
*/

/*4번
for(var i=1; i<10;i++){
		document.write( 2+"*"+ i +"=" + 2*i,"<br>");
}
*/



/*5번
for(var i=2;i<=9;i++){
		for(var a=1;a<=9;a++)
		{
			document.write(i+"*"+a+"="+(i+a),"<br>")
		}
}

*/

//중첩 for 문

/*
for(var i=1;i<3;i++){
			for(var a=1;a<5;a++){
				alert(i+"-"+a)
			}
			alert(i+"번째 반복문이 끝났습니다.")
}
*/

/*
for(var i=2;i<=9;i++){
		for(var a=1;a<=9;a++){
				document.write(i+"*"+a+"="+(i+a),"<br>")
		}
}
*/
/*
for(var k=0;k<=6;k+=3){
		for(var j=1;j<=9;j++);{
			for(var i=1;i<4;i++){
				document.write(i+k+'X'+j+'='+(i+k)*j+'&nbsp');
			}
			document.write('<br>');
		}
		   document.write('<br>');
}
*/




































































