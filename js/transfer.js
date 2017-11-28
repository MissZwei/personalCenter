$(function() {
	var inp = $('input[name="account"]');
	var del = $('.bxg-inp-delete');
	var alert = $(".bxg-alert-tip");
	inp.bind('input propertychange', function() {
		var inpContent = $(this).val();
		if(inpContent != '') {
			del.show();
		} else {
			del.hide();
		}
	});
	del.bind('click', function() {
		inp.val('');
		del.hide();
	});

	$(".bxg-next").bind('click', function() {
		var inpContent = inp.val();
		if(inpContent == '') {
			alert.html('请输入对方账户').fadeIn();
			setTimeout(function() {
				alert.fadeOut();
			}, 2000);
		} else {
			$.ajax({
				type: "post",
				data: { account: inpContent },
				url: "",
				success: function(data) {
					if("成功") {
						window.location.href = "";
					} else if("账户不存在") {
						alert.html('账户不存在').fadeIn();
						setTimeout(function() {
							alert.fadeOut();
						}, 2000);
					}
				},
				error: function(err) {
					console.log("网络不稳定！");
				}
			});
		}
	});
});