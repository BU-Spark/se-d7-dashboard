// GearModal only used for gear-icon click modal
import { ReactNode } from "react";
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
          // console.log("Logged out")
          props.toggle()
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
              <div className="welcome_title">District 7 Boston Constitutent's App</div>
              <div className="mx-3">
                {
                  auth.currentUser?.email ? (
                    <button
                    key="settings"
                    className="btn-white w-full mb-4"
                    onClick={SignOut}
                  >
                    Log Out
                  </button>
                  ):(
                    <button
                      key="settings"
                      className="btn-white w-full mb-4"
                      onClick={() => (navigate("/login"))}
                    >
                      Log In
                    </button>
                  )
                }
                <div 
                  className = "btn-white border-navy text-navy"
                  onClick = {props.toggle}
                >
                  Return
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}