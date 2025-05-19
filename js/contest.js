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



    const yearSelect = document.querySelector(".year-select");
    const container = document.querySelector(".contestlistWrap");
    let contestSwiper = null;

    yearSelect.addEventListener("change", function () {
        const selectedYear = this.value;

        // ① 모든 contestlist 숨기고 선택된 연도만 보이게
        const contestLists = document.querySelectorAll(".contestlist");
        contestLists.forEach(list => {
            list.classList.remove("on");
            if (list.classList.contains(selectedYear)) {
                list.classList.add("on");

                // 스크롤 이동
                const topOffset = list.offsetTop;
                container.scrollTo({ top: topOffset, behavior: "smooth" });

                // 기존 Swiper 파괴 후 재초기화
                if (contestSwiper) {
                    contestSwiper.destroy(true, true);
                    contestSwiper = null;
                }

                // ② 모든 .contestlistDetail의 .on 제거
                document.querySelectorAll(".contestlistDetail").forEach(detail => {
                    detail.classList.remove("on");
                });

                // ③ 첫 번째 슬라이드 찾아서 해당 detail만 .on
                const firstSlide = list.querySelector(".swiper-slide.list-item-container");
                if (firstSlide) {
                    updateDetailFromSlide(firstSlide);
                }

                // ④ Swiper 재초기화
                initContestSwiper();
            }
        });
    });

    // 하트 아이콘 토글
    document.querySelectorAll(".heart-icon").forEach(heart => {
        heart.addEventListener("click", function () {
            this.classList.toggle("on");
        });
    });

    // Swiper 초기화 함수
    function initContestSwiper() {
        const activeList = document.querySelector('.contestWrap .contestlist.on.swiper');
        if (!activeList) return;

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
                        eventsTarget: '.contestWrap',
                    },
                    direction: "vertical",
                    autoHeight: false,
                    loop: false,
                }
            }
        });

        initDetailObserver();
    }

    // 상세 업데이트를 위한 IntersectionObserver 초기화
    let detailObserver = null;
    let currentVisibleIndex = -1;

    function initDetailObserver() {
        if (detailObserver) detailObserver.disconnect();

        const activeSlides = document.querySelectorAll(".contestlist.on .swiper-slide.list-item-container");
        if (!activeSlides.length) return;

        currentVisibleIndex = -1;

        detailObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(activeSlides).indexOf(entry.target);
                    if (index !== currentVisibleIndex) {
                        currentVisibleIndex = index;
                        updateDetailFromSlide(entry.target);
                    }
                }
            });
        }, {
            root: container,
            threshold: 0.
        });

        activeSlides.forEach(slide => detailObserver.observe(slide));
    }

    // 연도 + 고유 클래스 기준으로 상세정보 토글
    function updateDetailFromSlide(slide) {
        if (!slide) return;

        // 슬라이드 고유 클래스 (first, second, third, fourth, fifth)
        const uniqueClass = [...slide.classList].find(cls => ['first', 'second', 'third', 'fourth'].includes(cls));
        if (!uniqueClass) return;

        // 슬라이드 연도 클래스 (ex: 25y, 24y)
        const yearClass = [...slide.classList].find(cls => /\d{2}y/.test(cls));
        if (!yearClass) return;

        const details = document.querySelectorAll(".contestlistDetail");

        details.forEach(detail => {
            if (detail.classList.contains(yearClass) && detail.classList.contains(uniqueClass)) {
                detail.classList.add("on");
            } else {
                detail.classList.remove("on");
            }
        });
    }

    // 창 크기 변경 시 Swiper 재초기화
    window.addEventListener("resize", function () {
        if (contestSwiper) {
            contestSwiper.destroy(true, true);
            contestSwiper = null;
        }
        initContestSwiper();
    });

    // 초기 실행
    initContestSwiper();
});