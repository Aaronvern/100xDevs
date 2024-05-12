import React, { useState, useEffect } from 'react';
import '../src/index.css'
import Todo from './components/Todo';
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://sum-server.100xdevs.com/todos');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const { todos } = await response.json();
      setTodos(todos);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();  

    const intervalId = setInterval(fetchData, 10000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="App">
      {isLoading && <p>Loading todos...</p>}
      {error && <p>Error fetching todos: {error}</p>}
      {!isLoading && !error && todos.length > 0 && (
        <ul>
          {todos.map((todo) => (
            <Todo key={todo.id} title={todo.title} desc={todo.description} />
          ))}
        </ul>
      )}
      {!isLoading && !error && todos.length === 0 && <p>No todos found.</p>}
    </div>
  );
}

export default App;
