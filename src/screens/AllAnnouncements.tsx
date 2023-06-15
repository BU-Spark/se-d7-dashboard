import React, { useEffect } from "react";
import { AngleLeftIcon } from "@patternfly/react-icons";
import { useNavigate } from "react-router-dom";
import type { tweetData, upData } from "./Home";
import { APIUrl } from "./Home";
import Announcements from "../components/home/announcements/Announcement";

function AllAnnouncements() {
  const navigate = useNavigate();

  const [announcements, setAnnouncements] = React.useState<tweetData[]>([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      fetch(APIUrl + "tweets")
        .then((res) => {
          if (res.ok) {
            res.json().then((json) => {
              setAnnouncements(json.data);
            });
          } else {
            console.log(`status code: ${res.status}`);
            setAnnouncements([
              {
                id: -1,
                attributes: {
                  title: "Uh Oh!",
                  description: "Looks like there was an issue!",
                  date: "None"
                },
              },
            ]);
          }
        })
        .catch((e) => {
          console.error(e);
        });
    };
    fetchUpdates();
  }, []);

  return (
    <div>
      <div className="mt-4 ms-4 portal-nav">
        <AngleLeftIcon size="md" onClick={() => navigate("/home")} />
        All Announcements
      </div>
      <Announcements tweets={announcements} vertical={true}/>
    </div>
  );
}

export default AllAnnouncements;