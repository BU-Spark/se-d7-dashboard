import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { AngleLeftIcon } from "@patternfly/react-icons";
import { APIUrl } from "../Home";
import LogoBar from "../../components/home/LogoBar";
import { Button } from "@patternfly/react-core";
import { bottom } from "@patternfly/react-core/dist/esm/helpers/Popper/thirdparty/popper-core";

interface data {
  attributes: {
    sub_category: string;
    dropdown_links: object;
  }
}

interface ResourceLink {
  id: number;
  title: string;
  url: string;
}

function SpecificResource(){
    const navigate = useNavigate();
    const location = useLocation();
    const title = location.state?.title;

    const [resources, setResources] = useState<ResourceLink[] | null>(null); 
      
    useEffect(() =>{
      const fetchResourceData = async () => {
        try {
          // fetches data from railway with resource-lists end point
          const res = await fetch(`${APIUrl}resource-lists?fields=sub_category,dropdown_links`);
          const json = await res.json();

          // then refactor just the dropdown_links
          json.data.filter((item: data) => {
            if (item.attributes.sub_category === `${title}`){
              setResources(item.attributes.dropdown_links as ResourceLink[])
            }
          });
        } catch (error) {
          console.error(error);
        }
      };
      fetchResourceData();
    }, []) // stop useEffect after running once
  
  return (
    <div className="home">
      <LogoBar />
      <div className="portal-nav" style={{color: "white", fontSize: '1.1em'}}>
          <AngleLeftIcon size="md" onClick={() => navigate("/getresources")}/>
          {title}
      </div>
      <div className = "mt-4">
        {/* sort them by id order */}
        {resources &&
          resources.sort((a, b) => a.id - b.id).map((resource) =>(
            <Button
                key={resource.id}
                className="py-2"
                onClick={() => window.open(resource.url, '_blank')}
                style={{
                    textAlign: 'left',
                    color: 'white',
                    width: '90%',
                    marginBottom: '3%',
                    background: 'transparent',
                    border: '1px solid #D40000',
                }}
            >
                {resource.title}
            </Button>
        ))}
      </div>
    </div>
  )
}

export default SpecificResource;