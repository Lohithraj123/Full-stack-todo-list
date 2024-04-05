import React, { useRef } from 'react';
import Card from '../ui/Card';

const TodoFormList = (props) => {
  const todoInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTodo = todoInputRef.current.value;

    const todoData = { todo: enteredTodo };

    props.addTodo(todoData);
    todoInputRef.current.value = '';
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="todo">Todo's</label>
          <input
            placeholder="Enter the Todo"
            type="text"
            required
            id="todo"
            ref={todoInputRef}
          />
        </div>
        <div>
          <button>Add Todo</button>
        </div>
      </form>
      <ul>
        {props.todos.map((todo, index) => (
          <li key={index}>{todo.todo}</li>
        ))}
      </ul>
    </Card>
  );
};

export default TodoFormList;
