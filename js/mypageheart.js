document.addEventListener("DOMContentLoaded", function () {
        // 하트 아이콘 토글
    document.querySelectorAll(".heart-icon").forEach(heart => {
        heart.addEventListener("click", function () {
            this.classList.toggle("on");
        });
    });
});