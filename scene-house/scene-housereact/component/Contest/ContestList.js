import React from "react";
import "./ContestList.css"
import ContestFilter from "./ContestFilter.js";
import ContestListItem from "./ContestListItem.js";
import contestlistimg1 from "../../img/contestlistimg1.png";
import Button from "../Button/Button.js";
import StarRating from "../CommonItem/StarRating.js";
import Footer from "../Footer.js";

function ContestList({ onShowDetail }) {
    return (
        <div>


            <div className="contestlistall">
                <div className="contestWrap">
                    <article className="contestWrapLeft">
                        <ContestFilter />
                        <div className="contestlistWrap">
                            <div className="contestlist 25y on">
                                <ContestListItem title="제목" date="2025.05.09" bgImage={contestlistimg1}></ContestListItem>
                                <ContestListItem title="제목" date="2025.05.09" bgImage={contestlistimg1}></ContestListItem>
                                <ContestListItem title="제목" date="2025.05.09" bgImage={contestlistimg1}></ContestListItem>
                                <ContestListItem title="제목" date="2025.05.09" bgImage={contestlistimg1}></ContestListItem>
                            </div>
                            <div className="contestlist 24y">
                                <ContestListItem title="제목" date="2024.05.09" bgImage={contestlistimg1}></ContestListItem>
                                <ContestListItem title="제목" date="2024.05.09" bgImage={contestlistimg1}></ContestListItem>
                                <ContestListItem title="제목" date="2024.05.09" bgImage={contestlistimg1}></ContestListItem>
                                <ContestListItem title="제목" date="2024.05.09" bgImage={contestlistimg1}></ContestListItem>
                            </div>
                            <div className="contestlist 23y">
                                <ContestListItem title="제목" date="2023.05.09" bgImage={contestlistimg1}></ContestListItem>
                                <ContestListItem title="제목" date="2023.05.09" bgImage={contestlistimg1}></ContestListItem>
                                <ContestListItem title="제목" date="2023.05.09" bgImage={contestlistimg1}></ContestListItem>
                                <ContestListItem title="제목" date="2023.05.09" bgImage={contestlistimg1}></ContestListItem>
                            </div>
                            <div className="contestlist 22y">
                                <ContestListItem title="제목" date="2022.05.09" bgImage={contestlistimg1}></ContestListItem>
                                <ContestListItem title="제목" date="2022.05.09" bgImage={contestlistimg1}></ContestListItem>
                                <ContestListItem title="제목" date="2022.05.09" bgImage={contestlistimg1}></ContestListItem>
                                <ContestListItem title="제목" date="2022.05.09" bgImage={contestlistimg1}></ContestListItem>
                            </div>
                        </div>
                    </article>
                    <article className="contestWrapRight">
                        <div className="contestlistDetail">
                            <h2>기억의 조각들</h2>
                            <ul className="member">
                                <li>
                                    <div className="pic"></div>
                                    <div className="b8">조태양</div>
                                </li>
                                <li>
                                    <div className="pic"></div>
                                    <div className="b8">조태양</div>
                                </li>
                                <li>
                                    <div className="pic"></div>
                                    <div className="b8">조태양</div>
                                </li>
                                <li>
                                    <div className="pic"></div>
                                    <div className="b8">조태양</div>
                                </li>
                                <li>
                                    <div className="pic"></div>
                                    <div className="b8">조태양</div>
                                </li>
                            </ul>
                            <div className="ratLink">
                                <StarRating rating="3" showScore={true}></StarRating>
                                <Button type="gobtn" onClick={onShowDetail}>영상 보러가기</Button>
                            </div>
                            <ul className="explanation">
                                <li>
                                    <div className="b7">
                                        줄거리
                                    </div>
                                    <div className="b8">
                                        친구 티모와 함께 차린 마카롱 가게가 쫄딱 망해 거액의 빚을 지고 못 갚으면 죽이겠다는 사채업자를 피해 지구를 떠나야 하는 미키. 기술이 없는 그는, 정치인 마셜의 얼음행성 개척단에서 위험한 일을 도맡고,죽으면 다시 프린트되는 익스펜더블로 지원한다.
                                    </div>
                                </li>
                                <li>
                                    <div className="b7">
                                        크리에이터 후기
                                    </div>
                                    <div className="b8">
                                        처음엔 그저 영화를 찍고 싶다는 열정 하나로 사람들을 모았어요. 전문가는 없었지만, 각자 다른 배경과 개성을 가진 사람들이 모여 시나리오를 완성해갔습니다. 촬영 현장은 늘 우당탕거리면서도 진심이 넘쳤고, 서로를 배우고 응원하는 공간이었습니다.
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </article>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ContestList;