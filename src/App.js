import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Ems from './pages/Ems';
import Cbm from './pages/Cbm.jsx';
import QualityControl from './pages/QualityControl.jsx';
import PredictiveMantenance from './pages/PredictiveMaintenance.jsx';
import InventoryStatus from './pages/InventoryStatus.jsx';
import Traceability from './pages/Traceability';
import DefectInduction from './pages/DefectInduction';
import TopNav from './components/TopNav';
import DigitalTwin from './pages/DigitalTwin';

const App = () => {
  return (
    <BrowserRouter>
    <div className='main-page'>
      
      <Sidebar>
        {/* <TopNav></TopNav> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ems" element={<Ems />} />
          <Route path="/qualitycontrol" element={<QualityControl />} />
          <Route path="/cbm" element={<Cbm />} />
          <Route path="/predictivemantenance" element={<PredictiveMantenance />} />
          <Route path="/Invstatus" element={<InventoryStatus />} />
          <Route path="/traceability" element={<Traceability />} />
          <Route path="/defectinduction" element={<DefectInduction />} />
          <Route path="/digitaltwyn" element={<DigitalTwin/>} />
        </Routes>
      </Sidebar>
      </div>
    </BrowserRouter>
  );
};

export default App;