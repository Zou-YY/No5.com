$(function(){
	/*轮播*/
	var $arrPicCur = ["../img/product/prod_3510_B_150402173832_58564735.jpg","../img/product/prod_3510_B_150402173844_35261360.jpg","../img/product/prod_3510_B_150402173854_50953956.jpg","../img/product/prod_3510_B_150402173904_99193549.jpg","../img/product/prod_3510_B_150402173913_43610970.jpg"];
	var $arrBigPic = ["../img/product/prod_3510_H_150402173833_36394325.jpg","../img/product/prod_3510_H_150402173845_50469185.jpg","../img/product/prod_3510_H_150402173855_49749580.jpg","../img/product/prod_3510_H_150402173905_83686347.jpg","../img/product/prod_3510_H_150402173915_75494667.jpg"]
	var $lis = $("#pic-btn li");
	//alert($lis[0].className);
	$lis.each(function(index){
		$(this).mouseover(function(){
			if($(this).attr("class") == "pic-cur"){
				return;
			}
			for(var $i = 0; $i < $lis.length; $i ++){
				if($lis[$i].className == "pic-cur"){
					$lis[$i].className = "";
					break;
				}
			}
			$(this).attr("class","pic-cur");
			//console.log(index);
			//console.log($arrPicCur[index]);
			$("#pic-cur img").attr("src",$arrPicCur[index]);
			$("#bigPic-cur img").attr("src",$arrBigPic[index]);
			
		})
	})
	/*放大镜*/
	$("#masklayer").mouseover(function(){
		$("#magnifier").css("display","block");
		$("#bigPic-cur").css("display","block");
		$("#masklayer").mousemove(function(evt){
			var $left = evt.pageX - $("#masklayer").offset().left - $("#magnifier").width() / 2 - 2;
			if($left < 0){
				$left = 0;
			}
			if($left > $("#masklayer").width() - $("#magnifier").width() - 2){
				$left = $("#masklayer").width() - $("#magnifier").width() - 2;
			}
			var $top = evt.pageY - $("#masklayer").offset().top - $("#magnifier").height() / 2 - 2;
			if($top < 0){
				$top = 0;
			}
			if($top > $("#masklayer").height() - $("#magnifier").height() - 1){
				$top = $("#masklayer").height() - $("#magnifier").height() - 1;
			}
			$("#magnifier").css({"left":$left,"top":$top});
			$bigL = $left / ($("#masklayer").width() - $("#magnifier").width()) * ($("#bigPic-cur .bigPic-box").width() - $("#bigPic-cur").width());
			$bigT = $top / ($("#masklayer").height() - $("#magnifier").height()) * ($("#bigPic-cur .bigPic-box").height() - $("#bigPic-cur").height());
			$("#bigPic-cur .bigPic-box").css({"left":- $bigL,"top":- $bigT});
		})
	})
	$("#masklayer").mouseout(function(){
		$("#magnifier").css("display","none");
		$("#bigPic-cur").css("display","none");
	})
	/*购买数量*/
	$("#reduce").click(function(){
		var $nNum = $("#buyNum").val();
		if($nNum == 1){
			return;
		}
		$("#buyNum").val(-- $nNum);
	})
	$("#add").click(function(){
		var $nNum = $("#buyNum").val();
		if($nNum == 999){
			return;
		}
		$("#buyNum").val(++ $nNum);
	})
	
	
})
