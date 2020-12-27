import React from "react";
import "./TestimonialCard.scss";

export default function TestimonialCard({
  text,
  clientName,
  position,
  org,
  img,
  blockQuote,
}) {
  return (
    <div className="testimony">
      <div className="testimony__card">
        <p>
          {blockQuote}
          {text}
        </p>
      </div>

      <div className="testimony__user">
        <div className="user__image">{img}</div>
        <div className="user__details">
          <h4>{clientName}</h4>
          <span className="user__details--org">
            {position}, {org}
          </span>
        </div>
      </div>
    </div>
  );
}
