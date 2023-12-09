import { Card, Icon } from "@patternfly/react-core";
import "@patternfly/react-core/dist/styles/base.css";
import { EllipsisVIcon } from "@patternfly/react-icons";
import Modal from '../Modal';
import useModal from '../useModal';
import { FC } from "react";
import { clsx } from 'clsx';

interface IAnnouncementCardProps {
  title: string;
  description: string;
  date?: string;
  image?: string;
  fullWidth?: boolean;
}

const AnnouncementCard: FC<IAnnouncementCardProps> = (props:{
  title: string;
  description: string;
  date?: string;
  image?: string;
  fullWidth?: boolean;
}) => {

  const title = props.title;
  const content = props.description;
  const date = props.date ? props.date : "";
  const { isOpen, toggle } = useModal();

  const dateTimeString = date;

  const [dateTime, timeWithZ] = dateTimeString.split("T");
  const time = timeWithZ ? timeWithZ.replace("Z", "") : "";

  const finalDate = dateTime + " " + new Date("1970-01-01T" + time + "Z").toLocaleTimeString()

  // this lowers long content text if it's longer than 60 words
  function truncateContent(content: string, length: number): string {
    if (content.length > length) {
      return content.substring(0, length) + "...";
    }
    return content;
  }

  return (
    <Card className={clsx(
        props.fullWidth && '!w-full',
        "calendar-card !bg-white !cursor-pointer text-start text-navy !p-6"
      )}
      onClick={toggle}
    >
      <div className="flex justify-between items-center mb-4">
        <p className="text-start font-semibold">{title}</p>
        <Icon isInline>
          <EllipsisVIcon className="w-4 h-3 text-gray-500" />
        </Icon>
      </div>
        <p>{truncateContent(content, 60)}</p>
        <small>{finalDate}</small>
        {/* if there's an image, display it */}
        {props.image ? (
          <img
            src={props.image}
            alt="Event Image"
            className="w-full h-full"
          />
        ) : (
          <div></div>
        )}
      <Modal isOpen={isOpen} toggle={toggle} title={title} date={finalDate} content={content}>
      </Modal>
    </Card>
  );
}

export default AnnouncementCard;
