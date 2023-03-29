import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';
import './ProgressStepperCompact.css'; // import custom CSS styles

/** File for storing different variation of the progress bar use at different stage of the sign up flow
 * properly more efficient to use React props, come back to fixed later
 * 
 * Address verify
 */


//this is for current -> pending -> pending -> pending
export const ProgressStepperCompact1: React.FunctionComponent = (props) => {
  return (
    <React.Fragment>
      <br />
      <ProgressStepper className="pf-c-progress-stepper pf-m-horizontal pf-m-center "> {/* add custom class and horizontal modifier */}
        <ProgressStep
          variant="info"
          isCurrent
        >
        </ProgressStep>
        <ProgressStep
          variant="pending"
        >
        </ProgressStep>
        <ProgressStep
          variant="pending"
        >
        </ProgressStep>
        <ProgressStep
          variant="pending"
        >
        </ProgressStep>
        
      </ProgressStepper>
    </React.Fragment>
  );
};
//this is for finished -> current -> pending -> pending
export const ProgressStepperCompact2: React.FunctionComponent = (props) => {
  return (
    <React.Fragment>
      <br />
      <ProgressStepper className="pf-c-progress-stepper pf-m-horizontal pf-m-center "> {/* add custom class and horizontal modifier */}
        <ProgressStep
          variant="success"
        >
        </ProgressStep>
        <ProgressStep
          variant="info"
          isCurrent
        >
        </ProgressStep>
        <ProgressStep
          variant="pending"
        >
        </ProgressStep>
        <ProgressStep
          variant="pending"
        >
        </ProgressStep>
        
      </ProgressStepper>
    </React.Fragment>
  );
};
//this is for finished  -> finished -> current -> pending
export const ProgressStepperCompact3: React.FunctionComponent = (props) => {
  return (
    <React.Fragment>
      <br />
      <ProgressStepper className="pf-c-progress-stepper pf-m-horizontal pf-m-center "> {/* add custom class and horizontal modifier */}
        <ProgressStep
          variant="success"
        >
        </ProgressStep>
        <ProgressStep
          variant="success"
        >
        </ProgressStep>
        <ProgressStep
          variant="info"
          isCurrent
        >
        </ProgressStep>
        <ProgressStep
          variant="pending"
        >
        </ProgressStep>
        
      </ProgressStepper>
    </React.Fragment>
  );
};
//this is for finished  -> finished -> finished -> current
export const ProgressStepperCompact4: React.FunctionComponent = (props) => {
  return (
    <React.Fragment>
      <br />
      <ProgressStepper className="pf-c-progress-stepper pf-m-horizontal pf-m-center "> {/* add custom class and horizontal modifier */}
        <ProgressStep
          variant="success"
        >
        </ProgressStep>
        <ProgressStep
          variant="success"
        >
        </ProgressStep>
        <ProgressStep
          variant="success"
          isCurrent
        >
        </ProgressStep>
        <ProgressStep
          variant="info"
        >
        </ProgressStep>
        
      </ProgressStepper>
    </React.Fragment>
  );
};