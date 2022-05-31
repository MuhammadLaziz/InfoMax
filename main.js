    const navbar = document.querySelector('.header-navigation'),
         swipers = document.querySelectorAll('.swiper-pagination'),
         header = document.querySelector('.header'),
         sam = document.querySelector('.header__slider-slider'),
         samm = document.querySelector('.active'),
         controler1 = document.querySelector('.header__slider-controler-controls-1'),
         controler2 = document.querySelector('.header__slider-controler-controls-2'),
         aboutControler1 = document.querySelector('.about__silder__controler-controls1'),
         aboutControler2 = document.querySelector('.about__silder__controler-controls2'),
         aboutSliderWrapp = document.querySelector('.about__slider__wrapper'),
         aboutSliderActive = document.querySelector('.about__silder__controler-active')
   
    window.addEventListener('scroll', () => {
        if(window.scrollY > navbar.offsetHeight) {
            // console.log('hi');
            navbar.classList.add('active')
        }else {
            navbar.classList.remove('active')
        }
    })

    controler1.addEventListener('click', () => {
        sam.style.transform = 'translateX(0)'
        samm.style.top = '0px'
        header.style.backgroundImage = "url('./Assets/images/main-bg.png')"
    })
    controler2.addEventListener('click', () => {
        sam.style.transform = 'translateX(-33%)'
        samm.style.top = '50px'
        header.style.backgroundImage = "url('./Assets/images/bg2.jpg')"
    })
    aboutControler1.addEventListener('click', () => {
        aboutSliderWrapp.style.transform = 'translateX(0)'
        aboutSliderActive.style.left = '0%'
    })

    aboutControler2.addEventListener('click', () => {
        aboutSliderWrapp.style.transform = 'translateX(-50%)'
        aboutSliderActive.style.left = '53%'
    })
    
    