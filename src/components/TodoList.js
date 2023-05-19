import React from 'react'

function TodoList({ Todos, setTodos,setEditTodo }) {
    const handleDelete = ({id})=>{
        setTodos(Todos.filter((Todo)=>Todo.id !== id));
    }
    const handleComplete =(Todo)=>{
      setTodos(
        Todos.map((item)=>{
            if(item.id === Todo.id){
                return {...item,completed: !item.completed};
            }
            return item;
        })
      )  

    }
    const handleEdit=({id})=>{
        const findTodo= Todos.find((Todo)=> Todo.id=== id);
        setEditTodo(findTodo);
    }
    return (
        <div>
            {Todos.map((Todo) => (
                <li className='list-item' key={Todo.id}>
                    <input type='text'
                        value={Todo.title}
                        className={`list ${Todo.completed ? "complete" : ""}  `}
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button className='button-complete task-button' onClick={()=>handleComplete(Todo)}>
                            <i className='fa fa-check-circle'></i>

                        </button>
                        <button className='button-edit task-button' onClick={()=>handleEdit(Todo)}>
                            <i className='fa fa-edit'></i>
                            
                        </button>
                        <button className='button-delete task-button' onClick={()=>handleDelete(Todo)}>
                            <i className='fa fa-trash'></i>
                            
                        </button>
                    </div>
                </li>
            ))}
        </div>
    )
}

export default TodoList
