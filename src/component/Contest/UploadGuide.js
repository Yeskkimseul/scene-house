import React from "react";
import "./UploadGuide.css";
import Button from "../Button/Button";

const UploadGuide = ({ goToTab }) => {
    return (
        <div className="UploadGuideWrap">
            <div className="GuideTop"></div>
            <div className="GuideBottom">
                <div className="b7">
                    여러분의 소중한 이야기를 기다리고 있습니다.<br />
                    마음을 담은 영상을 이곳에 업로드해 주세요. <br />
                    작지만 강한 한 편의 영상이 누군가의 마음을 울릴 수 있습니다.<br />
                    당신만의 시선을 담은 작품, 씬 하우스와 함께 다른사람들과 공유해 주세요.
                </div>
                <Button type="bigbt_neg" onClick={goToTab}>작품 등록</Button>

            </div>
        </div>
    )
}

export default UploadGuide;