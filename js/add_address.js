$(function(){
	var nameObj = $("[name='name']"),
		telObj = $("[name='tel']"),
		addressObj = $("[name='address']"),
		detailObj = $("[name='address-detail']"),
		defaultObj = $("[name='default-address']");
	var msg = '请填写详细地址';
	detailObj.val(msg).css('color','#c6c6c6');
	detailObj.focus(function(){
		if($(this).val()==msg){
			detailObj.val('').css('color','#000');
		}
	});
	detailObj.blur(function(){
		if($(this).val() == ''){
			detailObj.val(msg).css('color','#c6c6c6');
		}
	});
	
	$(".switch-btn").click(function(){
		var active = Number($(this).next().val());
		if(active){
			$(this).find('span').removeClass('activeOpen');
			$(this).next().val(0);
		}else{
			$(this).find('span').addClass('activeOpen');
			$(this).next().val(1);
		}
		
	});
	
	//确认
	//手机号验证
	function checkTel(tel){
		var exg = /^1[34578]\d{9}$/;
		if(tel.match(exg)){
			return true;
		}else{
			return false;
		}
	}
	$(".bxg-submit").click(function(){
		var nameVal = nameObj.val(),
			telVal = telObj.val(),
			addressVal = addressObj.val(),
			detailVal = detailObj.val(),
			defaultVal = defaultObj.val();
		
		if(nameVal == ''){
			$(".bxg-alert-tip").text('姓名不能为空').show();
			setTimeout(function(){
				$(".bxg-alert-tip").fadeOut();
			},2000);
		}else if(telVal == ''){
			$(".bxg-alert-tip").text('手机号不能为空').show();
			setTimeout(function(){
				$(".bxg-alert-tip").fadeOut();
			},2000);
		}else if(!checkTel(telVal)){
			$(".bxg-alert-tip").text('手机号输入错误').show();
			setTimeout(function(){
				$(".bxg-alert-tip").fadeOut();
			},2000);
		}else if(addressVal == ''){
			$(".bxg-alert-tip").text('地区不能为空').show();
			setTimeout(function(){
				$(".bxg-alert-tip").fadeOut();
			},2000);
		}else{
			console.log(nameVal+'----'+telVal+'----'+addressVal+'----'+detailVal+'----'+defaultVal);
//			$.ajax({
//				type:'post',
//				data:{},
//				url:'',
//				success:function(){
//					
//				},
//				error:function(){
//					
//				}
//			});
		}
	});
});
