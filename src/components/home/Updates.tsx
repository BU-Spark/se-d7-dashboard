import * as React from "react";
import CalendarCard from "./calendar/CalendarCard";
import type { upData } from "../../screens/Home";
function Updates(props: { updates: upData[] }) {
  return (
    <div className="horizontal-scroll">
      {props.updates && props.updates.length > 0 ? (
        props.updates.map((update) => {
          return (
            <CalendarCard
              title={update.attributes.title}
              content={update.attributes.content}
            ></CalendarCard>
          );
        })
      ) : (
        <CalendarCard
          title="No Events"
          content="Check back later!"
        ></CalendarCard>
      )}
    </div>
  );
}

export default Updates;
