$(function(){
	$(".bxg-delete").click(function(){
		$(".bxg-toggle,.bxg-deleteAjax,.bxg-checkbox").show();
		$(".bxg-normal").hide();
		$(".bxg-footprint>div").css('text-indent','0.84rem');
		
	});
	$(".cancelSelect").click(function(){
		$(".bxg-toggle,.bxg-checkbox,.bxg-deleteAjax").hide();
		$(".bxg-normal").show();
		$(".bxg-footprint>div").css('text-indent','0.42rem');
	});
	//日期选择
	$(".list-check label").click(function(){
		var _this = $(this);
		var inp = _this.next();
		var parent = $(this).parents('ul');
		var daySelect = parent.prev();
		if(inp.prop('checked')){
			_this.removeClass('checkActive');
			if(!judgeSel(parent)){
				daySelect.find('.day-check label').removeClass('checkActive');
				daySelect.find('input').prop('checked',false);
			}
		}else{
			_this.addClass('checkActive');
			if(judgeSel(parent)){
				console.log(2);
				daySelect.find('.day-check label').addClass('checkActive');
				daySelect.find('input').prop('checked',true);
			}
		}
	});
	//选择日期，判断日期下的子数量 obj
	function judgeSel(obj){
		var num = obj.find('li').length-1;
		var selNum = obj.find('li').find('input:checked').length;
		console.log("num:"+num+'-----   selNum:'+selNum);
		if(num == selNum){
			return true;
		}else{
			return false;
		}
	}
	//每天的选择
	$(".day-check label").click(function(){
		var _this = $(this);
		var inp = $(this).next();
		var listArr = $(this).parents('.daybtn').next();
		if(inp.prop('checked')){
			_this.removeClass('checkActive');
			listArr.find('input').each(function(index,item){
				if($(this).prop('checked')){
					$(this).prop('checked',false);
					$(this).prev().removeClass('checkActive');
				}
			});
		}else{
			_this.addClass('checkActive');
			//循环检查
			listArr.find('input').each(function(index,item){
				if(!$(this).prop('checked')){
					$(this).prop('checked',true);
					$(this).prev().addClass('checkActive');
				}
			});	
		}
	});
	//全选
	$(".selectAll").click(function(){
		var flag = Number($(this).attr("data-selAll"));
		if(!flag){
			$(this).html("取消全选");
			$(".day-check").each(function(index,item){
				var label = $(this).find("label");
				var inp = $(this).find("input");
				if(!inp.prop('checked')){
					label.click();
				}
			});
			$(this).attr("data-selAll",1);
		}else{
			$(this).html("全选");
			$(".day-check").each(function(index,item){
				var label = $(this).find("label");
				var inp = $(this).find("input");
				if(inp.prop('checked')){
					label.click();
				}
			});
			$(this).attr("data-selAll",0);
		}
	});
	$(".bxg-deleteAjax").click(function(){
		var day = [];
		
		$(".day-check").each(function(index,item){
			var dayInp = $(this).find('input');
			var parent = $(this).parents('.bxg-footprint');
			var list = $(this).parents('.daybtn').next();
			if(dayInp.prop('checked')){
				list.find('li').each(function(index,item){
					day.push($(this).attr("data-id"));
				});
				parent.remove();
			}else{
				list.find('li').each(function(index,item){
					var inp = $(this).find("input");
					if(inp.prop('checked')){
						day.push($(this).attr("data-id"));
						$(this).remove();
					}
				});
			}
		});
		console.log(day);
	});
});
