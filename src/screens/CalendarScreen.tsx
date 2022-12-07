import * as React from "react";
import AddressCheckBox from "../components/AddressCheckBox";
import AddressCheckBoxLoading from "../components/AddressCheckBoxLoading";
import CalendarCard from "../components/CalendarCard";
import StateSelection from "../components/StateSelection";
import "@patternfly/react-core/dist/styles/base.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Text,
  Button,
  SearchInput,
  Icon,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
} from "@patternfly/react-core";
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
      <div className="row">
        <div className="col-10">
         
          <SearchInput
            className=" ps-4 py-2"
            placeholder="Search D7 Resources"
            value={search}
            onChange={onChange}
            onClear={() => onChange("")}
          />
        </div>
        <div className="col-1">
          <Icon className="my-2 ">
            <CogIcon />
          </Icon>
        </div>
      </div>

      <div className="mt-3 pf-c-title h5 text-start">Happening This Week</div>
      <div className="horizonal-scroll">
        <CalendarCard
          title="Food Drive"
          content="Community Center November 15"
        ></CalendarCard>
        <CalendarCard
          title="Christmas Fair"
          content="Church December 24"
        ></CalendarCard>
        <CalendarCard
          title="New year Fair"
          content="Church January 25"
        ></CalendarCard>
      </div>

      <div className="my-3 pf-c-title h5 text-start">You Pinned</div>
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

      <div className="my-3 pf-c-title h5 text-start">Our Resources</div>
      <Button
        className="fw-bold py-2 mb-2 text-center"
        style={{ width: "260px" }}
        variant="tertiary"
      >
        <small>GET RESOURCES</small>
      </Button>
      <Button
        className="fw-bold py-2 mb-2 text-center"
        style={{ width: "260px" }}
        variant="tertiary"
      >
        <small>SUBMIT REQUESTS AND REPORTS</small>
      </Button>
      <Button
        className="fw-bold py-2 mb-2 text-center"
        style={{ width: "260px" }}
        variant="tertiary"
      >
        <small>GET INVOLVED</small>
      </Button>
      <Button
        className="fw-bold py-2 mb-2 text-center"
        style={{ width: "260px" }}
        variant="tertiary"
      >
        <small>SUBSCRIBE TO MAILING LIST</small>
      </Button>
      <Button
        className="fw-bold py-2 mb-2 text-center"
        style={{ width: "260px" }}
        variant="tertiary"
      >
        <small>ABOUT THE DISTRICT</small>
      </Button>

      <div className="mt-3 pf-c-title h5 text-start">News and Updates</div>
      <div className="horizonal-scroll">
        <CalendarCard
          title="Food Drive"
          content="Community Center November 15"
        ></CalendarCard>
        <CalendarCard
          title="Christmas Fair"
          content="Church December 24"
        ></CalendarCard>
        <CalendarCard
          title="New year Fair"
          content="Church January 25"
        ></CalendarCard>
      </div>
    </div>
  );
}

export default CalendarScreen;
