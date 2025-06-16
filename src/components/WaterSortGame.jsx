// src/components/WaterSortGame.jsx
import React, { useState } from 'react';

function WaterSortGame() {
  // 定義 10 個關卡
  const levels = [
    { bottles: [ ['red','blue'], ['blue','red'], [] ] },
    { bottles: [ ['red','blue'], ['blue','green'], ['green','red'], [] ] },
    { bottles: [ ['red','blue','red'], ['blue','green','blue'], ['green','red','green'], [], [] ] },
    { bottles: [ ['red','blue','red'], ['green','yellow','green'], ['blue','yellow','blue'], ['red','green','yellow'], [], [] ] },
    { bottles: [ ['red','blue'], ['green','yellow'], ['blue','green'], ['yellow','red'], [], [], [] ] },
    { bottles: [ ['red'], ['blue'], ['green'], ['yellow'], ['purple'], [], [] ] },
    { bottles: [ ['red','blue'], ['blue','green'], ['green','yellow'], ['yellow','purple'], ['purple','red'], [], [], [] ] },
    { bottles: [ ['red'], ['blue'], ['green'], ['yellow'], ['purple'], [], [], [], [] ] },
    { bottles: [ ['red','blue'], ['blue','green'], ['green','yellow'], ['yellow','purple'], ['purple','orange'], ['orange','red'], [], [], [] ] },
    { bottles: [ ['red'], ['blue'], ['green'], ['yellow'], ['purple'], ['orange'], [], [], [], [] ] },
  ];

  const [currentLevel, setCurrentLevel] = useState(0);
  const [bottles, setBottles] = useState(levels[0].bottles.map(arr => [...arr]));
  const [selectedBottle, setSelectedBottle] = useState(null);

  const handleLevelChange = (e) => {
    const levelIndex = parseInt(e.target.value);
    setCurrentLevel(levelIndex);
    setBottles(levels[levelIndex].bottles.map(arr => [...arr]));
    setSelectedBottle(null);
  };

  const handleBottleClick = (index) => {
    if (selectedBottle === null) {
      if (bottles[index].length > 0) {
        setSelectedBottle(index);
      }
    } else {
      if (selectedBottle === index) {
        setSelectedBottle(null);
      } else {
        const fromBottle = bottles[selectedBottle];
        const toBottle = bottles[index];
        if (fromBottle.length === 0) {
          setSelectedBottle(null);
          return;
        }
        const colorToPour = fromBottle[fromBottle.length - 1];
        const topColorTo = toBottle[toBottle.length - 1];
        if (toBottle.length === 0 || topColorTo === colorToPour) {
          const newBottles = bottles.map(arr => [...arr]);
          newBottles[index].push(newBottles[selectedBottle].pop());
          setBottles(newBottles);
        }
        setSelectedBottle(null);
      }
    }
  };

  const isSolved = () => {
    return bottles.every(bottle => (
      bottle.length === 0 || bottle.every(color => color === bottle[0])
    ));
  };

  return (
    <div className="feature-container">
      <h2>水排序遊戲</h2>
      <div>
        <label>選擇關卡：</label>
        <select value={currentLevel} onChange={handleLevelChange}>
          {levels.map((_, i) => (
            <option key={i} value={i}>關卡 {i + 1}</option>
          ))}
        </select>
      </div>
      <div className="water-sort-game">
        {bottles.map((bottle, idx) => (
          <div
            key={idx}
            className={`bottle ${selectedBottle === idx ? 'selected' : ''}`}
            onClick={() => handleBottleClick(idx)}
          >
            {bottle.map((color, i) => (
              <div
                key={i}
                className="water"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        ))}
      </div>
      {isSolved() && <p>恭喜！你完成了關卡 {currentLevel + 1}</p>}
    </div>
  );
}

export default WaterSortGame;
