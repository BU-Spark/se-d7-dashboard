import React from "react";
import { Button } from "@patternfly/react-core";
import { useNavigate } from "react-router-dom";
import { tweetData } from "../../../screens/Home";
function ViewAllPosts(props: { tweets: tweetData[] }) {
  const navigate = useNavigate();
  //navigate to allPosts
  const goToPosts = () => {
    navigate("/all-announcements", {});
  };

  return (
    <Button
      className="px-3 py-2 mb-2 pinned pf-u-text-center"
      variant="primary"
      onClick={() => goToPosts()}
      style={{
        display: "flex",
        justifyContent: "center",
        color: '#001C46',
      }}
    >
      View Full Calendar
    </Button>
  );
}

export default ViewAllPosts;