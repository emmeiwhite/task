import React from "react";
import "./TestimonialCard.scss";

export default function TestimonialCard({ text, clientName, position, org }) {
  return (
    <div className="testcard">
      <div className="card">
        <p>{text}</p>
      </div>

      <div className="user">
        <div className="user__image"></div>
        <div className="user__details">
          <h3>{clientName}</h3>
          <span>
            {position}, {org}
          </span>
        </div>
      </div>
    </div>
  );
}
