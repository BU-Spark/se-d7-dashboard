import { Button } from "@patternfly/react-core";
import { useNavigate } from "react-router-dom";

function Resources(props: {resources: { title: string, "links": { title: string, url: string }[] }[]}) {
    const navigate = useNavigate();
    const goToPortal = (resource: { title: string, "links": { title: string, url: string }[] }) => {
        // Navigate to the portal page
        // Pass the resource as a prop
        navigate("/portal", { state: {title: resource.title, links: resource.links} });
    }
    
    return (
        <div className="container">
            {props.resources.map((resource) => {
                return (
                    <Button
                        className="fw-bold py-2 mb-2 text-uppercase"
                        variant="secondary"
                        onClick={() => goToPortal(resource)}
                    >
                        {resource.title}
                    </Button>
                    
                );
            })}
        </div>
    );
}
export default Resources;