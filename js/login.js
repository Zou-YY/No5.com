	var $arrLogin = [false,false];
$(function(){
	$(".user-input").focus(function(){
		$(this).attr("class","user-input input-focus");
	})
	var $regName = /^[\u2E80-\u9FFF\w\.-@]{3,30}$/;
	$("#userName").focus(function(){
		$(this).next("u").css("display","none").nextAll("span").html("(3~30位，由汉字、字母、数字、点、减号、下划线及@组成)").css("color","#515151");
	})
	$("#userName").blur(function(){
		var $strName = $("#userName").val();
		if($regName.test($strName)){
			$(this).next("u").css("display","block").nextAll().html("");
			$arrLogin[0] = true;
		}else{
			$(this).attr("class","input-default input-failure").nextAll("span").html("用户名的长度应为3～30个字符之间(汉字占两个字符)！").css("color","#f00");
			$arrLogin[0] = false;
		}
	})
	var $regPassword = /^[a-z0-9_-]{6,18}$/;
	$("#userPassword").focus(function(){
		$(this).nextAll("span").html("6~16位，建议使用字母、数字、特殊字符组合").css("color","#515151");
	})
	$("#userPassword").blur(function(){
		var $strPassword = $("#userPassword").val();
		if($regPassword.test($strPassword)){
			$(this).nextAll("span").html("");
			$arrLogin[1] = true;
		}else{
			$(this).attr("class","input-default input-failure").nextAll("span").html("密码的长度应该为6～16个字符之间！").css("color","#f00");
			$arrLogin[1] = false;
		}
	})
	
	$("#login-submit").click(function(){
		for(var i = 0; i < $arrLogin.length; i ++){
			if($arrLogin[i] == false){
				alert("登录失败");
				return false;
			}
		}
		alert("登录成功！");
		window.open("../index.html"); 
	})
})
