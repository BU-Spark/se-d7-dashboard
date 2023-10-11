import * as React from "react";
import { Card, Text, Icon } from "@patternfly/react-core";
import "@patternfly/react-core/dist/styles/base.css";
import "bootstrap/dist/css/bootstrap.css";
import { EllipsisVIcon } from "@patternfly/react-icons";
import Modal from "../Modal";
import useModal from "../useModal";

//date and image is optional for now
function CalendarCard(props: {
  title: string;
  content: string;
  image?: string;
  date?: string;
  location?: string;
}) {
  const title = props.title;
  const content = props.content;
  const date = props.date ? props.date : "";
  const location = props.location ? props.location : "";
  const { isOpen, toggle } = useModal();

  // this lowers long content text if it's longer than 40 words
  function truncateContent(content: string, length: number): string {
    if (content.length > length) {
      return content.substring(0, length) + "...";
    }
    return content;
  }

  return (
    <Card onClick={toggle} className="mb-3 me-3 calendar-card" style={{background: 'white', cursor: "pointer"}}>
      <div className=" mx-3 mt-3 mb-5">
        <div className="row">
          <div className="col-9">
            <Text className="text-start">{title}</Text>
          </div>
          <div className="col-1">
            <Icon isInline className="text-end">
              <EllipsisVIcon style={{ width: "15px", height: "11px" }} />
            </Icon>
          </div>
        </div>
        <div className="row mt-2">
          <small className="text-start text-secondary">{date}</small>
          <small className="text-start text-secondary">{truncateContent(content, 40)}</small>
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
        <Modal
          isOpen={isOpen}
          toggle={toggle}
          title={title}
          date={date}
          content={content}
          location={location}
        ></Modal>
      </div>
    </Card>
  );
}

export default CalendarCard;
