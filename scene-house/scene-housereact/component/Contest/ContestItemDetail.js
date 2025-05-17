import React, { useState } from 'react';
import "./ContestItemDetail.css";
import Videoplayer from '../CommonItem/Videoplayer';
import StarRating from '../CommonItem/StarRating.js';
import Heart from '../Button/Heart.js';
import X from '../../img/X.svg';
import Pen from '../../img/pen.svg';
import Review from '../CommonItem/Review.js';
import Gallery from '../CommonItem/Gallery.js';
import VideoSlide from '../CommonItem/VideoSlide.js';
import Cast from '../CommonItem/Cast.js';
import Footer from '../Footer.js';

import gallery1 from '../../img/gallery/gallery1.png'
import vidoslide1 from '../../img/videoslide/videoslide1.png'
import castmember1 from '../../img/castmember/castmember1.png'

function ContestItemDetail() {

  return (
    <div className='ContestItemDetail'>
      <div className='contentBox'>
        <Videoplayer />
        <div className='description'>
          <div className='Topdescription'>
            <div className='title'>
              <div className='b4'>기억의 조각들</div>
              <div className='b7'>2024년  • 코미디/드라마 • 1시간 49분 </div>
            </div>
            <StarRating rating="4" showScore={true}></StarRating>
          </div>
          <ul className='iconset'>
            <li>
              <Heart />
              <div className='b8'>
                찜하기
              </div>
            </li>
            <li>
              <img src={X} alt='X'></img>
              <div className='b8'>
                관심 없어요
              </div>
            </li>
            <li>
              <img src={Pen} alt='pen'></img>
              <div className='b8'>
                리스트에 추가
              </div>
            </li>
          </ul>{/* iconset */}
          <div className='descriptionText'>
            어느 날, 사고로 기억을 잃은 청년 ‘도겸’은 낯선 도시의 작은 다방에서 눈을 뜬다. 주인 여자는 그가 이곳에 자주 오던 손님이라고 말하지만, 그는 전혀 기억하지 못한다. 방 안엔 이름 없는 사진들과, 찢겨진 편지, 녹음된 음성 파일이 흩어져 있다. 기억 속에서 반복되던 한 여자아이의 웃음소리와 “미안해”라는 말이 퍼즐처럼 끼워지기 시작한다. 그러나 퍼즐이 완성될수록, 그는 자기가 숨기고 싶었던 진실과 마주하게 된다. 과거의 기억을 되찾고 고통을 감수할 것인지, 아니면 지금의 평온한 자신으로 살아갈 것인지. 조각난 기억은 때로, 가장 잔인한 거울이 된다. “기억은 잊혀져도, 진심은 남는다. 그날의 진실을 마주하는 순간, 그의 시간은 다시 흐르기 시작했다.
          </div>{/* descriptionText */}
        </div>{/* description */}
      </div>{/* contentBox */}
      <Review />
      <Gallery imgList={[gallery1, gallery1, gallery1, gallery1, gallery1, gallery1]} />
      <Cast
        castList={[
          { img: castmember1, name: '정도영', role: '감독' },
          { img: castmember1, name: '정도영', role: '감독' },
          { img: castmember1, name: '정도영', role: '감독' },
          { img: castmember1, name: '정도영', role: '감독' },
          { img: castmember1, name: '정도영', role: '감독' },
          { img: castmember1, name: '정도영', role: '감독' },
          { img: castmember1, name: '정도영', role: '감독' },
          { img: castmember1, name: '정도영', role: '감독' },
        ]}
      />
      <VideoSlide
        imgList={[
          { src: vidoslide1, text: '슬라이드 1 설명 텍스트' },
          { src: vidoslide1, text: '슬라이드 2 설명 텍스트' },
          { src: vidoslide1, text: '슬라이드 3 설명 텍스트' },
          { src: vidoslide1, text: '슬라이드 4 설명 텍스트' },
          { src: vidoslide1, text: '슬라이드 5 설명 텍스트' },
          { src: vidoslide1, text: '슬라이드 6 설명 텍스트' },
        ]}
      />
      <Footer />
    </div>


  )
}

export default ContestItemDetail;