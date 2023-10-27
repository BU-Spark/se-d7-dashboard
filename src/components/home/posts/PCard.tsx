import { Card } from "@patternfly/react-core";
import "@patternfly/react-core/dist/styles/base.css";
import PostModal from "./PostModal";
import usePostModal from "./usePostModal";

//date and image is optional for now
function PCard(props: {
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  location?: string;
}) {
  const title = props.title;
  const content = props.content;
  const createdAt = props.createdAt;
  const formattedDate = formatDate(createdAt);
  const location = props.location ? props.location : "";
  const { isOpen, toggle } = usePostModal();

  function formatDate(rawDate: string): string {
    const date = new Date(rawDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString().slice(2);
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    // Convert 24-hour time to 12-hour time and set AM or PM
    const isPM = hours >= 12;
    hours = isPM ? (hours > 12 ? hours - 12 : hours) : (hours === 0 ? 12 : hours);
    const ampm = isPM ? 'pm' : 'am';
  
    return `Posted ${month}/${day}/${year} at ${hours}:${minutes}${ampm} (EST)`;
  }

  return (
    <>
      <Card onClick={toggle} className="!mb-5 min-h-[131px] !bg-white text-navy h-[10vh] !p-3 border border-[#d2d2d2]">
        <div className="mx-3 mt-3 mb-5">
          <p className="text-start text-lg font-semibold">{title}</p>
          <div className="mt-2 text-start">
            {createdAt ? 
                <small className="text-start text-sm">{formattedDate}</small>
            : null}
            {/* if there's an image, display it */}
            {props.image ? (
              <img
                src={props.image}
                alt="Event Image"
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <div></div>
            )}
          </div>
          <PostModal
            isOpen={isOpen}
            toggle={toggle}
            title={title}
            date={formattedDate}
            content={content}
            location={location}
          ></PostModal>
        </div>
      </Card>
    </>
  );
}

export default PCard;
