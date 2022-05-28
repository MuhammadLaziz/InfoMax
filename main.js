// $(document).ready(function(){
    // $('.header__slider__wrapper').slick({
    //     dots: true,
    //     // rtl: true,
    //     infinite: true,
    //     speed: 200,
    //     fade: true,
    //     cssEase: 'linear',
    //     arrows:false
    // });

    const navbar = document.querySelector('.header-navigation')
    window.addEventListener('scroll', () => {
        if(window.scrollY > navbar.offsetHeight) {
            // console.log('hi');
            navbar.classList.add('active')
        }else {
            navbar.classList.remove('active')
        }
    })

    // let slider = new Swiper('.slide', {
    //   direction: "vertical",
    //   pagination: {
    //     el: ".swiper-pagination",
    //     dynamicBullets: true,
    //     clickable: true,
    //   },
    // })
//   });

    let swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
      },
    });
  
