$("#board-nav li").on("click",function(){
	$(this).addClass("active");
	$(this).siblings().removeClass("active");
	console.log("/board?showBoard="+($("#board-nav li").index(this)+1));
	$.get("/board?showBoard="+($("#board-nav li").index(this)+1),function(data){
	for(var i = 0;i < data.subjects.length;i++){
		$(".word-img img").eq(i).attr("src",data.subjects[i].images.small);
		$(".name a").eq(i).html(data.subjects[i].title);
		$(".star").eq(i).html(function(index,oldhtml){
			var str = "";
			for(var j = 0;j<data.subjects[i].casts.length;j++){
				if(j==data.subjects[i].casts.length-1){
					str = str+data.subjects[i].casts[j].name;
				}else{
					str = str+data.subjects[i].casts[j].name+",";
				}
			}
			return oldhtml+str;
		})
		$(".releasetime").eq(i).html(function(index,oldhtml){
			return oldhtml+data.subjects[i].year
		})
		$(".word-scr p").eq(i).html(data.subjects[i].rating.average)
		}
	console.log(data)
	})
	return false
})
$(function(){
	$(".subnav .col-md-2").mouseover(function(){
	$(this).css("cursor","pointer")
	
})
	
	$(".subnav .col-md-2").click(function(){
				$(this).children().attr("class","show");
				$(this).siblings().children().attr("class","hide");
				console.log($(this).children());
				$(this).css("color","red");
				$(this).siblings().css("color","#fff");
				
				
})
	
	
})