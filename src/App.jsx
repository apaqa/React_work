// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import RGBPanel from './components/RGBPanel';
import WaterSortGame from './components/WaterSortGame';
import MultiplicationTable from './components/MultiplicationTable';
import Calculator from './components/Calculator';
import TicTacToe from './components/TicTacToe';
import Profile from './pages/Profile';

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-link">首頁</Link>
        <Link to="/rgb" className="nav-link">RGB 調色盤</Link>
        <Link to="/water-sort" className="nav-link">水排序遊戲</Link>
        <Link to="/table" className="nav-link">N×N 乘法表</Link>
        <Link to="/utilities" className="nav-link">計算機＆井字</Link>
        <Link to="/profile" className="nav-link profile-link">個人簡介</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rgb" element={<RGBPanel />} />
        <Route path="/water-sort" element={<WaterSortGame />} />
        <Route path="/table" element={<MultiplicationTable />} />
        <Route path="/utilities" element={
          <div>
            <Calculator />
            <TicTacToe />
          </div>
        } />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
