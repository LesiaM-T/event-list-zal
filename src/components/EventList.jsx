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

  function shortDescribtion(str) {
    return str.split(/\s+/).slice(0, 9).join(' ');
  }
  const handleClick = id => {
    // setEvent(events.filter(item => item.id === id));
    const itemm = events.find(item => item.id === id);
    console.log(itemm.title);

  }
  return (
    <div className="card-list">
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
                <div className="card-date">
                  {moment(event.time).format('MM.D o h:mm')}
                </div>
              </div>
            </div>
            <img className="card-image" src={event.Picture} alt="Logo" />
            <div className="card-text">
              {shortDescribtion(event.Description)} ...
            </div>
            <button type="button" onClick={() => handleClick(event.id)}>
            Детальніше
          </button>
          </div>
        
        );
      })}
    </div>
  );
};

export default EventList;
