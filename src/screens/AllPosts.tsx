import React, { useEffect } from "react";
import { SearchIcon } from "@patternfly/react-icons";
import type { postData } from "./Home";
import { APIUrl } from "./Home";
import PostCards from "../components/home/posts/PostCards";
import { Backward } from '../components/Backward';

function AllPosts() {

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
    <div className="bg-82 py-6">
      <Backward title="Posts" className="mb-4"/>
      <div className="relative mb-20 text-navy text-lg">
        <span className="absolute inset-y-0 w-10 grid place-content-center">
          <SearchIcon />
        </span>
        <input 
          type="text" 
          placeholder="Search Posts" 
          onChange={handleSearch}
          className="ps-10 w-full h-9"
        />
      </div>
      <div className="grid 
        min-[700px]:grid-cols-2 min-[700px]:gap-2.5 
        min-[1200px]:grid-cols-3 min-[1200px]:gap-5
        min-[1920px]:grid-cols-4 min-[1920px]:gap-7.5
        " 
      >
        <PostCards updates={filteredUpdates} />
      </div>
    </div>
  );
}

export default AllPosts;
