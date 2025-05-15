document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".contestFilter-container button");
    const contestLists = document.querySelectorAll(".contestlist");
    let contestSwiper = null;

    // 연도 필터 버튼 클릭 시
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("on"));
            this.classList.add("on");

            const selectedYear = this.getAttribute("data-year");
            const container = document.querySelector(".contestlistWrap");

            contestLists.forEach(list => {
                list.classList.remove("on");
                if (list.classList.contains(selectedYear)) {
                    list.classList.add("on");

                    const topOffset = list.offsetTop;
                    container.scrollTo({ top: topOffset, behavior: "smooth" });

                    if (contestSwiper) {
                        contestSwiper.destroy(true, true);
                        contestSwiper = null;
                    }
                    initContestSwiper();
                }
            });
        });
    });

    // 하트 아이콘 클릭 시
    const hearts = document.querySelectorAll(".heart-icon");
    hearts.forEach(function (heart) {
        heart.addEventListener("click", function () {
            console.log("클릭");
            this.classList.toggle("on");
        });
    });

    // Swiper 초기화 함수
    function initContestSwiper() {
        const screenWidth = window.innerWidth;
        const activeList = document.querySelector('.contestlist.on.swiper');

        if (screenWidth <= 1400) {
            if (activeList && !contestSwiper) {
                contestSwiper = new Swiper(activeList, {
                    loop: true,
                    slidesPerView: 1, 
                    spaceBetween: 0,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        834: {
                            slidesPerView: 1.2,
                            spaceBetween: 20
                        }
                    }
                });
            }
        } else {
            if (contestSwiper) {
                contestSwiper.destroy(true, true);
                contestSwiper = null;
            }
        }
    }

    // 창 크기 변경 시 Swiper 다시 초기화
    window.addEventListener("resize", function () {
        if (contestSwiper) {
            contestSwiper.destroy(true, true);
            contestSwiper = null;
        }
        initContestSwiper();
    });

    // 페이지 로딩 시 초기화
    initContestSwiper();
});