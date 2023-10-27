import { Button } from "@patternfly/react-core";
import { useNavigate } from "react-router-dom";
import { upData } from "../../screens/Home";
function ViewAllPosts(props: { updates: upData[] }) {
  const navigate = useNavigate();
  //navigate to allPosts
  const goToPosts = () => {
    navigate("/all-posts", {});
  };

  return (
    <>
      <button
        className="btn-yellow w-full"
        onClick={() => goToPosts()}
      >
        View All Posts
      </button>
    </>
  );
}

export default ViewAllPosts;
