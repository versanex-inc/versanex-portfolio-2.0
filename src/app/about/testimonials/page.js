"use client";
import React, { useState, useEffect, useRef } from "react";
import "./testimonials.css";
import { IoStarSharp, IoStarOutline } from "react-icons/io5";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import Image from "next/image";
import { MdPublic } from "react-icons/md";
import { useSession } from "next-auth/react";
import AllReviews from "./allReviews/AllReviews";

const Reviews = () => {
  const { status, data: session } = useSession();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedStars, setSelectedStars] = useState(0);
  const [stars, setStars] = useState(Array(5).fill("empty"));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [reviewDetails, setReviewDetails] = useState("");
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    let isMounted = true;

    async function fetchUserData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/getUsers`
        );
        const data = await response.json();

        if (isMounted) {
          const filteredUser = data.result.find(
            (user) => user.email === session.user.email
          );
          setUser(filteredUser);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        if (isMounted) setLoading(false);
      }
    }

    if (session) {
      fetchUserData();
    } else {
      setLoading(false); // Set loading to false if there's no session
    }

    return () => {
      isMounted = false;
    };
  }, [session]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
        resetStars();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const resetStars = () => {
    setStars(Array(5).fill("empty"));
  };

  const handleStarClick = (index) => {
    const newStars = Array(5).fill("empty");
    for (let i = 0; i <= index; i++) {
      newStars[i] = "full";
    }
    setStars(newStars);
    setSelectedStars(index + 1);
  };

  const handlePostClick = async () => {
    console.log("Stars selected:", selectedStars);

    try {
      // Post review details
      const reviewResponse = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/addReview`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            details: reviewDetails,
          }),
        }
      );

      const reviewData = await reviewResponse.json();

      if (reviewData.success) {
        // Post star rating
        const ratingResponse = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/addReviewStars`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              reviewId: reviewData.review._id,
              userId: user._id,
              rating: selectedStars,
            }),
          }
        );

        const ratingData = await ratingResponse.json();
        if (!ratingData.success) {
          console.error("Error updating stars:", ratingData.error);
        }
      } else {
        console.error("Error saving review:", reviewData.error);
      }

      setDropdownOpen(false);
      resetStars();
      setReviewDetails("");
      setCharCount(0);
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  const toggleDropdownOpen = () => {
    if (status === "authenticated") {
      setDropdownOpen(!dropdownOpen);
    } else {
      alert("Please sign in first to write a review.");
    }
  };

  const handleReviewDetailsChange = (e) => {
    const value = e.target.value;
    if (value.length <= 300) {
      setReviewDetails(value);
      setCharCount(value.length);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="testimonials_container container">
      <div className="reviews_top_header">
        <div className="reviews_header_content">
          <div className="reviews_heading_personinfo">
            <div className="person_imgae">
              {status === "authenticated" && user ? (
                <Image
                  src={user.image}
                  width={60}
                  height={60}
                  alt="user"
                />
              ) : (
                <Image
                  src={"/imgs/user_profile.png"}
                  width={60}
                  height={60}
                  alt="default user"
                />
              )}
            </div>
            <p className="testi_username">
              {status === "authenticated" && user ? user.name : "Unknown User"}
            </p>
            <div className="reviews_heading_writereview">
              <button
                className="writereview_btn"
                onClick={toggleDropdownOpen}
                ref={buttonRef}
              >
                <PiPencilSimpleLineFill />
                <span className="write_review_font">Write a review</span>
              </button>
              {status === "authenticated" && user && (
                <div
                  ref={dropdownRef}
                  className={`reviews_heading_writereview_content ${
                    dropdownOpen ? "open" : ""
                  }`}
                >
                  <div className="writereview_content_brandname">VersaNex</div>
                  <div className="writereview_content_user">
                    <div className="reviewed_user">
                      <div className="reviewed_user_image">
                        <Image
                          src={user.image}
                          width={60}
                          height={60}
                          alt="user"
                        />
                      </div>
                      <div className="reviewed_user_name">
                        <h5>{user.name}</h5>
                        {/* <div className="visibility_dropdown">
                          <label htmlFor="visibility">Visibility: </label>
                          <span>
                            Public <MdPublic />
                          </span>
                        </div> */}
                      </div>
                    </div>
                    <div className="reviewed_user_stars">
                      {stars.map((star, index) => (
                        <span
                          key={index}
                          className="review_star"
                          onClick={() => handleStarClick(index)}
                        >
                          {star === "empty" && <IoStarOutline />}
                          {star === "full" && <IoStarSharp />}
                        </span>
                      ))}
                    </div>
                    <div className="reviewed_user_content_box">
                      <textarea
                        rows={5}
                        placeholder="Share details of your own experience at this place"
                        value={reviewDetails}
                        onChange={handleReviewDetailsChange}
                      ></textarea>
                      <div className="char_count">{charCount}/300</div> {/* Character count display */}
                    </div>
                    <div className="reviewed_user_close">
                      <button
                        onClick={() => {
                          setDropdownOpen(false);
                          resetStars();
                          setReviewDetails("");
                          setCharCount(0);
                        }}
                      >
                        Cancel
                      </button>
                      <button onClick={handlePostClick}>Post</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <AllReviews />
    </div>
  );
};

export default Reviews;