
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';
function App() {
   const [counter,setCounter] = useState(15)
  const addValue=()=>{
    console.log("value added",Math.random());
   setCounter(counter+1)
   setCounter(counter+1)
   setCounter(counter+1)
   setCounter(counter+1)
   setCounter(counter+1)
  }
  const removeValue=()=>{
    if(counter==0)return
    setCounter(counter-1)
  }
  return (
    <>
     <h1>Counter app</h1>
     <h2>counter value:{counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br /> <br />
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
