function landingMsg(){
  $('.header h1').fadeIn(1400, function(){
    $('.header h4, .header hr').fadeIn(1200);
    $('.header hr').animate({
      width: '26%'
    }, 1200);
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


setTimeout(landingMsg, 2000);
