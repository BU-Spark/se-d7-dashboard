import * as React from "react";
import ChecklistElement from "../components/ChecklistElement";

function Userprofilescreen() {
  return (
    <div>
      <div className="user-profile-h1">Build Your User Profile</div>
      <div className="center-wrapper">
        <div className="wrapper">
          <label>First Name</label>
          <input type="text" className="input-text" placeholder="" />
        </div>
      </div>
      <div className="center-wrapper">
        <div className="wrapper">
          <label>Last Name</label>
          <input type="text" className="input-text" placeholder="" />
        </div>
      </div>
      <div className="center-wrapper">
        <div className="wrapper">
          <label>Phone Number</label>
          <input type="text" className="input-text" placeholder="" />
        </div>
      </div>

      <div className="center-wrapper">
        <div className="wrapper">
          <ChecklistElement></ChecklistElement>
        </div>
      </div>
      <div className="center-wrapper">
        <div className="wrapper">
          <div className="container-next">
            <button className="btn-next">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userprofilescreen;
