import './RegistrationForm.css';
import { Button, Form, Modal } from 'react-bootstrap';
import { useAuth } from '@hooks/useAuth';
import { User } from '@context/AuthContext';

export default function RegistrationForm() {
  const { register } = useAuth();
  
  const onSubmit = () => {
    const email: string = (document.getElementById('registration-form-email') as HTMLInputElement).value;
    const name: string = (document.getElementById('registration-form-name') as HTMLInputElement).value;
    const password: string = (document.getElementById('registration-form-password') as HTMLInputElement).value;
    
    register({ name: name, email: email } as User, password);
  }

  return (
    <div className='registration-form d-flex justify-content-around align-items-center'>
      <Modal.Dialog className='registration-form-modal p-3 border rounded-3'>
        <Modal.Header>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>

        <Modal.Body className='mt-3'>
          <Form>
            <Form.Group className='mb-3' controlId='registration-form-email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='registration-form-name'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='registration-form-password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='registration-form-password-confirm'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type='password' />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='primary' onClick={onSubmit}>Sign Up</Button>
        </Modal.Footer>
      </Modal.Dialog>
      <div className='w-50'></div>
    </div>
  );
}
