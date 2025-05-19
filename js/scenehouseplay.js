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

  closeBtn.addEventListener('click',function(){
    this.classList.remove('on');
    ham.classList.remove('off');
    moblienav.classList.remove('on');
  })





  const wrapper = document.querySelector('.sceneswiper .swiper-wrapper');
  const slides = Array.from(wrapper.children);
  const speed = 0.4; /*speed */

  /* loop */
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    wrapper.appendChild(clone);
  });

  let x = 0;

  function animate() {
    x -= speed;
    /* reset */
    if (Math.abs(x) >= wrapper.scrollWidth / 2) {
      x = 0;
    }
    gsap.set(wrapper, { x });
    requestAnimationFrame(animate);
  }

  animate();
});