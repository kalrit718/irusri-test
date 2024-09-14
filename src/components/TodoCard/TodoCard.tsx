import './TodoCard.css';
import { Card } from 'react-bootstrap';
import { Todo } from '@context/TodoContext';
import { useTodo } from '@hooks/useTodo';

interface TodoCardProps {
  todo: Todo
}

export default function TodoCard({ todo }: TodoCardProps) {

  const { removeTodo } = useTodo();
  
  return (
    <Card className='todo-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 m-2'>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
          { todo.title }
          <span onClick={() => removeTodo(todo.id)} className='close-btn text-danger'>X</span>
        </Card.Title>
        <Card.Text>
          {todo.task}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
