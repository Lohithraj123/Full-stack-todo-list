import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { IoMdDoneAll } from 'react-icons/io';
import classes from './TodoList.module.css';
import Link from 'next/link';
import TodoDelete from './TodoDelete';

const TodoList = () => {
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
          <Link href='todo-completed'>
            <IoMdDoneAll />
          </Link>
          <TodoDelete />
          <Link href="edit/id">
            <FaEdit />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
