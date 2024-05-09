export function Todos({ todos }) {
    return <div>
        {
            todos.map(function(todo){
                return <div>
                    <h2>#todo:  {todo.title}</h2>
                    <p>description:  {todo.description}</p>
                    <button style={{
                        padding:5
                    }}>{todo.completed?"completed":"mark as completed"}</button>
                    </div>
            })
        }
    </div>
        
}
