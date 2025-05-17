import React from 'react';
import "./Review.css";
import UserIcon from './UserIcon';
import userIconimg1 from '../../img/usericon1.png'
import MoreText from '../Button/MoreText';
import Button from '../Button/Button';
import StarRating from './StarRating';
import Heart from '../Button/Heart';

function Review() {

    return (
        <div className='review-Wrapper'>
            <div className='rieview-bg'>
                <div className='review'>
                    <div className='num_more'>
                        <h4>댓글 426개</h4>
                        <MoreText />
                    </div>
                    <div className='myReview'>
                        <UserIcon image={userIconimg1} />
                        <input type='text' placeholder='댓글 추가...'></input>
                        <Button type='sm_check'>등록</Button>
                    </div>
                    <ul className='userReview'>
                        <li>
                            <UserIcon image={userIconimg1} />
                            <div className='userReviewContents'>
                                <div className='userReviewTop'>
                                    <div className='b6'>
                                        홍혜주
                                    </div>
                                    <div className='icons'>
                                        <StarRating rating='4' showScore={false} />
                                        <Heart />
                                    </div>
                                </div>
                                <div className='b7'>
                                    작품에 대한 전체적인 개연성이 부족합니다.
                                </div>
                            </div>
                        </li>
                        <li>
                            <UserIcon image={userIconimg1} />
                            <div className='userReviewContents'>
                                <div className='userReviewTop'>
                                    <div className='b6'>
                                        홍혜주
                                    </div>
                                    <div className='icons'>
                                        <StarRating rating='4' showScore={false} />
                                        <Heart />
                                    </div>
                                </div>
                                <div className='b7'>
                                    작품에 대한 전체적인 개연성이 부족합니다.
                                </div>
                            </div>
                        </li>
                        <li>
                            <UserIcon image={userIconimg1} />
                            <div className='userReviewContents'>
                                <div className='userReviewTop'>
                                    <div className='b6'>
                                        홍혜주
                                    </div>
                                    <div className='icons'>
                                        <StarRating rating='4' showScore={false} />
                                        <Heart />
                                    </div>
                                </div>
                                <div className='b7'>
                                    작품에 대한 전체적인 개연성이 부족합니다.
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Review;