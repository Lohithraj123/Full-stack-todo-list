import TodoCompleted from '@/components/todo/TodoCompleted';
import React from 'react';

const todoComplete = () => {
  return <TodoCompleted title={props.todoData.title} />;
};

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { params: {
                todoId: 'm1'
            } },
            { params: {
                todoId: 'm2'
            } },
        ]
    }
}

export async function getStaticProps(context) {

    const todoId = context.params.todoId;

    console.log(todoId)

  return {
    props: {
      todoData: {
        title: 'Hello',
        id: todoId,
      },
    },
  };
}

export default todoComplete;
