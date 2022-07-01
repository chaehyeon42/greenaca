/**
 * 
 */
//웹브라우저 선택한 것에 대해서 준비가 된 후 익명 함수에 있는것을 실행
/*
$(document).ready(function(){				//$가 jquery를 의미,document=웹브라우저를 선택했다는 의미(선택자),ready=준비가 된 후 를 의미(함수)-ready(function)=함수를 호출함, function(){}-콜백함수(이 기능을 수행 한 후에 이것도 해주세요 :실행을 한 후 다음 명령까지 하는것이 콜백함수)
	alert("실행됨")
																	//ready를 이용해 웹브라우저를 실행한 후에 function(){} 이곳에 있는것까지 실행
})
*/

//자바스크립트 이용
//header1만 선택할때
//document.getElementByid("#header1") or document.querySelector("#header1")를 이용해야함

//Jquery이용(함수를 넣을 필요가없음)
/*$(document).ready(function(){
	$("#header1") 															 //id를 이용한 선택자-배열에 저장
	$(".header1") 															 //class를 이용한 선택자-배열에 저장
	$("h1") 														    	 //tag를 이용한 선택자-배열에 저장
	
})*/

//css적용(css가 하나일때)
/*
$(document).ready(function(){
	$("#header1").css("color","red")               					    	 //.css=jquery안에 css를 적용-css와 다르게:이 아닌,로 구분 //id를 이용한 선택자-배열에 저장
	$(".header1").css("background-color","yellow") 							 //class를 이용한 선택자-배열에 저장
	$("h1").css("font-size","20px") 							  	    	 //tag를 이용한 선택자-배열에 저장
	
})
*/

/*
//click 이벤트 적용(선택자를 이용해서 선택한 후 함수를 이용해서 원하는 것을 적용)
//on= 함수(매서드)  --  on("이벤트명",콜백함수(){})
//콜백함수:매개변수 안에 함수를 선언
//click이벤트 후에 콜백함수 실행

$(document).ready(function(){
	$("#header1").on("click",function(){
		alert("첫번째 h1 태그를 클릭했을 때");
})
	$("#idchk").on("blur",function(){
		alert("id 입력란에서 커서를 뺏겼을때")
	})
})
*/

//js를 이용한 연습문제 jquery로 변환
$(document).ready(function(){
	$("#mailchk").keypress(function(){
	var mailreg=/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/g;
	var mail=$("#mailchk").val()
	if(mailreg.test(mail)){
		alert("이메일 사용 가능");
	}else{
		alert("이메일 다시 확인")
	}
	})
})
