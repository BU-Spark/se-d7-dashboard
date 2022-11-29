import * as React from "react";
import { Checkbox, TextInput, Button, Chip } from "@patternfly/react-core";

function Openingscreen () {
  
    return (
      <div className="container">
        <div className="mb-5 pf-c-title h1">Welcome to the District 7 Boston Citizen’s App</div>
        <div className="pt-5 h6 mb-2"> Please confirm you are a resident of District 7 </div>
        <Button className="px-5 py-1 mb-2" style={{width:"260px"}} variant="primary">
        I am a resident of D7
        </Button>
        <Button className="px-5 py-1" style={{width:"260px"}} variant="secondary">
        Find out
        </Button>
        
        
      </div>
    );
  
}

export default Openingscreen;