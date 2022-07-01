/**
 * 효과
 */

$(document).ready(function(){
	
	$("#show").on("click",function(){						//show는 hide로 숨기면 나타내주는 기능
		//show효과->$(선택자).메서드명()
		$("p").show("slow",function(){						//메서드명()에 들어갈수있는 기능중 하나가 시간을 나타내는 기능-(숨기고 나타내는 효과에 적용)  ex.$("p").show("slow")
			alert("나타남")
		});							
	})
	
	
	$("#hide").on("click",function(){						
		$("p").hide("slow",function(){
			alert("숨겼음");
		});						
	})
	
	$("#toggle").on("click",function(){								//hide와 show 둘의 기능을 한번에 나타내줌(한번 누르면 사라지고 또한번 더 누르면 나타남)						
		$("p").toggle("slow",function(){
			alert("한번 누르면 사라지고 한번 누르면 나타남");
		});						
	})
	
	$("#slideDown").on("click",function(){						
		$("p").slideDown("slow",function(){
			alert("숨겼음");
		});						
	})
	
	
	$("#slideUp").on("click",function(){						
		$("p").slideUp("slow",function(){
			alert("숨겼음");
		});						
	})
	
	$("#slideToggle").on("click",function(){								//slideDown과slideUp 둘의 기능을 한번에 나타내줌(한번 누르면 사라지고 또한번 더 누르면 나타남)->위아래로 없어지고 생김						
		$("p").slideToggle("slow",function(){
			alert("한번 누르면 사라지고 한번 누르면 나타남");
		});						
	})
	
	$("#fadeIn").on("click",function(){							
		$("p").fadeIn("slow",function(){
			alert("한번 누르면 사라지고 한번 누르면 나타남");
		});						
	})

	$("#fadeOut").on("click",function(){							
		$("p").fadeOut("slow",function(){
			alert("한번 누르면 사라지고 한번 누르면 나타남");
		});						
	})
	//show
	//hide
	//toggle
	//slideDown
	//slideUp
	//slideToggle
	//fadeln
	//gadeout
	//fadeToggle

})

