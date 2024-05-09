import { useState } from 'react'
import './App.css'

function App() {

  const [todo, setTodo] = useState([{
    title:"exercise",
    description:"exercise for 2 hours",
    completed:true
  },{
    title:"study",
    description:"study for 5 hours",
    completed:false
  }])
  return (
    <>
    <div>
      <button onClick={()=>{
        setTodo([...todo,
        {
          title:"new todo",
          description:"new todos description",
          condition:true
        }])
      }}>add new todo</button>
      {todo.map((todo)=>{
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
    </div>
    </>
  )
}
function addTodo(props){

}
function Todo(props){
  
return <div>
  <h4>title :{props.title}</h4>
  <h4>description : {props.description}</h4>
</div>
}



export default App
