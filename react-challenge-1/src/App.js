import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [ count, setCount ] = useState(0);
  function increment(count) {
    return setCount((count) => count + 1);
  }
  function decrement(count) {
    setCount((count) => count - 1);
  }
  return (
    <div className="App" style={{margin:"auto", display:"block"}}>
      <h1>Counter</h1>
      <h2> {count} </h2>
      <button onClick={() => increment(count)}>+</button>
      <button onClick={() => decrement(count)}>-</button>
    </div>
  );
}
