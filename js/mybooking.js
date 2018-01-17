$(function() {
	var booking = new Swiper('.booking-content', {
		autoHeight: true,
		slidesPerView: 1,
		resistanceRatio: 0,
		onSlideChangeStart: function() {
			$(".bxg-tabs a.bxg-active").removeClass('bxg-active');
			$(".bxg-tabs a").eq(booking.activeIndex).addClass('bxg-active');
		}
	});
	$(".bxg-tabs a").click(function(e) {
		e.preventDefault();
		booking.slideTo($(this).index());
	});
	var bookingBanner = new Swiper('.booking-banner', {
		autoHeight: true,
		slidesPerView: 1,
		resistanceRatio: 0
	});

})