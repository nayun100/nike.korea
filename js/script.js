$(document).ready(function(){
    // banner-1 이미지 자동 넘김
    // $('.img-btn').click(function(){
    //     $('.img-wrap').animate({
    //         left: -1824
    //     },function(){
    //         $('.img-wrap').css({
    //             left: 0
    //         }).find('img').first().appendTo('.img-wrap');
    //     });
    // });

    // function time(){
    //     auto = setInterval(function(){
    //         $('.img-btn').trigger('click');
    //     },3000);
    // }
    // time();


    const ww = $(window).width();

    if(ww > 375){
      var swiper = new swiper(".firstSwiper", {
          slidesPerView: 1,
          spaceBetween: 0,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
          
          },
          autoplay:{
              delay:1500
          }
      });
    }


    // const ww2 = $(window).width();

    // if(ww2 > 375){
    //   var swiper = new Swiper(".mySwiper", {
    //       slidesPerView: 3,
    //       spaceBetween: 15,
    //       slidesPerGroup: 1,
    //       loop: true,
    //       loopFillGroupWithBlank: true,
    //       pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //       },
    //       navigation: {
    //         nextEl: ".swiper-button-next",
          
    //       },
    //       autoplay:{
    //         delay:2000
    //       }
    //   });
    // }

    var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 15,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
            
            }
        });
    const ww2 = $(window).width();
    if(ww2 > 375){
      var swiper = new Swiper(".mySwiper", {
          autoplay:{
            delay:2000
          }
      });
    }



   let btn = $('.sec-2-logo');
//    $(window).scroll(function(){
//         if($(window).scrollTop() > 300){
//             btn.fadeIn();
//         }else{
//             btn.fadeOut();
//         }
//    });
   btn.on('click',function(){
    $('html,body').animate({
        scrollTop:0
    },1000);
    });
    

  



});
