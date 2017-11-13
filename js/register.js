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
	
	var $arr = [false,false,false,false];
	$(".input-default").focus(function(){
		$(this).attr("class","input-default input-focus");
	})
	var $regName = /^[\u2E80-\u9FFF\w\.-@]{3,30}$/;
	$("#myName").focus(function(){
		$(this).next("u").css("display","none").nextAll("span").html("3~30位，由汉字、字母、数字、点、减号、下划线及@组成").css("color","#515151");
	})
	$("#myName").blur(function(){
		var $strName = $("#myName").val();
		if($regName.test($strName)){
			$(this).next("u").css("display","block").nextAll("span").html("");
			$arr[0] = true;
		}else{
			$(this).attr("class","input-default input-failure").nextAll("span").html("用户名的长度应为3～30个字符之间(汉字占两个字符)！").css("color","#f00");
			$arr[0] = false;
		}
	})
	var $regPassword = /^[a-z0-9_-]{6,18}$/;
	$("#myPassword").focus(function(){
		$(this).next("u").css("display","none").nextAll("span").html("6~16位，建议使用字母、数字、特殊字符组合").css("color","#515151");
	})
	$("#myPassword").blur(function(){
		var $strPassword = $("#myPassword").val();
		if($regPassword.test($strPassword)){
			$(this).next("u").css("display","block").nextAll("span").html("");
			$arr[1] = true;
		}else{
			$(this).attr("class","input-default input-failure").nextAll("span").html("密码的长度应该为6～16个字符之间！").css("color","#f00");
			$arr[1] = false;
		}
	})
	$("#rePassword").focus(function(){
		$rePassword = $("#myPassword").val();
		console.log($rePassword);
	})
	$("#rePassword").blur(function(){
		if($rePassword != ""){
			var $thisPassword = $(this).val();
			console.log($thisPassword);
			if($rePassword == $thisPassword){
				$(this).next("u").css("display","block");
				$arr[2] = true;
			}else{
				$(this).attr("class","input-default input-failure").nextAll("span").html("两次输入的密码不一致，请重新输入！").css("color","#f00");
				$arr[2] = false;
			}
		}
	})
	$regEmail = /[@]{1}/g;
	$("#myEmail").blur(function(){
		$strEmail = $(this).val();
		if($regEmail.test($strEmail)){
			$(this).next("u").css("display","block").nextAll("span").html("");
			$arr[3] = true;
		}else{
			$(this).attr("class","input-default input-failure").nextAll("span").html("邮件地址的格式不正确，请您重新输入！").css("color","#f00");
			$arr[3] = false;
		}
	})
	
	$(".input-btn").click(function(){
		for(var i = 0; i < $arr.length; i ++){
			if($arr[i] == false){
				alert("注册失败");
				return false;
			}
		}
		alert("注册成功！");
		window.open("../index.html"); 
	})
})
