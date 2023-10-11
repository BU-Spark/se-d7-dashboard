// GearModal only used for gear-icon click modal
import React, { ReactNode } from "react";
import { Button, Text } from "@patternfly/react-core";
import { TimesIcon } from "@patternfly/react-icons";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  const navigate = useNavigate();
  const auth = getAuth();

  const SignOut = () => {
      signOut(auth).then(() => {
          // Sign-out successful.
          console.log("Logged out")
          navigate("/")
      }).catch((error) => {
          // An error happened.
          console.log(error)
      });
  }
  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay" onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            <TimesIcon 
              onClick={props.toggle} 
              style={{
                fontSize: "24px", 
                position: "absolute",
                top: "14px",
                right: "14px",
                cursor: "pointer"
              }}
            ></TimesIcon>
          {/* <button onClick={props.toggle} className="closeModal">X</button> */}
            <div style={{marginTop: "30px"}}>
              <div className="welcome_title">District 7 Boston Citizen's App</div>
              <Button
                key="settings"
                className="py-2 mb-4"
                variant="primary"
                onClick={() => ("")}
                style={{color:"black", width: "90%"}}
              >
                Settings
              </Button>
              <Button
                key="settings"
                className="py-2 mb-4"
                variant="primary"
                onClick={() => ("")}
                style={{color:"black", width: "90%"}}
              >
                My Profile
              </Button>
              {
                auth.currentUser?.email ? (
                  <Button
                  key="settings"
                  className="py-2 mb-4"
                  variant="primary"
                  onClick={SignOut}
                  style={{color:"black", width: "90%", background: "white", border: "1px solid black"}}
                >
                  Log Out
                </Button>
                ):(
                  <Button
                    key="settings"
                    className="py-2 mb-4"
                    variant="primary"
                    onClick={() => (navigate("/login"))}
                    style={{color:"red", width: "90%", background: "white", border: "1px solid red"}}
                  >
                    Log In
                  </Button>
                )
              }

            </div>
          </div>
        </div>
      )}
    </>
  );
}