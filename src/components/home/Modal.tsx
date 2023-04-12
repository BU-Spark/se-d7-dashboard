import React, { ReactNode } from "react";


interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  title: string;
  date: string;
  content: string;
}

export default function Modal(props: ModalType) {
    console.log(props.content)
    console.log(props.date)
    return (
        <>
          {props.isOpen && (
            <div className="modal-overlay" onClick={props.toggle}>
              <div onClick={(e) => e.stopPropagation()} className="modal-box">
                <button onClick={props.toggle} className="closeModal">X</button>
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
                <div className="modal-content">
                  <p>{props.content}</p>
                </div>
              </div>
            </div>
          )}
        </>
      );
}