$(document).on('ready page:load', function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });

  $(window).on('scroll',function() {
    var scrolltop = $(this).scrollTop();
    if(scrolltop <= 55) {
      $('.navigation').fadeIn(700);
    }
     
    else if(scrolltop >= 50) {
      $('.navigation').fadeOut(700);
    }
  });
});


$(document).on('ready page:load', function(){
  $('.parallax').parallax();
});