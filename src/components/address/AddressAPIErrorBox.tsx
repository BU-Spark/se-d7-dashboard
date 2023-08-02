import * as React from "react";
import {
  Card,
  CardBody,
  Icon,
} from "@patternfly/react-core";
import "@patternfly/react-core/dist/styles/base.css";
import "bootstrap/dist/css/bootstrap.css";
// import a cross circle icon
import TimesCircleIcon from "@patternfly/react-icons/dist/esm/icons/times-circle-icon";

function AddressAPIError() {
  return (
    <>
      <Card>
        <div style={{backgroundColor:"#c9190b",height:"3px"}}></div>
        <CardBody className="p-3 bg-white">
          <div className="row">
            <div className="col-10">
              <div className="text-start text-black fw-bold mb-2">Sorry</div>
            </div>
            <div className="col-1">
              <Icon isInline status="danger" className="text-end">
                <TimesCircleIcon />
              </Icon>
            </div>
          </div>
          <div className="row">
            <small className="text-start text-secondary">
              We are having trouble connecting to the server, please try again later.
            </small>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default AddressAPIError;
