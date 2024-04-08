import React, { Fragment } from 'react';
import classes from './TodoCompleted.module.css';

const TodoCompleted = (props) => {

  return (
    <Fragment>
      <h1>{props.title}</h1>
    </Fragment>
  );
};

export default TodoCompleted;
