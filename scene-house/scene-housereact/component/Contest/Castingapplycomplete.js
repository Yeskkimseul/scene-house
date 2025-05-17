import react from "react";
import Button from "../Button/Button";

function Castingapplycomplete({ onBack }){
    return(
        <div>
            지원완료
             <Button onClick={onBack}>뒤로 가기</Button>
        </div>
    )
}

export default Castingapplycomplete;