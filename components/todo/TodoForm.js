import React, { useRef } from 'react';
import classes from './TodoForm.module.css';
import Card from '../ui/Card';
import { useRouter } from 'next/router';

const TodoFormList = (props) => {
  const todoInputRef = useRef();
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTodo = todoInputRef.current.value;

    const todoData = { todo: enteredTodo };

    props.addTodo(todoData);
    todoInputRef.current.value = '';
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className={classes.form} method="POST">
        <div className={classes.todo}>
          <input
            placeholder="Enter the Todo"
            type="text"
            required
            id="todo"
            ref={todoInputRef}
          />
        </div>
        <div>
          <button className={classes.btn}>Add Todo</button>
        </div>
      </form>
    </Card>
  );
};

export default TodoFormList;
