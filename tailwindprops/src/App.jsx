import "./App.css";
import Card from "./card";
function App() {
  return (
    <>
      <div className="display: flex">
        <Card price="400" /> <Card price="200" /> <Card price="1520" />
        <Card price="122" />
      </div>
    </>
  );
}

export default App;
