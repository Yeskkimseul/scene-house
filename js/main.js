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

/* event 섹션션 */
const eventItems = document.querySelectorAll('.sceneevent .eventlist li');

eventItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    eventItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  });
});