import React, { useState, useEffect } from 'react';
import Tabs from '../../component/CommonItem/Tabs';
import Button from '../../component/Button/Button';
import './Contest.css';
import ContestList from '../../component/Contest/ContestList';
import ContestItemDetail from '../../component/Contest/ContestItemDetail';
import Casting from '../../component/Contest/Casting';
import Castingapply from '../../component/Contest/Castingapply';
import CastingItemDetail from '../../component/Contest/CastingItemDetail';
import Castingapplycomplete from '../../component/Contest/Castingapplycomplete';

function Contest() {
  const [viewDetail, setViewDetail] = useState(false);
  const [castingView, setCastingView] = useState('list');

  useEffect(() => {
    document.body.classList.add('Contest');
    return () => {
      document.body.classList.remove('Contest');
    };
  }, []);

  return (
    <div className='Contest'>
      <div className='toptab'>
        <Tabs onTabChange={() => {
          setViewDetail(false);
          setCastingView('list');
        }}>
          <div label="공모 작품집">
            {!viewDetail ? (
              <ContestList onShowDetail={() => setViewDetail(true)} />
            ) : (
              <ContestItemDetail onBack={() => setViewDetail(false)} />
            )}
          </div>
          <div label="팀원 모집">
            {castingView === "list" && (
              <Casting onShowDetail={() => setCastingView("detail")} />
            )}
            {castingView === "detail" && (
              <CastingItemDetail
                onBack={() => setCastingView("list")}
                onApply={() => setCastingView("apply")}
              />
            )}
            {castingView === "apply" && (
              <Castingapply
                onCancel={() => setCastingView("detail")}
                onSubmit={() => setCastingView("applyComplete")}
              />
            )}
            {castingView === "applyComplete" && (
              <Castingapplycomplete onBack={() => setCastingView("list")} />
            )}
          </div>
        </Tabs>
        <Button type="upload" to="/Contest/UploadDashboard">작품 업로드</Button>
      </div>
    </div>
  )
}

export default Contest;


/* function Contest() {
  const [castingView, setCastingView] = useState('list');

  return (
    <div>
      {castingView === 'list' && (
        <Casting onShowDetail={() => setCastingView('detail')} />
      )}
      {castingView === 'detail' && (
        <CastingItemDetail
          onBack={() => setCastingView('list')}
          onApply={() => setCastingView('apply')}
        />
      )}
      {castingView === 'apply' && (
        <Castingapply
          onCancel={() => setCastingView('detail')}
          onSubmit={() => setCastingView('applyComplete')}
        />
      )}
      {castingView === 'applyComplete' && (
        <Castingapplycomplete onBack={() => setCastingView('list')} />
      )}
    </div>
  );
} */