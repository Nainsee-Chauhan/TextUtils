import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
     setAlert({
      msg : message,
      type : type
     })
     setTimeout(()=>{
      setAlert(null);
     }, 1000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <>
     <Navbar title = "TextUtils" about= "About" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className = "container my-3">
     <TextForm showAlert={showAlert} heading = "Enter the text to analyse below" mode={mode}/>
     </div>
    </>
  );
}

export default App;
