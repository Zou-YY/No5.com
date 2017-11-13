$(function(){
	var $wel = $(".head-welcome span");
	var myDate = new Date();
	var h = myDate.getHours();
	if(h >= 7 && h <= 11){
		$wel.html("上午好");
	}else if(h >= 12 && h <= 13){
		$wel.html("中午好");
	}else if(h >= 14 && h <= 19){
		$wel.html("下午好");
	}else{
		$wel.html("晚上好");
	}
	var $clearInput = $(".search .input-key i");
	var $inputKey = $(".search .input-key input");
	$clearInput.click(function(){
		$inputKey.val("").focus();
	})
	$inputKey.blur(function(){
		if($inputKey.val() == ""){
			$inputKey.val("男士精品");
		}
	})
	
	$(".shop").click(function(){
		window.location = "../html/cart.html";
	})
	
	setInterval(function(){
		loadCart();
	},500);
	
	//购物车
	function loadCart(){
		var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
		var cartObj = convertCartStrToObj(cartStr);
		//获取到购物车中所有商品的数量
		var total = 0;
		for(var id in cartObj){
			total += cartObj[id].num;
		}
		//console.log($(".shop .shop-car p span").html());
		$(".shop .shop-car p span").text(total);
	}
	
	//字符串转对象
	function convertCartStrToObj(cartStr){
		//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
		if(!cartStr){
			return {};
		}
		var goods = cartStr.split(":");
		var obj = {};
		for(var i = 0; i < goods.length; i ++){
			var data = goods[i].split(",");
			//以商品的id为键，商品的其他信息为值，这个值也设计为一个对象
			obj[data[0]] = {
				"name" : data[1],
				"guige" : data[2],
				"ord" : data[3],
				"price" : parseFloat(data[4]),
				"num" : parseInt(data[5])
			}
		}
		return obj;
	}
	//对象转字符串
	function convertObjToCartStr(obj){
		var cartStr = "";
		//变量对象
		for(var id in obj){
			if(cartStr){
				cartStr += ":";
			}
			cartStr += id + "," + obj[id].name + "," + obj[id].guige + "," + obj[id].ord + "," + obj[id].price + "," + obj[id].num;
		}
		return cartStr;
	}
	
	
})

