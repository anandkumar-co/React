function EventHandle(props) {
  function ShowMessage(name, e) {
    alert("Hello, World!" + " " + name);
    console.log(e.target);
  }
  return (
    <>
      <button
        onClick={(e) => ShowMessage(props.name, e)}
        className="border-4 border-green-500 p-4 ml-auto"
      >
        Click me {props.children} {props.last}
      </button>
    </>
  );
}
export default EventHandle;
