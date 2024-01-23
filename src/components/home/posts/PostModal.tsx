import React, { ReactNode } from "react";
import { Text } from "@patternfly/react-core";
import { CloseIcon } from "@patternfly/react-icons";


interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  title: string;
  date: string;
  location?: string;
  content: string;
}

export default function PostModal(props: ModalType) {
  const parts = props.date.split(' at ');
  const datePart = parts[0]?.replace('Posted ', '') || '';
  const timePart = parts[1] || '';

  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay" onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
          <button onClick={props.toggle} className="closeModal" style={{background: "white", border: "none"}}>
            <CloseIcon />
          </button>
            <div className="modal-wrapper">
              <p><b>{props.title}</b></p>
              {datePart && <Text><b>Date Posted:</b> {datePart}</Text>}
              {timePart && <Text><b>Time Posted:</b> {timePart}</Text>}
              {props.location && (<Text>
                <b>Where: </b>{props.location}
              </Text>)}
                <p className="modal-text">
                  <Text>{props.content}</Text>
                </p>

            </div>
          </div>
        </div>
      )}
    </>
  );
}