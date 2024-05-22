"use client";
import React from "react";
import "./Reviews.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdSwipe } from "react-icons/md";

const Reviews = () => {
  // Dummy reviews data (mimicking API response)
  const reviews = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
      name: "Jhon Doe",
      review: "Great web development service! Veranex helped us create a fantastic website for our business. Highly recommended!",
      stars: 5,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
      name: "Dev Meri",
      review: "Veranex did an amazing job with our logo design. They were very creative and professional. We love our new logo!",
      stars: 4,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
      name: "Saeed Raza",
      review: "Excellent SEO service provided by Veranex. Our website's ranking improved significantly after working with them.But they are not fast so i would give them three stars but i would reommend you becuase of their siklls.",
      stars: 3,
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1497316730643-415fac54a2af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Umar Maqbool",
      review: "Veranex helped us with digital marketing campaigns, and the results were outstanding. Our online presence has never been better!",
      stars: 4,
    },
  ];

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

  return (
    <section className="container top_container reviews">
      <h1 className="heading reviews_heading">Reviews<div className="heading_underline h_underline_mtContainer">
          <span className="heading_underline_dot"></span>
        </div></h1>
      <h2 className="sub_heading reviews_subheading">
        See what our clients say about us
      </h2>
      <div className="swipe_alert">
        Swipe <b><MdSwipe/></b>
      </div>
      <div className="reviews_swiper sub_container">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          arrows={false}
          ssr={true} // means to render carousel on server-side.
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
          {reviews.map((review) => (
            <div key={review.id} className="swipe reviews_swipe">
              <div className="review_client_pic">
                <img src={review.img} alt="" />
              </div>
              <p className="review_client_name">{review.name}</p>
              <p className="review_client_review">{review.review}</p>
              <a href="#" className="review_read_more">Read More</a>
              <div className="review_client_stars">
                {Array.from({ length: 5 }, (_, index) => (
                  index < review.stars ? <FaStar key={index} /> : <FaRegStar key={index} />
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
