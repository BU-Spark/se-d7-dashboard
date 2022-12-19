import React, { useState, useEffect } from "react";
import { Button, ContextSelectorFooter } from "@patternfly/react-core";
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      // Don't set user if it is undefined
      if (foundUser != undefined) {
        setUser(foundUser);
        console.log("User is logged in");
        console.log(foundUser.email);
        navigate("/home");
      }
    }
  }, []);
  
  const navigateToNext = () => {
    navigate('/login');
  };

  const navigateToSignUp = () => {
    navigate('/address-info');
  };
  
    return (
      <div className="container-padded">
        <div className="mb-5 pb-5 welcome-title">Welcome to the District 7 Boston Citizen’s App</div>
        <div className="mt-5 pt-5 h6 mb-2"> Please confirm you are a resident of District 7 </div>
        <Button onClick={navigateToNext} className="px-5 py-1 mb-2"variant="primary">
        I am a resident of D7
        </Button>
        <Button onClick={navigateToSignUp} className="px-5 py-1" variant="secondary">
        Find out
        </Button>
      </div>
    );
  
}

export default Welcome;