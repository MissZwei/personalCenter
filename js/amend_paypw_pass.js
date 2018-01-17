$(function(){
	//	原密码验证
	$("[name='old-pw']").focus(function(){
		$(this).prev().hide();
	});
	$(".bxg-list").click(function(){
		$(".head-list-content").toggle();
	});
	$("[name='old-pw']").blur(function(){
		var oldPas = $(this).val();
//		$.ajax({
//			type:"post",
//			data:{oldPas:oldPas},
//			url:"",
//			success:function(){
//				
//			},
//			error:function(){
//				
//			}
//		}); 
		if(oldPas != '123'){
			$(this).prev().addClass('checkError').show();
		}else{
			$(this).attr("data-status",'1');
			$(this).prev().removeClass('checkError').show();
		}
	});
	//密码格式验证
	function checkPass(obj){
		
	}
	$("[name='pw'],[name='re-pw']").focus(function(){
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
		var status = Number($("[name='old-pw']").attr('data-status'));
		var pass = $("[name='pw']").val();
		var repass = $("[name='re-pw']").val();
		console.log(pass+'-------'+repass);
		//少密码格式验证
		if(status){
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
				$(".bxg-alert-tip").text('新密码两次输入不一致').show();
				setTimeout(function(){
					$(".bxg-alert-tip").fadeOut();
				},2000);
			}else{
				window.location.href="verify_code.html";
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
		}else{
			$(".bxg-alert-tip").text('原密码输入错误').show();
			setTimeout(function(){
				$(".bxg-alert-tip").fadeOut();
			},2000);
		}
		
	});
});
