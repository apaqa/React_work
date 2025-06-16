// src/components/MultiplicationTable.jsx
import React, { useState } from 'react';

function MultiplicationTable() {
  const [n, setN] = useState(5);

  const handleChange = (e) => {
    const val = parseInt(e.target.value);
    setN(val > 0 ? val : 0);
  };

  const renderTable = () => {
    const size = n;
    const rows = [];
    for (let i = 1; i <= size; i++) {
      const cells = [];
      for (let j = 1; j <= size; j++) {
        cells.push(<td key={j}>{i * j}</td>);
      }
      rows.push(<tr key={i}>{cells}</tr>);
    }
    return rows;
  };

  return (
    <div className="feature-container">
      <h2>N×N 乘法表</h2>
      <input type="number" value={n} onChange={handleChange} min="0" />
      <table className="multiplication-table">
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default MultiplicationTable;
