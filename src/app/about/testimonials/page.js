"use client";
import React, { useState, useRef, useEffect } from "react";
import "./testimonials.css";
import { IoStarSharp, IoStarOutline } from "react-icons/io5";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import Image from "next/image";
import { FaThumbsUp } from "react-icons/fa6";
import { MdPublic } from "react-icons/md";

const Reviews = () => {
  const [feedbackopen, setfeedbackopen] = useState(false);
  const toglefeedback = () => {
    setfeedbackopen(!feedbackopen);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const resetStars = () => {
    setStars(Array(5).fill("empty"));
  };

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
  //Added state to track the number of selected stars:
  const [selectedStars, setSelectedStars] = useState(0);
  //Updated handleStarClick function to set the selected stars and reset the stars array:
  const [stars, setStars] = useState(Array(5).fill("empty"));
  const handleStarClick = (index) => {
    let newStars = [...stars];
    for (let i = 0; i <= index; i++) {
      newStars[i] = "full";
    }
    for (let i = index + 1; i < 5; i++) {
      newStars[i] = "empty";
    }
    setStars(newStars);
    setSelectedStars(index + 1);
  };
  //Added a function to handle saving the review to the database using the selectedStars state:
  const handlePostClick = () => {
    // Here you can handle saving the review to the database using the selectedStars state
    console.log("Stars selected:", selectedStars);
    // Add your save logic here
    setDropdownOpen(false);
    resetStars();
  };

  const reviews = [
    {
      id: 1,
      userimg: "/imgs/btchi.png",
      username: "Maaz Jutt",
      reviwcount: "5",
      reviewcontent:
        "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facere perspiciatis earum voluptate temporibus, dolorem accusamus magni culpa. Provident neque praesentium in excepturi, ducimus quasi non ratione debitis doloremque a animi accusantium est autem qui? Consequuntur, voluptatum. Architecto, alias velit ad quos eos nihil vitae optio at unde, eum dolorem.",
    },
    {
      id: 2,
      userimg: "/imgs/im2.png",
      username: "Hisham Hussain",
      reviwcount: "2",
      reviewcontent:
        "                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facere perspiciatis earum voluptate temporibus, dolorem accusamus magni culpa. Provident neque praesentium in excepturi, ducimus quasi non ratione debitis doloremque a animi accusantium est autem qui? Consequuntur, voluptatum. Architecto, alias velit ad quos eos nihil vitae optio at unde, eum dolorem.",
    },
    {
      id: 3,
      userimg: "/imgs/img3.png",
      username: "Ahmad Jutt",
      reviwcount: "8",
      reviewcontent:
        "                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facere perspiciatis earum voluptate temporibus, dolorem accusamus magni culpa. Provident neque praesentium in excepturi, ducimus quasi non ratione debitis doloremque a animi accusantium est autem qui? Consequuntur, voluptatum. Architecto, alias velit ad quos eos nihil vitae optio at unde, eum dolorem.",
    },
    {
      id: 4,
      userimg: "/imgs/flash.webp",
      username: "Jami",
      reviwcount: "3",
      reviewcontent:
        "                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facere perspiciatis earum voluptate temporibus, dolorem accusamus magni culpa. Provident neque praesentium in excepturi, ducimus quasi non ratione debitis doloremque a animi accusantium est autem qui? Consequuntur, voluptatum. Architecto, alias velit ad quos eos nihil vitae optio at unde, eum dolorem.",
    },
    {
      id: 5,
      userimg: "/imgs/H_resolution.jpg",
      username: "Ali Ahmad",
      reviwcount: "15",
      reviewcontent:
        "                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facere perspiciatis earum voluptate temporibus, dolorem accusamus magni culpa. Provident neque praesentium in excepturi, ducimus quasi non ratione debitis doloremque a animi accusantium est autem qui? Consequuntur, voluptatum. Architecto, alias velit ad quos eos nihil vitae optio at unde, eum dolorem.",
    },
  ];

  return (
    <div className="container">
      <div className="reviews_top_header">
        <div className="reviews_header_content">
          <div className="reviews_heading_personinfo">
            <h1>Jon Doe</h1>
            <span>1294 Civil Rd, Pakistan</span>
          </div>

          <div className="reviews_heading_writereview">
            <button
              className="writereview_btn"
              onClick={toggleDropdownOpen}
              ref={buttonRef}
            >
              <PiPencilSimpleLineFill />
              <span>Write a review</span>
            </button>
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
                      src={"/imgs/flash.webp"}
                      height={50}
                      width={50}
                      alt="user image"
                    />
                  </div>
                  <div className="reviewed_user_name">
                    <h5>Fahad Joyia</h5>
                    <div className="visibility_dropdown">
                      <label htmlFor="visibility">Visibility: </label>
                      <span>
                        Public <MdPublic />
                      </span>
                    </div>
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
                  ></textarea>
                </div>
                <div className="reviewed_user_close">
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      resetStars();
                    }}
                  >
                    Cancel
                  </button>
                  <button onClick={handlePostClick}>Post</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews_rating_filter">
          <div className="reviews_rating">
            <div className="reviews_rating_number">5.0</div>
            <div className="reviews_rating_stars">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
            <div className="reviews_count">
              16 <span>reviews</span>
            </div>
          </div>
          <div className="reviews_filter">
            <div className="reviews_filter_box">
              <span>Sort by:</span>
              <select>
                <option value="all-reviews">All reviews</option>
                <option value="last-week">Last week</option>
                <option value="last-month">Last month</option>
                <option value="last-year">Last year</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="main-reviews">
        {reviews.map((val) => (
          <div className="review_one" key={val.id}>
            <div className="reviewed_user">
              <div className="reviewed_user_image">
                <Image
                  src={val.userimg}
                  height={50}
                  width={50}
                  alt="user image"
                />
              </div>
              <div className="reviewed_user_name">
                <h5>{val.username}</h5>
                <p>
                  {val.reviwcount} <span>review</span>
                </p>
              </div>
            </div>
            <div className="review_user_main_review_content">
              <div className="review_user_rating">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <span>1 day ago</span>
              </div>
              <div className="review_user_content">{val.reviewcontent}</div>
              <div className="like_review_reply">
                <div className="like_review">
                  <FaThumbsUp /> <p>Like</p>
                </div>
                <div className="review_reply" onClick={toglefeedback}>
                  Feedback
                  
                </div>
                
              </div>
              <div className={`review_reply_input_main ${feedbackopen ? 'review__input' : ''}`}>
              <div className={`review_reply_input }`}>
                <input type="text" placeholder="write your review" />
              </div>
              <div className="review_reply_content">
                <div className="review_reply_response">
                  <div className="review_reply_titledate">
                    <h1>Response from the owner</h1>
                    <span>2 Week ago</span>
                  </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta dolorum corporis eum tempore perspiciatis amet et odit
                  dignissimos, quibusdam nostrum.
                </p>
                </div>
              </div>
              </div>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
