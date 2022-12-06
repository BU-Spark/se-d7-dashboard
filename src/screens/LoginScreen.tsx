import React, { useState } from "react";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Checkbox, TextInput, Button, Banner } from "@patternfly/react-core";
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
        console.log(error);
        setAuthing(false);
      });
  };

  const navigateToSignUp = () => {
    navigate("/address-warning");
  };

  const SignUp = async () => {
    const user = {
      email,
      password,
    };

    console.log(user);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error);
    }
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

      <br />
      {isBannerVisible && (
        <Banner
          variant="danger"
          title="Error"
          className="mb-3"
          aria-live="polite"
        >
          <p>Incorrect username/password</p>
        </Banner>
      )}

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
