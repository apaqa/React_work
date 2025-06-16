// src/components/MySlider.jsx
import React from 'react';

function MySlider({ min, max, value, onChange, label }) {
  return (
    <div className="slider-container">
      <label>{label}: {value}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default MySlider;
