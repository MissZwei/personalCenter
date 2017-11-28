function exchange(obj){
	var integral = $(obj).prev().text();
	var alert = '<div class="bxg-layer">'+
				'<div class="bxg-layer-alert bxg-confirm">'+
				'<div class="bxg-confirm-content">确定使用'+
				integral+
				'积分兑换？</div>'+
				'<div class="bxg-layer-btn bxg-between">'+
				'<span onclick="">确认</span>'+
				'<span onclick="cancel(this);">取消</span>'+
				'</div></div></div>';
	$("body").append(alert);
	
}
function cancel(obj){
	$(".bxg-layer").fadeOut();
}
$(function(){
	$(".bxg-lazy img").lazyload();
	
//	$.ajax({
//		type:"post",
//		data:{},
//		url:"",
//		async:true,
//		success:function(data){
//			
//		},
//		error:function(data){
//			
//		}
//	});
	
	
});
