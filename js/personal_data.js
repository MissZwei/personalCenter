$(function() {
	$(".bxg-list").click(function(){
		$(".head-list-content").toggle();
	});
	//阻止事件冒泡
	function stopBubble(e) {
		if(e && e.stopPropagation) {
			e.stopPropagation();
		} else {
			window.event.cancelBubble = true;
		}
	}

	$(".bxg-shade").click(function(e) {
		stopBubble(e);
		$(this).fadeOut();
		$('input').val('');
	});
	$(".edit-nickname>div,.edit-sex>div,.edit-email>div").click(function(e) {
		stopBubble(e);
	});

	//我的昵称
	$(".nickname-edit").click(function(e) {
		e.preventDefault();
		$(".edit-nickname").show();
	});
	$("input[name='nickname']").focus(function() {
		$(".name-require").text("昵称由数字、字母、符号组成").removeClass('active-tip');
	});
	//正则判断
	$(".edit-nickname .bxg-button").click(function() {
		var txt = $(this).parent().find('input').val();
		if($.trim(txt) == '') {
			$(".name-require").text("请输入修改的昵称").addClass('active-tip');
		} else {
			$(".nickname-edit .my-nickname").text(txt);
			$(".bxg-shade").fadeOut();
			$(this).parent().find('input').val('');

			//		$.ajax({
			//			type:'post',
			//			data:{},
			//			url:'',
			//			success:function(){
			//			
			//			},
			//			error:function(){
			//			}
			//		})
		}

	});

	//性别
	$(".sex-edit").click(function(e) {
		e.preventDefault();
		$(".edit-sex").show();
	});
	
	$(".edit-sex li").click(function() {
		$(this).find('label').addClass('activeLabel');
		$(this).siblings('li').find('label').removeClass('activeLabel');
		$(this).find('input').prop('checked', true);
		var sex = $(this).find('span').text();

		$('.my-sex').text(sex);
		$(".bxg-shade").fadeOut();
		$.ajax({
			type: "post",
			data: { sex: sex },
			url: "",
			success: function() {

			},
			error: function() {

			}
		});
	});

	//我的生日
	var currYear = new Date().getFullYear();
	$('#birthday').mobiscroll().date({
		theme: 'android-ics light dw-modal dw-webkit',
		lang: 'zh',
		display: 'modal',
		dateFormat: '选择日期', // 日期格式
		dateOrder: 'yymmdd', //面板中日期排列格式
		setText: '确定', //确认按钮
		cancelText: '取消', //取消按钮
		defaultValue: new Date(new Date().setFullYear(currYear - 20)),
		maxDate: new Date(),
		minDate: new Date(new Date().setFullYear(currYear - 120)),
		onSelect: function(val, inst) {
			var selDate = inst.values[0] + '-' + (Number(inst.values[1])+1 < 10 ? '0' + (Number(inst.values[1])+1) : Number(inst.values[1])+1) + '-' + (inst.values[2] < 10 ? '0' + inst.values[2] : inst.values[2]);
			$(".my-date").text(selDate);
//			$.ajax({
//				type:"post",
//				data:{date:selDate},
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
	$('.date-edit').click(function() {
		$('#birthday').mobiscroll('show');
		return false;
	});
	
	//我的邮箱
	//	验证邮箱格式
	function checkEmail(email){
		var exg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		if(email.match(exg)){
			return true;
		}else{
			return false;
		}
	}
	$("input[name='email']").focus(function() {
		$(this).next().text('');
	});
	$(".email-edit").click(function(e) {
		e.preventDefault();
		$(".edit-email").show();
	});
	$(".email-cancel").click(function(){
		$(".bxg-shade").fadeOut();
		$(this).parent().parent().find('input').val('');
	});
	$(".email-ok").click(function(){
		var email = $(this).parent().parent().find('input').val();
		var tip = $(".email-ok").parent().prev();
		if($.trim(email)==''){
			tip.text('请输入邮箱名称');
		}else if(!checkEmail(email)){
			tip.text('邮箱格式不正确');
		}else{
			$(".my-email").text(email);
			$(".bxg-shade").fadeOut();
			$(this).parent().parent().find('input').val('');
//			$.ajax({
//				type:"post",
//				data:{},
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
	
//	我的二维码
	$(".qrcode-edit").click(function(e){
		e.preventDefault();
		$(".edit-qrcode").show();
	})
});