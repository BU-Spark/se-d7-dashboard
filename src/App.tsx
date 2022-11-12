import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link, Router, Routes} from 'react-router-dom';
import Openingsreen from './screens/Openingsreen';
import Addresswarningscreen from './screens/Addresswarningscreen';

import Addressentryscreen from './screens/Addressentryscreen';
import Loginscreen from './screens/Loginscreen';
import Userprofilescreen from './screens/Userprofilescreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/opening" element={<Openingsreen/>} />
          <Route path="/address-warning" element={<Addresswarningscreen/>} />
          <Route path="/address-entry" element={<Addressentryscreen/>} />
          <Route path="/login" element={<Loginscreen/>} />
          <Route path="/user-profile" element={<Userprofilescreen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
