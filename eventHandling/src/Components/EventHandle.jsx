function EventHandle(props) {
  function ShowMessage(name) {
    alert("Hello, World!" + " " + name);
  }
  return (
    <>
      <button
        onClick={() => ShowMessage(props.name)}
        className="border-4 border-green-500 p-4 ml-auto"
      >
        Click me {props.children} {props.last}
      </button>
    </>
  );
}
export default EventHandle;
