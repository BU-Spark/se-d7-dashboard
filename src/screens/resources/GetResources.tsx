import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import * as React from "react";

import Resources from "../../components/home/Resources";

import { APIUrl } from "../Home";

import { IResource } from "../../types";
import { HeadBar } from "../../components/headBar";

interface data {
  title: string;
  links: {title: string,
          url: string}[];
}

function GetResources(){
    const navigate = useNavigate();

    const [resources, setResources] = 
      React.useState<{title: string; links: {title:string, url: string}[]}[]>([]); 
      
    useEffect(() =>{
      const fetchResourceData = async () => {
        try {
          // fetches data from railway with resource-lists end point
          // with fields category, sub_category, and link
          const res = await fetch(`${APIUrl}resource-lists?fields=category,sub_category,link`);
          const json = await res.json();

          // then refactor just the data
          const jsonData = json.data.map((resource: IResource) => resource.attributes);
          
          //take API response and convert to into array of objects of the type define in "data" interface
          const categoryData: data[] = Array.from(jsonData.reduce((map:any,item:any) =>{
            const category = item.category;
            const sub_cate = item.sub_category;
            const link = { title: sub_cate, url: item.link };
            const existingCategoryData = map.get(category);
            //for each item in jsonData, 'category', 'sub-category', 'link' are extracted.
            //if 'category' exist in Map, the link is added to the existing category's 'links'
            if (existingCategoryData){
              existingCategoryData.links.push(link);
            }else {
              map.set(category, { title: category, links: [link]});
            }
            return map;
          },new Map()).values())
          setResources(categoryData);
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
      <HeadBar title="Get Resources" />
      <div className = "mt-4">
        <Resources resources={resources} />
      </div>
    </div>
  )
}

export default GetResources;