$(document).ready(function(){

  media();
  function media(){
      var windowWidth = $( window ).width();
      if(windowWidth >= 1200) {

    //헤더 스크롤 이벤트
    $(window).scroll(function(){
        if($(window).scrollTop() >= 200){
            $('.header-area').addClass('active');
            $('.header-logo').addClass('active');
            $('.menu-btn').css({width:30,height:20});
            $('.menu-btn span').css({'background-color':'#000'});
        }else{
            $('.header-area').removeClass('active');
            $('.header-logo').removeClass('active');
            $('.menu-btn').css({width:40,height:25});
            $('.menu-btn span').css({'background-color':'#fff'});

        }
    });


    // 메뉴버튼 누르면 햄버거버튼 돌아가게 만들고 배경색처리
    $('.menu-btn').click(function(){
        $('.menu-btn').toggleClass('active');
        $('.menu-btn span:nth-child(1)').toggleClass('active');
        $('.menu-btn span:nth-child(2)').toggleClass('active');

        if($('.menu-btn').hasClass('active')){
            $('.menu-bar-box').css('opacity','1');
            $('.menu-bar-box').addClass('active');
        }else{
            $('.menu-bar-box').css('opacity','0');
            $('.menu-bar-box').removeClass('active');

        }
    });


    //스와이퍼
      var swiper = new Swiper(".mySwiper", {
        centeredSlides: true,
        effect: "fade",
        //이거설정하면 fade아웃됨
        loop:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    }else{

        //헤더 스크롤 이벤트
        $(window).scroll(function(){
          if($(window).scrollTop() >= 200){
              $('.header-area').addClass('active');
              $('.header-logo').addClass('active');
              $('.menu-btn').css({width:30,height:20});
              $('.menu-btn span').css({'background-color':'#000'});
          }else{
              $('.header-area').removeClass('active');
              $('.header-logo').removeClass('active');
              $('.menu-btn').css({width:40,height:25});
              $('.menu-btn span').css({'background-color':'#fff'});

          }
      });



      // 메뉴버튼 누르면 햄버거버튼 돌아가게 만들고 배경색처리
      $('.menu-btn').click(function(){
        $('.menu-btn').toggleClass('active');
        $('.menu-btn span:nth-child(1)').toggleClass('active');
        $('.menu-btn span:nth-child(2)').toggleClass('active');

        if($('.menu-btn').hasClass('active')){
            $('.menu-bar-box').css('opacity','1');
            $('.menu-bar-box').addClass('active');
            $('body').css({'overflow-y':'hidden'});
        }else{
            $('.menu-bar-box').css('opacity','0');
            $('.menu-bar-box').removeClass('active');
            $('body').css({'overflow-y':'hidden'});

        }
    });


    }

  }




});//end