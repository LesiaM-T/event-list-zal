/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */

import React from 'react';
import Modal from 'react-bootstrap/Modal';

import LikeButtons from './likeButtons';

function ModalEvent(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="card-list">
          <img className="card-image" src={props.picture} alt="Logo" />
          <div className="card-text"> {props.description}</div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <LikeButtons />
      </Modal.Footer>
    </Modal>
  );
}
export default ModalEvent;
