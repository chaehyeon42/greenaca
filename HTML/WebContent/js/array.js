/**
 * 배열(array) 
 */

//a라는 이름의 배열을 선언함과 동시에 10,20,30 값을 초기화해라.
//var a = [10,20,30,40];

//alert(a)  -이 경우는 세개의 숫자가 다 한꺼번에 뜨게 되므로 잘못 사용한 경우이다
/*
alert(a[0])
alert(a[1])
alert(a[2])
*/

//a 의 배열들을 다 합하고 싶을때
//alert(a[0]+a[1]+a[2])
 
//합을 한꺼번에 다 더하고 싶을때

/*
var sum=0;
for(var i=0; i<alert(a.length); i++){
	sum+=a[i];
}
alert(sum);
*/

//배열의 길이만큼 합칠때(length 속성 이용)
//사용: (배열이름.length) - index는 0부터 시작이지만 배열길이는 1부터 시작
//alert(a.length)

/*
아래 데이터는 a학교의 학생들의 국어점수 성적입니다.

a 학생:52
b 학생:73
c 학생:100
d 학생:32
e 학생:57
f 학생:100
g 학생:31
h 학생:20

위 학생의 총점과 평균을 구하세요. 총점:465

const array=[52,73,100,32,57,100,31,20];//총점을 구하기 위해 각 값을 나열
var sum=0; //각 수를 더하기위해 sum을 만듦
for(var i=0; i<array.length;i++){
			sum+=array[i];
}
document.write("총점:"+sum+",평균:"+sum/array.length);
*/
/*
var score=[52,73,100,32,57,100,31,20];
var sum=0; 		//총점을 저장하기 위한 변수

for(var i=0; i<score.length; i++){
			sum=sum+score[i]
}
 
alert(sum);
alert(sum/score.length);
*/