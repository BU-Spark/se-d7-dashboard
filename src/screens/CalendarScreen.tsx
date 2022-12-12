import * as React from "react";
import CalendarCard from "../components/CalendarCard";
import "@patternfly/react-core/dist/styles/base.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  SearchInput,
  Icon,
} from "@patternfly/react-core";
import CogIcon from "@patternfly/react-icons/dist/esm/icons/cog-icon";

function CalendarScreen(event: any) {
  const calendarUrl = 'https://calendar.google.com/calendar/ical/c_080ee803375d2514bcb0ec37156349602eb5972c84e941fe9f50bc91448193ec%40group.calendar.google.com/public/basic.ics';
  // const calendarData = fs.readFileSync(calendarUrl, 'utf8');
  // const calendarEvents = ical.parseICS(calendarData);
  function checkUpcomingEvents(events: { [key: string]: any }) {
    // Get the current date and the date one week from now
    const now = new Date();
    const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  
    // Check if the calendar has any events in the upcoming week
    const upcomingEvents = Object.values(events).filter(event => {
      return event.start >= now && event.start < nextWeek;
    });
  
    if (upcomingEvents.length > 0) {
      console.log('There are events in the upcoming week.');
    } else {
      console.log('There are no events in the upcoming week.');
    }
  }
  
  const [search, setSearch] = React.useState("");
  // This marks if there are events in the first place
  const [hasEvents, setHasEvents] = React.useState(true);
  // This marks if the event calendar is still being downloaded
  const [loadingEvents, setLoadingEvents] = React.useState(false);
  // This markts if the event processing is complete
  const [eventsProcessed, setEventsProcessed] = React.useState(false);
  // This is the list of events
  const [events, setEvents] = React.useState([
    {
      title: "Food Drive",
      content: "Community Center November 15",
    },
    {
      title: "Christmas Fair",
      content: "Church December 24",
    },
    {
      title: "New year Fair",
      content: "Church January 25",
    },
  ]);

  const onChange = (value: string) => {
    setSearch(value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
         
          <SearchInput
            className=" ps-4 py-2"
            placeholder="Search D7 Resources"
            value={search}
            onChange={onChange}
            onClear={() => onChange("")}
          />
        </div>
        <div className="col-1">
          <Icon className="my-2 ">
            <CogIcon />
          </Icon>
        </div>
      </div>

      <div className="mt-3 pf-c-title h5 text-start">Happening This Week</div>
      <div className="horizonal-scroll">

      {hasEvents ? (
        events.map((event) => {
          return (
            <CalendarCard
            title={event.title}
            content={event.content}
          ></CalendarCard>
          );
        })
      ) : (
        <CalendarCard
          title= "No Events"
          content="Check back later!"
        ></CalendarCard>
      )}
      </div>
      

      <div className="my-3 pf-c-title h5 text-start">You Pinned</div>
      <Button
        className="px-5 py-1 mb-2"
        style={{ width: "260px" }}
        variant="primary"
      >
        Volunteering
      </Button>
      <Button
        className="px-5 py-1 mb-2"
        style={{ width: "260px" }}
        variant="primary"
      >
        Local Events
      </Button>
      <Button
        className="px-5 py-1 mb-2"
        style={{ width: "260px" }}
        variant="primary"
      >
        Food Access
      </Button>

      <div className="my-3 pf-c-title h5 text-start">Our Resources</div>
      <Button
        className="fw-bold py-2 mb-2 text-center"
        style={{ width: "260px" }}
        variant="tertiary"
      >
        <small>GET RESOURCES</small>
      </Button>
      <Button
        className="fw-bold py-2 mb-2 text-center"
        style={{ width: "260px" }}
        variant="tertiary"
      >
        <small>SUBMIT REQUESTS AND REPORTS</small>
      </Button>
      <Button
        className="fw-bold py-2 mb-2 text-center"
        style={{ width: "260px" }}
        variant="tertiary"
      >
        <small>GET INVOLVED</small>
      </Button>
      <Button
        className="fw-bold py-2 mb-2 text-center"
        style={{ width: "260px" }}
        variant="tertiary"
      >
        <small>SUBSCRIBE TO MAILING LIST</small>
      </Button>
      <Button
        className="fw-bold py-2 mb-2 text-center"
        style={{ width: "260px" }}
        variant="tertiary"
      >
        <small>ABOUT THE DISTRICT</small>
      </Button>

      <div className="mt-3 pf-c-title h5 text-start">News and Updates</div>
      <div className="horizonal-scroll">
        <CalendarCard
          title="Food Drive"
          content="Community Center November 15"
        ></CalendarCard>
        <CalendarCard
          title="Christmas Fair"
          content="Church December 24"
        ></CalendarCard>
        <CalendarCard
          title="New year Fair"
          content="Church January 25"
        ></CalendarCard>
      </div>
    </div>
  );
}

export default CalendarScreen;
