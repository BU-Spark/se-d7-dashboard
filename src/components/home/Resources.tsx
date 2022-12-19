import { Button } from "@patternfly/react-core";


function Resources(props: { resources: string[] }) {
    return (
        <div className="container">
            {props.resources.map((resource) => {
                return (
                    <Button
                        className="fw-bold py-2 mb-2 text-uppercase"
                        variant="secondary"
                    >
                        {resource}
                    </Button>
                );
            })}
        </div>
    );
}
export default Resources;