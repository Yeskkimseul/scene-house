document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".contestFilter-container button");
    const contestLists = document.querySelectorAll(".contestlist");
    let contestSwiper = null;

    const yearSelect = document.querySelector(".year-select");
    const container = document.querySelector(".contestlistWrap");

    yearSelect.addEventListener("change", function () {
        const selectedYear = this.value;

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
        const activeList = document.querySelector('.contestWrap .contestlist.on.swiper');


        contestSwiper = new Swiper(activeList, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                834: {
                    slidesPerView: 1.2,
                    spaceBetween: 20
                },
                1400: {
                    slidesPerView: 2.8,
                    spaceBetween: 0,
                    mousewheel: {
                        forceToAxis: true,
                        sensitivity: 1,
                        releaseOnEdges: true,
                        eventsTarget: '.contestWrap ',
                    },
                    direction: "vertical",
                    autoHeight: false,
                    loop: false,
                }
            }
        });
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