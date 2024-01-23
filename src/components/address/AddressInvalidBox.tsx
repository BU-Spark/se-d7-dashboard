import {
  Card,
  CardBody,
  Icon,
} from "@patternfly/react-core";
import "@patternfly/react-core/dist/styles/base.css";
// import a cross circle icon
import TimesCircleIcon from "@patternfly/react-icons/dist/esm/icons/times-circle-icon";
function AddressErrorBox() {
  return (
    <>
      <Card>
      <div className="bg-[#ea3323] h-1"></div>
        <CardBody className="p-3 !bg-white">
          <div className="flex justify-between items-center mt-4 px-4">
            <p className="text-navy font-bold">Sorry</p>
            <Icon isInline status="danger" className="text-end">
              <TimesCircleIcon />
            </Icon>
          </div>
          <p className="text-navy text-start px-4 mt-2 pb-4">
            Please enter a valid address
          </p>
        </CardBody>
      </Card>
    </>
  );
}

export default AddressErrorBox;
