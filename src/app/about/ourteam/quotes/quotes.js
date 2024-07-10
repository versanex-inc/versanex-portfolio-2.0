import React from "react";
import "./quotes.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoMdQuote } from "react-icons/io";
const quotes = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const quotes = [
    {
      quote:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolor totam aspernatur voluptas, dolorum iusto rerum illo, vitae saepe incidunt tempore blanditiis libero cumque. Ducimus est ratione asperiores quas corporis.",
      name: "Moaz",
      position: "Founder"
    },
    {
      quote:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolor totam aspernatur voluptas, dolorum iusto rerum illo, vitae saepe incidunt tempore blanditiis libero cumque. Ducimus est ratione asperiores quas corporis.",
      name: "Hisham",
      position: "Co Founder"
    },
    {
      quote:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolor totam aspernatur voluptas, dolorum iusto rerum illo, vitae saepe incidunt tempore blanditiis libero cumque. Ducimus est ratione asperiores quas corporis.",
      name: "Fahad",
      position: "Manager"
    },
  ];
  return (
    <>
      <div className="container top_container quotes_container_ab">
        <h1 className="heading heading_about_comapny">
            <p>Quotes</p>
            <div className="heading_underline h_underline_mtContainer">
              <span className="heading_underline_dot"></span>
            </div>
          </h1>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          arrows={true}
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
          {quotes.map((item, index) => (
            <div className="quote_box_ab container_top" key={index}>
              <div className="openingcomma quote_comma_ab">
                <IoMdQuote />
              </div>
              <p className="quote_ab">{item.quote}</p>
              <div className="closingomma quote_comma_ab">
                <IoMdQuote />
              </div>
              <p className="quote_name_ab">{item.name}&nbsp;<b>({item.position})</b></p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default quotes;
