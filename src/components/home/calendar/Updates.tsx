import * as React from "react";
import CalendarCard from "./CalendarCard";
function Updates(props: { updates: { title: string, content: string }[] }) {
    return (
        <div className="horizontal-scroll">
            {props.updates.length > 0 ? (
                props.updates.map((update) => {
                    return (
                        <CalendarCard
                            title={update.title}
                            content={update.content}
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
