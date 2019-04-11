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
$(".subnav .col-md-2").click(function(){
				$(this).children().attr("class","show");
				$(this).siblings().children().attr("class","hide");
//				console.log($(this).children());
				$(this).css("color","red");
				$(this).siblings().css("color","#fff");
				
				
})
$(".subnav .col-md-2").mouseover(function(){
	$(this).css("cursor","pointer")
	
})
$(".type1 li").filter('[class!=active]').mousemove(function(){
	$(".type1 li").filter('[class!="active"]').css({"cursor":"pointer",})
	
//	$(this).css("color","red");
//	$(this).siblings().css("color","black");
	$(".active").css("color","white")
})

//排序的点击事件174
$(".pai span").click(function(){
				$(this).css("color","red");
				$(this).siblings().css("color","#000000")
			})


//点击跳转到det的页面
$(".img1").click(function(){
				
				$.ajax({
					type:"get",
					url:"det.html",
					success:function(){
						console.log(999)
					}
				});
			})
	
	
})



