import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './VideoSlide.css';

const VideoSlide = ({ imgList }) => {
    return (
        <div className="VideoSlide-wrapper">
            <div className="VideoSlideBg">
                <div className="VideoSlide">
                    <h2>비슷한 추천작들</h2>
                    <Swiper
                        modules={[Pagination, Navigation]}
                        spaceBetween={32}
                        slidesPerView={'auto'}
                        pagination={{
                            clickable: true,
                            type: 'bullets',
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                        }}
                        loop
                        style={{ padding: 'var(--space80) 0' }}
                    >
                        {imgList.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                style={{ width: 'clamp(200px, 50vw, 600px)' }}
                            >
                                <div className="imgbox">
                                    <img
                                        src={item.src}
                                        alt={`slide-${index}`}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            objectFit: 'cover',
                                            borderRadius: '20px',
                                        }}
                                    />
                                    <div className="b5">{item.text}</div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-pagination" />
                </div>
            </div>
        </div>
    );
};

export default VideoSlide;