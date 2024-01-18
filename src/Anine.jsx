import React, { useState } from 'react';

const Anine = () => {
  const [shape, setShape] = useState('rectangle');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [radius, setRadius] = useState('');
  const [result, setResult] = useState(null);

  const calculateArea = () => {
    switch (shape) {
      case 'rectangle':
        setResult(parseFloat(length) * parseFloat(width));
        break;
      case 'triangle':
        setResult((parseFloat(base) * parseFloat(height)) / 2);
        break;
      case 'circle':
        setResult(Math.PI * Math.pow(parseFloat(radius), 2));
        break;
      default:
        setResult(null);
    }
  };

  const handleShapeChange = (e) => {
    setShape(e.target.value);
    setResult(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateArea();
  };

  return (
    <div>
      <h2>Geometry Calculator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Shape:
          <select value={shape} onChange={handleShapeChange}>
            <option value="rectangle">Rectangle</option>
            <option value="triangle">Triangle</option>
            <option value="circle">Circle</option>
          </select>
        </label>
        <br />
        {shape === 'rectangle' && (
          <>
            <label>
              Length:
              <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
            </label>
            <br />
            <label>
              Width:
              <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
            </label>
          </>
        )}
        {shape === 'triangle' && (
          <>
            <label>
              Base:
              <input type="number" value={base} onChange={(e) => setBase(e.target.value)} />
            </label>
            <br />
            <label>
              Height:
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </label>
          </>
        )}
        {shape === 'circle' && (
          <>
            <label>
              Radius:
              <input type="number" value={radius} onChange={(e) => setRadius(e.target.value)} />
            </label>
          </>
        )}
        <br />
        <button type="submit">Calculate Area</button>
      </form>
      {result !== null && <p>The area is: {result}</p>}
    </div>
  );
};

export default Anine;
