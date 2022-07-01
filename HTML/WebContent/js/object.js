/**
 *  객체
 */

//window.alert("안녕");

//직접객체만들어보기({}가 객체를 만들때 사용)
//객체선언
var product={											//객체이름을 부여해야 선언을 할수 있음(product)				
		제품명:"아이스 아메리카노"	, 
		유형: "커피",
		eat : function(drink){
			alert(drink+"를 마십니다.")
		} 
}

 alert(product.제품명)							//객체이름을 통해 속성을 부여(객체이름:product, 속성:제품명) 
 product.eat("라떼")
 
 //객체안에서의 변수를 속성 함수를 메서드라함
 