$(document).ready(function(){

    // 960px 이상일때만 스와이퍼설정(함수에 담에서)
    media();
    function media(){
        const ww = $(window).width();
        if(ww >= 960){
            //swiper
            var swiper = new Swiper(".mySwiper", {
                effect : "fade",
                loop:true,
                autoplay:{
                    delay: 1500,
                    disableOnInteraction: false,
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
            });
        }else{

        }
    }

    //서브메뉴버튼
    $('.menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.menu-btn span:nth-child(1),.menu-btn span:nth-child(2)').toggleClass('active');

        //토글클래스가 같은 전제(이벤트)에 두개이상 사용되는 경우 엇갈릴 수 있는 가능성이 크다. 때문에 같은 이벤트에 토글 두개이상 사용하지 않음
        if($('.menu-btn').hasClass('active')){
            $('.menu-bar-box').addClass('active');
        }else{
            $('.menu-bar-box').removeClass('active');
        }

    });

    //헤더스크롤이벤트
    // 200px 이상에서 .header-area,.header-logo active추가 .menu-btn 너비30 높이20 .menu-btn span 검정으로 / 그밖에 경우  .header-area,.header-logo active제거 너비40 높이25 .menu-btn span 흰색으로

    $(window).scroll(function(){
        const sct = $(window).scrollTop();
        console.log(sct);

        if(sct >= 200){
            $('.header-area,.header-logo').addClass('active');
            $('.menu-btn,.menu-btn span').addClass('on');
        }else{
            $('.header-area,.header-logo').removeClass('active');
            $('.menu-btn,.menu-btn span').removeClass('on');
        }
    });
  
});