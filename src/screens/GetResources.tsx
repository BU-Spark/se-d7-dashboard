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
      console.log(linksJson);
      setResources(linksJson);
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