import React from "react";
import { Button } from "@patternfly/react-core";
import { useNavigate } from "react-router-dom";
import { upData } from "../../screens/home/Home";
function ViewAllPosts(props: { updates: upData[] }) {
  const navigate = useNavigate();
  //navigate to allPosts
  const goToPosts = () => {
    navigate("/all-posts", {});
  };

  return (
    <>
      <Button
        className="px-3 py-2 mb-2 pinned pf-u-text-center"
        variant="primary"
        onClick={() => goToPosts()}
        style={{
          display: "flex",
          justifyContent: "center",
          color: 'black'
        }}
      >
        View All Posts
      </Button>
    </>
  );
}

export default ViewAllPosts;
