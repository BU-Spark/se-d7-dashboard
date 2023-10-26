import * as React from "react";
import AnnouncementCard from "./AnnouncementCard";
import type { tweetData } from "../../../screens/home/Home";

function Announcement(props: { tweets: tweetData[]; vertical: boolean}) {
  return (
    <div className={props.vertical ? "vertical-scroll" : "horizontal-scroll"}
    style={
      props.vertical ? {display: "flex", flexWrap: "wrap"} : {}
    } >
      {props.tweets.length > 0 ? (
        props.tweets.map((announcement) => {
          return (
            <AnnouncementCard
              title={announcement.attributes.title}
              description={announcement.attributes.description}
              date={announcement.attributes.date}
            ></AnnouncementCard>
          );
        })
      ) : (
        <AnnouncementCard
          title="No Announcements"
          description="Check back later!"
        ></AnnouncementCard>
      )}{" "}
    </div>
  );
}

export default Announcement;
