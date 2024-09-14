import './App.css'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthProvider } from '@context/AuthContext'
import { TodoProvider } from '@context/TodoContext'
import { useAuth } from '@hooks/useAuth'
import BackgroundDecorationLines from '@components/BackgroundDecorationLines/BackgroundDecorationLines'
import NavigationBar from '@components/NavigationBar/NavigationBar'

export default function App() {

  return (
    <>
      <BackgroundDecorationLines />
      <AuthProvider>
        <NavigationBar />
        <TodoProvider>
          <PrivateOutlet />
        </TodoProvider>
      </AuthProvider>
    </>
  )
}

const PrivateOutlet = () => {
  const { token } = useAuth();
  if (!token) return <Navigate to="/Login" />;
  return <Outlet />;
};
