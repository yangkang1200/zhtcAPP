$(function(){
	$(".login_ym input[type=text]").focusin(function(){
		$(this).parent().css('border','solid 1px #29b1ef')
		$(this).siblings().css('color',"#000")
	})
	$(".login_ym input[type=text]").focusout(function(){
		$(this).parent().css('border','solid 1px #ccc')
		$(this).siblings().css('color',"#777")
	})
	$(".login_ym input[type=password]").focusin(function(){
		$(this).parent().css('border','solid 1px #29b1ef')
		$(this).siblings().css('color',"#000")
	})
	$(".login_ym input[type=password]").focusout(function(){
		$(this).parent().css('border','solid 1px #ccc')
		$(this).siblings().css('color',"#777")
	})
})
$(function(){
	$('.hqyz').click(function(){
		$(this).css('background','#ccc').text('验证码已发送')
	})
})
$(function(){
	$('.gd li').click(function(){
		var j = $(this).index()
		$(this).addClass('blueColor').siblings().removeClass('blueColor')
		$(".cwdz ul").eq(j).addClass('cwxs').siblings().removeClass('cwxs')
	})
})
$(function(){
	$('.gx_cz li').click(function(){
		var j = $(this).index()
		$(this).addClass('blueColor').siblings().removeClass('blueColor')
		$(".cwdz ul").eq(j).addClass('cwxs').siblings().removeClass('cwxs')
	})
})
$(function(){
	$('.yycw_con li').click(function(){
			location.href="yycg.html"
	})
})
$(function(){
	$('.yycg_con small span').click(function(){
			location.href="find-parking.html"
	})
})
$(function(){
	$('.tcc_button').click(function(){
			location.href="yycg.html"
	})
})
$(function(){
	$('.tz li:nth-child(1)').click(function(){
			location.href="share_person.html"
	})
	$('.tz li:nth-child(2)').click(function(){
			location.href="rent_person.html"
	})
})
$(function(){
	$('.fb_qh li').click(function(){
		var l = $(this).index()
	$(this).addClass('blueColor').siblings().removeClass('blueColor')
	$('.fb_con section').eq(l).addClass('bagxs').siblings().removeClass('bagxs')
 })
})
$(function(){
	$('.dz_dh span:nth-child(1)').click(function(){
			location.href="share_person.html"
	})
	$('.dz_dh span:nth-child(2)').click(function(){
			location.href="find-parking.html"
	})
})
$(function(){
	$('.login_dl').click(function(){
			location.href="login.html"
	})
})
$(function(){
	$('.login_ym p').click(function(){
			location.href="register.html"
	})
})
$(function(){
	$('.zs').click(function(){
			location.href="fb_cwy.html"
	})
})
$(function(){
	$('.tb_pic img').click(function(){
			location.href="user_detail.html"
	})
})
$(function(){
	$('.gr').click(function(){
			location.href="user_detail.html"
	})
})
$(function(){
	$('.us').click(function(){
			location.href="user.html"
	})
})
$(function(){
	$('.ds').click(function(){
			location.href="parking-rent.html"
	})
})
$(function(){
	$(".xfjl_sec li input[type=radio]").click(function(){
		var v =$(this).index()
		$(this).next('i').addClass('bagxs').parent().siblings().find('i').removeClass('bagxs')
	})
})