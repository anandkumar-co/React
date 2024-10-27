function Changeback({ color, onChangeColor }) {
  const changeColor = () => {
    onChangeColor(color);
  };
  return (
    <button
      className="rounded-full text-white  shadow-lg px-4"
      style={{ background: color }}
      onClick={changeColor}
    >
      {color}
    </button>
  );
}
export default Changeback;
