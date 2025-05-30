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

    /* 알람박스 */
    const alarm = document.querySelector('.top .lefticon .alarm');
    const alarmImgs = alarm.querySelectorAll('img');
    const alarmBox = alarm.querySelector('.alarmbox');

    alarm.addEventListener('click', function (e) {
        e.stopPropagation(); // 클릭이 document까지 전파되지 않게

        // 이미지 toggle
        alarmImgs.forEach(img => img.classList.toggle('active'));

        // alarmbox toggle
        alarmBox.classList.toggle('active');
    });

    // 외부 클릭 시 알림창 닫기
    document.addEventListener('click', function () {
        // 만약 alarmBox가 열려있으면 닫기
        if (alarmBox.classList.contains('active')) {
            alarmBox.classList.remove('active');

            // 이미지 원래 상태로 되돌리기
            alarmImgs.forEach(img => img.classList.toggle('active'));
        }
    });


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
        navigation: {
            nextEl: '.sceneswiper .swiper-button-next',
            prevEl: '.sceneswiper .swiper-button-prev',
        }
    });


    /* ott_new */
    new Swiper('.verticalswiper', {
        direction: 'vertical', // 세로 고정
        slidesPerView: 2,
        spaceBetween: 50,
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
        initialSlide: 2,
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        watchSlidesProgress: true,
        spaceBetween: -120,
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
            el: '.comingup-swiper .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.comingup-swiper .swiper-button-next',
            prevEl: '.comingup-swiper .swiper-button-prev',
        }
    });


    /* pd */
    new Swiper('.defaultswiper-swiper', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.pd-next',
            prevEl: '.pd-prev',
        },
        wrapperClass: 'defaultswiper-wrapper',
        slideClass: 'defaultswiper-slide',
    });

});

