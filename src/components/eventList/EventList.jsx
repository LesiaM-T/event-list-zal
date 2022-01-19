import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import './EventList.scss';
import ModalEvent from '../modal/modalEvent';
import Constants from '../../constants/constans';

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
    return str.split(/\s+/).slice(0, 9).join(' ');
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
            <div className="card" key={event.id}>
              <div className="card-header">
                <div className="profile">
                  <span className="letter">
                    {moment(event.time).format('DD.')}
                    <br />
                    {moment(event.time).format('MM')}
                  </span>
                </div>
                <div className="card-title-group">
                  <div className="title-text">
                    <h5 className="card-title">{event.title}</h5>
                    <div className="card-date">{event.Category}</div>
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
                {Constants.MORE}
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
        time={moment(events[currenEvent]?.time).format('DD.MM o h:mm')}
        place={events[currenEvent]?.Place}
        category={events[currenEvent]?.Category}
      />
    </section>
  );
};

export default EventList;
