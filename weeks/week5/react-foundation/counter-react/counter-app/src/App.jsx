import { useState } from 'react'
import './App.css'
function App() {
  const [count,setCount]=useState(0)
  console.log(count)
  return (
    <>
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
    </>
  )
}
//components
function CustomButton(res){
  
  return <button onClick={()=>{
    res.setCount(res.count + 1);
  }}>
    counter {res.count}
  </button>

}
export default App
