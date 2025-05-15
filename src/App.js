import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import './style/common.css';
import Home from './pages/Home/Home';
import All from './pages/All/All';
import Contest from './pages/Contest/Contest';
import UploadDashboard from './pages/Contest/UploadDashboard';
import Game from './pages/Game/Game';
import Setting from './pages/Setting/Setting';

function App() {
  return (
    <HashRouter>
      <div className="AppLayout">
        <Header />
        <main className="MainContent">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/All' element={<All />} />
            <Route path='/Contest' element={<Contest />} />
            <Route path='/Contest/UploadDashboard' element={<UploadDashboard />} />
            <Route path='/Game' element={<Game />} />
            <Route path='/Setting' element={<Setting />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
