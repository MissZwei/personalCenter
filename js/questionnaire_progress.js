$(function() {
	var num = 0;

	function progress_h(obj, progress, flag) {
		var inp = obj.parents('ul').find('input');
		inp.each(function(index, item) {
			if($(this).prop('checked')) {
				flag = true;
			}
		});
		if(!flag) {
			num += 10;
			progress.animate({
				'width': num + '%'
			})
		}
	}
	$('label').click(function() {
		progress_h($(this), $(".progress"), false);
		$(this).parents('ul').prev().css('color','#12B7F5');
	});
	
//	选填
	$("#que_advice").val('');
	$("#que_advice").textareaAutoHeight();
	
	$(".bxg-submit").click(function(){
		
		$(".question_list ul").each(function(item,index){
			var flag = 0;
			$(this).find('input').each(function(item,index){
				if($(this).prop('checked')){
					flag = 1;
				}
			})
			
			if(!flag){
				$(this).prev().css('color','red');
			}
		});
		function getContent(inp){
			var cont = '';
			inp.each(function(index,item){
				if($(this).prop('checked')){
					if(cont == ''){
						cont+=$(this).next().text();
					}else{
						cont+=','+$(this).next().text();
					}
					
				}
			})
			return cont;
		}
		if(num == 100){
			var age = getContent($("[name='age']"));
			var sex = getContent($("[name='sex']"));
			var shopping = getContent($("[name='shopping']"));
			var rebuy = getContent($("[name='rebuy']"));
			var likecolor = getContent($("[name='likecolor']"));
			var attention = getContent($("[name='attention']"));
			var shoppingtime = getContent($("[name='shoppingtime']"));
			var goodsprice = getContent($("[name='goodsprice']"));
			var likeInfo = getContent($("[name='likeInfo']"));
			var nolike = getContent($("[name='nolike']"));
			var advice = $("[name='advice']").val();
			console.log(age+'---'+sex+'---'+shopping+'---'+rebuy+'---'+likecolor+'---'+attention+'---'+shoppingtime+'---'+goodsprice+'---'+likeInfo+'---'+nolike+'---'+advice);
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
		
	});
});