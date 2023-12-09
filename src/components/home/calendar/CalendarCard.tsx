import { Card, Icon } from "@patternfly/react-core";
import "@patternfly/react-core/dist/styles/base.css";
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
    <Card 
      onClick={toggle} 
      className="calendar-card !bg-white !cursor-pointer text-navy text-start !p-6"
    >
        <div className="flex justify-between items-center mb-4">
          <p className="text-start font-semibold">{title}</p>
          <Icon isInline>
            <EllipsisVIcon className="w-4 h-3 text-gray-500" />
          </Icon>
        </div>
        <div>
          <small>{date}</small>
          <small>{truncateContent(content, 60)}</small>
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
    </Card>
  );
}

export default CalendarCard;
