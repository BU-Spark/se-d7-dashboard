import React, { useState } from "react";

import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button, Alert,TextInput } from "@patternfly/react-core";
import "bootstrap/dist/css/bootstrap.css";

export interface ILoginScreenProps {}

const Loginscreen: React.FunctionComponent<ILoginScreenProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  const Login = async () => {
    const user = {
      email,
      password,
    };
    setAuthing(true);

    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((response) => {
        console.log(response.user.uid);
        navigate("/user-profile");
      })
      .catch((error) => {
        setIsBannerVisible(true);
        setAuthing(false);
      });
  };

  const navigateToSignUp = () => {
    navigate("/address-warning");
  };

  return (
    <div className="container">
      <div className="mb-3 pf-c-title h4 text-start">Log In</div>
      <div className="text-start">Email</div>

      <TextInput
        className="px-2"
        id="textInput-basic-1"
        type="text"
        placeholder=""
        value={email}
        onChange={(e) => {
          setEmail(e);
        }}
      />
      <div className="text-start">Password</div>
      <TextInput
        className="px-2 mb-3"
        id="textInput-basic-1"
        placeholder=""
        value={password}
        onChange={(e) => {
          setPassword(e);
        }}
        type="password"
      />

      {isBannerVisible && 
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
