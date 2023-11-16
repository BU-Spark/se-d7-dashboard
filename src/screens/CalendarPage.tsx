import {useState, useEffect } from "react";
import { AngleLeftIcon } from "@patternfly/react-icons";
import { useNavigate } from "react-router-dom";
import type { tweetData } from "./Home";
import { APIUrl } from "./Home";
import Announcements from "../components/home/announcements/Announcement";
import { DayPicker } from "react-day-picker";

function CalendarPage() {
  const navigate = useNavigate();

  const [announcements, setAnnouncements] = useState<tweetData[]>([]);
  const [selected, setSelected] = useState<Date>();

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
    <div className="bg-82 flex flex-col">
      <div className="mt-4 text-white flex items-center text-2xl font-bold mb-5">
        <AngleLeftIcon size="md" onClick={() => navigate("/home")} />
        Calendar
      </div>
      <DayPicker
        mode="single"
        className="mb-4"
        showOutsideDays
        fixedWeeks
        selected={selected}
        onSelect={setSelected}
        classNames={{
          months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-8",
          caption: "flex justify-center pt-1 relative items-center mx-10",
          caption_label: "text-sm font-bold",
          nav: "space-x-1 flex items-center",
          nav_button: "h-7 w-7 bg-transparent p-0 text-white font-bold",
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex justify-center",
          head_cell: "text-muted-foreground rounded-md w-full font-normal text-[0.8rem] text-center",
          row: "flex mt-2 justify-center",
          cell: "h-9 w-full text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          day: "h-9 w-full p-0 font-normal aria-selected:opacity-100 text-white",
          day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
          day_selected: "bg-yellow !text-navy w-9 rounded-full focus:bg-yellow focus:text-navy"
        }}
      />
      <div className="my-4 text-start font-bold text-xl">Upcoming Events</div>
      <Announcements tweets={announcements} vertical={true} fullWidth={true}/>
      <div className="self"></div>
    </div>
  );
}

export default CalendarPage;