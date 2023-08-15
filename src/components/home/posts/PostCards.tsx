import * as React from "react";
import PCard from "./PCard";
import type { postData } from "../../../screens/Home";
function PostCards(props: { updates: postData[]; vertical: boolean }) {
  console.log(props.updates)
  return (
    <div className={props.vertical ? "vertical-scroll" : "horizontal-scroll"}
    style={
      props.vertical ? {display: "flex", flexWrap: "wrap"} : {}} >
      {props.updates[0] && props.updates[0].id === -1 ? (
        <PCard
          title="Uh Oh!"
          content="Looks like there was an issue!"
          createdAt= ""
        ></PCard>
      ) : props.updates && props.updates.length > 0 ? (
        props.updates.map((update) => {
          return (
            <PCard
              title={update.attributes.title}
              content={update.attributes.content}
              createdAt={update.attributes.createdAt}
            ></PCard>
          );
        })
      ) : (
        <PCard
          title="No Updates"
          content="Check back later!"
          createdAt= ""
        ></PCard>
      )}
    </div>
  );
}

export default PostCards;
