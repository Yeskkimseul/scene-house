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





});