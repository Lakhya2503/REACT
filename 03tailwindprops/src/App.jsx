import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObje =  {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",

  }
  // console.log(myObje);

  return (
    <>
     <h1 className='bg-red-500 text-black p-3 rounded-lg mb-5'>Tail test</h1>
     <Card username= "Lakhan" btnText = "click me" />
     <Card username= "laxman" btnText = "visit me" />

    </> 
  )
}

export default App
