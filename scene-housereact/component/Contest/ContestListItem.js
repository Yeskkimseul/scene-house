import "./ContestListItem.css"
import Heart from "../Button/Heart"


export const ContestListItem =({title,date,bgImage}) => {

    const style = {
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.00) 41.83%), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    return (
            <div className="list-item-container" style={style}>
                <div className="itemtop">
                <h4>{title}</h4>
                <div className="b8">{date}</div>
                </div>
                <Heart />
            </div>
    );
};

export default ContestListItem;