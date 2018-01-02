$(function(){
	$(".bxg-list").click(function(){
		$(".head-list-content").toggle();
	});
//	选择性别
	var gender = $(".user-gender label");
	gender.click(function(){
		$(this).find("span").addClass("activeSel");
		$(this).find(".sel-icon").show();
		$(this).siblings('label').find("span").removeClass("activeSel");
		$(this).siblings('label').find(".sel-icon").hide();
	});
	
//  选择出生年代
	var year = $(".user-year label");
	year.click(function(){
		$(this).find("span").addClass("activeSel");
		$(this).find(".sel-icon").show();
		
		$(this).siblings('label').find("span").removeClass("activeSel");
		$(this).parent().siblings('div').find("span").removeClass("activeSel");
		$(this).siblings('label').find(".sel-icon").hide();
		$(this).parent().siblings('div').find(".sel-icon").hide();
	});

//  点击下一步提交
	$(".bxg-submit").click(function(){
		//0代表先生   1代表女士
		var sex = $("[name='gender']:checked").val();
		var year = $("[name='year']:checked").val();
		var tip = $(".bxg-alert-tip");
		
		if(sex == undefined){
			tip.text("请选择性别").show();
			setTimeout(function(){
				tip.fadeOut();
			},2000);
		}else if(year == undefined){
			tip.text("请选择出生年代").show();
			setTimeout(function(){
				tip.fadeOut();
			},2000);
		}else{
			console.log(sex+'----'+year);
			window.location.href = 'interest_help.html';
//			$.ajax({
//				type:"post",
//				data:{sex:sex,year:year},
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
