import { useNavigate } from "react-router-dom";
import linksJson from "../links.json";
import { useEffect } from "react";
import * as React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { config } from "../config/config";
import { Button } from "@patternfly/react-core";
import Resources from "../components/home/Resources";
import { link } from "fs";
import { AngleLeftIcon } from "@patternfly/react-icons";
import { useLocation } from "react-router-dom";
import { APIUrl } from "./Home";

function GetResources(){
    const app = initializeApp(config.firebaseConfig);
    const db = getFirestore(app);
    const navigate = useNavigate();
    const loggedInUser = localStorage.getItem("user");
    let userEmail = "";
    if (loggedInUser) {
      userEmail = JSON.parse(loggedInUser).email;
    } else {
      userEmail = "defaultuser@email.com";
    }
    const userProfileRef = doc(db, "user-profile", userEmail);

     const [resources, setResources] = 
        React.useState<{title: string; 
                links: {title:string, url: string}[]}[]>([]); 
                

    useEffect(() =>{
      interface data {
        title: string;
        links: {title: string,
                url: string}[]
      }

      const fetchResourceData = async () => {
        try {
          const res = await fetch(APIUrl + "resource-lists");
          const json = await res.json();
          

          let jsonData = json.data.map((x : any) => {
            return {
              category: x.attributes.category,
              sub_category: x.attributes.sub_category,
              link: x.attributes.link
            }
          })

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
                map.set(category, { title: category, links: [link] });
              }
           
              return map;
          },new Map()).values())
          setResources(categoryData);

        } catch (error) {
          console.error(error);
        }
      };
      
      fetchResourceData();
    })
  

  return (
    <div>
        <div className="mt-4 ms-4 portal-nav">
            <AngleLeftIcon size="md" onClick={() => navigate("/home")}/>
            Get Resources
        </div>
        <div className = "mt-5">
          <Resources resources={resources} />
        </div>
    </div>

    
  )

}

export default GetResources;