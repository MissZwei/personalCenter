$(function(){
	var msg = '说点什么...';
	$("#edit-txt").val(msg);
	$("#edit-txt").textareaAutoHeight();
	$("#edit-txt").focus(function(){
		if($("#edit-txt").val()==msg){
			$("#edit-txt").val('').css('color','#000');
		}
	});
	$("#edit-txt").blur(function(){
		if($.trim($("#edit-txt").val()) == ''){
			$("#edit-txt").val(msg).css('color','#888');
		}
	});
	$(".upload-btn").bind('click',function(){
		$('#upFile').bind('click');
		console.log(1);
	});
	$(".bxg-send").click(function(){
		var txt = $("#edit-txt").val();
		//图片上传问题
	});
});
