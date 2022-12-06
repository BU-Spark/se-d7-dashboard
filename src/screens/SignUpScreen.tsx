import React, {useState} from 'react';
// import firebase auth
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { Checkbox, TextInput, Button, Banner } from "@patternfly/react-core";
import "bootstrap/dist/css/bootstrap.css";

export interface ILoginScreenProps {}

const SignUpScreen: React.FunctionComponent<ILoginScreenProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [bannerMessage, setBannerMessage] = useState('This is a banner.');

  const navigateToNext = () => {
    navigate('/choose-interest');
  };

  const SignUp = async () => {
    const user = {
      email,
      password,
    }

    console.log(user);


    createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
      console.log(response.user.uid);
      navigate("/choose-interest");
    })
    .catch((error) => {
      setIsBannerVisible(true);
      // Only get the message in the parathesis
      setBannerMessage(error.message.match(/\(([^)]+)\)/)[1]);
      console.log(error);
      setAuthing(false);
    });
  }

  return (
    <div className="container">
              <div className="mb-3 pf-c-title h4 text-start">Sign Up</div>
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
          {bannerMessage}
        </Banner>
      )}

        <div className="text-end mt-5">
        <Button onClick={SignUp} className="px-3 py-1" variant="primary">
          Next
        </Button>
      </div>


      
    </div>
  );
}

export default SignUpScreen;
