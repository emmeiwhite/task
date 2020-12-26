import React from "react";
import TestimonialCard from "../testimonial-card/TestimonialCard";
import "./Testimonials.scss";

export default function Testimonials() {
  return (
    <main className="testimonials">
      <article className="section row">
        <h3>Testimonials</h3>
        <TestimonialCard />
      </article>
    </main>
  );
}
