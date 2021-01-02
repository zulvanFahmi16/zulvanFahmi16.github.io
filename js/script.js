// event pada saat link di klik
$('.page-scroll').on('click', function(e){
	
	// ambil isi href (tujuannya (about/portofolio/contact/home))
	var href = $(this).attr('href');
	// tangkap elemen ybs
	var elemenHref = $(href);

	// pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenHref.offset().top - 50
	}, 300, 'linear');
	e.preventDefault();
});


// parallax : jumbotron, portoflio
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// jumbotron

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/20 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/1.7 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.1 +'%)'
	});

	// portofolio
	if (wScroll > $('.portofolio').offset().top - 285) {
		$('.portofolio .thumbnail').each(function(i) {
			setTimeout(function(){
				$('.portofolio .thumbnail').eq(i).addClass('muncul');
			},100 * (i+1));
		});
	}
});

// parallax: about
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});