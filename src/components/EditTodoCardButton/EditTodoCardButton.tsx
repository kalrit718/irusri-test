import './EditTodoCardButton.css';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Todo } from '@context/TodoContext';
import { useTodo } from '@hooks/useTodo';
import EditButton from '/src/assets/edit-button.svg'; 

interface EditTodoCardButtonProps {
  todo: Todo
}

export default function EditTodoCardButton({ todo }: EditTodoCardButtonProps) {

  const [showForm, setShowForm] = useState(false);
  const { editTodo } = useTodo();

  const handleClose = () => setShowForm(false);
  const handleShow = () => setShowForm(true);
  
  const onSubmit = () => {
    const newTaskTitle: string = (document.getElementById('new-task-title') as HTMLInputElement).value;
    const newTask: string = (document.getElementById('new-task') as HTMLTextAreaElement).value;
    
    editTodo({ id: todo.id, title: newTaskTitle, task: newTask });
    handleClose();
  }

  return (
    <>
      <div onClick={handleShow}>
        <img src={EditButton} className='edit-button' title='Edit' />
      </div>
      <Modal show={showForm} onHide={handleClose} centered>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group className='mb-3' controlId='new-task-title'>
                <Form.Label>ToDo Task Title</Form.Label>
                <Form.Control type='text' defaultValue={todo.title} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='new-task'>
                <Form.Label>ToDo Task</Form.Label>
                <Form.Control as='textarea' rows={3} defaultValue={todo.task} />
              </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='muted' onClick={handleClose}>
              Discard
            </Button>
            <Button variant='secondary' onClick={onSubmit}>
              Save Task
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
