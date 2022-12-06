import * as React from "react";
import AddressCheckBox from "../components/AddressCheckBox";
import AddressCheckBoxLoading from "../components/AddressCheckBoxLoading";
import AddressErrorBox from "../components/AddressErrorBox";
import AddressInvalidBox from "../components/AddressInvalidBox";
import StateSelection from "../components/StateSelection";
import "@patternfly/react-core/dist/styles/base.css";
import "bootstrap/dist/css/bootstrap.css";
import { TextInput, Button } from "@patternfly/react-core";
import { useNavigate } from "react-router-dom";

function Addressentryscreen() {
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [showInvalid, setShowInvalid] = React.useState(false);

  // Store the address, city, state, and zip in state
  const [address, setAddress] = React.useState("");
  // const [address2, setAddress2] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [zip, setZip] = React.useState("")
  
  // Store the coordinates in state
  const [lat, setLat] = React.useState(0);
  const [lng, setLng] = React.useState(0);

  // Store ArcGIS response in state
  const [arcgisResponse, setArcgisResponse] = React.useState({});

  const navigateToNext = () => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      setShowSuccess(true);
      navigate("/signup");
    }, 1000);
  };

  const submit = () => {
    setShowError(false);
    setShowInvalid(false);
    setShowLoading(true);
    console.log("Submitting address");
    const a = {
      address,
      city,
      state,
      zip
    };
    console.log(a);

    if (a.address === "" || a.city === "" || a.state === "" || a.zip === "") {
      console.log("Missing address information");
      setShowLoading(false);
      setShowInvalid(true);
    } else {
      // Get coordinates from address using openstreetmap API
      const url = "https://nominatim.openstreetmap.org/search?"
        + "street=" + a.address + "&city=" + a.city + "&state=" + a.state + "&postalcode=" + a.zip + "&format=json";
      console.log(url);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.length === 0) {
            setShowLoading(false);
            setShowError(true);
            // console.log("No results found");
          } else {
            // Store the coordinates in state
            setLat(data.lat);
            setLng(data.lon);
            // print the coordinates
            console.log("lat: " + lat + " lng: " + lng);
          }
        }).then(() => {
          // Query ArcGIS Identity API to get the district the address is in
          const url = "https://boston.maps.arcgis.com/apps/webappviewer/index.html?id=4af2c3a537ca480d80fdb899287e1070/"
          + "identify" +"?geometryType=esriGeometryPoint&geometry={x:" + lng + ",y:" + lat + "}&layers=all:0&mapExtent=-71.2,42.2,-70.8,42.4&tolerance=3&imageDisplay=600,400,96&returnGeometry=false&f=pjson";
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              if (data.results.length === 0) {
                setShowLoading(false);
                setShowError(true);
              } else {
                // Store the district in state
                setArcgisResponse(data.results[0].attributes);
              }
            }).then(() => {
              // Check if the address is in District 7
              if (arcgisResponse === "7") {
                setShowLoading(false);
                navigateToNext();
              } else {
                setShowLoading(false);
                setShowError(true);
              }
            });
        });
    }
  };

  return (
    <div className="container">
      <div className="text-start">Address</div>
      <TextInput
        className="px-2"
        id="textInput-basic-1"
        type="text"
        placeholder="Street Address"
        onChange={(e) => {
          setAddress(e.split(" ").join("+"));
        }}
      />
      {/* <TextInput
        className="mb-2 px-2"
        id="textInput-basic-1"
        type="text"
        placeholder="Apt, suite, unit, building, etc."
        onChange={(e) => {
          setAddress2(e);
        }}
      /> */}

      <div className="mt-3 text-start">City</div>
      <TextInput
        className="mb-2"
        id="textInput-basic-1"
        type="text"
        placeholder="City"
        onChange={(e) => {
          setCity(e.split(" ").join("+"));
        }}
      />

      <div className="text-start mt-3">State</div>
      <StateSelection
        state={state}
        setState={setState}
      />

      <div className="text-start mt-3">Zipcode</div>
      <TextInput
        className="mb-5 px-2"
        id="textInput-basic-1"
        type="text"
        placeholder="Zipcode"
        onChange={(e) => {
          setZip(e.split(" ").join("+"));
        }}
      />

      {showSuccess && <AddressCheckBox></AddressCheckBox>}
      {showLoading && <AddressCheckBoxLoading></AddressCheckBoxLoading>}
      {showError && <AddressErrorBox></AddressErrorBox>}
      {showInvalid && <AddressInvalidBox></AddressInvalidBox>}
      
      <div className="text-end mt-3">
        <Button
          onClick={submit}
          className="px-3 py-1"
          variant="primary"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Addressentryscreen;
