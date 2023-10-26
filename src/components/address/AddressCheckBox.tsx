import {
  Card,
  CardBody,
  Icon,
} from "@patternfly/react-core";
import "@patternfly/react-core/dist/styles/base.css";
import CheckCircleIcon from "@patternfly/react-icons/dist/esm/icons/check-circle-icon";

function AddressCheckBox() {
  return (
    <>
      <Card>
        <div className="bg-[#3e8635] h-1"></div>
        <CardBody className="p-3 !bg-white">
          <div className="flex justify-between items-center mt-4 px-4">
            <p className="text-navy font-bold">Success!</p>
            <Icon isInline status="success" className="text-end">
              <CheckCircleIcon />
            </Icon>
          </div>
          <p className="text-navy text-start px-4 mt-2 pb-4">
            You live in District 7
          </p>
        </CardBody>
      </Card>
    </>
  );
}

export default AddressCheckBox;
