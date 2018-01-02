$(function() {
	$(".bxg-list").click(function(){
		$(".head-list-content").toggle();
	});
	
	var inp = $('input[name="money"]');
	var del = '.bxg-inp-delete';
	var alert = $(".bxg-alert-tip");
	var remark = $(".bxg-remark"); //备注div
	var remarkInp = $("textarea[name='remark']");
	var affirm = $(".bxg-affirm");
	var alert = $(".bxg-alert-tip");

	function deleteVal(dele, value) {
		dele.show();
		dele.bind('click', function() {
			value.val('');
			dele.hide();
		});
	}
	//输入金额
	inpChange(inp);
	//备注留言
	inpChange(remarkInp);

	function inpChange(inpObj) {
		inpObj.bind('input propertychange', function() {
			var content = $(this).val();
			if(content != '') {
				deleteVal($(this).parent().find(del), $(this));
			} else {
				$(this).parent().find(del).hide();
			}
		});
	}

	//点击确认转账
	affirm.on('click', function() {
		var money = inp.val();
		var text = remarkInp.val();
		if(money == '') {
			alert.html('请输入转账金额').fadeIn();
			setTimeout(function() {
				alert.fadeOut();
			}, 2000);
		} else {
			$.ajax({
				type: "post",
				data: {},
				url: "",
				success: function(data) {
					if("成功") {
						window.location.href = "";
					} else {

					}
				},
				error: function(err) {
					console.log(err);
				}
			});
		}

	});
});