import { useState } from "react";

export default function Counting() {
  const [value, setValue] = useState(0);
  function handleIncrement() {
    setValue(() => value + 1);
  }
  function handleDecrement() {
    setValue(() => value - 1);
  }
  return (
    <div className="text-center bg-green-100">
      <h1>Count={value}</h1>
      <button
        onClick={handleIncrement}
        className="bg-cyan-600 p-2 m-3 rounded-lg"
      >
        Increase
      </button>
      <button
        onClick={handleDecrement}
        className="bg-cyan-600 p-2 m-3 rounded-lg"
      >
        Decrease
      </button>
    </div>
  );
}
