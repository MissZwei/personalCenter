$(function() {
	var tabs = new Swiper('.order-type-content', {
		slidesPerView: 5,
		spaceBetween: 3,
		resistanceRatio: 0
	});
	var order = new Swiper('.order-content', {
		autoHeight: true,
		slidesPerView: 1,
		resistanceRatio: 0,
		onSlideChangeStart: function() {
			$(".bxg-tabs a.tabActive").removeClass('tabActive');
			$(".bxg-tabs a").eq(order.activeIndex).addClass('tabActive');
		}
	});
	$(".order-type span").click(function() {
		$(this).addClass('typeActive').siblings('span').removeClass('typeActive');
	});
	$(".bxg-tabs a").click(function(e) {
		e.preventDefault();
		order.slideTo($(this).parent().index());
	});
	$(".bxg-list").click(function() {
		$(".head-list-content").toggle();
	});
	$(".bxg-lazy img").lazyload();
	//付款倒计时
	time();

	function time() {
		$(".order-dtime").each(function() {
			dtime($(this), $(this).text());
		});
		setTimeout(function() {
			time();
		}, 1000);
	}

	function dtime(obj, time) {
		var hour = Number(time.split(':')[0]);
		var min = Number(time.split(':')[1]);
		if(min) {
			min--;
			var str = (hour < 10 ? ('0' + hour) : hour) + ':' + (min < 10 ? ('0' + min) : min);
			obj.text(str);
		} else {
			if(hour) {
				hour--;
			} else {
				obj.parents('.order-list').remove();
			}
			min = 59;
			var str = hour < 10 ? ('0' + hour) : hour + ':' + min;
			obj.text(str);
		}

	}
});