import './TodoCard.css';
import { Card, Form } from 'react-bootstrap';
import { Todo } from '@context/TodoContext';
import { useTodo } from '@hooks/useTodo';
import EditTodoCardButton from '@components/EditTodoCardButton/EditTodoCardButton';
import DeleteButton from '/src/assets/delete-button.svg'; 
import React from 'react';

interface TodoCardProps {
  todo: Todo
}

export default function TodoCard({ todo }: TodoCardProps) {

  const { editTodo, removeTodo } = useTodo();
  
  const handleCheckChange = (e: React.ChangeEvent) => {
    const changedTodo: Todo = {
      id: todo.id,
      title: todo.title,
      task: todo.task,
      done: (e.target as HTMLInputElement).checked
    };
    editTodo(changedTodo);
  };

  return (
    <Card className='todo-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 m-2'>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
          <div className='d-flex'>
            <Form.Check type='checkbox' defaultChecked={todo.done} onChange={handleCheckChange} className='me-2' />
            { todo.title }
          </div>
          <div className='d-flex'>
            <EditTodoCardButton key={todo.id} todo={todo} />
            <img src={DeleteButton} onClick={() => removeTodo(todo.id)} className='close-btn' title='Delete' />
          </div>
        </Card.Title>
        <Card.Text>
          {todo.task}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
