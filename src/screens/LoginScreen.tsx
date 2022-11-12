import React, {useState} from 'react';
// import firebase auth
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from "react-router-dom";

export interface ILoginScreenProps {}

const Loginscreen: React.FunctionComponent<ILoginScreenProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <div className="center-wrapper">
        <div className="wrapper">
          <div className="page-login-h1">Log In</div>

          <label>Email</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            className="input-text"
            placeholder=""
          />

          <label>Password</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="input-text"
            placeholder=""
          />
        </div>
      </div>

      <div className="center-wrapper">
        <div className="wrapper">
          <button
            className="btn-blue"
            onClick={Login}
          >
            Log In
          </button>
        </div>
      </div>

      <div className="center-wrapper">
        <div className="wrapper">
          <div className="page-login-line"></div>
        </div>
      </div>
      <div className="center-wrapper">
        <div className="wrapper">
          <label>Don’t have an account?</label>
          <button 
            className="btn-white"
            onClick={SignUp}
          >Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
