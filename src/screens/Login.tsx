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
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [bannerMessage, setBannerMessage] = useState<string>("");

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
        const userData = await getDoc(doc(db, "user-profile", user.email));
        if (userData.exists()) {
          navigate("/home");
        } else {
          setIsBannerVisible(true);
          setBannerMessage("Incorrect email or password.")
        }
      })
      .catch((e) => {
        console.log(e);
        setIsBannerVisible(true);
        setBannerMessage("Something went wrong. Please try again.")
      });
  };

  const navigateToSignUp = () => {
    navigate("/address-info");
  };
  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <div className="bg-app flex flex-col">
      <button
        className="mt-4 btn-white"
        onClick={navigateToHome}
      >
        Browse D7 Resources
      </button>
      <div className="w-32 border-[0.7px] border-white mt-10 mb-6 mx-auto"></div>
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


      <button className="my-4 btn-yellow" onClick={Login}>
        Log In
      </button>

      {isBannerVisible && (
        <Alert
          isPlain
          isInline
          variant="danger"
          title={bannerMessage}
          className="text-start"
        />
      )}

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
        className="btn-white mt-4"
        onClick={navigateToSignUp}
      >
        Sign up
      </button>
    </div>
  );
};

export default Login;
