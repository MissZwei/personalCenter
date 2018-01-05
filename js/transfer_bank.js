$(function(){
	$(".bxg-list").click(function(){
		$(".head-list-content").toggle();
	});
	$("[name='cardNum']").on('keyup',function(){
		var bin = $(this).val();
		//查询是哪个银行接口
//		$.ajax({
//			type:"post",
//			data:{},
//			url:'',
//			success:function(data){
//				console.log(data);
//				$("[name='bank']").val();
//			}
//		});
	});
	$("[name='money']").on('keyup',function(){
		var value=$(this).val();
		if(value !=''&& value.substr(0,1) == '.'){  
		 	$(this).val('0'+value);
       	}else if(!(/^0*(0\.|[1-9])/).test(value)){
        	$(this).val('');
        }else if(value.indexOf(".")< 0 && value !=""){
        	$(this).val(parseFloat(value));
        }else{
			$(this).val($(this).val().replace(".","$#$").replace(/\./g,"").replace("$#$","."));
			$(this).val($(this).val().replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'));
        }
	});
	
	$(".bxg-submit").click(function(){
		var name = $("[name='name']").val();
		var cardNum = $("[name='cardNum']").val();
		var bank = $("[name='bank']").val();
		var money = $("[name='money']").val();
		var word = $("[name='word']").val();
		if(!((/^\d{19}$/g).test(cardNum) && bank != '')){
			$(".bxg-alert-tip").html('卡号输入错误').show();
			setTimeout(function(){
				$(".bxg-alert-tip").fadeOut();
			},2000)
		}else if(money==''){
			$(".bxg-alert-tip").html('输入转账金额').show();
			setTimeout(function(){
				$(".bxg-alert-tip").fadeOut();
			},2000)
		}else{
			console.log(name+'---'+cardNum+'---'+bank+'---'+money+'---'+word);
//			$.ajax({
//				type:"post",
//				data:{},
//				url:"",
//				success:function(data){
//					
//				},
//				error:function(data){
//					
//				}
//			});
		}
	});
})
