//@ts-nocheck
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import  './Component10.css';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];



const Component10 = () => {

  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    const newTodo = {
      id: nextId++,
      title: title,
      done: false
    }
    setTodos([
      ...todos, newTodo
    ])
  }

  function handleChangeTodo(nextTodo) {
    
    const todo = todos.find(t =>
      t.id === nextTodo.id                       
    );
    let index = todos.indexOf(todo);

    const todosCopy = [...todos];
    const todoCopy = Object.assign({}, todo);
   
    todoCopy.title = nextTodo.title;
    todoCopy.done = nextTodo.done;
    todosCopy[index] = todoCopy;
    
    setTodos(
      todosCopy
    )
  }

  function handleDeleteTodo(todoId) {
    const index = todos.findIndex(t =>
      t.id === todoId
    );
    
    const todosCopy = [...todos];
    todosCopy.splice(index, 1);
    setTodos(
      todosCopy
    )
    
  }
  


  return (

    <div className='wrapper'>

      <NavLink to="/" className='backToStartLink'>Go to StartPage</NavLink>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
      
    

    </div>
  )
}

export default Component10;






//-----------------------------------------------------------------------------------
function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Add</button>
    </>
  )
}




//-----------------------------------------------------------------------------------
function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo
}) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Task
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={e => {
          onChange({
            ...todo,
            done: e.target.checked
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </label>
  );
}



