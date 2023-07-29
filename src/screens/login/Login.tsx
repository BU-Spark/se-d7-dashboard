import React, { useState, useEffect } from "react";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  browserLocalPersistence,
  setPersistence,
  getAuth,
} from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Button, Alert, TextInput, Tooltip } from "@patternfly/react-core";
import GoogleButton from "react-google-button";
import { QUESTION_CIRCLE } from "../../assets";

export interface Login {}

//client hit Log In button
const Login: React.FunctionComponent<Login> = (props) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoginErrorVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence);
  }, [auth]);

  const Login = async () => {
    const user = {
      email,
      password,
    };

    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(async (response) => {
        console.log("Getting user data");
        let userData = await getDoc(doc(db, "user-profile", user.email));
        if (userData.exists()) {
          console.log("Document data:", userData.data());
          if (userData.data().firstName) {
            navigate("/home");
          } else {
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

  // const LoginGoogle = async () => {
  //   signInWithPopup(auth, new GoogleAuthProvider())
  //     .then(async (res) => {
  //       // localStorage.setItem("user", JSON.stringify(res.user));
  //       console.log("Getting user data");
  //       let email: string;
  //       if (res.user.email) {
  //         email = res.user.email.toString();
  //       } else {
  //         throw new Error();
  //       }
  //       let userData = await getDoc(doc(db, "user-profile", email));
  //       if (userData.exists()) {
  //         console.log("Document data:", userData.data());
  //         // Check if first name is set, if not, navigate to user profile
  //         if (userData.data().firstName) {
  //           navigate("/home");
  //         } else {
  //           navigate("/profile");
  //         }
  //       } else {
  //         navigate("/profile");
  //       }
  //     })
  //     .catch((e) => {
  //       console.error(e);
  //     });
  // };

  const navigateToSignUp = () => {
    navigate("/address-info");
  };
  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <div className="bg">
      <div className="mb-4 h4 text-start text-white ">Log In</div>
      <div className="mb-1 text-start text-white ">Email</div>

      <TextInput
        className="px-2 mb-4"
        aria-label="text input"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e);
        }}
      />
      <div className="mb-1 text-start text-white">Password</div>
      <TextInput
        className="px-2 mb-1"
        aria-label="password"
        placeholder=""
        value={password}
        onChange={(e) => {
          setPassword(e);
        }}
        type="password"
      />

      {isLoginErrorVisible && (
        <Alert
          isPlain
          isInline
          variant="danger"
          title="Incorect email or password"
          className="mt-3 text-start form_alert"
        />
      )}
      <br />

      <Button className="mb-2 text-black" variant="primary" onClick={Login}>
        Log In
      </Button>
      {/* <div className="center-wrapper">
        <GoogleButton onClick={LoginGoogle} />
      </div> */}

      <div className="center-wrapper mt-5 mb-5">
        <div className="wrapper">
          <div className="page-login-line"></div>
        </div>
      </div>
      <div className="d-flex">
        <div className="mb-2 text-white text-start">
          Don’t have an account?
        </div>
        <Tooltip
          aria-live="polite"
          removeFindDomNode={true}
          distance={12}
          className="_tooltip"
          position="top"
          enableFlip={true}
          trigger="click"
          isContentLeftAligned
          maxWidth="190px"
          content={
            <>
              <div style={{
                color: "black",
                fontSize: "16px",
                marginBottom: "10px"
              }}>
                Sign-Up Optional
              </div>
              <div style={{
                color: "black",
                fontSize: "10px"
              }}>
                Recommended for D7 Residents
              </div>
            </>
          }
          >
          <img 
            src={QUESTION_CIRCLE}
            style={{ 
              width: "14px",
              marginBottom: "6px",
              marginLeft: "6px",
              cursor: "pointer"
            }}
          />
        </Tooltip>
      </div>

      <Button
        className="mb-4"
        variant="secondary"
        isDanger
        /*onClick={SignUp}*/ onClick={navigateToSignUp}
      >
        Sign up
      </Button>

      <Button
        variant="secondary"
        isDanger
        /*onClick={SignUp}*/ onClick={navigateToHome}
      >
        See D7 Resources anyway
      </Button>
    </div>
  );
};

export default Login;
