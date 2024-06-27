"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdSwipe } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Reviews.css";
import Link from "next/link";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchReviews() {
      try {
        const reviewsResponse = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getReviews`);
        const reviewsData = await reviewsResponse.json();

        if (isMounted) {
          const fiveStarReviews = reviewsData.result
            .filter(review => review.stars && review.stars.length > 0 && review.stars[0].rating === 5)
            .reverse();
          setReviews(fiveStarReviews);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }

    async function fetchUsers() {
      try {
        const usersResponse = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getUsers`);
        const usersData = await usersResponse.json();

        if (isMounted) {
          setUsers(usersData.result);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
    fetchUsers();

    return () => {
      isMounted = false;
    };
  }, []);

  const getUserById = userId => users.find(user => user._id === userId);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="container top_container reviews">
      <h1 className="heading reviews_heading">
        Reviews
        <div className="heading_underline h_underline_mtContainer">
          <span className="heading_underline_dot"></span>
        </div>
      </h1>
      <h2 className="sub_heading reviews_subheading">
        See what our clients say about us
      </h2>
      <div className="swipe_alert">
        Swipe <b><MdSwipe /></b>
      </div>
      <div className="reviews_swiper sub_container">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          arrows={false}
          ssr={true}
          infinite={true}
          minimumTouchDrag={100}
          keyBoardControl={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          customTransition="transform 1000ms ease-in-out"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          focusOnSelect={true}
          rewind={true}
          rewindWithAnimation={true}
        >
          {reviews.map((review) => {
            const user = getUserById(review.user);
            return (
              <div key={review._id} className="swipe reviews_swipe">
                <div className="review_client_pic">
                  <Image
                    src={user?.image || "/default-user.png"}
                    height={50}
                    width={50}
                    alt="user"
                  />
                </div>
                <p className="review_client_name">{user?.name || "Anonymous"}</p>
                <p className="review_client_review">{review.details}</p>
                <Link href={"/about/testimonials"} className="review_read_more">Read More</Link>
                <div className="review_client_stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    index < review.stars[0].rating ? <FaStar key={index} /> : <FaRegStar key={index} />
                  ))}
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
