
/**
 * 
 */
//아이디 정규식
/*
window.onload=function(){
	var id=document.querySelector("#idchk");		

id.onblur=function(){								//아이디 관련 정규식을 만들자(5~20자의 영문 소문자, 숫자와 특수기호(-),(_)만 사용가능
	var regexp=/^[a-z]+[a-z0-9-_]{5,20}$/g;			//[a-z]는첫글자가 숫자로 들어가지 못하게 하기 위해 사용,[a-z0-9-_] 중간에 오는 것들이 숫자든 영어든 상관 없다는 것을 의미하고 -와 _는 조건애서 사용가능하다 했으니 넣은거임
	if(regexp.test(id.value)){
		//alert("id를 사용해도됨")	
	}else{
		//alert("id를 사용하면 안됨")
		}
	}
}
*/

//비밀번호 정규식 {8!16자 영문 대 소문자,숫자,특수문자를 사용)

/*
	window.onload=function(){
				var pw= document.querySelector("#psd");
				var pwmsg=document.querySelector("#psd_1");
				
			pw.onblur=function(){
			var pwreg=/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/g; 			// 정규식
				if(pwreg.test(pw.value)){
					pwmsg.innerHTML="비밀번호 사용 가능"
				}else{
					pwmsg.innerHTML="비밀번호 사용 불가능"
				}	
			}
 }
*/

//이메일 정규식(이메일주소//이메일을 다시 확인해주세요)-@가 필수로 들어가야함
window.onload=function(){
				var mail= document.querySelector("#mailchk");
				var mailmsg=document.querySelector("#mailmsg");
			mail.onblur=function(){
					var mailreg=/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/g;
					if(mailreg.test(mail.value)){
						mailmsg.innerHTML="이메일 사용 가능"
					}else{
						mailmsg.innerHTML="이메일을 다시 확인해주세요"
					}
			}	
			}
			