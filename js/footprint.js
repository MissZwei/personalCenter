$(function(){
	$(".bxg-delete").click(function(){
		$(".bxg-toggle").show();
		$(".bxg-normal").hide();
		$(".bxg-checkbox").show();
		$(".bxg-footprint>div").css('text-indent','30px');
	});
	$(".cancelSelect").click(function(){
		$(".bxg-toggle").hide();
		$(".bxg-normal").show();
		$(".bxg-checkbox").hide();
		$(".bxg-footprint>div").css('text-indent','15px');
	});
});
