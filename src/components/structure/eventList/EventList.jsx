import React, { useState, useEffect } from 'react';
import axios from 'axios';

import moment from 'moment';
import './EventList.scss';
import ModalEvent from '../modal/modalEvent';

const EventList = () => {
  const [events, setEvent] = useState([]);

  const [modalShow, setModalShow] = useState(false);

  const [currenEvent, setCurrentEvent] = useState(1);

  const getEvents = async () => {
    const response = await axios.get('http://localhost:5000/events');
    setEvent(response.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  function shortDescribtion(str) {
    return str.split(/\s+/).slice(0, 10).join(' ');
  }
  // const handleClick = id => {
  //   // setEvent(events.filter(item => item.id === id));
  //   const itemm = events.find(item => item.id === id);
  //   console.log(itemm.title);
  // };

  return (
    <section>
      <div className="card-list">
        {events.map((event, index) => {
          return (
            <div key={event.id}>
              <div className="card-header">
                <div className="profile">
                  <span className="letter">{event.category}</span>
                </div>
                <div className="card-title-group">
                  <h5 className="card-title">{event.title}</h5>
                  <div className="card-date">{event.Category}</div>
                  <div className="card-date">
                    {moment(event.time).format('MM.D o h:mm')}
                  </div>
                </div>
              </div>
              <img className="card-image" src={event.Picture} alt="Logo" />
              <div className="card-text">
                {shortDescribtion(event.Description)} ...
              </div>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => {
                  setModalShow(true);
                  setCurrentEvent(index);
                }}
              >
                Детальніше
              </button>
            </div>
          );
        })}
      </div>
      <ModalEvent
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={events[currenEvent]?.title}
        picture={events[currenEvent]?.Picture}
        description={events[currenEvent]?.Description}
      />
    </section>
  );
};

export default EventList;
