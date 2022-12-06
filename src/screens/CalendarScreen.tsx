import * as React from "react";
import AddressCheckBox from "../components/AddressCheckBox";
import AddressCheckBoxLoading from "../components/AddressCheckBoxLoading";
import AddressErrorBox from "../components/AddressErrorBox";
import StateSelection from "../components/StateSelection";
import "@patternfly/react-core/dist/styles/base.css";
import "bootstrap/dist/css/bootstrap.css";
import { Text,Button,SearchInput, Icon,Card, CardTitle, CardBody, CardFooter } from "@patternfly/react-core";
import { useNavigate } from "react-router-dom";
import CogIcon from "@patternfly/react-icons/dist/esm/icons/cog-icon";

function CalendarScreen() {
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const navigateToNext = () => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      setShowSuccess(true);
      navigate("/signup");
    }, 1000);
  };

  const onChange = (value: string) => {
    setSearch(value);
  };

  return (
    <div className="container">
      <div className="inline"></div>
          <SearchInput
            className="px-5 py-2"
            placeholder="Search D7 Resources"
            value={search}
            onChange={onChange}
            onClear={() => onChange("")}
          />
     
          <Icon className="my-2">
            <CogIcon />
          </Icon>

          <div className="mb-3 pf-c-title h5 text-start">Happening This Week</div>
          <div className="mb-3 pf-c-title h5 text-start">You Pinned</div>
          <Button
        className="px-5 py-1 mb-2"
        style={{ width: "260px" }}
        variant="primary"
        
      >
        Volunteering
      </Button>
      <Button
        className="px-5 py-1 mb-2"
        style={{ width: "260px" }}
        variant="primary"
        
      >
        Local Events
      </Button>
      <Button
        className="px-5 py-1 mb-2"
        style={{ width: "260px" }}
        variant="primary"
        
      >
        Food Access
      </Button>
      
          <div className="mb-3 pf-c-title h5 text-start">Our Resources</div>
          <div className="mb-3 pf-c-title h5 text-start">News and Updates</div>
          <Card >
        <CardBody className="m-3">
          <div className="row">
            <div className="col-10">
              <Text className="text-start">Food Drive</Text>
            </div>
            <div className="col-1">
              Icon
            </div>
          </div>
          <div className="row">
            <small className="text-start text-secondary">
            Community Center
November 15
            </small>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default CalendarScreen;
