$(function(){
	var selObj = $(".help-list label");
	selObj.click(function(){
		var flag = $(this).find('input').prop('checked');
		if(flag){
			$(this).find('span').removeClass('activeSel');
			$(this).find('.sel-icon').hide();
			$(this).find('input').prop('checked',false);
		}else{
			$(this).find('span').addClass('activeSel');
			$(this).find('.sel-icon').show();
			$(this).find('input').prop('checked',true);
		}
		
	});
	
	$(".bxg-submit").click(function(){
		var sel=[];
		var tip = $(".bxg-alert-tip");
		$("[name='person']:checked").each(function(index,item){
			sel.push($(this).val());
		});
		if(sel.length == 0){
			tip.text("请至少选择一个").show();
			setTimeout(function(){
				tip.fadeOut();
			},2000);
		}else{
			console.log(sel);
			window.location.href = 'interest_goods.html';
//			$.ajax({
//				type:"post",
//				data:{sel:sel},
//				url:"",
//				success:function(){
//					
//				},
//				error:function(){
//					
//				}
//			});
		}
		
	})
});
