import * as React from "react";
import { Button } from "@patternfly/react-core";
import { useNavigate } from 'react-router-dom';

function AddressInfo() {
  const navigate = useNavigate();

  const navigateToNext = () => {
    navigate('/address-entry');
  };

  return (
    <div className="bg text-white ">
      <div className="text-start mb-4 pf-c-title h5">Please enter your address to confirm your residency</div>
      <div className="text-start paragraph"> We don’t store any of this information, but we need to use it to match you to the resources for your residence. </div>
      <div className="text-end pt-5">
        <Button onClick={navigateToNext} className="px-3 py-1 text-black" variant="primary">
          Next
        </Button>
      </div>
      
      
    </div>
  );
  
}

export default AddressInfo