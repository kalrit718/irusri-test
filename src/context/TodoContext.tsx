import React, { createContext, useEffect, useState } from 'react';
import { addTodoTask, editTodoTask, fetchTodoList, removeTodoTask } from '@services/TodoListService';

export interface Todo {
  id: number;
  title: string;
  task: string;
  done: boolean;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string, task: string) => void;
  editTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: {children: React.ReactNode}) => {
  const localTodo: string | null = localStorage.getItem('todos');

  const [todos, setTodos] = useState<Todo[]>(localTodo ? JSON.parse(localTodo) : []);

  useEffect(() => {
    if (!localTodo) {
      fetchTodoList()
        .then((todoList: Todo[]) => setTodos(todoList))
        .catch((error: Error) => console.error(`[ERROR] : ${error.message}`));
    }
  }, []);

  useEffect(() => {
    if (todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);  

  const addTodo = (todoTitle: string, todoTask: string) => {
    addTodoTask({id: Date.now(), title: todoTitle, task: todoTask, done: false})
      .then((todo: Todo) => setTodos(prev => [...prev, todo]))
      .catch((error: Error) => console.error(`[ERROR] : ${error.message}`));
  };

  const editTodo = (todo: Todo) => {
    editTodoTask(todo)
      .then((editedTodo: Todo) => {
        const index: number = todos.findIndex(todo => todo.id === editedTodo.id);
        if (index !== -1) {
          const updatedTodos = [...todos];
          updatedTodos[index] = {
            ...updatedTodos[index],
            title: editedTodo.title,
            task: editedTodo.task,
            done: editedTodo.done
          }
          setTodos(updatedTodos);
        }
        else {
          throw new Error('An unexpected error occured!');
        }
      })
      .catch((error: Error) => console.error(`[ERROR] : ${error.message}`));
  };

  const removeTodo = (id: number) => {
    removeTodoTask(id)
      .then((id: number) => setTodos(prev => prev.filter(todo => todo.id !== id)))
      .catch((error: Error) => console.error(`[ERROR] : ${error.message}`));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, editTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
