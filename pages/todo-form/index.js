import React, { useState } from 'react';
import TodoFormList from '@/components/todo/TodoForm';

const TodoForm = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = async (enteredtodoList) => {
    try {
      const response = await fetch('/api/route-todo', {
        method: 'POST',
        body: JSON.stringify(enteredtodoList),
        headers: {
          'Content-type': 'application/json',
        },
      });
      const data = await response.json();

      console.log(data);
      
      setTodos((prevTodos) => [...prevTodos, response.data]);

      alert('Succesfully done');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div>
      <TodoFormList addTodo={addTodoHandler} todos={todos} />
    </div>
  );
};

export default TodoForm;
