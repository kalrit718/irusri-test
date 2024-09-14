import './AddTaskButton.css';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useTodo } from '@hooks/useTodo';

export default function AddTaskButton() {

  const [showForm, setShowForm] = useState(false);
  const { addTodo } = useTodo();

  const handleClose = () => setShowForm(false);
  const handleShow = () => setShowForm(true);
  
  const onSubmit = () => {
    const newTaskTitle: string = (document.getElementById('new-task-title') as HTMLInputElement).value;
    const newTask: string = (document.getElementById('new-task') as HTMLTextAreaElement).value;
    
    addTodo(newTaskTitle, newTask);
    handleClose();
  }

  return (
    <>
      <Button variant='secondary' onClick={handleShow}>Add Task</Button>
      <Modal show={showForm} onHide={handleClose} centered>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Add New Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group className='mb-3' controlId='new-task-title'>
                <Form.Label>ToDo Task Title</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='new-task'>
                <Form.Label>ToDo Task</Form.Label>
                <Form.Control as='textarea' rows={3} />
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
