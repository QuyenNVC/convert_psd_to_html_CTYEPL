$(function(){
	$(".to-top").click(function(event) {
		$('html').animate({scrollTop: 0}, 1000);
		return false;
	});

	$("a.navbar-brand").click(function(event) {
		$('html').animate({scrollTop: 0},1000);
		return false;
	});

	$(window).scroll(function(event) {
		$(this).scrollTop()==0 ? $('.to-top').fadeOut() : $('.to-top').fadeIn();
	});

	var delta = 106;
	var previous_hash = "";
	$(".nav-item > a.nav-link").click(function(event) {
		var hash = this.hash;
		if (previous_hash != hash) { 
			previous_hash = hash;
			postion = $(hash).offset().top - delta;
			$("html").animate({
			scrollTop: postion},
			1000);
		}
	});
})