'use client'
// FilterReview.js
import React, { useState, useEffect } from 'react';
import { IoStarSharp, IoStarOutline } from 'react-icons/io5';

const FilterReview = ({ reviews, onSortChange, onRatingChange }) => {
  const [starCounts, setStarCounts] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const [selectedRating, setSelectedRating] = useState('all-ratings');
  const [filledStars, setFilledStars] = useState(5);

  useEffect(() => {
    // Update filledStars based on selectedRating
    if (selectedRating === 'all-ratings') {
      setFilledStars(5); // Show 5 stars for all ratings combined
    } else {
      setFilledStars(parseInt(selectedRating)); // Show selected rating stars
    }
  }, [selectedRating]);

  const renderStars = rating => {
    const emptyStarsCount = 5 - rating;

    return (
      <>
        {[...Array(rating)].map((_, index) => (
          <IoStarSharp key={index} />
        ))}
        {[...Array(emptyStarsCount)].map((_, index) => (
          <IoStarOutline key={index} />
        ))}
      </>
    );
  };

  const handleRatingChange = rating => {
    setSelectedRating(rating);
    onRatingChange(rating); // Call parent component handler to apply filter
  };

  return (
    <div className="reviews_rating_filter">
      <div className="reviews_rating">
      <div className="reviews_rating_number">{filledStars} stars : </div>
        <div className="reviews_rating_stars">
          {renderStars(filledStars)}
        </div>
        <div className="reviews_count">
          {selectedRating === 'all-ratings' ? starCounts[5] || 0 : starCounts[selectedRating] || 0}{' '}
          <span>reviews</span>
        </div>
      </div>

      <div className="reviews_filter">
        <div className="reviews_filter_box">
          <span>Sort by:</span>
          <select onChange={(e) => onSortChange(e.target.value)}>
            <option value="all-reviews">All reviews</option>
            <option value="last-week">Last week</option>
            <option value="last-month">Last month</option>
            <option value="last-year">Last year</option>
          </select>
          <select value={selectedRating} onChange={(e) => handleRatingChange(e.target.value)}>
            <option value="all-ratings">All ratings</option>
            <option value="1">One star</option>
            <option value="2">Two stars</option>
            <option value="3">Three stars</option>
            <option value="4">Four stars</option>
            <option value="5">Five stars</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterReview;

