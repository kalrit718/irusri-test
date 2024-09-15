import './RegistrationForm.css';
import { Button, Form, Modal } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useAuth } from '@hooks/useAuth';
import { User } from '@context/AuthContext';


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format!')
    .required('Email is required!'),
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters!')
    .required('Name is required!'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters!')
    .required('Password is required!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords does not match!')
    .required('Confirm Password is required!')
});

export default function RegistrationForm() {
  const { register } = useAuth();

  return (
    <div className='registration-form d-flex justify-content-around align-items-center'>
      <Formik 
        initialValues={{
          email: '',
          name: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={validationSchema} 
        onSubmit={(values, { setSubmitting }) => {
          register({ name: values.name, email: values.email } as User, values.confirmPassword);
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
          <Modal.Dialog className='registration-form-modal p-3 border rounded-3'>
            <Form onSubmit={handleSubmit}>
              <Modal.Header>
                <Modal.Title>Sign Up</Modal.Title>
              </Modal.Header>
              
              <Modal.Body className='mt-3'>
                <Form.Group className='mb-3' controlId='registration-form-email'>
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
                <Form.Group className='mb-3' controlId='registration-form-name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type='text' 
                    name='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    isInvalid={touched.name && errors.name !== ''}
                  />
                  {
                    touched.name && errors.name && (
                      <Form.Control.Feedback type='invalid'>
                        {errors.name}
                      </Form.Control.Feedback>
                    )
                  }
                </Form.Group>
                <Form.Group className='mb-3' controlId='registration-form-password'>
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
                <Form.Group className='mb-3' controlId='registration-form-password-confirm'>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control 
                    type='password' 
                    name='confirmPassword'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    isInvalid={touched.confirmPassword && errors.confirmPassword !== ''}
                  />
                  {
                    touched.confirmPassword && errors.confirmPassword && (
                      <Form.Control.Feedback type='invalid'>
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    )
                  }
                </Form.Group>
              </Modal.Body>
              
              <Modal.Footer>
                <Button variant='primary' type='submit' disabled={isSubmitting}>Sign Up</Button>
              </Modal.Footer>
            </Form>
          </Modal.Dialog>
        )}
      </Formik>
      <div className='w-50 d-none d-lg-block'></div>
    </div>
  );
}
