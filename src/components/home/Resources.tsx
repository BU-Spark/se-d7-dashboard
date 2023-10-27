import { Button } from "@patternfly/react-core";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type resourcesData = {
    id: number;
    attributes: {
      title: string;
      body: string;
      date: string;
    };
  };

function Resources(props: 
    {resources: 
        { 
            title: string, 
            "links": { 
                title: string, 
                url: string 
            }[] }[]}
    ) {
    const [displayLinks, setDisplayLinks] = useState<{ [key: number]: boolean }>({});
    const navigate = useNavigate();

    // handles toggle button by object key, value
    // copies previous state and updates one of it on click
    const toggleLinksDisplay = (index: number) => {
        setDisplayLinks(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    }

    const goToSpecificResource = (title: string) => {
        navigate(`/specific-resource`, { state: { title } });
    }

    // not using atm and probably not later on
    // const navigate = useNavigate();
    // const goToPortal = (resource: { title: string, "links": { title: string, url: string }[] }) => {
    //     // Navigate to the portal page
    //     // Pass the resource as a prop
    //     console.log(resource)
    //     navigate("/portal", { state: {title: resource.title, links: resource.links} });
    // }

    return (
        <>
            {props.resources.map((resource, index) => {
                return (
                    <div key={`resource-${index}`} className="mb-4">
                        <button
                            className="btn-yellow text-start w-full py-2"
                            onClick={() => toggleLinksDisplay(index)}
                        >
                            {resource.title}
                        </button>
                        {/* checks the index of the div above and display the sub category */}
                        {displayLinks[index] && (
                            <div>
                                {resource.links.map((link, linkIndex) => (
                                    <button
                                        key={`link-${linkIndex}`}
                                        className="py-2 ps-6 w-full text-navy bg-white text-start"
                                        onClick={() => goToSpecificResource(link.title)}
                                    >
                                        {link.title}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    );
}
export default Resources;