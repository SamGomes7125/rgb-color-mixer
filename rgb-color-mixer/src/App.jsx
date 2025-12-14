import { useState } from "react";
import React from "react";

// App.jsx
// This is a simple color mixer application using React.
// It allows users to adjust the RGB values using sliders and see the resulting color.
export default function App() {

const savedColor = JSON.parse(localStorage.getItem('savedColor'));
  const [r,Setr]= useState(savedColor ? savedColor.r : 0);
  const [g,Setg]= useState(savedColor ? savedColor.g : 0);
  const [b,Setb]= useState(savedColor ? savedColor.b : 0);

const Save = () => {
  localStorage.setItem('savedColor', JSON.stringify({ r, g, b }));
  alert(`Color saved: rgb(${r}, ${g}, ${b})`);
}

  return (
    <div >
      <h1>Color Mixer</h1>
      <div style={{ width: '200px', height: '200px', backgroundColor: 'rgb('+r+', '+g+', '+b+')' }}></div>
      <label>Red</label>
      <input type="range" min={0} max={255}
      value={r} onChange={(e) => Setr(e.target.value)}/>
      <br/>
      <label>Green</label>
      <input type="range" min={0} max={255} value={g} onChange={(e) => Setg(e.target.value)}/>
      <br/>
      <label>Blue</label>
      <input type="range" min={0} max={255} value={b} onChange={(e) => Setb(e.target.value)}/>
      <br/>
      <button onClick={() => { Setr(0); Setg(0); Setb(0); }}>Reset</button>
      <br/>
      <button onClick={Save}>Save Color Combination</button>
    </div>
  );
}