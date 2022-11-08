import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link, Router, Routes} from 'react-router-dom';
import Openingsreen from './screens/Openingsreen';
import Addresswarningscreen from './screens/Addresswarningscreen';

import Addressentryscreen from './screens/Addressentryscreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/opening" element={<Openingsreen/>} />
          <Route path="/address-warning" element={<Addresswarningscreen/>} />
          <Route path="/address-entry" element={<Addressentryscreen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
