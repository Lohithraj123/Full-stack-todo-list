import React, { useState } from 'react';
import TodoFormList from '@/components/todo/TodoForm';

const TodoForm = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todoData) => {
    setTodos((prevTodos) => [...prevTodos, todoData]);
  };

  return (
    <div>
      <TodoFormList addTodo={addTodoHandler} todos={todos} />
    </div>
  );
};

export default TodoForm;
