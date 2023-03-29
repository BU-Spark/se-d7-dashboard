import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';
import './ProgressStepperCompact.css'; // import custom CSS styles

export const ProgressStepperCompact: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <br />
      <ProgressStepper className="pf-c-progress-stepper pf-m-horizontal pf-m-center "> {/* add custom class and horizontal modifier */}
        <ProgressStep
          variant="info"
          isCurrent
          id="compact-step1"
          titleId="compact-step2-title"
          aria-label="step with info"
        >
        </ProgressStep>
        <ProgressStep
          variant="pending"
          id="compact-step2"
          titleId="compact-step3-title"
          aria-label="pending step"
        >
        </ProgressStep>
        <ProgressStep
          variant="pending"
          id="compact-step3"
          titleId="compact-step3-title"
          aria-label="pending step"
        >
        </ProgressStep>
      </ProgressStepper>
    </React.Fragment>
  );
};