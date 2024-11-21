import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Help</li>
    </nav>

    <div>Lorem ipsum dolor sit.</div>
    </>
  )
}

export default App
