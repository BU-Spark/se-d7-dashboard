import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./screens/welcome/Welcome";
import AddressInfo from "./screens/adressInfo/AdressInfo";
import ContactInfo from "./screens/register/ContactInfo";
import AddressVerify from "./screens/addressVerify/AddressVerify";
import Login from "./screens/login/Login";
import UserProfileScreen from "./screens/Profile";
import Interests from "./screens/Interests";
import Home from "./screens/Home";
import Portal from "./screens/Portal";
import AllPosts from "./screens/AllPosts";
import GetResources from './screens/resources/GetResources';
import SpecificResource from './screens/resources/SpecificResource';
import "@patternfly/react-core/dist/styles/base.css";
import "bootstrap/dist/css/bootstrap.css";
import AllAnnouncements from "./screens/AllAnnouncements";

// init firebase app
import { initializeApp } from "firebase/app";
import { config } from "./config/config";

initializeApp(config.firebaseConfig);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/contact-info" element={<ContactInfo/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Welcome/>} />
          <Route path="/address-info" element={<AddressInfo/>} />
          <Route path="/address-entry" element={<AddressVerify/>} />
          <Route path="/profile" element={<UserProfileScreen/>} />
          <Route path="/interests" element={<Interests/>} />
          <Route path="/portal" element={<Portal/>} /> 
          <Route path="/getresources" element={<GetResources/>} />
          <Route path="/all-posts" element={<AllPosts />} />
          <Route path="/all-announcements" element={<AllAnnouncements/>} />
          <Route path="/specific-resource" element={<SpecificResource/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
