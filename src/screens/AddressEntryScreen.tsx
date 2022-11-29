import * as React from "react";
import AddressCheckBox from "../components/AddressCheckBox";
import AddressCheckBoxLoading from "../components/AddressCheckBoxLoading";
import "@patternfly/react-core/dist/styles/base.css";
import "bootstrap/dist/css/bootstrap.css";
import { Checkbox, TextInput, Button,Chip } from "@patternfly/react-core";
import {Routes, Route, useNavigate} from 'react-router-dom';

function Addressentryscreen() {
  const navigate = useNavigate();

  const navigateToNext = () => {
    navigate('/choose-interest');
  };

  return (
    <div className="container">

<div className="text-start">Address</div>
      <TextInput
        className="px-2"
        id="textInput-basic-1"
        type="text"
        placeholder="Street Address or P.O. Box"
      />
      <TextInput
        className="mb-2 px-2"
        id="textInput-basic-1"
        type="text"
        placeholder="Apt, suite, unit, building, etc."
      />
      
      <div className="mt-3 text-start">City</div>
      <TextInput
        className="mb-2"
        id="textInput-basic-1"
        type="text"
        // aria-label="Street Address or P.O. Box"
      />
      
      <div className="text-start mt-3">State</div>
      <TextInput
        className="mb-2"
        id="textInput-basic-1"
        type="text"
        // aria-label="Street Address or P.O. Box"
      />
      
<div className="text-start mt-3">Zipcode</div>
      <TextInput
        className="mb-5 px-2"
        id="textInput-basic-1"
        type="text"
        placeholder="Zipcode"
        // aria-label="Street Address or P.O. Box"
      />
      

      
      <AddressCheckBox></AddressCheckBox>
      <br></br>
      <AddressCheckBoxLoading></AddressCheckBoxLoading>
      <div className="text-end mt-3">
        <Button onClick={navigateToNext} className="px-3 py-1" variant="primary">
          Next
        </Button>
      </div>
      
    </div>
  );
}

export default Addressentryscreen;
