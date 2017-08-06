if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..
} else {
  $(window).on('scroll', function(e) {
    displayAnimation();
  })

  $(document).ready(function() {
    displayAnimation();
  })
}


var displayAnimation = function() {
  if($(window).scrollTop() <= 100 || $(window).scrollTop() >= ($(document).height() - 1000) ) {
    $('body').addClass('has-animation')
  } else {
    $('body').removeClass('has-animation')
  }
}
;
