$(document).ready(function(){
	for(var i = 0;i<16;i++){
		var col = i+1;
		$("#container").append("<div class='row'></div>");
		for(var j=0;j<16;j++){
			$(".row:nth-child("+col+")").append("<div class='square'></div>");
		}
	}
	$(".square").hover(function(){
		$(this).addClass("highlighted");
	});

	$("#reset").on("click", function(){
	$(".square").removeClass("highlighted");
	});
	$("#fiftyShades").on("click",function(){
		var opacityVal=0
		$(".square").off("mouseenter");
		$(".square").removeClass("highlighted");
		$(".square").hover(function(){
			opacityVal = parseFloat($(this).css("opacity"));
			$(this).css({"opacity" : opacityVal+0.1});

		});
	});
});