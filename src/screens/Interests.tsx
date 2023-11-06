import { useEffect, useState } from "react";
import { Button, Chip, Tooltip } from "@patternfly/react-core";
import { useNavigate } from "react-router-dom";
// Import firebase
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { ProgressStepperCompact4 } from "../components/home/Progressbar";
import { APIUrl } from "./Home";

import { IResource } from "../types";
import { getAuth } from "firebase/auth";
import { QuestionIcon } from "../assets/QuestionIcon";

interface IInterest {
  title: string;
  selected: boolean;
}

function Interests() {
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();

    // Store the chips in state
    const [chips, setChips] = useState<{ interests: IInterest[] }>({
      interests: []
    });
  
    // Create an array of strings to store the selected chips
    const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const navigateToNext = () => {
    // Loop through the chips and add the selected chips to the selectedChips array
    const userEmail = auth.currentUser?.email || "defaultuser@email.com";
    
    chips.interests.forEach((interest) => {
      if (interest.selected) {
        const newSelectedChips = selectedChips;
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
    
    
    navigate("/login");

  };

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

  useEffect(() => {
    // fetches resource-lists to use the category
    const fetchResourceData = async () => {
      try {
        const res = await fetch(APIUrl + "resource-lists");
        const json = await res.json();
        const jsonData = json.data.map((resource: IResource) => resource);
        
        // only extract unique categories
        const categoryTitles = Array.from(
          new Set(jsonData.map((resource: IResource) => resource.attributes.category))
        );

        
        // format the category so that it can be used in button and highlightItem function
        const formattedChips = categoryTitles.map((title) => ({
          title: title as string,
          selected: false,
        }));

        // Update the chips state
        setChips({interests: formattedChips});
      } catch (error) {
        console.error(error);
      }
    };

    fetchResourceData();
  }, []);

  return (
    <div className="bg-82 py-16">
      <ProgressStepperCompact4/>
      <div className="mt-10 font-bold text-2xl text-start px-9">
        Pin Interests
      </div>
      <div className="mb-2 mt-6 text-start px-9 font-bold">
        Help Us Understand Your Interests
      </div>
      <div className="flex items-center px-9 mb-6">
        <div className="text-start text-sm">
          You can always change this later
        </div>
        <Tooltip
          removeFindDomNode={true}
          distance={12}
          className="!bg-white !py-4 !px-3"
          position="top"
          enableFlip={true}
          trigger="click"
          isContentLeftAligned
          maxWidth="190px"
          content={
            <>
              <div style={{
                color: "black",
                fontSize: "1rem",
                marginBottom: "10px"
              }}>
                Hehehehe
              </div>
              <div style={{
                color: "black",
                fontSize: "0.625rem"
              }}>
                hehehehehe
              </div>
            </>
          }
        >
          <QuestionIcon className="w-[14px] h-[14px] ml-2 cursor-pointer"/>
        </Tooltip>
      </div>

      {chips.interests.map((interest, index) => {
        return (
          <button
            key={index}
            className={
              interest.selected
                ? "px-3 m-1 selected-chip-clicked"
                : "px-3 m-1 selected-chip-non-clicked"
            }
            onClick={() => highlightItem(interest.title)}
          >
            {interest.title}
          </button>
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
