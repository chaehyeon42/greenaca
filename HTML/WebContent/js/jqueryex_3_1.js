/**
 * 연습문제 4번
 */
/*내 풀이
function sum() {												//함수선언
    var num_1 = document.getElementById('num_1').value;			//num_1에 관한 식 불러옴
    var num_2 = document.getElementById('num_2').value;			//num_2에 관한 식 불러옴
    var result = parseInt(num_1) + parseInt(num_2);				//parseInt를 통해 문자를 숫자로 변환후 두개의 값을 합산
        document.getElementById('result').value = result;		//합산한 결과 값을 html에 넣어 실행
}

function total(){
	var price= document.getElementById('price').value;
	var num= document.getElementById('num').value;
	 document.getElementById('mul').innerHTML=price*num; 
}


function totalprice() {
		var chk= document.querySelectorAll('.chk');
		var total=0;
		console.log(chk.length);
		for(var i=0; i<chk.length; i++){
			if(chk[i].checked){
				total += parseInt(chk[i].value);
			}
		document.getElementById('totalprice').innerHTML = total;
		}
}
*/


//1번	
$(document).ready(function(){							//익명함수 선언(function안에 function은 사용불가)-함수선언 안에 또 다른 함수선언은 불가
		var num1=$("#num1");
		var num2=$("#num2");
		var result=$("#result");
		
		$("#btn1").on("click",function(){							//on은 함수선언이 아닌 함수호출이므로 사용가능
		result.val(Number(num1.val())+Number(num2.val()));			  //사용자가 html 에 입력한 값을 가지고 올때는 매개변수에 아무것도 안적어도 되지만 JS에서 값을 html에 넣기위해서는 매개변수에 값을 적어여함
		})					
})



//2번
$(document).ready(function(){
	//$("#price")									//가격 입력란을 선택
	//$("#result_2")
	$("select").on("change",function(){
			$("#result_2").html($("#price").val()*$("select").val());
	})
})

//3번
$(document).ready(function(){
	$("#btn2").on("click",function(){		//(작성순서)1.총합구하기	
		var total=0;
	//input 태그중 type속성의 값이 checkbox인것 중에서 체크 된것만 선택(조건)
	//속성선택자 사용: 태그명[속성명=값]
	//배열.each를 쓰면 배열의 길이만큼 자동 반복됨
	$(".fruit:checked").each(function(){ 					//배열에 저장됨 //$("input[type='checkbox']") 이렇게만 하면 타입이 checkbox인것은 다 선택됨//:checked를 불이면 체크한것만 선택될수있음
			total+=Number($(this).val());
	})      
			$("#result3").html(total);
	})													
})
