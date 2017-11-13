$(function(){
	$.extend({
		run : function($mark){
			$(".big-img[mark-big!='" + $mark + "']").fadeOut(800);
			$(".big-img[mark-big='" + $mark + "']").fadeIn(800);
			$(".small-img[mark-small!='" + $mark + "']").css("display","none");
			$(".small-img[mark-small='" + $mark + "']").css("display","block");
		}
	})
	/*banner轮播*/
	$("#banner .banner-con .list-btn span").mouseover(function(){
		$("#banner .banner-con .list-btn span").css("background","").attr("mark","");
		$(this).css("background","#00b5ff").attr("mark","light");
		var $mark = Number($(this).html());
		//alert($mark);
		$.run($mark);
	});
	$("#banner .banner-con .list-btn span").mouseout(function(){
		$(".big-img").stop(true,true);
	})
	
	var $len = $("#banner .banner-con .list-btn span").length;
	var $i = 1;
	var $bannerTimer = null;
	function play(){
		clearInterval($bannerTimer);
		$bannerTimer = setInterval(function(){
			$i = Number($(".list-btn span[mark=light]").html());
			++ $i;
			if($i > $len){
				$i = 1;
			}
			$("#banner .banner-con .list-btn span").css("background","").attr("mark","");
			$("#banner .banner-con .list-btn span:nth-of-type(" + $i + ")").css("background","#00b5ff").attr("mark","light");
			$.run($i);
			$("#banner").mouseover(function(){
				clearInterval($bannerTimer);
			})
			$("#banner").mouseout(function(){
				play();
			})
		},8000)
	}
	play();
	
	
	/*吸顶导航栏*/
	$("#nav .nav-con .all-list dl").css("display","block");
	$("#nav .nav-con .all-list dl dt").hover(function(){
		$(this).attr("class","hover").next("dd").css("display","block").hover(function(){
			$(this).css("display","block").prev("dt").attr("class","hover");
		},function(){
			$(this).css("display","none").prev("dt").attr("class","");
		});
	},function(){
		$(this).attr("class","").next("dd").css("display","none");
	});
	$(window).scroll(function(){
		var $sHeight = Number($(document).scrollTop());
		//console.log($sHeight);
		/*返顶*/
		if($sHeight >= 500){
			$("#toTop").css("visibility","visible");
		}else{
			$("#toTop").css("visibility","hidden");
		}
		/*吸顶导航*/
		if($sHeight >= 800){
			$("#nav").css({
				"position" : "fixed",
				"top" : 0,
				"z-index" : 1000
			}).find(".nav-con .all-list dl").css("display","none");
			$("#nav .nav-con .all-list").hover(function(){
				$(this).find("dl").css("display","block");
			},function(){
				$(this).find("dl").css("display","none");
			})
			$(".holdplace").css("display","block");
		}else{
			$("#nav").css({
				"position":"relative",
				"top" : "",
				"z-index" : ""
				}).find(".nav-con .all-list dl").css("display","block");
				$("#nav .nav-con .all-list").hover(function(){
					$(this).find("dl").css("display","block");
				},function(){
					$(this).find("dl").css("display","block");
				})
			$(".holdplace").css("display","none");
		}
	})
	
	/*小喇叭*/
	var $warnTimer = null;
	function warnRoll(){
		clearInterval($warnTimer);
		$warnTimer = setInterval(function(){
			$(".banner-bottom .warn p:first-child").animate({"top":"-38px"},function(){
				$(this).css("top","0px");
			})
			$(".banner-bottom .warn p:last-child").animate({"top":"0px"},function(){
				$(this).css("top","38px");
			})
			$(".banner-bottom .warn p a").hover(function(){
				clearInterval($warnTimer);
			},function(){
				warnRoll();
			})
		},2000)
	}
	warnRoll();
	
	/*到计时*/
	var nowDate = new Date();
	var nowY = nowDate.getFullYear();
	var nowM = nowDate.getMonth();
	var nowD = nowDate.getDate();
	var toY = nowY;
	var toM = nowM;
	var toD = nowD + 1;
	var toDate = new Date(toY,toM,toD);
	var toTime = toDate.getTime();
	setInterval(function(){
		var nowDate = new Date();
		var nowTime = nowDate.getTime();
		var timeResidue = toTime - nowTime;
		var hResidue = Math.floor(timeResidue / 1000 / 60 / 60);
		var mResidue = Math.floor(timeResidue / 1000 / 60 - hResidue * 60);
		var sResidue = Math.floor(timeResidue / 1000 - hResidue * 60 * 60 - mResidue * 60);
		var msResidue= Math.floor((timeResidue - hResidue * 60 * 60 * 1000 - mResidue * 60 * 1000 - sResidue * 1000) / 100);
		if(hResidue < 10){
			hResidue = "0" + hResidue;
		}
		if(mResidue < 10){
			mResidue = "0" + mResidue;
		}
		if(sResidue < 10){
			sResidue = "0" + sResidue;
		}
		$(".time-end b:first-of-type").text(hResidue);
		$(".time-end b:nth-of-type(2)").text(mResidue);
		$(".time-end b:nth-of-type(3)").text(sResidue + "." + msResidue);
	},100)
	
	/*本周特价...*/
	$(".sale-nav li").mouseover(function(){
		$liIndex = $(this).find("input").attr("value");
		$left = $(this).width() * $liIndex;
		$(".now-index").css("left",$left);
	})
	$(".sale-nav li:even").mouseover(function(){
		$(".sale-show").css("display","block");
		$(".sale-hot").css("display","none");
	})
	$(".sale-nav li:odd").mouseover(function(){
		$(".sale-show").css("display","none");
		$(".sale-hot").css("display","block");
	})
	
	/*热销滑动*/
	$(".hot-show li").hover(function(){
		$(this).prevAll().find("span").css("display","block");
		$(this).nextAll().find("span").css("display","block");
		$(this).prevAll().find("div").css("display","none");
		$(this).nextAll().find("div").css("display","none");
		$(this).find("span").css("display","none");
		$(this).find("div").css("display","block")
	})
	
	/*返顶*/
	$("#toTop").click(function(){
		$("html,body").animate({scrollTop:0},"slow");
	})
})
