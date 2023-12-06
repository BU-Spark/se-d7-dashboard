import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APIUrl } from "../../screens/Home";
import { getAuth } from "firebase/auth";
import { IResource } from "../../types";


function Pinned(props: {
  pinned: { title: string; links: { title: string; url: string }[] }[];
}) {
  const navigate = useNavigate();

  const goToPortal = (resource: {
    title: string;
    links: { title: string; url: string }[];
  }) => {
    // Navigate to the portal page
    // Pass the resource as a prop
    navigate("/portal", {
      state: { title: resource.title, links: resource.links },
    });
  };

  const [pinned, setPinned] = useState<
    { title: string; links: { title: string; url: string }[] }[]
  >([]);

  const [currentUserEmail, setCurrentUserEmail] = useState<null|string>(null);

  useEffect(() => {
    const auth = getAuth();
    setCurrentUserEmail(auth.currentUser?.email || null);

    interface data {
      title: string;
      links: { title: string; url: string }[];
    }

    const pinnedL = props.pinned.map((p) => {
      return p.title;
    });

    const fetchResourceData = async () => {
      try {
        const res = await fetch(APIUrl + "resource-lists");
        const json = await res.json();
        const jsonData = json.data.map((resource: IResource) => resource.attributes);

        //take API response and convert to into array of objects of the type define in "data" interface
        const categoryData: data[] = Array.from(
          jsonData
            .reduce((map: any, item: any) => {
              const category = item.category;
              const sub_cate = item.sub_category;
              const link = { title: sub_cate, url: item.link };
              const existingCategoryData = map.get(category);
              //for each item in jsonData, 'category', 'sub-category', 'link' are extracted.
              //if 'category' exist in Map, the link is added to the existing category's 'links'
              if (existingCategoryData) {
                existingCategoryData.links.push(link);
              } else {
                map.set(category, { title: category, links: [link] });
              }

              return map;
            }, new Map())
            .values()
        );
        //filter to only contain the pinned content
        const pData = categoryData.filter((x) => pinnedL.includes(x.title));
        setPinned(pData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResourceData();
  }, [props.pinned]);

  const navigateToSignUp = () => {
    navigate("/address-info");
  };

  return (
    <>
      {currentUserEmail ? (
        // if user is logged in, display pinned items
        pinned.map((pinned) => (
          <button
            key={pinned.title}
            className="btn-yellow text-start mb-4 w-full"
            onClick={() => goToPortal(pinned)}
          >
            {pinned.title}
          </button>
        ))
      ) : (
        // if user isn't logged in, display the Sign Up button
        <button
          className="mb-4 btn-white w-full"
          onClick={navigateToSignUp}
        >
          Sign Up to Pin Interests
        </button>
      )}
    </>
  );
}
export default Pinned;
