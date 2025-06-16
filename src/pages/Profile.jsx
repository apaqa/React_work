// src/pages/Profile.jsx
import React from 'react';

function Profile() {
  return (
    <div className="profile-container">
      <h1>鄧元齊 (5b1g021)</h1>
      <div className="profile-content">
        <div className="profile-column">
          <h2>自我介紹</h2>
          <p>你好，我是鄧元齊，目前就讀於某某學校資訊系。我喜歡程式設計與前端開發，這是我的個人作品集。</p>
          <h2>學經歷</h2>
          <p>曾在某校參加資訊競賽，獲得佳績。熟悉 JavaScript、React 等技術。</p>
        </div>
        <div className="profile-column">
          <h2>履歷</h2>
          <p>目前沒有正式工作經驗，但樂於學習新技術並參與團隊合作。</p>
          <h2>心得與求職資訊</h2>
          <p>在這次專案中，我學會了 React 組件化開發、使用 React Router 管理路由，以及如何部署到 GitHub Pages。</p>
          <p>目前積極尋找前端開發相關工作機會，期待加入充滿活力的團隊。</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
