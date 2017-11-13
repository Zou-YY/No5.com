$(function(){
	$(".main-con .nav-list h3").each(function(index){
		$(this).click(function(){
			$(this).find("span").toggleClass("open");
			$(this).next("ul").toggle(300);
		})
	})
	
	$(".nav-list li").click(function(){
		location.href = $(this).find("a").attr("href");;
	})
	
	$(".more").click(function(){
		if($(this).html() == "更多"){
			$(this).html("收起");
			$(".brand-box dd ul li[flag]").css("display","block");
		}else if($(this).html() == "收起"){
			$(this).html("更多");
			$(".brand-box dd ul li[flag]").css("display","none");
		}
	})
	$("ol li[elem-data]").click(function(){
		if($(this).attr("class") == "cur"){
			return;
		}
		$(".more").css("display","none");
		$("ol li").attr("class","");
		$(this).attr("class","cur");
		var $str = $(this).attr("elem-data");
		
		$(".brand-box dd ul li").css("display","none");
		var $arr = $str.split("");
		$.each($arr,function(index,value){
			$(".brand-box dd ul li[elem-data='"+ value +"']").css("display","block");
		})
	})
	$("#brand-all").click(function(){
		if($(this).attr("class") == "cur"){
			return;
		}
		$(".more").css("display","block").html("收起");
		$("ol li").attr("class","");
		$(this).attr("class","cur");
		$(".brand-box dd ul li").css("display","block");
	})
	
	
	
})
