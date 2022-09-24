import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = () => {
   if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#161c3b';
    showAlert("Dark mode has been enabled", "success")
  }
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success")
  }
}
  return (
    <>
    <Router>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
     <div className="container my-3">
     <Routes>
        <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Textutils - Word counter, Character counter, remove extra spaces" mode={mode}/>} />
      </Routes>
      {/* <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/">
           <TextForm heading="Enter the text to analyse" mode={mode}/>
          </Route>
     </Switch> */}
     </div>
     </Router>
     </>
  );
}

export default App;
