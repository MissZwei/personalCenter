$(function(){
	$(".bxg-list").click(function(){
		$(".head-list-content").toggle();
	});
	$("[name='recharge']").on('keyup',function(){
		var value=$(this).val();
		if(value !=''&& value.substr(0,1) == '.'){  
		 	$(this).val('0'+value);
       	}else if(!(/^0*(0\.|[1-9])/).test(value)){
        	$(this).val('');
        }else if(value.indexOf(".")< 0 && value !=""){
        	$(this).val(parseFloat(value));
        }else{
			$(this).val($(this).val().replace(".","$#$").replace(/\./g,"").replace("$#$","."));
			$(this).val($(this).val().replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'));
        }
	});
	
	
	$(".bxg-submit").click(function(){
		var money = $("[name='recharge']").val();
		var type = $("[name='type']:checked").val();
//		type == 1 微信 type == 2 支付宝
		if(!money){
			$(".bxg-alert-tip").html('请填写充值金额').show();
			setTimeout(function(){
				$(".bxg-alert-tip").fadeOut();
			},2000)
		}
	});
	
});
