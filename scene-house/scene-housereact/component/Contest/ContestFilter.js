import React, { useState } from "react";
import "./ContestFilter.css";

const ContestFilter = () => {
  const [selectedYear, setSelectedYear] = useState("2025");

  const handleClick = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="contestFilter-container">
      {["2025", "2024", "2023", "2022"].map((year) => (
        <button
          key={year}
          type="button"
          className={`btn-${year} ${selectedYear === year ? "on" : ""}`}
          onClick={() => handleClick(year)}
        >
          {year}
        </button>
      ))}
    </div>
  );
};

export default ContestFilter;