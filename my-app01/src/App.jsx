import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alerts from './components/Alerts'

function App() {

 const [alert, setAlert] = useState(null);

 function showAlert(msg ,type){
    setAlert({
      message : msg,
      type : type
    })

    setTimeout(()=>{
      setAlert(null);
    },3000);
 }


  return (
    <>
      <Navbar title="TextUtils" aboutText = "About us"/>

      <Alerts Alert = {alert}/>

      <div className="container my-3">
        <TextForm heading="Enter the text to analyze!" showAlert={showAlert}/>
      </div>

      {/* <div className="container my-3">
        {/* <About/> */}
      {/* </div> */}
      

    </>
  )
}


export default App
