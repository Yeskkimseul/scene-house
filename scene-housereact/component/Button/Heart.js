import React, {useState} from "react";
import "./Heart.css";
import heartempty from "../../img/heartempty.svg";
import heartfilled from "../../img/heartfilled.svg";

function Heart(){
    const [liked,setLiked] = useState(false);

    const toggleLike = () => setLiked((prev) => !prev);

    return (
        <div className="heart-container">
            <img
            src={liked ? heartfilled : heartempty}
            alt="heart"
            className="heart-icon"
            onClick={toggleLike}
            />
        </div>
    );
}


export default Heart;