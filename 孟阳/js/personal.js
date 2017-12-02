$(function(){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
	});
	$(".bxg-lazy img").lazyload();
	$.ajax({
		type:"post",
		data:{},
		url:"",
		async:true,
		success:function(data){
			
		},
		error:function(data){
			
		}
	});
});
