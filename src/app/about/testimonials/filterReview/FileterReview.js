"use client";
// FilterReview.js
import React, { useState, useEffect } from "react";
import { IoStarSharp, IoStarOutline } from "react-icons/io5";

const FilterReview = ({
  reviews,
  onSortChange,
  onRatingChange,
  starCounts,
}) => {
  const [selectedRating, setSelectedRating] = useState("all-ratings");

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
    onRatingChange(rating); // Call parent component handler to apply filter
  };

  return (
    <div className="reviews_rating_filter">
      <div className="reviews_rating">
        <div className="reviews_rating_number">
          {selectedRating === "all-ratings" ? "All " : `${selectedRating} stars`}
        </div> : 
        <div className="reviews_count">
          {starCounts[selectedRating]} Reviews
        </div>
      </div>

      <div className="reviews_filter">
        <div className="reviews_filter_box">
          <select className="filter_selection" onChange={(e) => onSortChange(e.target.value)}>
            <option value="all-reviews">All reviews</option>
            <option value="last-week">Last week</option>
            <option value="last-month">Last month</option>
            <option value="last-year">Last year</option>
          </select>
          <select
            value={selectedRating}
            onChange={(e) => handleRatingChange(e.target.value)}
             className="filter_selection"
          >
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
