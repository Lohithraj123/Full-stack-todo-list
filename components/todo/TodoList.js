import React from 'react';
import { MongoClient } from 'mongodb';
import { FaEdit } from 'react-icons/fa';
import { IoMdDoneAll } from 'react-icons/io';
import classes from './TodoList.module.css';
import Link from 'next/link';
import TodoDelete from './TodoDelete';

const TodoList = (props) => {
  const DUMMY_DATA = [
    {
      todo: 'Finish the sharpener Task',
    },
  ];

  const getStaticProps = async () => {
    const client = await MongoClient.connect(
      'mongodb+srv://mlohithraj5:nJWeEdXDix5J4O96@cluster0.vkj3gpn.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0',
    );
    const db = client.db();

    const todoCollection = db.collection('todo');

    const todoList = await todoCollection.find().toArray();
  

  return {
    // <div className={classes.items}>
    //   {DUMMY_DATA.map((item, index) => (
    //     <div key={index} className={classes.mappedItems}>
    //       <p>{item.todo}</p>
    //       <Link href="todo-completed">
    //         <IoMdDoneAll />
    //       </Link>
    //       <TodoDelete />
    //       <Link href="edit/id">
    //         <FaEdit />
    //       </Link>
    //     </div>
    //   ))}
    // </div>
    
      props: {
        todoList: todoList.map(todo => ({
          title: todo.title
        }))
      },
      revalidate: 1,
    }
  }
};

export default TodoList;
