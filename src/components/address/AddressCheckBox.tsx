import * as React from "react";
import {
  Card,
  CardBody,
  Icon,
} from "@patternfly/react-core";
import "@patternfly/react-core/dist/styles/base.css";
import "bootstrap/dist/css/bootstrap.css";
import CheckCircleIcon from "@patternfly/react-icons/dist/esm/icons/check-circle-icon";

function AddressCheckBox() {
  return (
    <>
      <Card>
        <div style={{backgroundColor:"#3e8635",height:"3px"}}></div>
        <CardBody className="p-3 bg-white">
          <div className="row">
            <div className="col-10">
              <div className="text-start text-black fw-bold mb-2">Success!</div>
            </div>
            <div className="col-1">
              <Icon isInline status="success" className="text-end">
                <CheckCircleIcon />
              </Icon>
            </div>
          </div>
          <div className="row">
            <small className="text-start text-secondary">
              You live in District 7
            </small>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default AddressCheckBox;
