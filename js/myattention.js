$(function(){
	$(".bxg-news-goods").on("touchstart touchmove",function(){
		event.stopPropagation();
		$("body,.bxg-content").css('overflow-y','hidden');
	});
	$(".bxg-lazy img").lazyload();
//	点击删除按钮
	$(".bxg-delete").click(function(){
		$(".bxg-normal").hide();
		$(".bxg-toggle,.bxg-checkbox,.bxg-deleteAjax").show();
	});
	$(".cancelSelect").click(function(){
		$(".bxg-normal").show();
		$(".bxg-toggle,.bxg-checkbox,.bxg-deleteAjax").hide();
		$(".bxg-checkbox").each(function(index,item){
			var label = $(this).find("label");
			var inp = $(this).find("input");
			if(inp.prop('checked')){
				label.click();
			}
		});
	});
	
//单个选择
	$(".bxg-checkbox label").click(function(){
		var _this = $(this);
		var inp = $(this).next();
		if(inp.prop('checked')){
			_this.removeClass('selectActive');
			
		}else{
			_this.addClass('selectActive');
		}
	});
//全选与取消全选
	$(".selectAll").click(function(){
		var flag = Number($(this).attr("data-selAll"));
		if(!flag){
			$(this).html("取消全选");
			$(".bxg-checkbox").each(function(index,item){
				var label = $(this).find("label");
				var inp = $(this).find("input");
				if(!inp.prop('checked')){
					label.click();
				}
			});
			$(this).attr("data-selAll",1);
		}else{
			$(this).html("全选");
			$(".bxg-checkbox").each(function(index,item){
				var label = $(this).find("label");
				var inp = $(this).find("input");
				if(inp.prop('checked')){
					label.click();
				}
			});
			$(this).attr("data-selAll",0);
		}
	});
//点击删除去请求服务器
	$(".bxg-deleteAjax").click(function(){
		var deleteArr = [];
		
		$(".bxg-checkbox").each(function(index,item){
			var inp = $(this).find('input');
			var parent = $(this).parents('li');
			if(inp.prop('checked')){
//				deleteArr.push();
				parent.remove();
			}
		});
	});
	
//点击上新
	$(".new-btn").click(function(){
		var shopId = $(this).parents('li').attr('data-shopId');
		$(".bxg-news-goods").fadeIn();
//		$.ajax({
//			type:"post",
//			data:{},
//			url:"",
//			async:true
//		});
	});
	
//上新关闭
	$(".close-new").click(function(e){
		e.stopPropagation();
		e.preventDefault();
		$(".bxg-news-goods").fadeOut();
		$("body,.bxg-content").css('overflow-y','scroll');
	});

});
