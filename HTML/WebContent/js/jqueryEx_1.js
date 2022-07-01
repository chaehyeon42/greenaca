/**
 * 
 */
/*
var count= document.getElementById('quantity');               // 결과를 표시할 element

function up(){
   var n=1;
   var sum= Number(count.value)+n;
   
   count.value=sum
}
      
      
function down(){
   var n= -1;
   var sum= Number(count.value)+n;
   if(sum=1){
      sum<1;
   }
   count.value=sum
}
*/
   
//script를 head부분에 적으면 밑에 식이 필수로 들어가야 하고 body에적으면 안적어도됨	   
$(document).ready(function(){
	console.log("a")
//html에서 js로 객체를 가져오려면 선택자를 이용
//1.갯수를 입력하는 텍스트상자 선택
var quantity=$("#quantity").val()								//jquery 선택자-$() //input이 여러개이기 때문에 id 값을 줘서 불러낸다(다같이 불러내는게 아닐때)
//2.+버튼을 선택한 후 더하기 버튼을 클릭
$("#plus").on("click",function(){								//.on("이벤트명",콜백함수)
	var quantity=Number($("#quantity").val())
	
	//var quantity=$("#quantity").val()							//이렇게만 되면 숫자가 아닌 문자열로 인식됨 -- 그래서 1111...로 뜸
																//val은 사용자가 적은 값을 가져오라는 의미이고 그것을 더하기 버튼을 할때마다 quantity변수에 수량을 저장//매개변수가 없기때문에 사용자가 적은 값을 가져오는거임
																//=는 대입연산자로 오른쪽 계산이 끝나면 왼쪽에 대입해서 실행
	$("#quantity").val(quantity+1);      						//갯수를 1씩 증가시켜서 갯수입력란에 셋팅 //매개변수에 값을 넣으면 그것이 html에 넣어지기 때문에 값이 나오게 된다
		
})					    	
//3.-버튼을 선택한후 빼기버튼을 클릭
$("#minus").on("click",function(){								//갯수를 1씩 감소시켜서 갯수입력란에 셋팅
	var quantity=Number($("#quantity").val())
	//quantity 변수에 저장되어있는 값이 1이면 갯수를 입력하는 텍스트 상자에 1을 셋팅
	if(quantity==1){
		$("#quantity").val(1);
	}else{
		$("#quantity").val(quantity-1);
	}
	//그렇지 않으면 1씩 감소시켜 갯수 입력란에 셋팅
	
})
})
