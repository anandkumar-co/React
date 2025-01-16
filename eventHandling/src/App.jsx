import EventHandle from "./Components/EventHandle";
function App() {
  return (
    <>
      <EventHandle
        name={"anand"}
        last={
          <h1>
            <b>Welcome</b>
          </h1>
        }
      >
        Hello boy
      </EventHandle>
    </>
  );
}

export default App;
