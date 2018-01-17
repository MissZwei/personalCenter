$(function(){
	// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
	var certifyReg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/; 
	var bankCardReg = /^\d{19}$/g;
	var mobileReg = /^1[34578]\d{9}$/;
	function regCheck(obj,reg,msg){
		if(reg == ''){
			obj.blur(function(){
				var value = $(this).val();
				if(value==''){
					$(".bxg-alert-tip").html(msg).show();
					setTimeout(function(){
						$(".bxg-alert-tip").fadeOut();
					},2000);
				}else{
					obj.attr('data-check',1);
				}
			});
		}else{
			obj.blur(function(){
				var value = $(this).val();
				if(!reg.test(value)){
					$(".bxg-alert-tip").html(msg).show();
					setTimeout(function(){
						$(".bxg-alert-tip").fadeOut();
					},2000);
				}else{
					obj.attr('data-check',1);
				}
			});
		}
		
	}
	regCheck($("[name='name']"),'',$("[name='name']").attr("data-error"));
	regCheck($("[name='certify']"),certifyReg,$("[name='certify']").attr("data-error"));
	regCheck($("[name='bankCard']"),bankCardReg,$("[name='bankCard']").attr("data-error"));
	regCheck($("[name='mobile']"),mobileReg,$("[name='mobile']").attr("data-error"));
	
	$(".bxg-submit").click(function(){
		var ajax = false;
		$("input").each(function(index,item){
			var val = $(this).val();
			var flag = Number($(this).attr("data-check"));
			if(val == ''|| (!flag)){
				$(".bxg-alert-tip").html($(this).attr("data-error")).show();
				setTimeout(function(){
					$(".bxg-alert-tip").fadeOut();
				},2000);
				ajax = false;
				return false;
			}else{
				ajax = true;
				window.location.href = 'verify_code.html';
			}
		});
		
//		if(ajax){
//			$.ajax({
//				type:"post",
//				data:{},
//				url:"",
//				success:function(){
//					
//				},
//				error:function(){
//					
//				}
//			});
//		}
	});

});
