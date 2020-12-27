import React from "react";
import TestimonialCard from "../testimonial-card/TestimonialCard";
import "./Testimonials.scss";

import { testimonials } from "./../data/testimonials";

export default function Testimonials() {
  return (
    <main className="testimonials">
      <article className="section row">
        <h3>Testimonials</h3>
        <div className="testimonials__wrapper">
          {testimonials.map((testimony) => (
            <TestimonialCard {...testimony} />
          ))}
        </div>
      </article>
    </main>
  );
}
