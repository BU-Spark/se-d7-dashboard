import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link, Router, Routes} from 'react-router-dom';
import OpeningScreen from './screens/OpeningScreen';
import AddressWarningScreen from './screens/AddressWarningScreen';

import AddressEntryScreen from './screens/AddressEntryScreen';
import LoginScreen from './screens/LoginScreen';
import UserProfileScreen from './screens/UserProfileScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen/>} />
          <Route path="/opening" element={<OpeningScreen/>} />
          <Route path="/address-warning" element={<AddressWarningScreen/>} />
          <Route path="/address-entry" element={<AddressEntryScreen/>} />
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/user-profile" element={<UserProfileScreen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
