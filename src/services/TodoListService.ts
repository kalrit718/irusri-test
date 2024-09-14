import { Todo } from "@context/TodoContext";

export const fetchTodoList = async (): Promise<Todo[]> => {
  try {
    const response: Response = await fetch('/todolist.json');
    if (!response.ok) {
      throw new Error('An unexpected error occured!');
    }
    const todoList: Todo[] = await response.json();
    return todoList;
  }
  catch (error: Error | unknown) {
    if (error instanceof Error) {
      throw error;
    }
    else {
      throw new Error('An unexpected error occured!');
    }
  }
};

export const addTodoTask = async (todo: Todo, fail?: boolean): Promise<Todo> => {
  return new Promise((resolve, reject) => {
    if (!fail) {
      resolve(todo);
    }
    else {
      reject(new Error('Failed to add the task!'));
    }
  });
}

export const removeTodoTask = async (id: number, fail?: boolean): Promise<number> => {
  return new Promise((resolve, reject) => {
    if (!fail) {
      resolve(id);
    }
    else {
      reject(new Error('Failed to remove the task!'));
    }
  });
}
