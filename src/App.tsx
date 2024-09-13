// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import './App.css'
import BackgroundDecorationLines from '@components/BackgroundDecorationLines/BackgroundDecorationLines'
import NavigationBar from '@components/NavigationBar/NavigationBar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BackgroundDecorationLines />
      <NavigationBar />
      <Outlet />
    </>
  )
}

export default App
