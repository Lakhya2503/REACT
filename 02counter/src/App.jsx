import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(15)

  // let counter = 5


  const addValue = () => {
    // console.log("click ", counter);
    // counter = counter + 1
    setCounter(counter + 1)
   }

   const removeValue = () => {
    setCounter(counter - 1)
   }


  return (
   <>
   <h1>code with react</h1>
   <h2>Counter Value: {counter}</h2>
   <button
   onClick={addValue}
   >Add value</button>

   <hr />
   <button
   onClick={removeValue}
   >Remove Value</button>
   </>
  )
}

export default App



/* 
HomeWork solution


  const addValue = () => {
   if (counter < 20 ) {
    setCounter(counter + 1)
   } else {
    alert("You can't go beyond 20")
   }
    
   }

   const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    } else {
      alert('you are reach the min limit')
    }
    
   }

*/