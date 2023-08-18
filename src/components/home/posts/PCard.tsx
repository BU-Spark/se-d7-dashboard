import * as React from "react";
import { Card, Text, Icon } from "@patternfly/react-core";
import "@patternfly/react-core/dist/styles/base.css";
import "bootstrap/dist/css/bootstrap.css";
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
      <Card onClick={toggle} className="my-3 posts-card">
        <div className=" mx-3 mt-3 mb-5">
          <div className="row">
            <div className="col-9">
              <Text className="text-start post-title">{title}</Text>
            </div>
            <div className="col-1">
            </div>
          </div>
          <div className="row mt-2 ">
            {createdAt ? 
                <small className="text-start text-secondary">{formattedDate}</small>
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
