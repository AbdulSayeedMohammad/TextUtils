import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Textareas from "./components/Textareas.js";
import Alert from "./components/Alert.js";
import About from "./components/About.js";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [msg, setMsg] = useState("Enable Dark mode");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (mssg, type) => {
    setAlert({
      msg: mssg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const removebackgroudcolor=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-info');
  }
  const togglemode = (clas) => {
    removebackgroudcolor();
    document.body.classList.add("bg-"+clas);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor='#1b384d';
      setMsg("Enable Light mode");
      showAlert("Dark mode has been enabled", "success");
    } 
    else
    {
      setMode("light");
      document.body.style.backgroundColor='white';
      setMsg("Enable Dark mode");
      showAlert("blue mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        togglemode={togglemode}
        msg={msg}
      />
      <Alert alert={alert} />
      <Router>
        <Switch>
          <Route path="/about">
            <main className="container mt-5">
            <About mode={mode} />
            </main>
          </Route>
          <Route path="/">
          <main className="container mt-5">
            <Textareas showAlert={showAlert} head="Enter your Text Here" mode={mode}/>
            </main>
          </Route>
        </Switch>
      </Router>
      </>

  );
}

export default App;
