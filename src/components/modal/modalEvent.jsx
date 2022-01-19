/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import LikeButtons from './likeButtons';
import './modalEvent.scss';

function ModalEvent(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
          <div className="time">Початок: {props.time} </div>
          <div className="place">
            Місце проведення:<b> {props.place} </b>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="">
          <img className="" src={props.picture} alt="Logo" />
          <div className=""> {props.description}</div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <LikeButtons />
      </Modal.Footer>
    </Modal>
  );
}
export default ModalEvent;
