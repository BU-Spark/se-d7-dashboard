import * as React from "react";
import { useState } from "react";

function Loginscreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function Login() {
    const user = {
      email,
      password,
    };

    console.log(user);
    try {
      //here send the post request
      console.log("post request");
    } catch (error) {
      console.log(error);
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
          <button className="btn-white">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
