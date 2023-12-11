import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./screens/Welcome";
import AddressInfo from "./screens/AdressInfo";
import AddressVerify from "./screens/AddressVerify";
import Login from "./screens/Login";
import UserProfileScreen from "./screens/Profile";
import Interests from "./screens/Interests";
import Home from "./screens/Home";
import Portal from "./screens/Portal";
import AllPosts from "./screens/AllPosts";
import GetResources from "./screens/resources/GetResources";
import SpecificResource from "./screens/resources/SpecificResource";
import "@patternfly/react-core/dist/styles/base.css";
import CalendarPage from "./screens/CalendarPage";
import { HeadBar } from "./components/HeadBar";
import { HeadBarWithBtn } from "./components/HeadBarWithBtn";


// init firebase app
import { initializeApp } from "firebase/app";
import { config } from "./config/config";
import ContactInfo from "./screens/ContactInfo";

initializeApp(config.firebaseConfig);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <HeadBar />
              <Welcome />
            </>} 
          />
          <Route path="/login" element={
            <>
              <HeadBar/>
              <Login />
            </>} 
          />
          <Route path="/address-info" element={
            <>
              <HeadBar/>
              <AddressInfo />
            </>
            } 
          />
          <Route path="/address-entry" element={
            <>
              <HeadBar/>
              <AddressVerify />
            </>
            } 
          />
          <Route path="/profile" element={
            <>
              <UserProfileScreen />
            </>
          } />
          <Route path="/interests" element={
            <>
              <HeadBar/>
              <Interests />
            </>
          } />
          <Route path="/home" element={
            <>
              <HeadBarWithBtn />
              <Home />
            </>
          } />
          <Route path="/all-posts" element={
            <>
              <HeadBarWithBtn />
              <AllPosts />
            </>
          } />
          <Route path="/calendar" element={
            <>
              <HeadBarWithBtn />
              <CalendarPage />
            </>
          } />
          <Route path="/portal" element={
            <>
              <HeadBarWithBtn />
              <Portal />
            </>
          } />
          <Route path="/getresources" element={
            <>
              <HeadBarWithBtn />
              <GetResources />
            </>
          } />
          <Route path="/contact-info" element={
            <>
              <HeadBarWithBtn />
              <ContactInfo />
            </>
          } />
          <Route path="/specific-resource" element={
            <>
              <HeadBarWithBtn />
              <SpecificResource />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
