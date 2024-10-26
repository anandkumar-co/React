import "./App.css";
import { useState } from "react";
function App() {
  let [value, setValue] = useState(15);
  // let value = 5;
  const addValue = () => {
    // value += 1;
    if (value < 20) {
      setValue(value + 1);
    }
  };
  const removeValue = () => {
    // value += 1;
    if (value > 0) {
      setValue(value - 1);
    }
  };
  return (
    <>
      <h1>Sutta aur react</h1>
      <h2>counter value:{value}</h2>
      <button onClick={addValue}>Add value :{value}</button>
      <br />
      <button onClick={removeValue}>Remove value :{value}</button>
    </>
  );
}

export default App;
