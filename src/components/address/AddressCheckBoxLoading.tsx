
import {
  Card,
  CardBody,
  Icon,
  Spinner,
} from "@patternfly/react-core";
import "@patternfly/react-core/dist/styles/base.css";

function AddressCheckBoxLoading() {
  return (
    <>
      <Card >
      <div className="bg-[#0066cc] h-1"></div>
        <CardBody className="p-3 !bg-white">
          <div className="flex justify-between items-center mt-4 px-4">
            <p className="text-navy font-bold">Processing ...</p>
            <Icon isInline status="success" className="text-end">
              <Spinner />
            </Icon>
          </div>
          <p className="text-navy text-start px-4 mt-2 pb-4"/>
        </CardBody>
      </Card>
    </>
  );
}

export default AddressCheckBoxLoading;
