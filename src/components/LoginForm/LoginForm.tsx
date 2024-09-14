import './LoginForm.css';
import { Link } from 'react-router-dom';
import { Button, Form, Modal } from 'react-bootstrap';
import { useAuth } from '@hooks/useAuth';

export default function LoginForm() {

  const { login } = useAuth();
  
  const onSubmit = () => {
    const email: string = (document.getElementById('login-form-email') as HTMLInputElement).value;
    const password: string = (document.getElementById('login-form-password') as HTMLInputElement).value;
    
    login(email, password);
  }

  return (
    <div className='login-form d-flex justify-content-around align-items-center'>
      <Modal.Dialog className='login-form-modal p-3 border rounded-3'>
        <Modal.Header>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>

        <Modal.Body className='mt-3'>
          <Form>
            <Form.Group className='mb-3' controlId='login-form-email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='login-form-password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Link to='/Register'>
            <Button className='me-1' variant="secondary">Sign Up</Button>
          </Link>
          <Button variant='primary' onClick={onSubmit}>Sign In</Button>
        </Modal.Footer>
      </Modal.Dialog>
      <div className='w-50'></div>
    </div>
  );
}
