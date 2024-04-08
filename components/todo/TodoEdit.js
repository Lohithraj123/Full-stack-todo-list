import React, { useRef } from 'react';
import classes from './TodoEdit.module.css';
import Card from '../ui/Card';

const TodoEdit = (props) => {
  const todoInputRef = useRef();



  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.todo}>
          <input
            type="text"
            required
            id="title"
            ref={todoInputRef}
          />
        </div>
        <div>
          <button className={classes.btn}>Update Todo</button>
        </div>
      </form>
    </Card>
  );
};

export default TodoEdit;
