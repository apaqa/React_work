// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>5b1g021 鄧元齊 的作品集</h1>
      <p>歡迎來到我的個人作品集，以下是我的四個專案：</p>
      <ul className="feature-list">
        <li>
          <Link to="/rgb">RGB 調色盤</Link> - 使用滑桿調整顏色，實時顯示顏色變化。
        </li>
        <li>
          <Link to="/water-sort">水排序遊戲</Link> - 互動式遊戲，共 10 關卡，將顏色水倒入玻璃瓶中。
        </li>
        <li>
          <Link to="/table">N×N 乘法表</Link> - 輸入數值動態生成乘法表。
        </li>
        <li>
          <Link to="/utilities">計算機 & 井字遊戲</Link> - 包含簡易計算機和井字遊戲元件。
        </li>
      </ul>
      <Link to="/profile" className="profile-button">個人簡介</Link>
    </div>
  );
}

export default Home;
