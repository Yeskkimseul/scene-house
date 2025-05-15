  // 하트 아이콘 클릭 시
    const hearts = document.querySelectorAll(".heart-icon");
    hearts.forEach(function (heart) {
        heart.addEventListener("click", function () {
            console.log("클릭");
            this.classList.toggle("on");
        });
    });