
document.addEventListener("DOMContentLoaded", function () {
    /* 모바일 gnb */
    const closeBtn = document.querySelector('.top .close');
    const ham = document.querySelector('.top .hamMenu');
    const moblienav = document.querySelector('.mobilenav');

    ham.addEventListener('click', function () {
        this.classList.add('off');
        closeBtn.classList.add('on');
        moblienav.classList.add('on');
        console.log('클릭')
    });

    closeBtn.addEventListener('click', function () {
        this.classList.remove('on');
        ham.classList.remove('off');
        moblienav.classList.remove('on');
    });




});
document.addEventListener("DOMContentLoaded", function () {
    ClassicEditor
        .create(document.querySelector('#editor'))
        .catch(error => {
            console.error(error);
        });
});