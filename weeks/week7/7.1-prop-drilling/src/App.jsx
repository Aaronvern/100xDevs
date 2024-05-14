import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count count= {count} ></Count>
      <Buttons count = {count} setCount={setCount}/>
    </>
  )
}

const Count = ({count})=>{
  return (
    <div>
      {count}
    </div>
  )
}

const Buttons = ({setCount,count})=>{
  return (
    <>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increase</button>
      <button onClick={()=>{
        setCount(count-1)
      }}>Decrease</button>
    </>
  )
}
export default App
