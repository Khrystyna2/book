$(document).ready(function() {

    $('.language>li').on('click', function() {
      $(this).children('ul').toggleClass('box-shadow').slideToggle();
      $(this).children('svg').toggleClass('rotate');
      $('.language').toggleClass('box-shadow')
    });

    $('.menu-dropdown').on('click', function() {
      $(this).children('ul').toggleClass('box-shadow').slideToggle();
      $(this).children('svg').toggleClass('rotate');
      $('.menu-dropdown').toggleClass('box-shadow')
    });

    $('.sayings__list>li>ol>li').hover(function() {
      $(this).toggleClass('open-comment');
    });

    //fixed section search
    function fixedSectionSearch () {
      $(window).scroll(function(){
        let heightHeader = $('.header').height();
        let heightSectionSearch = $('#search').outerHeight(true);
        if($(window).scrollTop() >= heightHeader) {
          $('#search').addClass('sticky');
          $('#sayings').css('padding-top', heightSectionSearch);
        } else {
          $('#search').removeClass('sticky');
          $('#sayings').css('padding-top', "0");
        }
      });
    }

    fixedSectionSearch();
    
    $(window).resize(function () {
      if ($(window).width() > 767) {
        fixedSectionSearch();
      }
      else if ($(window).width() <= 767) {
        $(window).scroll(function(){
            $('#search').removeClass('sticky');
            $('#sayings').css('padding-top', "0");
        });
      }
    });

    
    $('.menu-btn').on('click', function() {
      $(this).toggleClass('menu-btn_active');
      $('.menu').slideToggle();
    });
  
});
