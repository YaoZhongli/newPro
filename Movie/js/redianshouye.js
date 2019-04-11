
$(function(){
	
	$(".app_download").on("mouseover",function(){
        	$(".app_download").find("span").removeClass("caret");
        	$(".app_download").find("span").addClass("caret1");
        	$(".app_download").next().removeClass("hide");
        })
        $(".app_download").on("mouseleave",function(){
        	$(".app_download").find("span").removeClass("caret1");
        	$(".app_download").find("span").addClass("caret");
        	$(".app_download").next().addClass("hide");
        })
$(".subnav .col-md-1").click(function(){
				$(this).children().attr("class","show");
				$(this).siblings().children().attr("class","hide");
				console.log($(this).children());
				$(this).css("color","red");
				$(this).siblings().css("color","#fff");
				
				
})
$(".subnav .col-md-1").mouseover(function(){
	$(this).css("cursor","pointer")
	
})

