
$(document).ready(function(){

		// $('#modal').on('click', function(){
		// 	$('#modal').css("opacity", "1");
		// })

	$("#modal").click(function(){
		$("#modal").animate({
			opacity: "0.9"
    	}, 800);
	});

	$("img").mouseover(function(){
		// $("img").toggle.css("width", "210");
		$("img").css("border", "10px solid white");
	});
	
})