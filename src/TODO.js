// import React,{useEffect, useState} from 'react'
// import Header from './components/Header'
// import './TODO.css'
// import Form from './components/Form'
// import TodoList from './components/TodoList'

// function TODO() {
//     const initialState=JSON.parse(localStorage.getItem("todos")) || [];
//     const [input,setInput]=useState("");
//     const [Todos,setTodos]=useState(initialState);
//     const [editTodo,setEditTodo] =useState(null);
//     useEffect (()=>{
//         localStorage.setItem("todos", JSON.stringify(Todos));
//     },[Todos]);

//   return (
//     <div className='container'>
// <div className='app-wrapper'>
//     <div>

//         <Header />
        
//     </div>
//     <div>
//         <Form
//         input={input}
//         setInput={setInput}
//         Todos={Todos}
//         setTodos={setTodos}
//         editTodo={editTodo}
//         setEditTodo={setEditTodo}
//         />
//     </div>
//     <div>
//         <TodoList Todos={Todos} setTodos={setTodos} setEditTodo={setEditTodo} />
//     </div>
// </div>
      
//     </div>
//   )
// }

// export default TODO

import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import './TODO.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import axios from 'axios';

function TODO() {
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [input, setInput] = useState('');
  const [Todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(Todos));
  }, [Todos]);

  // Function to handle updating a todo
  const updateTodo = async (id, updatedTodo) => {
    try {
      const response = await axios.put(`/api/todos/${id}`, updatedTodo);
      const updatedTodos = Todos.map(todo => {
        if (todo.id === id) {
          return response.data; // Replace the existing todo with the updated todo from the response
        }
        return todo;
      });
      setTodos(updatedTodos);
      setEditTodo(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            Todos={Todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList
            Todos={Todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
            updateTodo={updateTodo} // Pass the updateTodo function as a prop
          />
        </div>
      </div>
    </div>
  );
}

export default TODO;
