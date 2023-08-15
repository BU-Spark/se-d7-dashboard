import React, { useEffect } from "react";
import { SearchIcon, AngleLeftIcon } from "@patternfly/react-icons";
import { useNavigate } from "react-router-dom";
import type { postData } from "./Home";
import { APIUrl } from "./Home";
import PostCards from "../components/home/posts/PostCards";

function AllPosts() {
  const navigate = useNavigate();

  const [updates, setUpdates] = React.useState<postData[]>([]);
  const [searchTerm, setSearchTerm] = React.useState('');

  useEffect(() => {
    const fetchUpdates = async () => {
      fetch(APIUrl + "updates")
        .then((res) => {
          if (res.ok) {
            res.json().then((json) => {
              setUpdates(json.data);
            });
          } else {
            console.log(`status code: ${res.status}`);
            setUpdates([
              {
                id: -1,
                attributes: {
                  title: "Uh Oh!",
                  content: "Looks like there was an issue!",
                  createdAt: "2023-04-26T06:23:31.752Z",
                },
              },
            ]);
          }
        })
        .catch((e) => {
          console.error(e);
        });
    };
    fetchUpdates();
  }, []);
  

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // filter to lowercase
  const filteredUpdates = updates.filter((update) => {
    const title = update.attributes.title.toLowerCase();
    const content = update.attributes.content.toLowerCase();
    // finds similar content in both title and content
    return title.includes(searchTerm) || content.includes(searchTerm);
  });

  return (
    <div className="bg">
      <div className="mt-3 ms-3 portal-nav-custom">
        <AngleLeftIcon size="md" onClick={() => navigate("/home")} />
        &nbsp;&nbsp;Posts
      </div>
      <div className="search-container">
        <SearchIcon className="search-icon" />
        <input 
          type="text" 
          placeholder="Search Posts" 
          onChange={handleSearch}
          className="search-bar"
        />
      </div>
      <PostCards updates={filteredUpdates} vertical={true} />
    </div>
  );
}

export default AllPosts;
