import React, {useState} from 'react';
import ChecklistElement from "../components/ChecklistElement";
import { Checkbox, TextInput, Button,Chip } from "@patternfly/react-core";
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
        isChosen: false,
      },
      {
        id: 'b',
        name: 'Street/Park Damage',
        isChosen: true,
      },
      {
        id: 'c',
        name: 'Lights',
        isChosen: false,
      },
      {
        id: 'd',
        name: 'Volunteering',
        isChosen: false,
      },
      {
        id: 'e',
        name: 'Local Events',
        isChosen: false,
      },
      {
        id: 'f',
        name: 'Food Access',
        isChosen: false,
      },
    ]
  });

  const highlightItem = (id: string) => {
    // should hightlight the item when it is selected
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
          <Chip className='px-3 m-1' onClick={() => highlightItem('readonlychip')} isReadOnly>
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
