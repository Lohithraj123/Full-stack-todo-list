import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/layout/Layout';
import TodoForm from './todo-form';
import { useState } from 'react';
import TodoFormList from '@/components/todo/TodoForm';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todoData) => {
    setTodos((prevTodos) => [...prevTodos, todoData]);
  };

  return (
    <div>
      <TodoFormList addTodo={addTodoHandler} todos={todos} />
    </div>
  );
}
