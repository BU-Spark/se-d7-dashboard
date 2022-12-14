import * as React from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { config } from '../config/config';
import Search from "../components/home/Search";
import { useEffect } from "react";
import Calendar from "../components/home/calendar/Calendar";
import Pinned from "../components/home/Pinned";
import Resources from "../components/home/Resources";
import Updates from "../components/home/Updates";
import LogoBar from "../components/home/LogoBar";
import linksJson from "../links.json";

function Home() {
  const app = initializeApp(config.firebaseConfig);
  const db = getFirestore(app);
  const loggedInUser = localStorage.getItem("user");
  let userEmail = "";
  if (loggedInUser) {
    userEmail = JSON.parse(loggedInUser).email;
  };
  const userProfileRef = doc(db, "user-profile", userEmail);
  // This is the list of events
  const [events, setEvents] = React.useState([
    {
      title: "Food Drive",
      content: "Community Center November 15",
    },
    {
      title: "Christmas Fair",
      content: "Church December 24",
    }, {
      title: "Food Drive",
      content: "Community Center November 15",
    },
    {
      title: "Christmas Fair",
      content: "Church December 24",
    }, {
      title: "Food Drive",
      content: "Community Center November 15",
    },
    {
      title: "Christmas Fair",
      content: "Church December 24",
    }, {
      title: "Food Drive",
      content: "Community Center November 15",
    },
    {
      title: "Christmas Fair",
      content: "Church December 24",
    }
  ]);

  const [updates, setUpdates] = React.useState([
    {
      title: "Vote!",
      content: "Your councelor demands it!",
    },
    {
      title: "Community Meeting",
      content: "Participate or else!",
    }, {
      title: "Vote!",
      content: "Your councelor demands it!",
    },
    {
      title: "Community Meeting",
      content: "Participate or else!",
    }, {
      title: "Vote!",
      content: "Your councelor demands it!",
    },
    {
      title: "Community Meeting",
      content: "Participate or else!",
    }, {
      title: "Vote!",
      content: "Your councelor demands it!",
    },
    {
      title: "Community Meeting",
      content: "Participate or else!",
    }, {
      title: "Vote!",
      content: "Your councelor demands it!",
    },
    {
      title: "Community Meeting",
      content: "Participate or else!",
    }, 
  ]);

  const [pinned, setPinned] = React.useState<{ title: string, "links": { title: string, url: string }[] }[]>([]);
  const [resources, setResources] = React.useState<{ title: string, "links": { title: string, url: string }[] }[]>([]);

  // Get the interests from the user profile
  const fetchdata = async () => {
    await getDoc(userProfileRef).then((doc) => {
      if (doc.exists()) {
        setPinned(linksJson.filter(obj => doc.data()['interests'].includes(obj.title)));
        setResources(linksJson.filter(obj => !doc.data()['interests'].includes(obj.title)));
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }

  // call fetchdata() only once
  useEffect(() => {
    fetchdata();
    console.log("fetching data");
  }, []);


  return (
    <div className="container">
      <LogoBar />
      <Search />

      <div className="mt-3 text-start heading">Happening This Week</div>
      <Calendar events={events} />

      <div className="my-3 pf-c-title heading text-start">You Pinned</div>
      <Pinned pinned={pinned}/>

      <div className="my-3 pf-c-title heading text-start">Our Resources</div>
      <Resources resources={resources} />

      <div className="mt-3 pf-c-title heading text-start">News and Updates</div>
      <Updates updates={updates} />
    </div>
  );
}

export default Home;
