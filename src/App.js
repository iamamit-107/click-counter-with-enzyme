import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        Current counter <span data-test="count">{count}</span>
      </h1>
      <button
        data-test="increment-button"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment counter
      </button>
    </div>
  );
}

export default App;
