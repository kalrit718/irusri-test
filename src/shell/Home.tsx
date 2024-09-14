import './Home.css';
import { Todo } from '@context/TodoContext';
import { useTodo } from '@hooks/useTodo';
import TodoCard from '@components/TodoCard/TodoCard';
import AddTaskButton from '@components/AddTaskButton/AddTaskButton';

export default function Home() {

  const { todos } = useTodo();
  
  return (
    <div className='home-shell d-flex flex-column'>
      <div className='add-task-wrapper p-2 pb-3 d-flex justify-content-end'>
        <AddTaskButton />
      </div>

      <div className='todo-list-wrapper d-flex flex-wrap justify-content-center'>
        {
          todos.map((todo: Todo) => {
            return <TodoCard key={todo.id} todo={todo} />
          })
        }
      </div>
    </div>
  );
}
