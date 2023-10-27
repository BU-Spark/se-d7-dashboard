import { FC, useState } from "react";
// import firebase auth
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button, Alert, TextInput } from "@patternfly/react-core";
import { ProgressStepperCompact2 } from "../components/home/Progressbar";

export interface ILoginScreenProps {}

const ContactInfo: FC<ILoginScreenProps> = (props) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("This is a banner.");

  const navigateToNext = () => {
    navigate("/interests");
  };

  const SignUp = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        // console.log(response.user.uid);
        navigate("/profile");
      })
      .catch((error) => {
        setIsBannerVisible(true);
        // Only get the message in the parathesis
        let parsedMessage = error.message.match(/\(([^)]+)\)/)[1];
        // Match the message to the error message
        if (parsedMessage === "auth/email-already-in-use") {
          setBannerMessage("Email already in use.");
        } else if (parsedMessage === "auth/invalid-email") {
          setBannerMessage("Invalid email.");
        } else if (parsedMessage === "auth/weak-password") {
          setBannerMessage("Password is too weak.");
        } else {
          setBannerMessage("Something went wrong.");
        }
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <div className="bg-app">
      <ProgressStepperCompact2/>
      <div className="mb-3 text-start mt-5" >Sign Up</div>
      <div className="text-start">Email</div>

      <TextInput
        id="emailInput"
        value={email}
        onChange={(e) => {
          setEmail(e);
        }}
        type="text"
        className="mb-3"
        placeholder=""
      />
      <div className="text-start">Password</div>
      <TextInput
        id="passwordInput"
        value={password}
        onChange={(e) => {
          setPassword(e);
        }}
        type="password"
        className="mb-3"
        placeholder=""
      />
      <br />
      {isBannerVisible && <Alert 
        isPlain
        isInline
        variant="danger" 
        title={bannerMessage} />}
      <br />

      <div className="text-end mt-5">
        <button onClick={SignUp} className="btn-yellow w-20">
          Next
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;
