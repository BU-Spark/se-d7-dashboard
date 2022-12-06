import React, {useState} from 'react';
import ChecklistElement from "../components/ChecklistElement";
import { Checkbox, TextInput, Button, Chip } from "@patternfly/react-core";
import "@patternfly/react-core/dist/styles/base.css";
import "bootstrap/dist/css/bootstrap.css";
import {Routes, Route, useNavigate} from 'react-router-dom';


function ChooseInterestScreen() {
  const navigate = useNavigate();

  const navigateToNext = () => {
    navigate('/login');
  };

  const [chips, setChips] = useState({

    interests:[
      {
        id: 'a',
        name: 'Vehicles/Parking',
        selected: false,
      },
      {
        id: 'b',
        name: 'Street/Park Damage',
        selected: false,
      },
      {
        id: 'c',
        name: 'Lights',
        selected: false,
      },
      {
        id: 'd',
        name: 'Volunteering',
        selected: false,
      },
      {
        id: 'e',
        name: 'Local Events',
        selected: false,
      },
      {
        id: 'f',
        name: 'Food Access',
        selected: false,
      },
    ]
  });

  // Create an array of strings to store the selected chips
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const highlightItem = (id: string) => {
    // Flip the chip selected boolean
    const newChips = chips.interests.map(interest => {
      if (interest.id === id) {
        interest.selected = !interest.selected;
        console.log(interest.selected)
      }
      return interest;
    }
    );
    
    // Update the chips state
    setChips({interests: newChips});

    // Set chip html style to style={{backgroundColor: '#004080', color: 'white'}}
  };

  return (
    <div className="container">
      <div className="pf-c-title mb-3 h5">
      Help Us Understand Your Interests
      </div>
      <div className="mb-2">
      You can always change this later
      </div>

      {chips.interests.map(interest => {
        // Return a chip that has black text color
        return (
          // Set style to have black text color
          <Chip 
            className={interest.selected ? 'px-3 m-1 .selected-chip-clicked' : 'px-3 m-1 selected-chip-non-clicked'} 
            onClick={() => highlightItem(interest.id)} 
            isReadOnly 
            isOverflowChip
            >
            {interest.name}
          </Chip>
        );
      })}

      
      <Button onClick={navigateToNext} className="px-5 py-1 mt-4" variant="primary">
      Finish Set Up
      </Button>
    </div>
  );
}

export default ChooseInterestScreen;
