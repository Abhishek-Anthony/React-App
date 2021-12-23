
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
const [mode, setMode] = useState('light'); //whether dark mode is enable or not
const [alert, setAlert] = useState(null)
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 2000);

}
  const toggleMode = () =>{
    console.log("hellow")
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#0d2446';
      showAlert("Dark mode has been enabled" , "success")
      document.title='TextUtils-DarkMode'
    }
    else {
      setMode ('light')
      document.body.style.backgroundColor = 'white';
      showAlert("White mode has been enabled" , "success")
      document.title='TextUtils-LightmyMode'
      
    }
  
  }
  
  
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils"  Search="Search" mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert}/>
      <div className="container">
      {/* <Switch> */}
      {/* use exact path to find exact location */}

          {/* <Route path="/about">
            <About />
          </Route>
          
          <Route path="/"> */}
          <TextForm showAlert={showAlert} head="Enter the Text To Analyze"  mode={mode} toggleMode={toggleMode}/>
            
          {/* </Route>
        </Switch> */}
        
        
        
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
