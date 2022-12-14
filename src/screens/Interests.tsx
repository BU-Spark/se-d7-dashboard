import React, { useState } from "react";
import { Button, Chip } from "@patternfly/react-core";
import "@patternfly/react-core/dist/styles/base.css";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
// Import firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {config} from '../config/config';
import { doc, setDoc } from "firebase/firestore";

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
        newSelectedChips.push(interest.name);
        setSelectedChips(newSelectedChips);
      }
    });
    
    // Add a new document in collection "user-profile"
    const userProfileRef = doc(db, "user-profile", userEmail);
    setDoc(userProfileRef, {
      interests: selectedChips
    });

    
    navigate("/login");

  };

  // Store the chips in state
  const [chips, setChips] = useState({
    interests: [
      {
        id: "a",
        name: "Vehicles/Parking",
        selected: false,
      },
      {
        id: "b",
        name: "Street/Park Damage",
        selected: false,
      },
      {
        id: "c",
        name: "Lights",
        selected: false,
      },
      {
        id: "d",
        name: "Volunteering",
        selected: false,
      },
      {
        id: "e",
        name: "Local Events",
        selected: false,
      },
      {
        id: "f",
        name: "Food Access",
        selected: false,
      },
    ],
  });

  // Create an array of strings to store the selected chips
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const highlightItem = (id: string) => {
    // Flip the chip selected boolean
    const newChips = chips.interests.map((interest) => {
      if (interest.id === id) {
        interest.selected = !interest.selected;
      }
      return interest;
    });

    // Update the chips state
    setChips({ interests: newChips });
  };

  return (
    <div className="container">
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
            onClick={() => highlightItem(interest.id)}
            isReadOnly
            isOverflowChip
          >
            {interest.name}
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
