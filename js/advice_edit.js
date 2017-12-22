$(function(){
	var msg = '请输入你的反馈意见...';
	var emptyTip = "请输入您的宝贵意见";
	$("#edit-txt").val('').val(msg);
	$("#edit-txt").textareaAutoHeight();
	$("#edit-txt").focus(function(){
		$(".error-tip").hide();
		if($("#edit-txt").val()==msg){
			$("#edit-txt").val('').css('color','#000');
		}
	});
	$("#edit-txt").blur(function(){
		if($.trim($("#edit-txt").val()) == ''){
			$("#edit-txt").val(msg).css('color','#a8a8a8');
		}
	});
	//图片上传问题
	$(".upload-btn").bind('click',function(){
		$('#upFile').bind('click');
		console.log(1);
	});
	$(".bxg-submit").click(function(){
		//type===软件系统或商家服务
		var type = $('input[type="radio"]:checked').next().text();
		//意见内容
		var txt = $("#edit-txt").val();
		if(txt===msg){
			$(".error-tip").text(emptyTip).show();
		}else{
//			$.ajax({
//				type:'post',
//				data:{type:type,txt:txt},
//				url:,
//				success:function(){
//					
//				},
//				error:function(){
//					
//				}
//				
//			})
		}
	});
});
