window.addEventListener('DOMContentLoaded', function () {
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