$(function(){
	var msg = '宝贝满足您的需要吗？分享一下吧亲';
	var emptyTip = "请输入您的宝贵意见";
	$("#edit-txt").val('').val(msg);
	$("#edit-txt").textareaAutoHeight();
	$("#edit-txt").focus(function(){
		if($("#edit-txt").val()==msg){
			$("#edit-txt").val('').css('color','#000');
		}
	});
	$("#edit-txt").blur(function(){
		if($.trim($("#edit-txt").val()) == ''){
			$("#edit-txt").val(msg).css('color','#a8a8a8');
		}
	});
	
	$(".bxg-stars span").on("click touchmove touchend",function(){
		$(this).addClass("starActive");
		$(this).prevAll('span').addClass("starActive");
		$(this).nextAll('span').removeClass("starActive");
		var ind = $(this).index()+1;
		$(this).parents('.bxg-stars').find("input").val(ind);
		if(ind === 1){
			$(this).parents('.bxg-stars').find("strong").text("差的太离谱");
		}else if(ind === 2){
			$(this).parents('.bxg-stars').find("strong").text("部分有破损");
		}else if(ind === 3){
			$(this).parents('.bxg-stars').find("strong").text("质量一般");
		}else if(ind === 4){
			$(this).parents('.bxg-stars').find("strong").text("质量不错");
		}else{
			$(this).parents('.bxg-stars').find("strong").text("质量非常好");
		}
	});
	
	$(".anonymityBtn").click(function(){
		var inp = Number($(this).next('input').val());
		if(inp){
			$(this).removeClass('anonymityActive');
			$(this).next('input').val('0');
		}else{
			$(this).addClass('anonymityActive');
			$(this).next('input').val('1');
		}
	});
	
	$(".evaluate-publish").click(function(){
		window.location.href = "evaluate_success.html"
	});
})
