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
    // let heightSectionSearch = $('.search').outerHeight(true);
    // $('<div class="clone-search"></div>').insertBefore('.search').css('height', heightSectionSearch).hide();
    $(window).scroll(function(){
      let heightHeader = $('.header').height();
      let heightSectionSearch = $('#search').outerHeight(true);
      if($(window).scrollTop() >= heightHeader) {
        $('#search').addClass('sticky');
        // $('.clone-search').show();
        $('#sayings').css('padding-top', heightSectionSearch);
      } else {
        $('#search').removeClass('sticky');
        // $('.clone-search').hide();
        $('#sayings').css('padding-top', "0");

      }
    });

      $(window).scroll(function(){
        let heightHeader = $('.header').height();
        let heightSectionSearch = $('#search').outerHeight(true);
        if($(window).scrollTop() >= heightHeader) {
          $('#search').addClass('sticky');
          // $('.clone-search').show();
          $('#sayings').css('padding-top', heightSectionSearch);
        } else {
          $('#search').removeClass('sticky');
          // $('.clone-search').hide();
          $('#sayings').css('padding-top', "0");
  
        }
      });


    $('.menu-btn').on('click', function() {
      $(this).toggleClass('menu-btn_active');
      $('.menu').slideToggle();
    });
  
});
