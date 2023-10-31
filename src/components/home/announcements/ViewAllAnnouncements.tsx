import { useNavigate } from "react-router-dom";
import { tweetData } from "../../../screens/Home";
function ViewAllPosts(props: { tweets: tweetData[] }) {
  const navigate = useNavigate();
  //navigate to allPosts
  const goToPosts = () => {
    navigate("/all-announcements", {});
  };

  return (
    <button
      className="btn-yellow w-full"
      onClick={() => goToPosts()}
    >
      View Full Calendar
    </button>
  );
}

export default ViewAllPosts;