$('.positions ul').cycle({
	fx: 'scrollDown',
	timeout: 1600,
	speed: 525,
	easing: 'easeInOutBack',
	random: true
});

$('a.click').click(function(){
	if($(this).hasClass('more')) {
		$('#more').slideDown('1500').animate(
		    { opacity: 1 },
		    { queue: false, duration: '1500' }
		);
		$(this).text('hide').addClass('less').removeClass('more').attr('href', '#bottom');
	} else {
		$('#more').slideUp('1500').animate(
		    { opacity: 0 },
		    { queue: false, duration: '1500' }
		);
		$(this).text('find out more').addClass('more').removeClass('less').attr('href', '#top');
	}
	
});


$('a').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var $target = $(this.hash);
		$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
		if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html,body').animate({scrollTop: targetOffset}, 250);
	 	return false;
		}
	}
});