import React, { useState } from "react";
import "./CastingItemDetail.css";
import Footer from "../Footer";
import usericonimg from "../../img/usericon1.png"
import Button from "../Button/Button";
import Castingapply from "./Castingapply";


function CastingItemDetail() {


    return (
        <div>
            <div className="CastingItemWraper">
                <div className="CastingItem">
                    <div className="Top">
                        <div className="b4">
                            제목 : 공포/호러 배우 모집중
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="id_date">
                            <div className="user">
                                <img src={usericonimg} />
                                <div className="b5">
                                    컷앤롤 (Cut & Roll) 팀
                                </div>
                            </div>
                            <ul className="date">
                                <li>
                                    <div className="txt">시작일</div>
                                    <div className="day">2025.05.01</div>
                                </li>
                                <li>
                                    <div className="txt">마감일</div>
                                    <div className="day">2025.05.30</div>
                                </li>
                            </ul>
                        </div>
                        <div className="txtbox b7">
                            안녕하세요.<br />
                            저희는 영상 필름 제작팀 ‘컷앤롤 (Cut & Roll)’입니다 저희는 현재 5번 이상의 공모전과 작품을 출품했습니다.<br />
                            아래 필수조건 확인 후 관심있으신분들은 언제든지 지원 바랍니다. <br /><br />
                            필수조건<br /><br />
                            • 유형 : 직장인<br />
                            • 공모전 경험 유무 : 1번 이상<br />
                            • 일정 : 평일
                        </div>
                        <div className="btn" >
                            <Button type="bigbt_pos" >지원하기</Button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
};
export default CastingItemDetail;