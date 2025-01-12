import thapa_series from "../Api/thapa_series.json";
function netflixseries() {
  return (
    <>
      <div className="grid grid-rows-3 grid-cols-3">
        {thapa_series.map((curElem) => {
          return (
            <>
              <div className="gap-4 border-y-2 rounded w-6/12  border-red-500 border-spacing-4">
                <p> {curElem.name}</p>
                <p>{curElem.description}</p>
                <p>{curElem.genre}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default netflixseries;
