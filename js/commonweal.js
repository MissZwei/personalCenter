$(function(){
	var swiper = new Swiper('.new-project-list', {
	 	resistanceRatio : 0,
      	slidesPerView: 2.5,
      	spaceBetween:5,
      	freeMode: true
    });
	$(".search-btn").click(function(){
		var txt = $("input[name='search_txt'").val();
		if($.trim(txt) == ''){
			$(".bxg-alert-tip").text("请输入搜索内容").show();
			setTimeout(function(){
				$(".bxg-alert-tip").fadeOut();
			},2000);
		}else{
			$("input[name='search_txt'").val('');
//			$.ajax({
//				type:"post",
//				data:{txt:txt},
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
