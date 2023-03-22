import * as React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { config } from "../config/config";
import Search from "../components/home/Search";
import { useEffect } from "react";
import Calendar from "../components/home/calendar/Calendar";
import Pinned from "../components/home/Pinned";
import Resources from "../components/home/Resources";
import Updates from "../components/home/Updates";
import LogoBar from "../components/home/LogoBar";
import linksJson from "../links.json";

import Announcement from "../components/home/announcements/Announcement";

//replace this with the rails url eventually
const APIUrl = "http://localhost:1337/api/";
//const APIUrl = "https://se-d7-dev.up.railway.app/admin/";

//initialise the type of calendar and tweet data we are getting from strapi
type calData = {
  id: number;
  attributes: {
    title: string;
    body: string;
    date: string;
  };
};

type tweetData = {
  id: number;
  attributes: {
    title: string;
    description: string;
    date: string;
  };
};

function Home() {
  const app = initializeApp(config.firebaseConfig);
  const db = getFirestore(app);
  const loggedInUser = localStorage.getItem("user");
  let userEmail = "";
  if (loggedInUser) {
    userEmail = JSON.parse(loggedInUser).email;
  }
  const userProfileRef = doc(db, "user-profile", userEmail);
  // This is the list of updates

  const [updates, setUpdates] = React.useState([
    {
      title: "Vote!",
      content: "Your councelor demands it!",
    },
    {
      title: "Community Meeting",
      content: "Participate or else!",
    },
    {
      title: "Vote!",
      content: "Your councelor demands it!",
    },
    {
      title: "Community Meeting",
      content: "Participate or else!",
    },
    {
      title: "Vote!",
      content: "Your councelor demands it!",
    },
    {
      title: "Community Meeting",
      content: "Participate or else!",
    },
    {
      title: "Vote!",
      content: "Your councelor demands it!",
    },
    {
      title: "Community Meeting",
      content: "Participate or else!",
    },
    {
      title: "Vote!",
      content: "Your councelor demands it!",
    },
    {
      title: "Community Meeting",
      content: "Participate or else!",
    },
  ]);

  const [pinned, setPinned] = React.useState<
    { title: string; links: { title: string; url: string }[] }[]
  >([]);
  const [resources, setResources] = React.useState<
    { title: string; links: { title: string; url: string }[] }[]
  >([]);
  //calendarData array of calData type
  const [calendarData, setCalendarData] = React.useState<calData[]>([]);
  //tweetData array of tweetData type
  const [tweetData, setTweetData] = React.useState<tweetData[]>([]);

  // Get the interests from the user profile
  const fetchdata = async () => {
    await getDoc(userProfileRef)
      .then((doc) => {
        if (doc.exists()) {
          setPinned(
            linksJson.filter((obj) =>
              doc.data()["interests"].includes(obj.title)
            )
          );
          setResources(
            linksJson.filter(
              (obj) => !doc.data()["interests"].includes(obj.title)
            )
          );
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  //fetch calendar data from Strapi
  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        const res = await fetch(APIUrl + "calendars");
        const json = await res.json();
        //set the calendar data
        setCalendarData(json.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchTweetData = async () => {
      try {
        const res = await fetch(APIUrl + "tweets");
        const json = await res.json();
        setTweetData(json.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCalendarData();
    fetchTweetData();
  }, []);

  //create object to pass as props to Calendar component
  const passCalendarData = {
    data: calendarData,
  };
  const passTweetData = {
    tweets: tweetData,
  };
  // call fetchdata() only once
  useEffect(() => {
    fetchdata();
    console.log("fetching data");
  }, []);

  return (
    <div className="container">
      <LogoBar />
      <Search />

      {/*
	  this announcments component here will
	  probably be temporary while we figure out what to do with announcements*/}

      <div className="mt-3 text-start heading">Announcements</div>
      <Announcement {...passTweetData} />

      <div className="mt-3 text-start heading">Happening This Week</div>
      <Calendar {...passCalendarData} />

      <div className="my-3 pf-c-title heading text-start">You Pinned</div>
      <Pinned pinned={pinned} />

      <div className="my-3 pf-c-title heading text-start">Our Resources</div>
      <Resources resources={resources} />

      <div className="mt-3 pf-c-title heading text-start">News and Updates</div>
      <Updates updates={updates} />
    </div>
  );
}

export type { calData };
export type { tweetData };

export default Home;
