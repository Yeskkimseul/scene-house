import React, { useState } from "react";
import "./StarRating.css";
import starEmpty from "../../img/starempty.svg";
import starFill from "../../img/starfill.svg";



const StarRating = ({ rating = 0, showScore = false }) => {
  return (
    <div className="star-rating-container">
      <div className="star-rating">
        {Array.from({ length: 5 }, (_, i) => (
          <img
            key={i}
            src={i < rating ? starFill : starEmpty}
            alt={i < rating ? "filled star" : "empty star"}
            className="star-icon"
          />
        ))}
      </div>
      {showScore && (
        <div className="star-score">{rating}.0점 </div>
      )}
    </div>
  );
};



export default StarRating;