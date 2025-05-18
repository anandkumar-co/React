import "./ClearAll.css";
function ClearAll({handleClear}) {
    function handleClick() {
        handleClear();
    }
  return (
    <div className="ClearAll">
        <button className="clear-all-button" onClick={handleClick}>Clear All</button>
    </div>
  );
}
export default ClearAll;