import React, {useState} from 'react';
// import firebase auth
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { Checkbox, TextInput, Button,Chip } from "@patternfly/react-core";
import "bootstrap/dist/css/bootstrap.css";

export interface ILoginScreenProps {}

const SignUpScreen: React.FunctionComponent<ILoginScreenProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigateToNext = () => {
    navigate('/choose-interest');
  };

  const Login = async () => {
    const user = {
      email,
      password,
    }
    setAuthing(true);

    signInWithEmailAndPassword(auth, user.email, user.password)
        .then((response) => {
            console.log(response.user.uid);
            navigate('/user-profile');
        })
        .catch((error) => {
            alert(error);
            setAuthing(false);
        });
};

// const navigateToSignUp = () => {
//   navigate('/address-warning');
// };

  const SignUp = async () => {
    const user = {
      email,
      password,
    }

    console.log(user);

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate('/choose-interest');
    } catch (error) {
      alert(error);
    }
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

{/* <div className="text-start"> Re-enter Password</div>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="input-text mb-3"
            placeholder=""
          /> */}


        
        {/* <Button className="px-5 py-1" style={{width:"260px"}} variant="secondary" onClick={SignUp} >
        Sign up
        </Button> */}

        <div className="text-end mt-5">
        <Button onClick={SignUp} className="px-3 py-1" variant="primary">
          Next
        </Button>
      </div>


      
    </div>
  );
}

export default SignUpScreen;
