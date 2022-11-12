import * as React from "react";
import AddressCheckBox from "../components/AddressCheckBox";

function Addressentryscreen() {
  return (
    <div>
      <div className="center-wrapper">
        <div className="wrapper">
          <label>Address</label>
          <input
            type="text"
            className="input-text"
            placeholder="Street Address or P.O. Box"
          />
          <input
            type="text"
            className="input-text"
            placeholder="Apt, suite, unit, building, etc."
          />
        </div>
      </div>
      <div className="center-wrapper">
        <div className="wrapper">
          <label>City</label>
          <input type="text" className="input-text" placeholder="" />
        </div>
      </div>
      <div className="center-wrapper">
        <div className="wrapper">
          <label>State</label>
          <input type="text" className="input-text" placeholder="" />
        </div>
      </div>
      <div className="center-wrapper">
        <div className="wrapper">
          <label>Zipcode</label>
          <input type="text" className="input-text" placeholder="Zipcode" />
        </div>
      </div>
      <AddressCheckBox></AddressCheckBox>
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

export default Addressentryscreen;
