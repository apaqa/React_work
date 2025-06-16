// src/components/Calculator.jsx
import React, { useState } from 'react';

function Calculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const x = parseFloat(a);
    const y = parseFloat(b);
    if (isNaN(x) || isNaN(y)) return;
    let res;
    switch (operator) {
      case '+': res = x + y; break;
      case '-': res = x - y; break;
      case '*': res = x * y; break;
      case '/': res = y !== 0 ? x / y : '除以0錯誤'; break;
      default: res = null;
    }
    setResult(res);
  };

  return (
    <div className="feature-container">
      <h2>計算機</h2>
      <div className="calculator">
        <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="數值 A" />
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="數值 B" />
        <button onClick={calculate}>計算</button>
      </div>
      {result !== null && <p>結果: {result}</p>}
    </div>
  );
}

export default Calculator;
