/**
 * 사용자 지정 효과(애니메이션)
 */
$(document).ready(function(){
	//div를 클릭했을때 오른쪽으로 이동
	$("div").on("click",function(){
		$("div").animate({
			left:500,				//position으로 따로 지정하지 않으면 기본값이 static이기 때문에 오른쪽과 왼쪽 지정값이 실행이 안됨.
			width:"+=50",
			height:"+=50"
		})
	})
})












