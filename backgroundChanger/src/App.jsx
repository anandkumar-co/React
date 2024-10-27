import { useState } from "react";
import Changeback from "./component/changeback";
function App() {
  const [color, setColor] = useState("white");
  const changes = (newcolor) => {
    setColor(newcolor);
  };
  return (
    <>
      <div
        className="flex w-full h-screen justify-around"
        style={{ background: color }}
      >
        <div className="flex gap-4 p-8 fixed bottom-0">
          <Changeback color="red" onChangeColor={changes} />
          <Changeback color="lavender" onChangeColor={changes} />
          <Changeback color="olive" onChangeColor={changes} />
          <Changeback color="purple" onChangeColor={changes} />
          <Changeback color="violet" onChangeColor={changes} />
          <Changeback color="black" onChangeColor={changes} />
          <Changeback color="pink" onChangeColor={changes} />
          <Changeback color="indigo" onChangeColor={changes} />
          <Changeback color="skyblue" onChangeColor={changes} />
        </div>
      </div>
    </>
  );
}

export default App;
