$(function() {
	$(".bxg-lazy img").lazyload();
	$(".bxg-list").click(function(){
		$(".head-list-content").toggle();
	});
	$(".head-list-content li:last-child").click(function(){
		$(".head-list-content").hide();
		$(".bxg-alert-tip").show();
	});
	$(".bxg-delete-ok").click(function(){
		$(".bxg-alert-tip").fadeOut();
		$(".bxg-collection>div").remove();
	});
	$(".bxg-delete-cancel").click(function(){
		$(".bxg-alert-tip").fadeOut();
	});

	//相似，取消收藏弹框
	var bob = '<div class="bxg-bob">'+
			  '<div class="bxg-similar" onclick="getSimilar(this);">相似款</div>'+
			  '<div class="bxg-cancel" onclick="cancelCollect(this);">取消收藏</div>'+
			  '</div>';
	$(".goods-list-btn").click(function(e){
		e.preventDefault();
		var _parent = $(this).parents('li'); 
		_parent.append(bob);
		_parent.siblings('li').find('.bxg-bob').remove();
	});
});
//取消收藏
function cancelCollect(_this){
	$(_this).parent().fadeOut();
	var prev = $(_this).parents('li').prev().html();
	var next = $(_this).parents('li').next().html()
	if(prev == undefined && next ==undefined){
		$(_this).parents('.bxg-goods-list').remove();
	}
	$(_this).parents('li').remove();
};
//找相似
function getSimilar(_this){
	var goodsId = $(_this).parents('li').attr('data-goodsId');
//	$.ajax({
//		type:"get",
//		data:{},
//		url:"",
//		success:function(data){
//			
//		},
//		error:function(err){
//			
//		}
//	});
};