"use client";
import React, { useState, useEffect, useRef } from "react";
import "./testimonials.css";
import { IoStarSharp, IoStarOutline } from "react-icons/io5";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import Image from "next/image";
import { FaThumbsUp } from "react-icons/fa6";
import { MdPublic } from "react-icons/md";
import { useSession } from "next-auth/react";
import AllReviews from "./allReviews/AllReviews";
import FileterReview from "./filterReview/FileterReview";

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
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  const toggleDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (status !== "authenticated") {
    alert("Please login first");
    return null;
  }

  if (!user) {
    return <div>No user data found.</div>;
  }

  // const reviews = [
  //   {
  //     id: 1,
  //     userimg: "/imgs/btchi.png",
  //     username: "Maaz Jutt",
  //     reviwcount: "5",
  //     reviewcontent:
  //       "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facere perspiciatis earum voluptate temporibus, dolorem accusamus magni culpa. Provident neque praesentium in excepturi, ducimus quasi non ratione debitis doloremque a animi accusantium est autem qui? Consequuntur, voluptatum. Architecto, alias velit ad quos eos nihil vitae optio at unde, eum dolorem.",
  //   },
  //   {
  //     id: 2,
  //     userimg: "/imgs/im2.png",
  //     username: "Hisham Hussain",
  //     reviwcount: "2",
  //     reviewcontent:
  //       "                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facere perspiciatis earum voluptate temporibus, dolorem accusamus magni culpa. Provident neque praesentium in excepturi, ducimus quasi non ratione debitis doloremque a animi accusantium est autem qui? Consequuntur, voluptatum. Architecto, alias velit ad quos eos nihil vitae optio at unde, eum dolorem.",
  //   },
  //   {
  //     id: 3,
  //     userimg: "/imgs/img3.png",
  //     username: "Ahmad Jutt",
  //     reviwcount: "8",
  //     reviewcontent:
  //       "                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facere perspiciatis earum voluptate temporibus, dolorem accusamus magni culpa. Provident neque praesentium in excepturi, ducimus quasi non ratione debitis doloremque a animi accusantium est autem qui? Consequuntur, voluptatum. Architecto, alias velit ad quos eos nihil vitae optio at unde, eum dolorem.",
  //   },
  //   {
  //     id: 4,
  //     userimg: "/imgs/flash.webp",
  //     username: "Jami",
  //     reviwcount: "3",
  //     reviewcontent:
  //       "                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facere perspiciatis earum voluptate temporibus, dolorem accusamus magni culpa. Provident neque praesentium in excepturi, ducimus quasi non ratione debitis doloremque a animi accusantium est autem qui? Consequuntur, voluptatum. Architecto, alias velit ad quos eos nihil vitae optio at unde, eum dolorem.",
  //   },
  //   {
  //     id: 5,
  //     userimg: "/imgs/H_resolution.jpg",
  //     username: "Ali Ahmad",
  //     reviwcount: "15",
  //     reviewcontent:
  //       "                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facere perspiciatis earum voluptate temporibus, dolorem accusamus magni culpa. Provident neque praesentium in excepturi, ducimus quasi non ratione debitis doloremque a animi accusantium est autem qui? Consequuntur, voluptatum. Architecto, alias velit ad quos eos nihil vitae optio at unde, eum dolorem.",
  //   },
  // ];

  return (
    <div className="testimonials_container container">
      <div className="reviews_top_header">
        <div className="reviews_header_content">
          <div className="reviews_heading_personinfo">
            <div className="person_imgae">
              <Image src={user.image} width={60} height={60} alt="user" />
            </div>
            <h1>{user.name}</h1>
            {/* <span>1294 Civil Rd, Pakistan</span> */}
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
                      src={user.image}
                      width={60}
                      height={60}
                      alt="user"
                    />
                  </div>
                  <div className="reviewed_user_name">
                    <h5>{user.name}</h5>
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
                    value={reviewDetails}
                    onChange={(e) => setReviewDetails(e.target.value)}
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
      </div>
      <hr />
      <AllReviews/>
    </div>
  );
};

export default Reviews;
