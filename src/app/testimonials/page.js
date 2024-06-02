'use client'
import React, { useState } from 'react';
import Reviews from '@/Components/Home/Reviews/Reviews';
import './testimonials.css';
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Testimonials = () => {
  // Initialize state for each star with 'empty'
  const [stars, setStars] = useState(Array(5).fill('empty'));

  // Function to handle star click
  const handleStarClick = (index) => {
    setStars(stars.map((star, i) => {
      if (i === index) {
        switch (star) {
          case 'empty':
            return 'full';
          case 'full':
            return 'half';
          case 'half':
            return 'empty';
          default:
            return star;
        }
      }
      return star;
    }));
  };

  return (
    <section className='testimonials'>
      <div className="add_review">
        <h1>Add Review <span>(Scroll down to see all reviews)</span></h1>
        <textarea name="" id="" placeholder='Write you review here'></textarea>
        <div className="add_review_stars">
          {stars.map((star, index) => (
            <span key={index} className="review_star" onClick={() => handleStarClick(index)}>
              {star === 'empty' && <FaRegStar />}
              {star === 'full' && <FaStar />}
              {star === 'half' && <FaStarHalfAlt />}
            </span>
          ))}
        </div>
        <button className="add_review_btn">Add&nbsp;Review</button>
      </div>
      <div className="show_all_reviews">
        <Reviews />
      </div>
    </section>
  );
};

export default Testimonials;