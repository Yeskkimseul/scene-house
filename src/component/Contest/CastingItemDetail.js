import React from "react";
import "./CastingItemDetail.css";
import Footer from "../../Footer";
import usericonimg from "../../../img/usericon1.png";

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
                                    <div className="txt">시작일</div>
                                    <div className="day">2025.05.30</div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
};
export default CastingItemDetail;