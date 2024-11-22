
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import './App.css';
import SignUp from './Pages/SignUpPage.js'
import Login from './Pages/LoginPage.js'

function App() {

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link> 
          </li>
          <li>
            <Link to = '/signup'> SignUp</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact="true" path ="/" element = {<Login/>}>
        </Route>
        <Route  path ="/signup" element = {<SignUp/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;