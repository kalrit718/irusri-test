import './Login.css';
import { AuthProvider } from '@context/AuthContext';
import BackgroundDecorationLines from '@components/BackgroundDecorationLines/BackgroundDecorationLines';
import LoginForm from '@components/LoginForm/LoginForm';

export default function Login() {
  
  return (
    <div className='login-shell'>
      <BackgroundDecorationLines />
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    </div>
  );
}
