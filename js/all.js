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
            nextEl: '.swiper-button-next-vertical', // 🔧 너가 HTML에 쓴 이름과 동일해야 작동
            prevEl: '.swiper-button-prev-vertical',
        }
    });



});