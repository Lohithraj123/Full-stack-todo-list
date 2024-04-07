import React from 'react'
import classes from './TodoCompleted.module.css'

const TodoCompleted = () => {
      const DUMMY_DATA = [
        {
          todo: 'Finish the sharpener Task',
        },
      ];

  return (
    <div className={classes.items}>
      {DUMMY_DATA.map((item, index) => (
        <div key={index} className={classes.mappedItems}>
          <p>{item.todo}</p>
        </div>
      ))}
    </div>
  );
}

export default TodoCompleted