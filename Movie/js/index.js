$(function(){
	//导航栏
//		$('.nav_first').css({'background-color':'#ef4238'}) ;
//		$('.nav_first').children().css('color','white');
		$('.nav_title').click(function(){
			$(this).css('font-weight',600);
		})
		
		//轮播图
		$(".carousel").carousel({
		     interval:2000 //每隔两秒自动轮播  
		})  
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
		//跳转到购票页面
		$('.buy_tickts').on('mouseenter',function(){
				$('.a_style').css('color','white');
			});
		$('.buy_tickts').on('mouseleave',function(){
				$('.a_style').css('color','#ef4238');
		});
		//查看完整榜单1
		$('.more_list').children().css('color','#ef4238');
		$('.more_list').on('mouseenter',function(){
			$('.more_list').children().css('font-size','16px');
		});
		$('.more_list').on('mouseleave',function(){
			$('.more_list').children().css('font-size','14px');
		});
		
		
		//查看完整榜单2
		$('.yellow_tex').children().css('color','#ffb400');
		$('.yellow_tex').on('mouseenter',function(){
			$('.yellow_tex').children().css('font-size','16px');
		});
		$('.yellow_tex').on('mouseleave',function(){
			$('.yellow_tex').children().css('font-size','14px');
		});
		//      今日盘点,查看更多
		 $(".more_text").click(function(){
        	$.ajax({
        		type:"get",
        		url:"/alltickts",
//      		返回professionDatas.html页面
        		success:function(){
        			
        		},
        		async:true
        	});
        })
//      第一张轮播图点击后的详情页面
        $(".changAn_event").click(function(){
        	$.ajax({
        		type:"post",
        		url:"/changAn",
//      		返回changAn.html页面
        		async:true
        	});
        })
})
