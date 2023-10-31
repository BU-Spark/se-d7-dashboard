import AnnouncementCard from "./AnnouncementCard";
import type { tweetData } from "../../../screens/Home";
import clsx from 'clsx';

function Announcement(props: { tweets: tweetData[]; vertical: boolean}) {
  return (
    <div className={clsx(
      props.vertical ? "vertical-scroll" : "horizontal-scroll",
      props.vertical && ["flex", "flex-wrap"]
    )}>
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
