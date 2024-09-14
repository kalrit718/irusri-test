import React, { createContext, useEffect, useState } from 'react';
import { addTodoTask, fetchTodoList, removeTodoTask } from '@services/TodoListService';

export interface Todo {
  id: number;
  title: string;
  task: string;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string, task: string) => void;
  removeTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: {children: React.ReactNode}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodoList()
      .then((todoList: Todo[]) => setTodos(todoList))
      .catch((error: Error) => console.error(`[ERROR] : ${error.message}`));
  }, []);

  const addTodo = (todoTitle: string, todoTask: string) => {
    addTodoTask({id: Date.now(), title: todoTitle, task: todoTask})
      .then((todo: Todo) => setTodos(prev => [...prev, todo]))
      .catch((error: Error) => console.error(`[ERROR] : ${error.message}`));
  };

  const removeTodo = (id: number) => {
    removeTodoTask(id, true)
      .then((id: number) => setTodos(prev => prev.filter(todo => todo.id !== id)))
      .catch((error: Error) => console.error(`[ERROR] : ${error.message}`));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
