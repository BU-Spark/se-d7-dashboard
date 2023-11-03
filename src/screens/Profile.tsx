import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, TextInput, Button, Alert } from "@patternfly/react-core";
import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore";
import { ProgressStepperCompact3 } from "../components/home/Progressbar";
import RegisteredSelection from "../components/login/RegisteredSelection";
import { getAuth } from "firebase/auth";
import Select from "react-select";
import { is } from "date-fns/locale";

function Profile() {
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [textUpdates, setTextUpdates] = useState(false);
  const [optOut, setOptOut] = useState(false);
  const [fieldsMissing, setFieldsMissing] = useState(false);
  const [isToVote, setIsToVote] = useState<boolean | null>(null);

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
    if (
      firstName === "" ||
      lastName === "" ||
      phoneNumber === "" ||
      isToVote === null
    ) {
      setFieldsMissing(true);
      return;
    } else {
      setFieldsMissing(false);
    }
    if (auth.currentUser) {
      // console.log("User is logged in.");
      const userEmail = auth.currentUser?.email || "defaultuser@email.com";
      const userProfileRef = doc(db, "user-profile", userEmail);
      setDoc(userProfileRef, {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        textUpdates: textUpdates,
        optOut: optOut,
        registeredVoter: isToVote,
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
      navigate("/interests");
    }
  };

  return (
    <div className="bg-app">
      <ProgressStepperCompact3 />
      <div className="text-start mb-3 mt-8 text-xl font-bold">
        Contact Information
      </div>

      <div className="text-start mb-2">First Name</div>
      <TextInput
        className="!mb-7"
        id="textInput-basic-1"
        type="text"
        aria-label="First Name input field"
        onChange={handleFirstNameChange}
      />
      <div className="text-start mb-2">Last Name</div>
      <TextInput
        className="!mb-7"
        id="textInput-basic-1"
        type="text"
        aria-label="Last Name input field"
        onChange={handleLastNameChange}
      />

      <div className="text-start mb-2">Phone Number</div>
      <TextInput
        className="!mb-7"
        id="textInput-basic-1"
        type="tel"
        aria-label="Phone Number input field"
        onChange={handlePhoneNumberChange}
      />
      
      <div className="text-start mb-2">Are you registered to vote?</div>
      <Select
        className="text-start mb-7 "
        options={[
          { value: true, label: "Yes" },
          { value: false, label: "No" },
        ]}
        isSearchable={false}
        onChange={(selectedOption) => {
          if (selectedOption) {
            setIsToVote(selectedOption.value);
          }
        }}
        styles={{
          control: (provided) => ({
            ...provided,
            borderRadius: 0,
          }),
          menu: (provided) => ({
            ...provided,
            borderRadius: 0,
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#e3b81f" : "white",
            color: "#00183d"
          }),
        }}
      />
      <div className="flex mb-2">
        <input 
          type="checkbox" 
          className="scale-150 translate-x-1 translate-y-2 mr-6 self-start accent-yellow"/>
        <p className="text-start">
          I agree to receive important updates from District 7 leadership as text messages
        </p>
      </div>
      <div className="flex mb-7">
        <input 
          type="checkbox" 
          className="scale-150 translate-x-1 translate-y-2 mr-6 self-start accent-yellow"/>
        <p className="text-start">
          Opt out of text updates about District 7
        </p>
      </div>
      {fieldsMissing && (
        <Alert
          variant="danger"
          title="Above fields are required"
          isPlain
          isInline
        />
      )}

      <div className="text-end">
        <button className="btn-yellow">
          Next
        </button>
      </div>
    </div>
  );
}

export default Profile;
