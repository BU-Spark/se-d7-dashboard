import * as React from "react";
import CalendarCard from "./CalendarCard";
import DatePicker from "./DatePicker";
function Calendar(props: { events: { title: string, content: string }[] }) {

    return (
        <div>
            <DatePicker />
            <div className="horizontal-scroll">
                {props.events.length > 0 ? (
                    props.events.map((event) => {
                        return (
                            <CalendarCard
                                title={event.title}
                                content={event.content}
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
        </div>
    );
}

export default Calendar;
