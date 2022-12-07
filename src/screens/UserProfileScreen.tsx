import * as React from "react";
import { Checkbox, TextInput, Button, Alert } from "@patternfly/react-core";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { config } from "../config/config";
import { doc, setDoc, getDoc } from "firebase/firestore";
import "@patternfly/react-core/dist/styles/base.css";
import "bootstrap/dist/css/bootstrap.css";

function Userprofilescreen() {
  const app = initializeApp(config.firebaseConfig);
  const db = getFirestore(app);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [textUpdates, setTextUpdates] = React.useState(false);
  const [optOut, setOptOut] = React.useState(false);
  const [fieldsMissing, setFieldsMissing] = React.useState(false);

  const handleFirstNameChange = (firstName: string) => {
    setFirstName(firstName);
  };

  const handleLastNameChange = (lastName: string) => {
    setLastName(lastName);
  };

  const handlePhoneNumberChange = (phoneNumber: string) => {
    setPhoneNumber(phoneNumber);
  };

  const handleTextUpdatesChange = (checked: boolean) => {
    setTextUpdates(checked);
  };

  const handleOptOutChange = (checked: boolean) => {
    setOptOut(checked);
  };

  const navigateToNext = async () => {
    if (firstName === "" || lastName === "" || phoneNumber === "") {
      setFieldsMissing(true);
      return;
    } else {
      setFieldsMissing(false);
    }
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      console.log("User is logged in.");
      const userEmail = JSON.parse(loggedInUser).email;
      const userProfileRef = doc(db, "user-profile", userEmail);
      setDoc(userProfileRef, {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        textUpdates: textUpdates,
        optOut: optOut,
        interests: await getDoc(doc(db, "user-profile", userEmail)).then(
          (doc) => {
            if (doc.exists()) {
              return doc.data().interests;
            } else {
              return [];
            }
          },
          (error) => {
            console.log("Error getting document:", error);
          }
        ),
      });
    }
  };

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
        onChange={handleFirstNameChange}
      />
      <div className="text-start">Last Name</div>
      <TextInput
        className="mb-2"
        id="textInput-basic-1"
        type="text"
        aria-label="Last Name input field"
        onChange={handleLastNameChange}
      />

      <div className="text-start">Phone Number</div>
      <TextInput
        className="mb-2"
        id="textInput-basic-1"
        type="tel"
        aria-label="Phone Number input field"
        onChange={handlePhoneNumberChange}
      />

      {fieldsMissing && (
        <Alert
          variant="danger"
          title="Above fields are required"
          isPlain
          isInline
        />
      )}

      <Checkbox
        className="mt-4"
        label="I agree to recieve important updates from District 7 leadership as text messages"
        id="uncontrolled-check-1"
        onChange={handleTextUpdatesChange}
        isChecked={textUpdates}
      />
      <Checkbox
        className="mt-2 mb-5"
        label="Opt out of text updates about District 7"
        id="uncontrolled-check-2"
        onChange={handleOptOutChange}
        isChecked={optOut}
      />
      <div className="text-end ">
        <Button
          className="px-3 py-1"
          variant="primary"
          onClick={navigateToNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Userprofilescreen;
