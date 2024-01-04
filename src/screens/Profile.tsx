import { useState } from "react";
import { TextInput } from "@patternfly/react-core";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { Stepper } from "../components/home/Stepper";
import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";
import Select from "react-select";
import { Alert } from "@patternfly/react-core";

interface IProfileProps {
  handleNextStep: () => void;
}

function Profile({ handleNextStep }: IProfileProps) {
  const auth = getAuth();
  const db = getFirestore();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [textUpdates, setTextUpdates] = useState(false);
  const [optOut, setOptOut] = useState(false);
  const [isToVote, setIsToVote] = useState<boolean | null>(null);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("This is a banner.");
  const [password, setPassword] = useState<string>("");

  const handleFirstNameChange = (firstName: string) => {
    setFirstName(firstName);
    setIsBannerVisible(false);
  };

  const handleLastNameChange = (lastName: string) => {
    setLastName(lastName);
    setIsBannerVisible(false);
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);
    setIsBannerVisible(false);
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
    setIsBannerVisible(false);
  }

  const handleTextUpdatesChange = (checked: boolean) => {
    setTextUpdates(checked);
    setIsBannerVisible(false);
  };

  const handleOptOutChange = (checked: boolean) => {
    setOptOut(checked);
    setIsBannerVisible(false);
  };

  const signUp = async () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      isToVote === null
    ) {
      setBannerMessage("Please fill in all fields.");
      setIsBannerVisible(true);
      return;
    } else {
      setIsBannerVisible(false);
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      const userProfileRef = doc(db, "user-profile", email);
      setDoc(userProfileRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        isToVote,
        optOut: optOut,
        textUpdates: textUpdates
      })
      handleNextStep();
    })
    .catch((error) => {
      setIsBannerVisible(true);
      const parsedMessage = error.message.match(/\(([^)]+)\)/)[1];
      if (parsedMessage === "auth/email-already-in-use") {
        setBannerMessage("Email already in use.");
      } else if (parsedMessage === "auth/invalid-email") {
        setBannerMessage("Invalid email.");
      } else if (parsedMessage === "auth/weak-password") {
        setBannerMessage("Password is too weak.");
      } else {
        setBannerMessage("Something went wrong.");
      }
      console.error(error);
    })
  };

  return (
    <div className="bg-app">
      <Stepper currentStep={2} totalStep={3} />
      <div className="text-start mb-3 mt-8 text-xl font-bold">
        Contact Information
      </div>

      <div className="text-start mb-2">First Name</div>
      <TextInput
        className="!mb-4"
        id="textInput-basic-1"
        type="text"
        aria-label="First Name input field"
        onChange={handleFirstNameChange}
      />
      <div className="text-start mb-2">Last Name</div>
      <TextInput
        className="!mb-4"
        id="textInput-basic-1"
        type="text"
        aria-label="Last Name input field"
        onChange={handleLastNameChange}
      />

      <div className="text-start mb-2">Email</div>
      <TextInput
        className="!mb-4"
        id="textInput-basic-1"
        type="tel"
        aria-label="Phone Number input field"
        onChange={handleEmailChange}
      />

      <div className="text-start mb-2">Password</div>
      <TextInput
        className="!mb-4"
        id="textInput-basic-1"
        type="password"
        aria-label="Password input field"
        onChange={handlePasswordChange}
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
            color: "#00183d",
          }),
        }}
      />
      <div className="flex mb-2">
        <input
          onChange={(e) => handleTextUpdatesChange(e.target.checked)}
          type="checkbox"
          className="scale-150 translate-x-1 translate-y-2 mr-6 self-start accent-yellow"
        />
        <p className="text-start">
          I agree to receive important updates from District 7 leadership as
          text messages
        </p>
      </div>
      <div className="flex mb-5">
        <input
          type="checkbox"
          onChange={(e) => handleOptOutChange(e.target.checked)}
          className="scale-150 translate-x-1 translate-y-2 mr-6 self-start accent-yellow"
        />
        <p className="text-start">Opt out of text updates about District 7</p>
      </div>

      {isBannerVisible && (
        <Alert
          variant="danger"
          title={bannerMessage}
          className="!bg-white !p-2 !my-4"
          isInline
        />
      )}

      {!isBannerVisible &&
       <div className="text-end">
        <button onClick={signUp} className="btn-yellow mb-5">
          Next
        </button>
        </div>
      }
    </div>
  );
}

export default Profile;
