$(function(){
	$(".bxg-list").click(function(){
		$(".head-list-content").toggle();
	});
	var name = $("[name='user_name']");
	var card = $("[name='user_card']");
	var tel = $("[name='user_tel']");
	
	var bankCardReg = /^\d{19}$/g;       //银行卡
	var mobileReg = /^1[34578]\d{9}$/;   //手机号
	
//	card.blur(function(){
//		if(!bankCardReg.test($(this).val())){
//			$(".bxg-alert-tip").html("银行卡号输入错误").show();
//			setTimeout(function(){
//				$(".bxg-alert-tip").fadeOut();
//			},2000);
//		}
//	});
	card.on("input propertychange",function(){
//		$.ajax({
//			type:"post",
//			data:{num:$(this).val()},
//			url:"",
//			success:function(){
				//成功获取到是哪个银行后，把获取的值写到银行卡号下面的li中
//			},
//			error:function(){
//				
//			}
//		});
	});
	
//	tel.blur(function(){
//		if(!mobileReg.test($(this).val())){
//			$(".bxg-alert-tip").html("手机号输入错误").show();
//			setTimeout(function(){
//				$(".bxg-alert-tip").fadeOut();
//			},2000);
//		}
//	});
	
	$(".bxg-submit").click(function(){
		if(name.val()==''){
			$(".bxg-alert-tip").html("请输入持卡人姓名").show();
			setTimeout(function(){
				$(".bxg-alert-tip").fadeOut();
			},2000);
		}else if(card.val() == '' || (!bankCardReg.test(card.val()))){
			$(".bxg-alert-tip").html("银行卡号输入错误").show();
			setTimeout(function(){
				$(".bxg-alert-tip").fadeOut();
			},2000);
		}else if(tel.val() == '' || (!mobileReg.test(tel.val()))){
			$(".bxg-alert-tip").html("手机号输入错误").show();
			setTimeout(function(){
				$(".bxg-alert-tip").fadeOut();
			},2000);
		}else{
			window.location.href = "verify_code.html";
//			$.ajax({
//				type:"post",
//				data:{name:name.val(),card:card.val(),tel:tel.val()},
//				url:"",
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
