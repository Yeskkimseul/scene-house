import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';  // 기본 스타일
import 'swiper/css/pagination';  // 페이징 스타일
import 'swiper/css/navigation';  // 네비게이션 버튼 스타일
import './Gallery.css';

const Gallery = ({ imgList }) => {
    return (
        <div className="gallery-wrapper">
            <div className="galleryBg">
                <div className="gallery">
                    <h2>갤러리</h2>
                    <Swiper
                        modules={[Pagination, Navigation]}
                        spaceBetween={32}
                        slidesPerView={'auto'}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        pagination={{
                            clickable: true ,
                            type: 'bullets',  
                            bulletClass: 'swiper-pagination-bullet', 
                            bulletActiveClass: 'swiper-pagination-bullet-active', 
                        }}
                        loop
                        style={{padding: 'var(--space80) 0'}}
                    >
                        {imgList.map((src, index) => (
                            <SwiperSlide
                                key={index}
                                style={{ width: 'clamp(200px, 40vw, 416px)' }}
                            >
                                <div className="imgbox">
                                    <img
                                        src={src}
                                        alt={`slide-${index}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="navigation_btn">
                        <div className="custom-prev">
                        </div>
                        <div className="custom-next">
                        </div>
                    </div>
                    <div className="swiper-pagination">

                    </div>

                </div>
            </div>
        </div>
    )

}

export default Gallery;