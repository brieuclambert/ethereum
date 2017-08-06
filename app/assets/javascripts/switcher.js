
$(document).ready(function(){
  setInterval(function() {
    var el = $('.header-beta-switcher-item.is-active');
    var nextEl = el.next();
    if (nextEl.length == 0) {
      $('.header-beta-switcher-item.is-active').addClass('is-fading-out').bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
        $('.is-fading-out').removeClass('is-fading-out')
        $(this).removeClass('is-active')
        $('.header-beta-switcher-item:first-child').addClass('is-active')
        $(this).unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd')

      });
    } else {
        $('.header-beta-switcher-item.is-active').addClass('is-fading-out').bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
          $(this).removeClass('is-active').next().addClass('is-active')
          $(this).unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd')
        })
    }
  }, 3000)
})
;
