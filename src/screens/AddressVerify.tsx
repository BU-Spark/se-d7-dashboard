import { useState } from "react";
import AddressCheckBox from "../components/address/AddressCheckBox";
import AddressCheckBoxLoading from "../components/address/AddressCheckBoxLoading";
import AddressErrorBox from '../components/address/AddressErrorBox';
import AddressInvalidBox from "../components/address/AddressInvalidBox";
import AddressAPIErrorBox from "../components/address/AddressAPIErrorBox";
import { TextInput, SearchInput } from "@patternfly/react-core";
import { useNavigate } from "react-router-dom";
import { Stepper } from "../components/home/Stepper";
import Select from "react-select";

interface IAddressVerifyProps {
  handleNextStep: () => void;
}

function AddressVerify( {handleNextStep}: IAddressVerifyProps ) {
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showInvalid, setShowInvalid] = useState(false);
  const [showAPIError, setShowAPIError] = useState(false);
  // Store the address, city, state, and zip in state
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Select a state");
  const [zip, setZip] = useState("")

  const options = [
    {value: "MA", label: "Massachusetts"},
    {value: "Other", label: "Other"},
  ]

  const submit = () => {
    setShowError(false);
    setShowInvalid(false);
    setShowAPIError(false);
    setShowLoading(true);
    const a = {
      address,
      city,
      state,
      zip
    };

    if (a.address === "" || a.city === "" || a.state === "" || a.zip === "") {
      setShowLoading(false);
      setShowInvalid(true);
    } else if (a.state === "Other") {
      setShowLoading(false);
      setShowError(true);
    } else if (a.city.toLowerCase() !== "boston"){
      setShowLoading(false);
      setShowError(true);
    } 
    /***Can also implement some sort of address validity checking here before going into the main ArcGIS query check*/
    else {
      // Get coordinates from address using openstreetmap API
      const url = "https://nominatim.openstreetmap.org/search?"
        + "street=" + a.address + "&city=" + a.city + "&state=" + a.state + "&postalcode=" + a.zip + "&format=json";
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setShowLoading(false);
            setShowAPIError(true);
            return;
          } else {
            // Store the coordinates in state
            if (data.length === 0) {
              setShowInvalid(true);
              return;
            }
            return { lat: data[0].lat, lng: data[0].lon };
          }
        }).then((coords) => { // issue here no coords!
          // Query ArcGIS Query API to return all layers that contain the point
          // https://bostonopendata-boston.opendata.arcgis.com/datasets/boston::city-council-districts-effective-for-the-2023-municipal-election/about
          if (!coords) {
            setShowLoading(false);
            setShowInvalid(true);
            return;
          }
          const url = "https://services.arcgis.com/sFnw0xNflSi8J0uh/arcgis/rest/services/Docket%201275%20Committee%20Report/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson"
            + "&geometry=" + coords.lng + "%2C" + coords.lat + "&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelIntersects";
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              if (!data) {
                setShowLoading(false);
                setShowAPIError(true);
                return -1;
              } else {
                // Store the district in state
                return data.features[0].properties.DISTRICT
              }
            }).then((arcgisResponse) => {
              // Check if the address is in District 7
              if (arcgisResponse === -1) {
                setShowLoading(false);
                setShowAPIError(true);
              }
              else if (arcgisResponse === 7) {
                setShowLoading(false);
                setShowSuccess(true);
                handleNextStep();
              } else {
                setShowLoading(false);
                setShowError(true);
              }
            });
        });
    }
  };

  return (
    <div className="bg-app">
      <Stepper currentStep={1} totalStep={3} />
      <p className="text-start mt-6 mb-8 text-xl font-bold">Address</p>
      <div className="text-start mb-1 ">Address</div>
      <TextInput
        className="!mb-3"
        id="textInput-basic-1"
        type="text"
        placeholder="Street Address or P.O. Box"
        onChange={(e) => {
          setAddress(e.split(" ").join("+"));
        }}
        />
      <TextInput
        className="!mb-8 !px-2"
        id="textInput-basic-1"
        type="text"
        placeholder="Apt, suite, unit, building, etc."
        // onChange={(e) => { // We don't actually need this field, its just for appearances lol
        //   setAddress2(e);
        // }}
        />

      <div className="text-start mb-1 ">City</div>
      <SearchInput
        className="!mb-8"
        placeholder=""
        value={city}
        onChange={(_e, value) => {
          setCity(value);
        }
      }
      onClear={() => setCity("")}
      />

      <div className="text-start mb-1">State</div>
      <Select
        options={options} 
        className="text-start" 
        placeholder="Select a state"
        isSearchable={false}
        onChange={(selectedOption) => {
          if (selectedOption) {
            setState(selectedOption.value);
          } else {
            setState("");
          }
        }}
        styles={{
          control: (provided) => ({
            ...provided,
            borderRadius: 0,
          }),
          menu: (provided) => ({
            ...provided,
            borderRadius: 0,
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#e3b81f" : "white",
            color: "#00183d"
          })
        }}
        />
      <div className="text-start mt-6 mb-1">Zipcode</div>
      <TextInput
        className="px-2 !mb-4"
        id="textInput-basic-1"
        type="text"
        placeholder="Zipcode"
        onChange={(e) => {
          setZip(e.split(" ").join("+"));
        }}
        />

      {showSuccess && <AddressCheckBox/>}
      {showLoading && <AddressCheckBoxLoading/>}
      {showError && <AddressErrorBox />}
      {showInvalid && <AddressInvalidBox />}
      {showAPIError && <AddressAPIErrorBox/>}
      
      {!showLoading && 
        <div className="text-end">
          <button
            onClick={submit}
            className="btn-yellow mt-4"
          >
            Next
          </button>
        </div>
      }
    </div>
  );
}

export default AddressVerify;
