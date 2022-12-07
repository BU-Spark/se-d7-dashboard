import React, { useState, useEffect } from "react";
import { Button } from "@patternfly/react-core";
import { useNavigate } from 'react-router-dom';

function Openingscreen () {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
    console.log("User already logged in: ", user);
  }, []);
  
  const navigateToNext = () => {
    navigate('/login');
  };

  const navigateToSignUp = () => {
    navigate('/address-warning');
  };
  
    return (
      <div className="container">
        <div className="mb-5 pf-c-title h1">Welcome to the District 7 Boston Citizen’s App</div>
        <div className="pt-5 h6 mb-2"> Please confirm you are a resident of District 7 </div>
        <Button onClick={navigateToNext} className="px-5 py-1 mb-2" style={{width:"260px"}} variant="primary">
        I am a resident of D7
        </Button>
        <Button onClick={navigateToSignUp} className="px-5 py-1" style={{width:"260px"}} variant="secondary">
        Find out
        </Button>
        
        
      </div>
    );
  
}

export default Openingscreen;