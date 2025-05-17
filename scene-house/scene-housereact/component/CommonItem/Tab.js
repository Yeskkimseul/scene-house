import React from 'react';
import "./Tab.css"

const Tab = ({label, activeTab, onClick}) => {
    const handleClick = () => {
        onClick(label);
    };
    
    return (
        <div
        className={`tab${activeTab === label ? 'active' : ''}`}
        onClick={handleClick}>
            {label}
        </div>
    );
};

export default Tab;