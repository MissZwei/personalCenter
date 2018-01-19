$(function() {
	$(".bxg-list").click(function(){
		$(".head-list-content").toggle();
	});
	$(".all-withdraw").click(function() {
		var price = parseFloat($('[name="mybalance"]').val());
		if(price === 0) {
			$(".bxg-alert-tip").html("余额不足").show();
			setTimeout(function() {
				$(".bxg-alert-tip").fadeOut();
			}, 2000);
		} else {
			$('[name="withdrawMoney"]').val(price);
		}

	});
	$(".bxg-submit").click(function() {
		window.location.href = "withdraw_progress.html";
	});
})