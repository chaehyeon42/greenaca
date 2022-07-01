/**
 * 
 */
         window.onload = function () {
            var password1 = document.querySelector("#password1");
            var idchk=document.querySelector("#idchk");
            idchk.onblur=function(){                               //   idchk에 저장되어 있는 것과 blur 이벤트 연결 한 후 익명함수 안에 있는것을 실행                           
                var idValue=document.querySelector("#idchk").value;        //document.querySelector("#idchk").value 는 사용자가 입력했을때의 값을 가져오라는 의미. 가지고 온 후 idValue값에 저장 "(=가 있으면 오른쪽부터 실행)
                var idmsg=document.querySelector("#idmsg");                //id가 idmsg인것을 선택하여 idmsg 변수에 저장 
                if(idValue.length>=5 && idValue.length<=20){             //문자열.length는 문자열의 길이를 나타냄(글자수)
                   idmsg.innerHTML="정상입니다.";
                   idmsg.style.color="green";
                }else{
                   idmsg.innerHTML="5~20자 이내로 입력하셔야 합니다.";            //innelHTML의 공간은  <label id="idmsg">과 </label>의 사이 공간
                   idmsg.style.color="red";
                }
              }   

            password1.onblur = function () {											//비밀번호에 관한 함수선언
                var value = document.querySelector("#password1").value;					//	
                var result = document.querySelector('#password_1')
                if (value.length <= 16 && value.length >= 8) {
                    result.innerHTML = "정상입니다";
                    result.style.color="green";
                } else {
                    result.innerHTML = "틀렸습니다";
                    result.style.color="red";
                }
            }
            
            password2.onblur=function(){
            	var value = document.querySelector("#password2").value;
            	var value_1 = document.querySelector("#password1").value;
            	var result = document.querySelector("#result");
              if(value_1==value){
            	  result.innerHTML="같습니다";
            	  result.style.color="green";
              }else{
            	     result.innerHTML="위 적힌거와 같아야 합니다";
            	    result.style.color="red";	 
              }
            }
        }
         
         


/*
window.onload=function(){                                        // window.onload(event 종류): 웹브라우저가 실행 되자마자 익명함수에 있는것들을 실행하라는 의미
    var idchk=document.querySelector("#idchk")                   //document.querySelector(js에서의 선택자) //id가 idchk인것을 선택(document.querySelector("#idchk")) 한후 idchk에 저장
    idchk.onblur=function(){                               //   idchk에 저장되어 있는 것과 blur 이벤트 연결 한 후 익명함수 안에 있는것을 실행                           
       var idValue=document.querySelector("#idchk").value;        //document.querySelector("#idchk").value 는 사용자가 입력했을때의 값을 가져오라는 의미. 가지고 온 후 idValue값에 저장 "(=가 있으면 오른쪽부터 실행)
       var idmsg=document.querySelector("#idmsg");                //id가 idmsg인것을 선택하여 idmsg 변수에 저장 
       if(idValue.length>=5 && idValue.length<=20){             //문자열.length는 문자열의 길이를 나타냄(글자수)
          idmsg.innerHTML="정상입니다.";
          idmsg.style.color="green";
       }else{
          idmsg.innerHTML="5~20자 이내로 입력하셔야 합니다.";            //innelHTML의 공간은  <label id="idmsg">과 </label>의 사이 공간
          idmsg.style.color="red";
       }
     }   
 }
*/
