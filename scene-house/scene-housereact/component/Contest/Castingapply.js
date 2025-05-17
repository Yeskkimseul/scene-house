import react from "react";
import "./Castingapply.css";
import Button from "../Button/Button";

function Castingapply({ onCancel, onSubmit }) {

    return (
        <div>
            <div className="CastingapplyWrapper">
                <div className="applycontents">
                    지원하기
                    <Button onClick={onCancel}>취소</Button>
                    <Button onClick={onSubmit}>등록</Button>
                </div>
            </div>
        </div>
    )
}

export default Castingapply;