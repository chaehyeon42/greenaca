/**
 *연습문제 3번 (글자를입력할때마다 발생하는 이벤트-키보드 이벤트 ->keyup)
 */
$(document).ready(function(){
	var content=$("textarea");							//textarea태그 선택
	    content.on("keyup",function(){					//textarea에 이벤트를 연결시켜야 하기 때문에 content에 keyup이라는 이벤트롤 적용
		
	    	$("span").html(content.val().length);			//HTML에 있는 글자를 JS로 가져옴//textarea태그에 입력한 값을 가져와서(val()) 글자수를 세어(length)보자
														//length=점을 기준으로 왼쪽에 배열이 오면 배열의 길이를 세고 문자열이 오면 문자열의 길이를 센다
	})
})