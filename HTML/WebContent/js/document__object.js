/**
 * 
 */

//첫번째 h1 태그만 선택(id를 이용한 선택자)
	window.onload=function(){			        						//window라는 객체에 onload라는 속성, html에서 scipt가 </body> 태그 위에 있으면 굳이 쓸 필요 없음 <head>사이에 있으면 onload를 적어줘야함 
		//id 선택자
		var header_id=document.getElementById("header1");		 		//get~ 는 css의 id 선택자라고 생각하면 됨,js에서 선택자 쓰는 방법(id 선택자를 쓸때의 함수)
		//class 선택자
		var header_class=document.getElementsByClassName("header1");    //js에서 선택자 쓰는 방법(class선택자를 쓸때의 함수),함수에 s를 붙인것은 여러개의 변수를 가질수 있음-배열에 저장
		//Tag 선택자
		var header_tag=document.getElementsByTagName("h1");				//js에서 선택자 쓰는 방법(tag선택자를 쓸때의 함수)
		console.log(header_id);		
		console.log(header_class);		
		console.log(header_tag);		
		
	
		
		
	
	//querySelector( 이 하나로 id,tag,class 선택자 모두 사용가능)-한건만 처리하면됨(변수에 저장)
		
			//id를 이용한 선택자
			var header_qid=document.querySelector("#header1")   
			var header_qclass=document.querySelectorAll(".header1")			//여러가지를 담기 때문에 all울 붙여줌   
			var header_qtag=document.querySelectorAll("h1")   
				console.log(header_qid);		
				console.log(header_qclass);		
				console.log(header_qtag);
		   
	 //document.querySelectorAll()-여러건을 처리해야됨(배열에 저장)
		
		var id=document.querySelector("p");
		//p태그를 innerHTML 영역에 문자열을 넣어라.
			id.innerHTML="5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다." ;       //inner은 닫는태그가 없으면 사용 할 수 없다.
			id.style.color="red";													//p태그의 글자색(color)를 빨간색으로 적용
			id.style.backgroundColor="yellow";										//p태그의 배경색(background-color)을 노란색으로 적용 -를 넣으면 깔끔하게 안나오기 때문에 '-' 다음 첫글자를 대문자를 사용
		
		var img=document.querySelector("img");
			//alert(img.getAttribute("src","../image/다운로드 (1).jpg");	                        			//get은 현재 src 값을 가져오라는 뜻
		
		var button=document.querySelector("input")								//사진변경 버튼을 클릭하면
			button.onclick=function(){												//onclick=이벤트
			img.setAttribute("src","../image/다운로드 (2).jpg");					//Attribute:속성이라는 뜻이므로 속성을 건들임 html img에 있는 속성을 다른 속성으로 바꿈, set은 값을 넣는 역할
		}
		
			//alert(img.getAttribute("src"));		
	}
	
	
	
	
