import { Button } from "@patternfly/react-core";
import { useNavigate } from "react-router-dom";
import { APIUrl } from "../../screens/Home";

type resourcesData = {
    id: number;
    attributes: {
      title: string;
      body: string;
      date: string;
    };
  };

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
                        className="px-3 py-2 mb-2 pinned"
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