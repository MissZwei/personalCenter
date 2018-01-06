$(function(){
	//阻止事件冒泡
	function stopBubble(e) {
		if(e && e.stopPropagation) {
			e.stopPropagation();
		} else {
			window.event.cancelBubble = true;
		}
	}
	$(".select-reason").click(function(){
		$(".reason-shade").show();
	});
	$(".reason-shade").click(function(){
		$(".reason-shade").fadeOut();
	});
	$(".reason-select ul li").click(function(e){
		stopBubble(e);
		$('.select-submit').attr('data-reason',$(this).find('span').text());
		$(this).find('i').addClass('selected');
		$(this).siblings('li').find('i').removeClass('selected');
	});
	
	$(".select-submit").click(function(e){
		stopBubble(e);
		var reason = $(this).attr('data-reason');
		if(reason == undefined){
			$(".bxg-alert-tip").html('请选择退款原因').show();
			setTimeout(function(){
				$(".bxg-alert-tip").fadeOut();
			},2000);
		}else{
			$(".myreason").text(reason);
			$(".reason-shade").fadeOut();
		}
	});
	
	$(".bxg-submit").click(function(){
//		$.ajax({
//			type:"post",
//			data:{},
//			url:"",
//			success:function(){
//				
//			},
//			error:function(){
//				
//			}
//		});
	});
})