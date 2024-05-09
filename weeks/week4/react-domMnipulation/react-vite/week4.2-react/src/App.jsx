import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0)
  return(
    <div>
  <ButtonHandler count={count} setCount={setCount}></ButtonHandler>
  </div>
  )
}

function ButtonHandler(res){
  return <button onClick={()=>{
    res.setCount(res.count + 1)
  }}>counter {res.count}</button>
}

export default App
