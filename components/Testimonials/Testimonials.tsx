"use client";
import React from "react";
import { motion } from "framer-motion";
import TestimonialsCard from "./TestimonialsCard";

const testimonials = [
  {
    name: "Fiona Oyugi",
    feedback:
      "Amazing experience! The tour was well-organized, and the staff was super friendly.",
    rating: 5,
  },
  {
    name: "Peter k.Njuguna",
    feedback:
      "We had the best time exploring Kenya with Obsidian Tours. Highly recommended!",
    rating: 4,
  },
  {
    name: "Alexandar Ishmael",
    feedback:
      "Fantastic service from start to finish. Will definitely book again!",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <TestimonialsCard
                name={testimonial.name}
                feedback={testimonial.feedback}
                rating={testimonial.rating}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
