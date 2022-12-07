import React, { useState } from "react";

import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button, Alert } from "@patternfly/react-core";
import "bootstrap/dist/css/bootstrap.css";

export interface ILoginScreenProps {}

const Loginscreen: React.FunctionComponent<ILoginScreenProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoginErrorVisible, setIsBannerVisible] = useState(false);

  const Login = async () => {
    const user = {
      email,
      password,
    };

    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((response) => {
        console.log(response.user.getIdToken());
        localStorage.setItem("user", JSON.stringify(response.user));
        navigate("/user-profile");
      })
      .catch((_) => {
        setIsBannerVisible(true);
      });
  };

  const navigateToSignUp = () => {
    navigate("/address-warning");
  };

  return (
    <div className="container">
      <div className="mb-3 pf-c-title h4 text-start">Log In</div>
      <div className="text-start">Email</div>

      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        className="input-text mb-3"
        placeholder=""
      />
      <div className="text-start">Password</div>
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        className="input-text mb-3"
        placeholder=""
      />

      {isLoginErrorVisible && 
      (<Alert variant="danger" title="Login Failed" />)}
      <br />

      <Button
        className="px-5 py-1 mb-2"
        style={{ width: "260px" }}
        variant="primary"
        onClick={Login}
      >
        Log In
      </Button>
      <div className="center-wrapper">
        <div className="wrapper">
          <div className="page-login-line"></div>
        </div>
      </div>
      <div className="mb-2">Don’t have an account?</div>

      <Button
        className="px-5 py-1"
        style={{ width: "260px" }}
        variant="secondary"
        /*onClick={SignUp}*/ onClick={navigateToSignUp}
      >
        Sign up
      </Button>
    </div>
  );
};

export default Loginscreen;
