$(function(){
	$(".default-mobile").click(function(){
		$(this).hide();
		$(this).next().show();
		$(this).next().find('input').focus();
	});
	//验证手机号
	function checkTel(tel){
		var exg = /^1[34578]\d{9}$/;
		if(tel.match(exg)){
			return true;
		}else{
			return false;
		}
	}
	$(".input-mobile input").focus(function(){
		$(this).next().hide();
	})
	$(".input-mobile input").blur(function(){
		var tel = $(this).val();
		if(tel == ''){
			$(this).next().text('请输入手机号').show();
		}else if(!checkTel(tel)){
			$(this).next().text('手机号输入错误').show();
		}
	});
	
	//点击充值钱数弹框
	$(".sel-money ul li").click(function(){
		var price = parseFloat($(this).find(".pay-price").text());
		console.log(price);
		
	//充值方式和订单显示
		
	});
});
