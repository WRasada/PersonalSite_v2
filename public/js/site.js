$('.header h1').fadeIn(1400, function(){

});
$('.header hr').fadeIn(1100, function(){
  $('.header hr').animate({
    width: '25%'
  }, 1100, function(){
    $('.header h4').fadeIn(900, function(){
      $('.landingQuote').fadeIn(1300);
    });
  });
});

$('.navbar-nav li').mouseenter(function(){
	if($(this).hasClass('active')){
  } else {
    $(this).addClass('active');
    $(this).mouseleave(function(){
      $(this).removeClass('active');
    });
  }
});
