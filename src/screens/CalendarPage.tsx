import {useState, useEffect } from "react";
import { AngleLeftIcon } from "@patternfly/react-icons";
import { useNavigate } from "react-router-dom";
import type { tweetData } from "./Home";
import { APIUrl } from "./Home";
import Announcements from "../components/home/announcements/Announcement";

function CalendarPage() {
  const navigate = useNavigate();

  const [announcements, setAnnouncements] = useState<tweetData[]>([]);

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
    <div className="bg-82">
      <div className="mt-4 ms-4 text-white flex items-center text-2xl font-bold mb-5">
        <AngleLeftIcon size="md" onClick={() => navigate("/home")} />
        Calendar
      </div>
      <Announcements tweets={announcements} vertical={true} fullWidth={true}/>
    </div>
  );
}

export default CalendarPage;