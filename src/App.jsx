import { useState } from 'react'
import './App.css'
import { FaTrash } from 'react-icons/fa6'


function App() {
  const [values, setValue] = useState("")
  const [todo,setTodo] = useState([])

  function addTodo(){
      if(values === "") return alert("Please enter the text..")
      setTodo([{id:Date.now(), text:values, completed:false}, ...todo])
      setValue("")
  }

  const deletes = (id) =>{
      setTodo(todo.filter(todos =>todos.id !== id))
  }
  
  return (
  <div className="todo-container">
    <h2>Todo App</h2>

    {/* input todo */}
    <div className="todo-input">
      <input
        type="text"
        value={values}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your task..."
      />
      <button onClick={addTodo}>Add</button>
    </div>

    {/* display todo */}
    <div className="todo-list">
      {todo.map((todos) => (
        <div className="todo-item" key={todos.id}>
          <h1>{todos.text}</h1>
          <button onClick={() => deletes(todos.id)}>
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  </div>
);
}

export default App
