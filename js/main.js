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


const scrollContainer = document.querySelector("[data-scroll-container]");

const locoScroll = new LocomotiveScroll({
  el: scrollContainer,
  smooth: true,
  multiplier: 1.2
});


gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.scrollerProxy(scrollContainer, {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: scrollContainer.style.transform ? "transform" : "fixed"
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

setTimeout(() => {
  locoScroll.update();
  ScrollTrigger.refresh();
}, 100);

/* event 섹션 */
const eventItems = document.querySelectorAll('.sceneevent .eventlist li');

eventItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    if (window.innerWidth > 834) {
      eventItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
    }
  });
});