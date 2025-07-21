
import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Ravi Kumar",
    feedback:
      "Absolutely top-notch quality! The freshness and flavor of these cashews are unbeatable.",
  },
  {
    name: "Anjali Mehta",
    feedback:
      "Great packaging and fast delivery. I’ll definitely be ordering again!",
  },
  {
    name: "David R.",
    feedback:
      "Loved the roasted salted variety! Perfect for snacking.",
  },
];

function Testimonials() {
  return (
    <div className="testimonials-section container py-5" id="testimonials">
      <h2 className="text-center mb-5" style={{ color: "#4B352A" }}>
        What Our Customers Say
      </h2>
      <div className="testimonial-cards">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <p className="feedback">"{t.feedback}"</p>
            <p className="name">- {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
