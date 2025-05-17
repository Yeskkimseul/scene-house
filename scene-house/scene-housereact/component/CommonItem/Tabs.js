import React,{Children, useState} from "react";
import Tab from './Tab';
import "./Tabs.css"

const Tabs = ({ children, onTabChange })  => {
    const childrenArray = React.Children.toArray(children);

    const [activeTab, setActiveTab] = useState(
        childrenArray.length > 0 ? childrenArray[0].props.label : null
    );

    const handleTabClick = (tabLabel) =>{
        setActiveTab(tabLabel);
        if (onTabChange) onTabChange();
    };

    return (
        <div className="tabs">
            {children.map((child) => (
                <Tab
                    key={child.props.label}
                    label={child.props.label}
                    onClick={handleTabClick}
                    activeTab={activeTab}
                />
            ))}
            <div className="tab-content">
                 {/* activeTab에 해당하는 콘텐츠만 렌더링 */}
                {children.map((child)=>
                child.props.label === activeTab ? child.props.children : null
                )}
            </div>
        </div>
    )
}

export default Tabs;