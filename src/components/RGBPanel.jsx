// src/components/RGBPanel.jsx
import React, { useState } from 'react';
import MySlider from './MySlider';

function RGBPanel() {
  const [red, setRed] = useState(128);
  const [green, setGreen] = useState(128);
  const [blue, setBlue] = useState(128);

  const handleRedChange = (e) => setRed(e.target.value);
  const handleGreenChange = (e) => setGreen(e.target.value);
  const handleBlueChange = (e) => setBlue(e.target.value);

  const boxStyle = {
    width: '150px',
    height: '150px',
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    border: '1px solid #000'
  };

  return (
    <div className="feature-container">
      <h2>RGB 調色盤</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <MySlider label="Red" min={0} max={255} value={red} onChange={handleRedChange} />
        <MySlider label="Green" min={0} max={255} value={green} onChange={handleGreenChange} />
        <MySlider label="Blue" min={0} max={255} value={blue} onChange={handleBlueChange} />
      </div>
      <div className="color-box" style={{ marginTop: '20px' }}>
        <div style={boxStyle}></div>
      </div>
    </div>
  );
}

export default RGBPanel;
