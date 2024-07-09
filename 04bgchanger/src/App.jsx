import { useState } from 'react'

function App() {
  const [Color, setColor] = useState("olive")

  return (
   
    <div className='bg-black w-full h-screen' style={{background:Color}}>
      <div className='fixed flex flex-wrap justify-center inset-x-0 bottom-2 bg-slate-200 rounded-xl m-3'> 
        <div className='flex flex-wrap justify-center gap-3 rounded-3xl px-1 py-2 bg-red'>
          <button onClick={()=> setColor("red")} className='px-5 py-2 justify-center rounded-full capitalize text-xl' style={{background:"red"}}>Red</button>
          <button onClick={()=> setColor("aqua")} className='px-5 py-2 justify-center rounded-full capitalize text-xl' style={{background:"aqua"}}>aqua</button>
          <button onClick={()=> setColor("blue")} className='px-5 py-2 justify-center rounded-full capitalize text-xl' style={{background:"blue"}}>blue</button>
          <button onClick={()=> setColor("fuchsia")} className='px-5 py-2 justify-center rounded-full capitalize text-xl' style={{background:"fuchsia"}}>fuchsia</button>
          <button onClick={()=> setColor("gray")} className='px-5 py-2 justify-center rounded-full capitalize text-xl' style={{background:"gray"}}>gray</button>
          <button onClick={()=> setColor("green")} className='px-5 py-2 justify-center rounded-full capitalize text-xl' style={{background:"green"}}>green</button>
          <button onClick={()=> setColor("lime")} className='px-5 py-2 justify-center rounded-full capitalize text-xl' style={{background:"lime"}}>lime</button>
          <button onClick={()=> setColor("maroon")} className='px-5 py-2 justify-center rounded-full capitalize text-xl' style={{background:"maroon"}}>maroon</button>
          <button onClick={()=> setColor("navy")} className='px-5 py-2 justify-center rounded-full capitalize text-xl' style={{background:"navy"}}>navy</button>
          <button onClick={()=> setColor("purple")} className='px-5 py-2 justify-center rounded-full capitalize text-xl' style={{background:"purple"}}>purple</button>
          <button onClick={()=> setColor("silver")} className='px-5 py-2 justify-center rounded-full capitalize text-xl' style={{background:"silver"}}>silver</button>
          <button onClick={()=> setColor("teal")} className='px-5 py-2 justify-center rounded-full capitalize text-xl' style={{background:"teal"}}>teal</button>
          <button onClick={()=> setColor("white")} className='px-5 py-2 justify-center rounded-full capitalize text-xl' style={{background:"white"}}>white</button>
          <button onClick={()=> setColor("yellow")} className='px-5 py-2 justify-center rounded-full capitalize text-xl' style={{background:"yellow"}}>yellow</button>
        </div>
      </div>
    </div>
    

  )
}

export default App
