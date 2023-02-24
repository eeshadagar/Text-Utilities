import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom";
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
      if( mode === 'light' ){
        setMode('dark');
        document.body.style.backgroundColor = "#1b2127";
        document.body.style.color = "white";
        showAlert("dark mode has been enabeled", "success")
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = "white";
        document.body.style.color = "#1b2127";
        showAlert("light mode has been enabeled", "success")
      }
  }
  return (
    <>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode}/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
