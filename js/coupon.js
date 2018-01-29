$(function() {
	var tabSwiper = new Swiper('.swiper-container', {
		autoHeight: true,
		speed: 500,
		resistanceRatio: 0,
		onSlideChangeStart: function(){
			$(".tabs a.active").removeClass('active');
			$(".tabs a").eq(tabSwiper.activeIndex).addClass('active');
		}
	})
	$(".tabs a").on('touchstart mousedown', function(e) {
		e.preventDefault();
		$(".tabs .active").removeClass('active');
		$(this).addClass('active');
		tabSwiper.slideTo($(this).index());
	})
	$(".tabs a").click(function(e) {
		e.preventDefault();
		tabSwiper.slideTo($(this).index());
	})
});