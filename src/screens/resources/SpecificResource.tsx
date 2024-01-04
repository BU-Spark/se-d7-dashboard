import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { APIUrl } from "../Home";
import { Backward } from "../../components/Backward";

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
    <div className="bg-82 py-6
      min-[700px]:w-[70%] min-[950px]:w-[60%] min-[1200px]:w-[55%] min-[1920px]:w-1/2"
    >
      <Backward title={title} />
      <div className = "mt-6">
        {/* sort them by id order */}
        {resources &&
          resources.sort((a, b) => a.id - b.id).map((resource) =>(
            <button
                key={resource.id}
                className="btn-white bg-transparent text-white w-full mb-4 py-2 text-start"
                onClick={() => window.open(resource.url, '_blank')}
            >
                {resource.title}
            </button>
        ))}
      </div>
    </div>
  )
}

export default SpecificResource;