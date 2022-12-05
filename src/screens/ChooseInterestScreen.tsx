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
      },
      {
        id: 'b',
        name: 'Street/Park Damage',
      },
      {
        id: 'c',
        name: 'Lights',
      },
      {
        id: 'd',
        name: 'Volunteering',
      },
      {
        id: 'e',
        name: 'Local Events',
      },
      {
        id: 'f',
        name: 'Food Access',
      },
    ]
  });

  // Create an array of strings to store the selected chips
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const highlightItem = (id: string) => {
    // Delete the chip from chips array
    const newChips = chips.interests.filter(chip => chip.id !== id);
    setChips({interests: newChips});
    console.log(newChips);

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
        return (
      // Execute highlightItem when the chip is clicked
      <Chip className='px-3 m-1' onClick={() => highlightItem(interest.id)} >
        {interest.name}
      </Chip>
        )
      })}

      
      <Button onClick={navigateToNext} className="px-5 py-1 mt-4" variant="primary">
      Finish Set Up
        </Button>
    </div>
  );
}

export default ChooseInterestScreen;
