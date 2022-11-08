import * as React from "react";
import AddressCheckBox from '../components/AddressCheckBox';

class Addressentryscreen extends React.Component {
  render() {
    return (
      <div >
        <div className="form-inner-container">

          <label>Address</label>
          <input 
          type="text" 
          className="input-text"
          placeholder="Street Address or P.O. Box"/>
          <input 
          type="text" 
          className="input-text"
          placeholder="Apt, suite, unit, building, etc."/>
        </div>
        <div className="form-inner-container">

          <label>City</label>
          <input 
          type="text" 
          className="input-text"
          placeholder=""/>
          
        </div>
        <div className="form-inner-container">

          <label>State</label>
          <input 
          type="text" 
          className="input-text"
          placeholder=""/>
          
        </div>
        <div className="form-inner-container">

          <label>Zipcode</label>
          <input 
          type="text" 
          className="input-text"
          placeholder="Zipcode"/>
          
        </div>
        <AddressCheckBox></AddressCheckBox>
      </div>
    );
  }
}

export default Addressentryscreen;