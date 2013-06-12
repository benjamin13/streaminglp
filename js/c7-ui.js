jQuery(document).ready(function($){
		var i = 0;
		function animatePlayer()
		{
			if(i==0) {
			$(".window.play").css("display","none");
			$(".window.loading").fadeIn(500).delay(3700).animate({"opacity":0},300,
			function(){
				$(this).css("display","none");
				});
				$(".window.action").delay(4500).fadeIn(800);
				$(".play").removeClass("play").addClass("stop");
				//$(".progressStatus").animate({"width":"5px"},4500);
				i++;
			}
		
		}
		
       $(".window.play").click(function(){
			animatePlayer();
	   });
	   $(".play").click(function(){
			animatePlayer();
	   });
 });