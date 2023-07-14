import React, { useEffect } from "react";
import { Button } from "@patternfly/react-core";
import { useNavigate } from 'react-router-dom';
import styles from "./welcome.module.css";
import { title } from "process";
import WELCOME_BG from "../../assets/welcome_bg.png";

function Welcome() {
  const navigate = useNavigate();
  // const [user, setUser] = useState();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      // Don't set user if it is undefined
      if (foundUser != undefined) {
        // setUser(foundUser);
        console.log("User is logged in");
        console.log(foundUser.email);
        navigate("/home");
      }else{
        console.log("User not logged in");
      }
    }
    else{
      console.log('no exsisted user')
    }
  });
  
  const navigateToNext = () => {
    navigate('/login');
  };

  const navigateToSignUp = () => {
    navigate('/address-info');
  };
  
    return (
      <>
        <div className="welcome_bg">
          <div className="welcome_title">Welcome to the District 7 Boston Citizen’s App</div>
          <div className="bottom_section">
            <div className="mt-5 mb-4 welcome_hint"> Please confirm you are a resident of District 7 </div>
            <Button onClick={navigateToNext} className="welcome_button"variant="primary">
              I am a resident of D7
            </Button>
            <Button onClick={navigateToSignUp} className="welcome_button" variant="secondary">
              Find out
            </Button>
          </div>  
        </div>
        <img src={WELCOME_BG} className="welcome_bg"></img>
      </>
    );
  
}

export default Welcome;