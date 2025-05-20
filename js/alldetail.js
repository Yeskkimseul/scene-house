document.addEventListener("DOMContentLoaded", function () {
  /* 모바일 gnb */
  const closeBtn = document.querySelector('.top .close');
  const ham = document.querySelector('.top .hamMenu');
  const moblienav = document.querySelector('.mobilenav');

  ham.addEventListener('click', function () {
    this.classList.add('off');
    closeBtn.classList.add('on');
    moblienav.classList.add('on');
  });

  closeBtn.addEventListener('click', function () {
    this.classList.remove('on');
    ham.classList.remove('off');
    moblienav.classList.remove('on');
  });


  // 하트 아이콘 클릭 시
  const hearts = document.querySelectorAll(".heart-icon");
  hearts.forEach(function (heart) {
    heart.addEventListener("click", function () {
      console.log("클릭");
      this.classList.toggle("on");
    });
  });

  /* 갤러리 스와이퍼 */

  const swiper = new Swiper(".galleryswiper", {
    spaceBetween: 32,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
    },
  });

  /* 비디오 스와이퍼 */

  new Swiper(".video-swiper", {
    spaceBetween: 32,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
    },
  });

    new Swiper(".recommendswiper", {
    spaceBetween: 30,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
    },
  });

});