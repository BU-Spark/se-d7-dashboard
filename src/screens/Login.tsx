import React, { useState, useEffect } from "react";

import {
  signInWithEmailAndPassword,
  browserLocalPersistence,
  setPersistence,
  getAuth,
} from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Alert, TextInput, Tooltip } from "@patternfly/react-core";
import { QUESTION_CIRCLE } from "../assets";

//client hit Log In button
const Login: React.FunctionComponent = () => {
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
      .then(async () => {
        // console.log("Getting user data");
        const userData = await getDoc(doc(db, "user-profile", user.email));
        if (userData.exists()) {
          // console.log("Document data:", userData.data());
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
    <div className="bg-app py-[10vh] flex flex-col">
      <div className="mb-4 text-2xl text-start text-white ">Log In</div>
      <div className="mb-1 text-start text-white ">Email</div>

      <TextInput
        className="px-2"
        aria-label="text input"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e);
        }}
      />
      <div className="mt-4 mb-1 text-start text-white">Password</div>
      <TextInput
        className="px-2"
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

      <button className="mt-4 btn-yellow" onClick={Login}>
        Log In
      </button>
      {/* <div className="center-wrapper">
        <GoogleButton onClick={LoginGoogle} />
      </div> */}

      <div className="w-32 border-[0.7px] border-white my-12 mx-auto"></div>
      <div className="flex mb-2">
        <div className="mb-2 text-white text-start">
          Don’t have an account?
        </div>
        <Tooltip
          aria-live="polite"
          removeFindDomNode={true}
          distance={12}
          className="!bg-white !py-4 !px-3"
          position="top"
          enableFlip={true}
          trigger="click"
          isContentLeftAligned
          maxWidth="190px"
          content={
            <>
              <div style={{
                color: "black",
                fontSize: "1rem",
                marginBottom: "10px"
              }}>
                Sign-Up Optional
              </div>
              <div style={{
                color: "black",
                fontSize: "0.625rem"
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

      <button
        className="btn-white"
        /*onClick={SignUp}*/ onClick={navigateToSignUp}
      >
        Sign up
      </button>

      <button
        className="mt-4 btn-white"
        /*onClick={SignUp}*/ onClick={navigateToHome}
      >
        See D7 Resources anyway
      </button>
    </div>
  );
};

export default Login;
