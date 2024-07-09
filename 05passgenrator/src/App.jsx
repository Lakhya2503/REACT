import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLenth] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //user ref hook
  const passwordRef = useRef(null)

  const passwordGen = useCallback(()=> {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*(){}[]~`"
    
    for(let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1))
    }
    setPassword(pass)
  },[length,numberAllowed,characterAllowed,setPassword])

  const copyPassToClipBoard = useCallback( () =>{
    passwordRef.current?.select();
    passwordRef.current?.selectionRange(0,101);
    window.navigator.clipboard.writeText(password)
  }, [password] )

  useEffect( ()=>{
    passwordGen()
  },[length,characterAllowed,numberAllowed,passwordGen] )
  return (
    <>
    <div className=' w-full max-w-md mx-auto shadow-md rounded-md bg-cyan-700 my-8 px-4 p-3'>
      <h1 className='text-2xl font-bold text-white text-center my-3'>Password Generator</h1>
      <div className='flex shodow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='w-full py-1 px-3 text-back font-bold rounded-l-full'
        placeholder='password'
        readOnly
        onClick={copyPassToClipBoard}
        ref={passwordRef}
        />
        <button className='bg-cyan-300 px-3 py-2 hover:bg-orange-700 clicked: hover:text-white outline-black outline-1 shadow-3xl rounded-r-full capitalize shrink-0 shadow-black'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input
         type="range"
         className='text-red-800 cursor-pointer' 
         min={6}
         max={100}
         value={length}
         onChange={(e)=>{setLenth(e.target.value)}}
        />
        <label className='text-white font-bold'>Length:{length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{setNumberAllowed((prev)=>(!prev))}}
               />
          <label htmlFor="checkbox" className='text-white font-bold'>Numbers</label>
        </div>
        <div className='flex item-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={characterAllowed}
            id="chracterInput"
            onChange={()=>{setCharacterAllowed((prev)=>(!prev))}}
               />
          <label htmlFor="checkbox" className='text-white font-bold'>Character</label>
        </div>
      </div>
      </div> 
    </>
  )
}

export default App
