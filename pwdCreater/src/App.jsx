import { useCallback, useEffect, useRef, useState } from "react";
function App() {
  const [length, setlength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [specialAllowed, setSpecialAllowed] = useState(false);
  const [pwd, setPwd] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "1234567890";
    }
    if (specialAllowed) {
      str += "@#$%^&(){}";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPwd(pass);
  }, [length, numAllowed, specialAllowed, setPwd]);
  useEffect(
    () => passwordGenerater(),
    [length, numAllowed, specialAllowed, passwordGenerater]
  );
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(pwd);
  }, [pwd]);

  return (
    <>
      <h1 className="text-black text-4xl text-center">Password Generator</h1>
      <div className="flex-col m-auto p-80 w-full h-full  items-center shadow-xl  rounded-xl bg-orange-400 flex justify-center align-middle box-border">
        <div>
          <input
            type="text"
            value={pwd}
            placeholder="Password"
            readOnly
            className="rounded-l-xl p-2"
            ref={passwordRef}
          />
          <button
            className="rounded-r-xl bg-blue-50 p-2"
            onClick={copyPassword}
          >
            copy
          </button>
        </div>
        <div>
          <div className="flex justify-between">
            <input
              type="range"
              min={6}
              max={40}
              value={length}
              className="cursor-pointer"
              name="length"
              id="length"
              onChange={(e) => setlength(e.target.value)}
            />
            <label className="ml-2" htmlFor="length">
              length: {length}
            </label>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => {
                setnumAllowed((prev) => !prev);
              }}
              name="numAllowed"
              id="numAllowed"
            />
            <label htmlFor="numAllowed">number</label>
            <input
              type="checkbox"
              defaultChecked={specialAllowed}
              onChange={() => setSpecialAllowed((prev) => !prev)}
              name="specialAllowed"
              id="specialAllowed"
            />
            <label htmlFor="specialAllowed">special</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
