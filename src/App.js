import React from "react";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Login from './components/login';
import Signup from "./components/signup";
import Home from './components/home';
import Navbar from "./components/navbar";
function App() {

  
  return (
    
    
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/'  Component={Home}/>
        <Route path='/signup'Component={Signup}/>
        <Route path='/login' Component={Login}/>
      </Routes>
      </Router>
    </div>
    
   
  
  );
}

export default App;
