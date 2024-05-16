import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-300"
     style={{backgroundColor:color}}
     >
      <div className=' fixed flex flex-wrap justify-center  bottom-12  inset-x-0 px-2 '>
        <div className='flex flex-wrap  justify-center gap-3  shadow-2xl bg-white px-3 py-2 rounded-2xl'>
          <button onClick={()=> setColor("yellow")}  className='outline-none px4 rounded-2xl px-3 py-2 font-bold'
          style={{backgroundColor:"yellow" }}>yellow</button>
                    <button onClick={()=> setColor("olive")}  className='outline-none px4 rounded-2xl px-3 py-2 font-bold'
          style={{backgroundColor:"olive" }}>olive</button>
                    <button onClick={()=> setColor("green")}  className='outline-none px4 rounded-2xl px-3 py-2 font-bold'
          style={{backgroundColor:"green" }}>green</button>
                    <button onClick={()=> setColor("blue")}  className='outline-none px4 rounded-2xl px-3 py-2 font-bold '
          style={{backgroundColor:"blue" }}>BLUE</button>
                    <button onClick={()=> setColor("orange")}  className='outline-none px4 rounded-2xl px-3 py-2 font-bold'
          style={{backgroundColor:"orange" }}>ORANGE</button>
                    <button onClick={()=> setColor("red")}  className='outline-none px4 rounded-2xl px-3 py-2 font-bold'
          style={{backgroundColor:"red" }}>RED</button>
                    <button onClick={()=> setColor("grey")}  className='outline-none px4 rounded-2xl px-3 py-2 font-bold'
          style={{backgroundColor:"grey" }}>grey</button>
                    <button onClick={()=> setColor("black")}  className='outline-none px4 rounded-2xl px-3 py-2 font-bold  text-white'
          style={{backgroundColor:"black" }}>BLACK</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
