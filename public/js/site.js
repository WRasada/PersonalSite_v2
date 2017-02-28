function landingMsg(){
  $('.header h1').fadeIn(1100, function(){
    $('.header h4, .header hr').fadeIn(900);
    $('.header hr').animate({
      width: '26%'
    }, 1100);
  });
};

$('.navbar-nav li').mouseenter(function(){
	if($(this).hasClass('active')){
  } else {
    $(this).addClass('active');
    $(this).mouseleave(function(){
      $(this).removeClass('active');
    });
  }
});


setTimeout(landingMsg, 1500);
