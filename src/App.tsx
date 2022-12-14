import React, {useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link, Router, Routes} from 'react-router-dom';
import OpeningScreen from './screens/Welcome';
import AddressWarningScreen from './screens/AdressInfo';
import SignUpScreen from './screens/Register';
import AddressEntryScreen from './screens/AddressVerify';
import LoginScreen from './screens/Login';
import UserProfileScreen from './screens/Profile';
import ChooseInterestScreen from './screens/Interests';
import CalendarScreen from './screens/Home';
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
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/signup" element={<SignUpScreen/>} />
          <Route path="/calendar" element={<CalendarScreen/>} />
          <Route path="/" element={<OpeningScreen/>} />
          <Route path="/address-warning" element={<AddressWarningScreen/>} />
          <Route path="/address-entry" element={<AddressEntryScreen/>} />
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/user-profile" element={<UserProfileScreen/>} />
          <Route path="/choose-interest" element={<ChooseInterestScreen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
