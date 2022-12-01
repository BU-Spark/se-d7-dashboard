import * as React from "react";
import ChecklistElement from "../components/ChecklistElement";
import { Checkbox, TextInput, Button } from "@patternfly/react-core";
import "@patternfly/react-core/dist/styles/base.css";
import "bootstrap/dist/css/bootstrap.css";

function Userprofilescreen() {
  return (
    <div className="container">
      <div className="pf-c-title pf-m-lg text-start mb-3">
        Build Your User Profile
      </div>

      <div className="text-start">First Name</div>
      <TextInput
        className="mb-2"
        id="textInput-basic-1"
        type="text"
        aria-label="First Name input field"
      />
      <div className="text-start">Last Name</div>
      <TextInput
        className="mb-2"
        id="textInput-basic-1"
        type="text"
        aria-label="Last Name input field"
      />
      <div className="text-start">Phone Number</div>
      <TextInput
        className="mb-2"
        id="textInput-basic-1"
        type="tel"
        aria-label="Phone Number input field"
      />

      <Checkbox
        className="mt-4"
        label="I agree to recieve important updates from District 7 leadership as text messages"
        id="uncontrolled-check-1"
      />
      <Checkbox
        className="mt-2 mb-5"
        label="Opt out of text updates about District 7"
        id="uncontrolled-check-2"
      />
      <div className="text-end ">
        <Button className="px-3 py-1" variant="primary">
          Next
        </Button>
      </div>
    </div>
  );
}

export default Userprofilescreen;
