import React, { useState, useMemo } from 'react';

function Calc() {
  const [number, setNumber] = useState(0);

  // Expensive function (simulated by delay)
  const slowSquare = (num) => {
    console.log('Calculating square...');
    let result = num * num;
    for (let i = 0; i < 1e8; i++) {} // Just delay
    return result;
  };

  // Memoize calculation: run only if 'number' changes
  const squared = useMemo(() => slowSquare(number), [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        placeholder="Enter a number"
      />
      <p>Square: {squared}</p>
    </div>
  );
}

export { Calc };