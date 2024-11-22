import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'

function App() {

  const [mode,setMode] = useState('light');


  return (
    <>
      <Navbar title="TextUtils" aboutText = "About us" mode={mode}/>

      <div className="container my-3">
        <TextForm heading="Enter the text to analyze!"/>
      </div>

      {/* <div className="container my-3">
        {/* <About/> */}
      {/* </div> */}
      

    </>
  )
}


export default App
