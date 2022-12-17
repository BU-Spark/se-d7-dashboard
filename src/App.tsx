import React, {useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link, Router, Routes} from 'react-router-dom';
import Welcome from './screens/Welcome';
import AddressInfo from './screens/AdressInfo';
import Register from './screens/Register';
import AddressVerify from './screens/AddressVerify';
import Login from './screens/Login';
import UserProfileScreen from './screens/Profile';
import Interests from './screens/Interests';
import Home from './screens/Home';
import {initializeApp} from 'firebase/app';
import {config} from './config/config';
import '@patternfly/react-core/dist/styles/base.css';
import 'bootstrap/dist/css/bootstrap.css';


initializeApp(config.firebaseConfig);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Welcome/>} />
          <Route path="/address-info" element={<AddressInfo/>} />
          <Route path="/address-entry" element={<AddressVerify/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<UserProfileScreen/>} />
          <Route path="/interests" element={<Interests/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
