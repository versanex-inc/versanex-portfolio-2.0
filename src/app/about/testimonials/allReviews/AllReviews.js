"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoStarSharp, IoStarOutline } from 'react-icons/io5';
import { FaThumbsUp } from 'react-icons/fa';
import moment from 'moment'; // Import moment library for date formatting
import FilterReview from '../filterReview/FileterReview';

const AllReviews = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [starCounts, setStarCounts] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const [selectedRating, setSelectedRating] = useState('all-ratings');
  const [feedbackOpenStates, setFeedbackOpenStates] = useState({});

  useEffect(() => {
    let isMounted = true;

    async function fetchReviewsData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getReviews`);
        const reviewsData = await response.json();

        if (isMounted) {
          const reviewsArray = Array.isArray(reviewsData.result) ? reviewsData.result : [];
          setReviews(reviewsArray);
          setFilteredReviews(reviewsArray);

          // Calculate star counts
          const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
          reviewsArray.forEach(review => {
            const rating = review.stars && review.stars.length > 0 ? review.stars[0].rating : 0;
            counts[rating] += 1;
          });
          setStarCounts(counts);
          
          // Initialize feedbackOpenStates based on review IDs
          const initialFeedbackOpenStates = {};
          reviewsArray.forEach(review => {
            initialFeedbackOpenStates[review._id] = false;
          });
          setFeedbackOpenStates(initialFeedbackOpenStates);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchReviewsData();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function fetchUserData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getUsers`);
        const data = await response.json();

        if (isMounted) {
          setUsers(data.result);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchUserData();

    return () => {
      isMounted = false;
    };
  }, []);

  const getUserById = userId => {
    return users.find(user => user._id === userId);
  };

  const handleSortChange = sortOption => {
    let filtered = [...reviews];
    const now = new Date();

    if (sortOption === 'last-week') {
      const lastWeek = new Date(now.setDate(now.getDate() - 7));
      filtered = filtered.filter(review => new Date(review.createdAt) >= lastWeek);
    } else if (sortOption === 'last-month') {
      const lastMonth = new Date(now.setMonth(now.getMonth() - 1));
      filtered = filtered.filter(review => new Date(review.createdAt) >= lastMonth);
    } else if (sortOption === 'last-year') {
      const lastYear = new Date(now.setFullYear(now.getFullYear() - 1));
      filtered = filtered.filter(review => new Date(review.createdAt) >= lastYear);
    }

    setFilteredReviews(filtered);
  };

  const handleRatingChange = rating => {
    setSelectedRating(rating);
    if (rating === 'all-ratings') {
      setFilteredReviews(reviews);
    } else {
      const filtered = reviews.filter(review => 
        review.stars && review.stars.length > 0 && review.stars[0].rating === parseInt(rating)
      );
      setFilteredReviews(filtered);
    }
  };

  const toggleFeedback = reviewId => {
    setFeedbackOpenStates(prevStates => ({
      ...prevStates,
      [reviewId]: !prevStates[reviewId]
    }));
  };

  const getTimeAgo = (timestamp) => {
    return moment(timestamp).fromNow(); // Using moment.js to get time ago format
  };

  return (
    <div className="main-reviews">
      <FilterReview
        reviews={reviews}
        onSortChange={handleSortChange}
        onRatingChange={handleRatingChange}
      />
      {filteredReviews.map(review => {
        const user = getUserById(review.user);
        return (
          <div className="review_one" key={review._id}>
            <div className="reviewed_user">
              <div className="reviewed_user_image">
                {user && (
                  <Image src={user.image} height={50} width={50} alt="user" />
                )}
              </div>
              <div className="reviewed_user_name">
                <h5>{user ? user.name : 'Unknown User'}</h5>
                <p>
                  {user ? user.reviews.length : 0} <span>Reviews</span>
                </p>
              </div>
            </div>
            <div className="review_user_main_review_content">
              <div className="review_user_rating">
                {[...Array(5)].map((_, index) =>
                  index < (review.stars && review.stars.length > 0 ? review.stars[0].rating : 0) ? (
                    <IoStarSharp key={index} />
                  ) : (
                    <IoStarOutline key={index} />
                  )
                )}
                <span>{getTimeAgo(review.createdAt)}</span>
              </div>
              <div className="review_user_content">{review.details}</div>
              <div className="like_review_reply">
                <div className="like_review">
                  <FaThumbsUp /> <p>Like : 3</p>
                </div>
                <div className="review_reply" onClick={() => toggleFeedback(review._id)}>
                  Feedback
                </div>
              </div>
              <div className={`review_reply_input_main ${feedbackOpenStates[review._id] ? 'review__input' : ''}`}>
                <div className="review_reply_content">
                  {review.feedback.map(fb => (
                    <div className="review_reply_response" key={fb._id}>
                      <div className="review_reply_titledate">
                        <h1>Response from the owner</h1>
                      </div>
                      <p>{fb.feedback}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllReviews;