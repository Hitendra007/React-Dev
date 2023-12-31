import Card from "./Components/Card";
function App() {
  let myobj={
    username:'Harsh',
    age:'22'
  }
  
  return (
    <>
        <h1 className="bg-green-400 text-black p-3 rounded-xl mb-4">Tailwind Test</h1>
              <Card username="Loliana" ></Card>
              <Card username="Amelia" ></Card>


    </>
  )
}

export default App;
