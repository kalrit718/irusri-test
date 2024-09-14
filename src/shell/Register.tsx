import './Register.css';
import { AuthProvider } from '@context/AuthContext';
import BackgroundDecorationLines from '@components/BackgroundDecorationLines/BackgroundDecorationLines';
import RegistrationForm from '@components/RegistrationForm/RegistrationForm';

export default function Register() {
  
  return (
    <div className='register-shell'>
      <BackgroundDecorationLines />
      <AuthProvider>
        <RegistrationForm />
      </AuthProvider>
    </div>
  );
}
