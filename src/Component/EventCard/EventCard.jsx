import React from "react";
import "./EventCard.css";
import { Link } from "react-router-dom";

const EventCard = ({ id, date, heading, location, img }) => {
  const { year, month } = date;
  return (
    <Link to={`/events/${id}`}>
      <div className="card">
        <div className="card-content">
          <h3>{heading}</h3>
          <p>
            <span>Year: {year}</span>
            <span>Month: {month}</span>
          </p>
          <p>{location}</p>
        </div>

        <div className="card-img-wrapper">
          <img src={img} alt="image not found" />
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
