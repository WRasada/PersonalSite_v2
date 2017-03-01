$('.landingHeader h1').fadeIn(1400, function(){

});
$('.landingHeader hr').fadeIn(1100, function(){
  $('.landingHeader hr').animate({
    width: '25%'
  }, 1100, function(){
    $('.landingHeader h4').fadeIn(900, function(){
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
