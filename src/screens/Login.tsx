import React, { useState } from "react";

import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
// Import firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { config } from '../config/config';
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Button, Alert, TextInput } from "@patternfly/react-core";

export interface Login { }


//client hit Log In button
const Login: React.FunctionComponent<Login> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoginErrorVisible, setIsBannerVisible] = useState(false);

  const app = initializeApp(config.firebaseConfig);
  const db = getFirestore(app);

  const Login = async () => {
    const user = {
      email,
      password,
    };
      
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(async (response) => {
        localStorage.setItem("user", JSON.stringify(response.user));
        console.log("Getting user data");
        let userData = await getDoc(doc(db, "user-profile", user.email));
        if (userData.exists()) {
          console.log("Document data:", userData.data());
          // Check if first name is set, if not, navigate to user profile
          if (userData.data().firstName) {
            navigate("/home");
          }
          else {
            navigate("/profile");
          }
        } else {
          navigate("/profile");
        }

      })
      .catch((e) => {
        console.log(e);
        setIsBannerVisible(true);
      });
  };

  const navigateToSignUp = () => {
    navigate("/address-info");
  };
  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <div className="container-padded">
      <div className="mb-3 h4 text-start">Log In</div>
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

      {isLoginErrorVisible &&
        (<Alert
          isPlain
          isInline
          variant="danger"
          title="Incorect email or password" />)}
      <br />

      <Button
        className="px-5 py-1 mb-2"
        variant="primary"
        onClick={Login}
      >
        Log In
      </Button>


      <div className="center-wrapper mt-5 mb-5">
        <div className="wrapper">
          <div className="page-login-line"></div>
        </div>
      </div>
      <div className="mb-2">Don’t have an account?</div>
      <Button
        className="px-5 py-1 mb-4"
        variant="secondary"
        /*onClick={SignUp}*/ onClick={navigateToSignUp}
      >
        Sign up
      </Button>

      <Button
        className="px-5 py-1"
        variant="secondary"
        /*onClick={SignUp}*/ onClick={navigateToHome}
      >
        See D7 Resources anyway
      </Button>


    </div>
  );
};

export default Login;
