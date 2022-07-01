/**
 *  연습문제 2.
 */
/*
function show(){
	var chked= document.getElementById("chk")
	 var str = "";
    for (var i = 0; i < arr.length; i++) {
        var c = chked[i];
        if (c.checked) {
            str += c.value + "<br>";
        }
    }
    document.getElementById('result').innerHTML = "<h1>" + str + "</h1>";
}
*/


//변수에 저장하면 값이 마지막에 선택한것만 나옴(복수 X) == 그러므로 배열에 저장해야함
//속성을 이용해 선택하는 것을 속성선택자라고 함
//속성선택자:태그명["속성='값'"]->사용자가 어떠한 항목을 체크했는지 여부 파악
$(document).ready(function(){

	//버튼 태그 선택->클릭이벤트 연결(on)->콜백함수
	$("button").on("click",function(){
		//input 태그 중 속성(type)이 checkbox인 것 중에서 체크된것만(:checked) 선택 //each=반복문(선택자 갯수 만큼 반복 하게끔 하는 것) 
		//$(this) = 사용자가 선택한 것에 대한 값을 가져오라는 의미 ->이것을 사용하지 않으면 두개를 선택해도 첫번째로 실행한것만 뜨게 된다 
		var str="";
		$("input[type='checkbox']:checked").each(function(){
			//console.log($(this).val());
			str+="<h1>"+$(this).val()+"</h1>"			//str=+"<h1>"+$(this).val()+"</h1>" [원래식] ->str=대입연산자로 사용
			//console.log(str);
			$("div").html(str)							//str이 <h1>태그를 만든 후 .html(=innerhtml)을 통해 div 사이에 값을 넣게 되어 결과값이 출력됨
														//.HTML에 대신 사용 가능한것 =.text(결과값이 문자로 나옴)
       })													
	})
})