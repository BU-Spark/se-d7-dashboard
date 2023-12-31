import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./screens/Welcome";
import AddressInfo from "./screens/AdressInfo";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Portal from "./screens/Portal";
import AllPosts from "./screens/AllPosts";
import GetResources from "./screens/resources/GetResources";
import SpecificResource from "./screens/resources/SpecificResource";
import "@patternfly/react-core/dist/styles/base.css";
import CalendarPage from "./screens/CalendarPage";
import { HeadBar } from "./components/HeadBar";
import { Signup } from "./screens/Signup";
import { RedirectRoute } from "./components/RedirectRoute";
// init firebase app
import { initializeApp } from "firebase/app";
import { config } from "./config/config";

initializeApp(config.firebaseConfig);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <RedirectRoute>
              <HeadBar />
              <Welcome />
            </RedirectRoute>
          } 
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
          <Route path="/signup/*" element={<Signup />} />
          <Route path="/home" element={
            <>
              <HeadBar />
              <Home />
            </>
          } />
          <Route path="/all-posts" element={
            <>
              <HeadBar />
              <AllPosts />
            </>
          } />
          <Route path="/calendar" element={
            <>
              <HeadBar />
              <CalendarPage />
            </>
          } />
          <Route path="/portal" element={
            <>
              <HeadBar />
              <Portal />
            </>
          } />
          <Route path="/getresources" element={
            <>
              <HeadBar />
              <GetResources />
            </>
          } />
          <Route path="/specific-resource" element={
            <>
              <HeadBar />
              <SpecificResource />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
