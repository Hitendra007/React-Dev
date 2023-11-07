import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  // State variables for password generation
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Function to generate a password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Include numbers in the character set if numberAllowed is true
    if (numberAllowed) str += "0123456789";

    // Include special characters in the character set if charAllowed is true
    if (charAllowed) str += "!@#$%^&*(){}[]~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char); // Append the randomly selected character to the password
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  //useRef hook


  return (
    <>
      <div className="w-full text-center max-w-md mx-auto sh-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className='text-4xl text-center text-white'>Password Generator</h1>
        <div className="flex shadow rounded-lg px-4 my-8 overflow-hidden mb-4">
          <input
            value={password}
            className="outline-none w-full py-1 px-3 my-2 rounded"
            placeholder="password"
            type="text"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white py-1 px-3 my-2 rounded shrink-0 hover:bg-blue-400">Copy</button>
        </div>
        <div className="flex test-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor=""> Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
