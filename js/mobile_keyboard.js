$(function() {
	var passwords = $('.pass-inp input');
	var num, index = 0;
	var keyboard = '\
			<div class="keyboard">\
			<ul id="keyboard">\
				<li class="symbol"><span class="off">1</span></li>\
				<li class="symbol"><span class="off">2</span></li>\
				<li class="symbol"><span class="off">3</span></li>\
				<li class="symbol"><span class="off">4</span></li>\
				<li class="symbol"><span class="off">5</span></li>\
				<li class="symbol"><span class="off">6</span></li>\
				<li class="symbol"><span class="off">7</span></li>\
				<li class="symbol"><span class="off">8</span></li>\
				<li class="symbol"><span class="off">9</span></li>\
				<li class="key-delete">删除</li>\
				<li class="symbol"><span class="off">0</span></li>\
				<li class="key-ok">完成</li>\
			</ul>\
		</div>\
	    ';
	$(".bxg-keyboard").html(keyboard);
	$(".pass-inp").click(function() {
		$(".bxg-keyboard").show();
	});
	$('#keyboard li').click(function() {
		//如果是取消	
		if($(this).hasClass('key-ok')) {
			$(".bxg-keyboard").hide();
			return false;
		}
		//如果是删除
		if($(this).hasClass('key-delete')) {
			$(passwords.eq([--index % 6])).val('');
			if($(passwords.eq(0)).val() == '') {
				index = 0;
			}
			return false;
		}

		if($(this).hasClass('symbol')) {
			num = $(this).text();
			$(passwords.eq([index++ % 6])).val(num);

			if($(passwords.eq(5)).val() != '') {
				index = 0;
				var pass = '';
				passwords.each(function() {
					pass += $(this).val();
				});
//			    $.ajax({
//			        type:"post",
//			        data:{pass:pass},
//			        url:"",
//			        success:function(){
//			        			
//			        },
//			        error:function(){
//			        				
//			        }
//			    });
			}

		}

	});
});