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
const hearts = document.querySelectorAll(".iconset li .heart-icon");
hearts.forEach(function (heart) {
  heart.addEventListener("click", function () {
    console.log("클릭");
    this.classList.toggle("on");
  });
});

});