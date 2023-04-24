import React from 'react';
// import Login from './Login';
import {Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from 'react-bootstrap';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Navbarr from './components/Navbar';
import AddReminder from './pages/AddReminder';
import HomePage from './pages/Home';
// import { getDatabase, ref, set } from "firebase/database";
// import firebase from "./firebase";


function App() {
  return (
    <div>
      <Navbarr />
    <Routes>
      <Route path='/Home' element={<HomePage />} />
      <Route path="/addreminder" element={<AddReminder />}/>
      <Route path="/signuppage" element={<SignupPage />}/>
      <Route path="/loginpage" element={<LoginPage />}/>
    </Routes>
    </div>
  );
}

export default App;
