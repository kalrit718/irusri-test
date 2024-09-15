import './LoginForm.css';
import { Link } from 'react-router-dom';
import { Button, Form, Modal } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useAuth } from '@hooks/useAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format!')
    .required('Email is required!'),
  password: Yup.string()
    .required('Password is required!')
});

export default function LoginForm() {

  const { login } = useAuth();

  return (
    <div className='login-form d-flex justify-content-around align-items-center'>
      <Formik 
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema} 
        onSubmit={(values, { setSubmitting }) => {
          login(values.email, values.password);
          setSubmitting(false);
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
          <Modal.Dialog className='login-form-modal p-3 border rounded-3'>
            <Form onSubmit={handleSubmit}>
              <Modal.Header>
                <Modal.Title>Sign In</Modal.Title>
              </Modal.Header>

              <Modal.Body className='mt-3'>
                <Form.Group className='mb-3' controlId='login-form-email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type='text' 
                    name='email' 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    value={values.email} 
                    isInvalid={touched.email && errors.email !== ''} 
                  />
                  {
                    touched.email && errors.email && (
                      <Form.Control.Feedback type='invalid'>
                        {errors.email}
                      </Form.Control.Feedback>
                    )
                  }
                </Form.Group>
                <Form.Group className='mb-3' controlId='login-form-password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type='password' 
                    name='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    isInvalid={touched.password && errors.password !== ''}
                  />
                  {
                    touched.password && errors.password && (
                      <Form.Control.Feedback type='invalid'>
                        {errors.password}
                      </Form.Control.Feedback>
                    )
                  }
                </Form.Group>
              </Modal.Body>

              <Modal.Footer>
                <Link to='/Register'>
                  <Button className='me-1' variant="secondary">Sign Up</Button>
                </Link>
                <Button variant='primary' type='submit' disabled={isSubmitting}>Sign In</Button>
              </Modal.Footer>
            </Form>
          </Modal.Dialog>
        )}
      </Formik>
      <div className='w-50  d-none d-lg-block'></div>
    </div>
  );
}
