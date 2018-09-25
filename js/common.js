$(document).ready(function() {

  /* scroll Up */
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $('.scrollup').fadeIn();
      } else {
          $('.scrollup').fadeOut();
      }
  });
  $('.scrollup').click(function () {
      $("html, body").animate({
          scrollTop: 0
      }, 1500, "easeInOutCubic");
      return false;
  });

  /* slow scroll */
  $(".index .top-menu li a, .index .footer__menu li a").on("click", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500, "easeInOutCubic");
  });

  /* sandwich menu */
  var menu = $('.navigation');
  var menuItem = $('.top-menu li a');

  $(menuItem).click(function() {
    $(menuItem).removeClass("active");
    $(this).addClass("active");
  });

  $(".toggle_menu").click(function() {
    $(".sandwich").toggleClass("active");
  });

  $(".toggle_menu").click(function() {
    if ($(menu).is(":visible")) {
      $(menu).fadeOut(600);
      $(menuItem).css('opacity','0');
      $(".header-navigation").css("z-index", "2");
    } else {
      $(menu).fadeIn(600);
      $(menuItem).css('opacity','1');
      $(menu).css("display","flex");
      $(".header-navigation").css("z-index", "2");
    };
  });
  
  $(menuItem).click(function() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      $(menu).fadeOut(600);
      $(menuItem).css('opacity','0');
      $(".sandwich").toggleClass("active");
    }
  });
  
  $(window).resize(function(){
    if(window.matchMedia("(min-width: 769px)").matches && menu.is(":hidden")){
      menu.removeAttr('style');
      menuItem.removeAttr('style');
    }
  });

});