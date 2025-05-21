window.addEventListener('DOMContentLoaded', function () {
    /* 모바일 gnb */
    const closeBtn = document.querySelector('.top .close');
    const ham = this.document.querySelector('.top .hamMenu');
    const moblienav = this.document.querySelector('.mobilenav');
    ham.addEventListener('click', function () {
        this.classList.add('off');
        closeBtn.classList.add('on')
        moblienav.classList.add('on')
    });

    closeBtn.addEventListener('click', function () {
        this.classList.remove('on');
        ham.classList.remove('off');
        moblienav.classList.remove('on');
    })


    const swiper = new Swiper('.sceneswiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 50,
        speed: 800,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    
    /* ott_new */
   new Swiper('.verticalswiper', {
        direction: 'vertical', // 세로 고정
        slidesPerView: 2,
        spaceBetween: 100,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next-vertical', 
            prevEl: '.swiper-button-prev-vertical',
        }
    });

    /* coming up */
    new Swiper('.comingup-swiper', {
        slidesPerView: 5,
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        initialSlide: 2,
        spaceBetween: -150,
        effect: 'coverflow',
        coverflowEffect: {
                rotate: 0,
                stretch: -150,
                depth: 200,
                modifier: 1,
                scale: 0.9,
                slideShadows: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
        });

  
});