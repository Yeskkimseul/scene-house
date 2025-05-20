import React, { useState } from 'react';
import UploadTabs from '../../component/Contest/Uploadtabs';
import UploadGuide from '../../component/Contest/UploadGuide';
import Footer from '../../component/Footer';
import Upload from '../../component/Contest/Upload';
import UploadList from '../../component/Contest/UploadList';

function UploadDashboard() {
  const [showGuide, setShowGuide] = useState(true);
  const [activeTab, setActiveTab] = useState('대시보드');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const handleStartUpload = () => {
    setShowGuide(false);
  };

  return (
    <div className="UploadDashboard" style={{ minHeight: '100vh' }}>
      <UploadTabs activeTab={activeTab} setActiveTab={handleTabChange}
        setShowGuide={setShowGuide}>
        <div label="대시보드" data-bg="upload-bg">
          {showGuide ? (
            <UploadGuide goToTab={handleStartUpload} />
          ) : (
            <Upload setActiveTab={setActiveTab} />
          )}
        </div>
        <div label="작품 관리" data-bg="uploadlist-bg">
          <UploadList setActiveTab={handleTabChange}
            setShowGuide={setShowGuide} />
        </div>
      </UploadTabs>
      <Footer style={{ backgroundColor: 'var(--white)' }} />
    </div>
  );
}

export default UploadDashboard;