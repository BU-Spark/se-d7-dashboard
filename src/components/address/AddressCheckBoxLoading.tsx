import * as React from "react";
import {
  Card,
  CardBody,
  Icon,
  Spinner,
} from "@patternfly/react-core";
import "@patternfly/react-core/dist/styles/base.css";
import "bootstrap/dist/css/bootstrap.css";

function AddressCheckBoxLoading() {
  return (
    <>
      <Card >
        <div style={{backgroundColor:"#0066CC",height:"3px"}}></div>
        <CardBody className="p-3 bg-white">
          <div className="row">
            <div className="col-10">
              <div className="text-start text-black fw-bold">Processing...</div>
            </div>
            <div className="col-1">
              <Icon isInline className="text-end">
              <Spinner isSVG aria-label="Contents of the basic example" />
              </Icon>
            </div>
          </div>
          
        </CardBody>
      </Card>
    </>
  );
}

export default AddressCheckBoxLoading;
