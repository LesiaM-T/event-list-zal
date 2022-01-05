import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventList.scss';
import moment from 'moment';

const EventList = () => {
  const [events, setEvent] = useState([]);

  const getEvents = async () => {
    const response = await axios.get('http://localhost:5000/events');
    setEvent(response.data);
  };

  useEffect(() => {
    getEvents();
  }, []);



  return (
    <div className="card-list">
      {' '}
      {events.map(event => {
        return (
          <div className="card" key={event.id}>
            <div className="card-header">
              <div className="profile">
                <span className="letter">{event.category}</span>
              </div>
              <div className="card-title-group">
                <h5 className="card-title">{event.title}</h5>
                <div className="card-date">{event.Category}</div>
                <div className="card-date">{moment(event.time).format("MMM Do YY")}</div>
              </div>
            </div>
            <img className="card-image" src={event.Picture} alt="Logo" />
            <div className="card-text">{event.Description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default EventList;
