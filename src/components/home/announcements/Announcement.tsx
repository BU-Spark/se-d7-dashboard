import AnnouncementCard from "./AnnouncementCard";
import type { tweetData } from "../../../screens/Home";
import { FC } from "react";
import clsx from 'clsx';

interface IAnnouncementProps {
  tweets: tweetData[];
  vertical: boolean;
  fullWidth?: boolean;
}

const Announcement: FC<IAnnouncementProps> = (props: { 
  tweets: tweetData[]; 
  vertical: boolean;
  fullWidth?: boolean;
}) => {

  return (
    <div className={clsx(
      props.vertical ? "vertical-scroll" : "horizontal-scroll",
    )}>
      {props.tweets.length > 0 ? (
        props.tweets.map((announcement) => {
          return (
            <AnnouncementCard
              title={announcement.attributes.title}
              description={announcement.attributes.description}
              date={announcement.attributes.date}
              fullWidth={props.fullWidth}
            ></AnnouncementCard>
          );
        })
      ) : (
        <AnnouncementCard
          title="No Announcements"
          description="Check back later!"
          fullWidth={props.fullWidth}
        ></AnnouncementCard>
      )}{" "}
    </div>
  );
}

export default Announcement;
