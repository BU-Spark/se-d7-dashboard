import { useNavigate } from "react-router-dom";
import { ButtonHTMLAttributes, FC } from 'react';


const ViewAllPosts: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const navigate = useNavigate();
  //navigate to allPosts
  const goToPosts = () => {
    navigate("/all-posts", {});
  };

  return (
    <button
      onClick={() => goToPosts()}
      {...props}
    >
      View All Posts
    </button>
  );
}

export default ViewAllPosts;
