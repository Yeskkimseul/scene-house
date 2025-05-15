import React, { useState, useEffect, Children } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import './Uploadtabs.css';

const UploadTabs = ({ children, activeTab, setActiveTab }) => {
  const tabs = Children.toArray(children);
  const [bgClass, setBgClass] = useState('');
  const navigate = useNavigate();

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    navigate(`/Contest/UploadDashboard?tab=${tabName === '작품 관리' ? 'list' : 'guide'}`);
  };

  useEffect(() => {
    const active = tabs.find(tab => tab.props.label === activeTab);
    setBgClass(active?.props['data-bg'] || '');
  }, [activeTab, tabs]);

  const renderTabButtons = () =>
    tabs.map(({ props: { label } }) => (
      <div
        key={label}
        className={`Uploadtab ${label === activeTab ? 'active' : ''}`}
        onClick={() => handleTabChange(label)}
      >
        {label}
      </div>
    ));

  const activeContent = tabs.find(tab => tab.props.label === activeTab)?.props.children;

  return (
    <div className={`Uploadtabs ${bgClass}`}>
      <div className="Uploadtab-buttons">{renderTabButtons()}</div>
      <div className="Uploadtab-content">{activeContent}</div>
    </div>
  );
};

export default UploadTabs;