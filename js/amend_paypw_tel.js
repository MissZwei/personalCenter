$(function(){
	//密码格式验证
	function checkPass(obj){
		
	}
	$("input").focus(function(){
		$(this).prev().show();
	});
	$(".eyeBtn").click(function(){
		if($(this).parent().find('input').prop('type')=='password'){
			$(this).addClass('active-eye');
			$(this).parent().find('input').prop('type','text');
		}else{
			$(this).removeClass('active-eye');
			$(this).parent().find('input').prop('type','password');
		}
	});
	
	$(".bxg-submit").click(function(){
		var pass = $("[name='pw']").val();
		var repass = $("[name='re-pw']").val();
		console.log(pass+'-------'+repass);
		//少密码格式验证
		if($.trim(pass) == ''){
			$(".bxg-alert-tip").text('请输入新密码').show();
			setTimeout(function(){
				$(".bxg-alert-tip").fadeOut();
			},2000);
		}else if($.trim(repass) == ''){
			$(".bxg-alert-tip").text('请输入确认密码').show();
			setTimeout(function(){
				$(".bxg-alert-tip").fadeOut();
			},2000);
		}else if(pass != repass){
			$(".bxg-alert-tip").text('两次输入密码不一致').show();
			setTimeout(function(){
				$(".bxg-alert-tip").fadeOut();
			},2000);
		}else{
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
		}
	});
});
