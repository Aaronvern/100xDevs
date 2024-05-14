import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import {lazy , Suspense} from 'react'
const DashBoard = lazy(()=> import ('./components/DashBoard'))
const Landing = lazy(()=> import ('./components/Landing'))


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      
      <BrowserRouter>
        <Topbar/>
        <Routes>
            <Route path = "/dashboard" element={<Suspense fallback={"loading "}><DashBoard/></Suspense>} />
            <Route path = "/" element={<Suspense fallback={"loading "}><Landing/></Suspense>}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

 const Topbar=()=>{
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={()=>{
        navigate('/') 
      }}>home</button>
      <button onClick={()=>{
        navigate('/dashboard') 
      }}>dashboard</button>
    </div>
  )
 }

export default App
