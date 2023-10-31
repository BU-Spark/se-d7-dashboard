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
        <>
            {props.resources.map((resource) => {
                return (
                    <Button
                        className="py-3 mb-3"
                        variant="primary"
                        onClick={() => goToPortal(resource)}
                        style={{
                            color: 'white',
                            background: 'transparent',
                            border: '1px solid #E3B81F',
                            fontWeight: '700',
                        }}
                    >
                        {resource.title}
                    </Button>
                    
                );
            })}
        </>
    );
}
export default Resources;