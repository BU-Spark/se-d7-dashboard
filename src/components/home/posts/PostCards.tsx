import PCard from "./PCard";
import type { postData } from "../../../screens/Home";
function PostCards(props: { updates: postData[] }) {

  return (
    <>
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
              key={update.id}
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
    </>
  );
}

export default PostCards;
