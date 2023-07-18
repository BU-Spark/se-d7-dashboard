import React from "react";
import { Button } from "@patternfly/react-core";
import { useNavigate } from 'react-router-dom';
import { title } from "process";
import WELCOME_BG from "../../assets/welcome_bg.png";

function Welcome() {
  const navigate = useNavigate();
  
  const navigateToNext = () => {
    navigate('/login');
  };

  const navigateToSignUp = () => {
    navigate('/address-info');
  };
  
    return (
      <>
        <div className="bg" style={{
          background: `url(${WELCOME_BG}), lightgray 50% / cover no-repeat`
        }}>
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
      </>
    );
  
}

export default Welcome;