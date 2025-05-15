import React, { useState, useEffect } from 'react';
import Tabs from '../../component/CommonItem/Tabs';
import Button from '../../component/Button/Button';
import './Contest.css';
import ContestList from '../../component/Contest/ContestList';
import ContestItemDetail from '../../component/Contest/ContestItemDetail';
import Casting from '../../component/Contest/Casting';




function Contest() {
  const [viewDetail, setViewDetail] = useState(false);

  useEffect(() => {
    document.body.classList.add('Contest');
    return () => {
      document.body.classList.remove('Contest');
    };
  }, []);
  
  return (
    <div className='Contest'>
      <div className='toptab'>
        <Tabs onTabChange={() => setViewDetail(false)}>
          <div label="공모 작품집">
            {!viewDetail ? (
              <ContestList onShowDetail={() => setViewDetail(true)} />
            ) : (
              <ContestItemDetail onBack={() => setViewDetail(false)} />
            )}
          </div>
          <div label="팀원 모집">
            <Casting />

          </div>
        </Tabs>
        <Button type="upload" to="/Contest/UploadDashboard">작품 업로드</Button>
      </div>
    </div>
  )
}

export default Contest;