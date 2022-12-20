import { Button } from "@patternfly/react-core";
import { useNavigate } from "react-router-dom";

function Pinned(props: {pinned: { title: string, "links": { title: string, url: string }[] }[]}) {
    const navigate = useNavigate();
    
    const goToPortal = (resource: { title: string, "links": { title: string, url: string }[] }) => {
        // Navigate to the portal page
        // Pass the resource as a prop
        navigate("/portal", { state: {title: resource.title, links: resource.links} });
    }
    
    return (
        <div className="container">
            {props.pinned.map((pinned) => {
                return (
                    <Button
                        className="px-3 py-2 mb-2 pinned"
                        variant="primary"
                        onClick={() => goToPortal(pinned)}
                    >
                        {pinned.title}
                    </Button>
                );
            })}
        </div>
    );
}
export default Pinned;