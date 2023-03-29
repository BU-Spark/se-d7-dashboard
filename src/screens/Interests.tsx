import React, { useState } from "react";
import { Button, Chip } from "@patternfly/react-core";
import { useNavigate } from "react-router-dom";
// Import firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { config } from '../config/config';
import { doc, getDoc,setDoc } from "firebase/firestore";
import linksJson from "../links.json";
import { ProgressStepperCompact4 } from "../components/home/Progressbar";
function Interests() {
  const navigate = useNavigate();
  const app = initializeApp(config.firebaseConfig);
  const db = getFirestore(app);


  const navigateToNext = () => {

    // Loop through the chips and add the selected chips to the selectedChips array
    let userEmail = "";
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      userEmail = JSON.parse(loggedInUser).email;
    };
    chips.interests.forEach((interest) => {
      if (interest.selected) {
        let newSelectedChips = selectedChips;
        newSelectedChips.push(interest.title);
        setSelectedChips(newSelectedChips);
      }
    });
    
    // Add a new document in collection "user-profile"
    const userProfileRef = doc(db, "user-profile", userEmail);
    setDoc(userProfileRef, {
      interests: selectedChips
    },{merge: true}); 
      //merge existing contents with newly provided data, if merge = false, interests will override firstName, lastName
    
    
    navigate("/home"); //change from "login" to "home" to prevent looping back to login screen after login in

  };

  // Store the chips in state
  const [chips, setChips] = useState({
    interests: linksJson
  });

  // Create an array of strings to store the selected chips
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const highlightItem = (title: string) => {
    // Flip the chip selected boolean
    const newChips = chips.interests.map((interest) => {
      if (interest.title === title) {
        interest.selected = !interest.selected;
      }
      return interest;
    });

    // Update the chips state
    setChips({ interests: newChips });
  };

  return (
    <div className="container-padded">
      <ProgressStepperCompact4/>
      <div className="pf-c-title mb-3 h5">
        Help Us Understand Your Interests
      </div>
      <div className="mb-2">You can always change this later</div>

      {chips.interests.map((interest) => {
        return (
          <Chip
            className={
              interest.selected
                ? "px-3 m-1 selected-chip-clicked"
                : "px-3 m-1 selected-chip-non-clicked"
            }
            onClick={() => highlightItem(interest.title)}
            isReadOnly
            isOverflowChip
          >
            {interest.title}
          </Chip>
        );
      })}

      <Button
        onClick={navigateToNext}
        className="px-5 py-1 mt-4"
        variant="primary"
      >
        Finish Set Up
      </Button>
    </div>
  );
}

export default Interests;
