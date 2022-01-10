import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const EventItem = () => {
  const [event, setEvent] = useState([]);
  const { id } = useParams();

  const getEventById = async () => {
    const response = await axios.get(`http://localhost:5000/events/${id}`);
    setEvent(response.data);
  };

  useEffect(() => {
    getEventById();
  });

  //   function shortDescribtion(str) {
  //     return str.split(/\s+/).slice(0, 9).join(' ');
  //   }

  return (
    <div className="card-list">
      <div className="card" key={getEventById()}>
        <div className="card-header">
          <div className="profile">
            <span className="letter">{event.category}</span>
          </div>
          <div className="card-title-group">
            <h5 className="card-title">{event.title}</h5>
            <div className="card-date">{event.Category}</div>
            <div className="card-date">
              {moment(event.time).format('D.MM о h:mm')}
            </div>
          </div>
        </div>
        <img className="card-image" src={event.Picture} alt="Logo" />
        {/* <div className="card-text">
          {shortDescribtion(event.Description)}...
        </div> */}
      </div>
    </div>
  );
};

export default EventItem;
