import './App.css'
import { Outlet } from 'react-router-dom'
import { TodoProvider } from '@context/TodoContext'
import BackgroundDecorationLines from '@components/BackgroundDecorationLines/BackgroundDecorationLines'
import NavigationBar from '@components/NavigationBar/NavigationBar'

function App() {

  return (
    <>
      <BackgroundDecorationLines />
      <NavigationBar />
      <TodoProvider>
        <Outlet />
      </TodoProvider>
    </>
  )
}

export default App
