(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });


    // PARALLAX EFFECT
    $.stellar({
      horizontalScrolling: false,
    }); 


    // ABOUT SLIDER
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items: 1,
      loop: true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    });


    // SMOOTHSCROLL
    $(function() {
      $('.custom-navbar a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  


    // CARD SLIDER
    $(".prev").on('click', function(event) {
      event.preventDefault();
      prevSlide();
    });
  
    $(".next").on('click', function(event) {
      event.preventDefault();
      nextSlide();
    });
  
    if ($(".item").length <= 1) {
      $(".next").addClass('hide-nav');
    }
  
    $(".prev").addClass('hide-nav');
  
    function nextSlide() {
      var atual = $(".cd-slider").find('.current'),
        next = atual.next();
  
      next.addClass('current').removeClass('prev_slide').siblings().removeClass('current');
      next.prevAll().addClass('prev_slide');
  
      if (next.index() > 0) {
        $(".prev").removeClass('hide-nav');
      }
      if (next.index() == $(".item").last().index()) {
        $(".next").addClass('hide-nav');
      }
    }
  
    function prevSlide() {
      var atual = $(".cd-slider").find('.current'),
        prev = atual.prev();
  
      prev.addClass('current').removeClass('prev_slide').siblings().removeClass('current');
  
      if (prev.index() !== $(".item").last().index()) {
        $(".next").removeClass('hide-nav');
      } 
      if (prev.index() == 0) {
        $(".prev").addClass('hide-nav');
      }
    }

})(jQuery);
