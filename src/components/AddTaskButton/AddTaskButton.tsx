import './AddTaskButton.css';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useTodo } from '@hooks/useTodo';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Required!'),
  task: Yup.string()
    .required('Required!')
});

export default function AddTaskButton() {

  const [showForm, setShowForm] = useState(false);
  const { addTodo } = useTodo();

  const handleClose = () => setShowForm(false);
  const handleShow = () => setShowForm(true);

  return (
    <>
      <Button variant='secondary' onClick={handleShow}>Add Task</Button>
      <Modal show={showForm} onHide={handleClose} centered>
        <Formik 
          initialValues={{
            title: '',
            task: ''
          }}
          validationSchema={validationSchema} 
          onSubmit={(values, { setSubmitting }) => {
            addTodo(values.title, values.task);
            setSubmitting(false);
            handleClose();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <Form onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>Add New Task</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Form.Group className='mb-3' controlId='new-task-title'>
                    <Form.Label>ToDo Task Title</Form.Label>
                    <Form.Control 
                      type='text' 
                      name='title' 
                      onChange={handleChange} 
                      onBlur={handleBlur} 
                      value={values.title} 
                      isInvalid={touched.title && errors.title !== ''} 
                    />
                    {
                      touched.title && errors.title && (
                        <Form.Control.Feedback type='invalid'>
                          {errors.title}
                        </Form.Control.Feedback>
                      )
                    }
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='new-task'>
                    <Form.Label>ToDo Task</Form.Label>
                    <Form.Control 
                      as='textarea' 
                      rows={3} 
                      name='task' 
                      onChange={handleChange} 
                      onBlur={handleBlur} 
                      value={values.task} 
                      isInvalid={touched.task && errors.task !== ''} 
                    />
                    {
                      touched.task && errors.task && (
                        <Form.Control.Feedback type='invalid'>
                          {errors.task}
                        </Form.Control.Feedback>
                      )
                    }
                  </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant='muted' onClick={handleClose}>
                  Discard
                </Button>
                <Button variant='secondary' type='submit' disabled={isSubmitting}>
                  Save Task
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
}
