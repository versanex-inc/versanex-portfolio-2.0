"use client";
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Image from 'next/image';
import { IoStarSharp, IoStarOutline } from 'react-icons/io5';
import { FaThumbsUp } from 'react-icons/fa';
import { useSession } from "next-auth/react";
import FilterReview from '@/app/about/testimonials/filterReview/FileterReview';
import '../../about/testimonials/allReviews/AllReviews.css';
import './testimonials.css';
import { LuSendHorizonal } from "react-icons/lu";

const AllReviewsDashboard = () => {
  const { status, data: session } = useSession();
  const [users, setUsers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [starCounts, setStarCounts] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const [selectedRating, setSelectedRating] = useState('all-ratings');
  const [feedbackOpenStates, setFeedbackOpenStates] = useState({});
  const [feedbackInputs, setFeedbackInputs] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchReviewsData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getReviews`);
        const reviewsData = await response.json();

        if (isMounted) {
          const reviewsArray = Array.isArray(reviewsData.result) ? reviewsData.result : [];
          reviewsArray.reverse();
          setReviews(reviewsArray);
          setFilteredReviews(reviewsArray);

          const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
          reviewsArray.forEach(review => {
            const rating = review.stars && review.stars.length > 0 ? review.stars[0].rating : 0;
            counts[rating] += 1;
          });
          setStarCounts(counts);

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
        if (isMounted) setLoading(false);
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

  const getTimeAgo = timestamp => {
    return moment(timestamp).fromNow();
  };

  const handleLike = async (reviewId) => {
    if (status !== 'authenticated' || !session?.user?.email) {
      alert('Please sign in first to like a review.');
      return;
    }

    try {
      const currentUser = users.find(user => user.email === session.user.email);
      if (!currentUser) {
        alert('User not found.');
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addReviewLike`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ reviewId, userId: currentUser._id })
      });

      const data = await response.json();
      if (data.success) {
        setReviews(reviews.map(review => review._id === reviewId ? data.review : review));
        setFilteredReviews(filteredReviews.map(review => review._id === reviewId ? data.review : review));
      } else {
        console.error('Error liking the review:', data.error);
      }
    } catch (error) {
      console.error('Error liking the review:', error);
    }
  };

  const handleAddReview = async (newReview) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addReview`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReview)
      });

      const data = await response.json();
      if (data.success) {
        setReviews([data.review, ...reviews]);
        setFilteredReviews([data.review, ...filteredReviews]);

        const rating = data.review.stars && data.review.stars.length > 0 ? data.review.stars[0].rating : 0;
        setStarCounts(prevCounts => ({
          ...prevCounts,
          [rating]: prevCounts[rating] + 1
        }));

        setFeedbackOpenStates(prevStates => ({
          ...prevStates,
          [data.review._id]: false
        }));
      } else {
        console.error('Error adding the review:', data.error);
      }
    } catch (error) {
      console.error('Error adding the review:', error);
    }
  };

  const handleFeedbackChange = (reviewId, value) => {
    setFeedbackInputs(prevInputs => ({
      ...prevInputs,
      [reviewId]: value
    }));
  };

  const handleFeedbackSubmit = async (reviewId) => {
    if (status !== 'authenticated' || !session?.user?.email) {
      alert('Please sign in first to leave feedback.');
      return;
    }

    const feedback = feedbackInputs[reviewId];
    if (!feedback) {
      alert('Feedback cannot be empty.');
      return;
    }

    try {
      const currentUser = users.find(user => user.email === session.user.email);
      if (!currentUser) {
        alert('User not found.');
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addReviewFeedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ reviewId, userId: currentUser._id, feedback })
      });

      const data = await response.json();
      if (data.success) {
        setReviews(reviews.map(review => review._id === reviewId ? data.review : review));
        setFilteredReviews(filteredReviews.map(review => review._id === reviewId ? data.review : review));
        setFeedbackInputs(prevInputs => ({
          ...prevInputs,
          [reviewId]: ''
        }));
      } else {
        console.error('Error submitting feedback:', data.error);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="db_container main-reviews db_testi">
      <FilterReview
        reviews={reviews}
        onSortChange={handleSortChange}
        onRatingChange={handleRatingChange}
        starCounts={starCounts}
      />
      {filteredReviews.map(review => {
        const user = getUserById(review.user);
        const currentUser = session ? users.find(user => user.email === session.user.email) : null;
        const userLikesReview = currentUser && review.likes.some(like => like.userId === currentUser._id);
        const likeCount = review.likes.length;

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
                <div className="like_review" onClick={() => handleLike(review._id)}>
                  <FaThumbsUp className={userLikesReview ? 'liked' : ''} /> <p>Likes : {likeCount}</p>
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
                        <h1>Response from VersaNex</h1>
                      </div>
                      <p>{fb.feedback}</p>
                    </div>
                  ))}
                </div>
                {feedbackOpenStates[review._id] && (
                  <div className="review_reply_input">
                    <input 
                      type="text" 
                      placeholder="write your feedback" 
                      value={feedbackInputs[review._id] || ''} 
                      onChange={(e) => handleFeedbackChange(review._id, e.target.value)} 
                    />
                    <button onClick={() => handleFeedbackSubmit(review._id)}><LuSendHorizonal/></button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
      {/* Add your review form or component here and call handleAddReview with the new review data */}
    </div>
  );
};

export default AllReviewsDashboard;
