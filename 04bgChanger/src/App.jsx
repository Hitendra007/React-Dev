import { useState } from "react"


function App() {
  const [color, setColor] = useState("Yellow")

  return (
    <div className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justiy-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={()=>setColor("red")} className="Outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className="Outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")} className="Outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("Pink")} className="Outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Pink"}}>Pink</button>
          <button onClick={()=>setColor("cyan")} className="Outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"cyan"}}>cyan</button>
          <button onClick={()=>setColor("black")} className="Outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Black"}}>Black</button>
          <button onClick={()=>setColor("Lavender")} className="Outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Lavender"}}>Lavender</button>
        </div>
      </div>
      
    </div>
  )
}

export default App

