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

function Resources(props: {resources: { title: string, "links": { title: string, url: string }[] }[]}) {
    const [displayLinksIndex, setDisplayLinksIndex] = useState<number | null>(null);
    const navigate = useNavigate();

    const toggleLinksDisplay = (index: number) => {
        if (displayLinksIndex === index) {
            setDisplayLinksIndex(null);
        } else {
            setDisplayLinksIndex(index);
        }
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
                        <Button
                            className="py-3"
                            variant="primary"
                            onClick={() => toggleLinksDisplay(index)}
                            style={{
                                width: '90%',
                                color: '#00183D',
                                textAlign: 'left',
                                background: '#E3B81F',
                                fontWeight: '700',
                                borderRadius: '0',
                            }}
                        >
                            {resource.title}
                        </Button>
                        {/* checks the index of the div above and display the sub category */}
                        {displayLinksIndex === index && (
                            <div>
                                {resource.links.map((link, linkIndex) => (
                                    <Button
                                        key={`link-${linkIndex}`}
                                        className="py-3 custom-button"
                                        onClick={() => goToSpecificResource(link.title)}
                                        style={{
                                            textAlign: 'left',
                                            color: '#00183D',
                                            width: '90%',
                                            background: 'white',
                                            borderRadius: '0',
                                        }}
                                    >
                                        {link.title}
                                    </Button>
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