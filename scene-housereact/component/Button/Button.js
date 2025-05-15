import { useNavigate } from "react-router-dom";
import "./Button.css";

const Button = ({children, type, onClick, to}) => {
    const Navigate = useNavigate();
    const btnType = ['bigbt_neg','bigbt_pos','sm_check','gobtn','blackmidbtn','whitemidbtn','upload'].includes(type) ? type : 'default';

    const handleClick = () => {
        if(to) {
            Navigate(to);
        }else if (onClick) {
            onClick();
        }
    }
    return (
        <button type="button" className={["Button",`Button_${btnType}`].join(" ")} onClick={handleClick}>
            {children}
            </button>
    )
}

export default Button;