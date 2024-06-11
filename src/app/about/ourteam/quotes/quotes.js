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
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, ad dolor? Dolor commodi corrupti illum possimus officiis, id itaque incidunt nobis sed doloremque repellendus nemo quisquam expedita numquam labore impedit.",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptatem dignissimos soluta reprehenderit mollitia aut illum, perspiciatis nisi maiores corporis? adipisicing elit. Deleniti, ad dolor? Dolor commodi corrupti illum possimus officiis, id itaque incidunt nobis sed doloremque repellendus nemo quisquam expedita numquam labore impedit.",
    },
    {
      quote:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptatem dignissimos soluta reprehenderit mollitia aut illum, perspiciatis nisi maiores corporis?i illum possimus officiis, id itaque incidunt nobis sed doloremque repellendus nemo quisquam expedita numquam labore impedit.",
    },
  ];
  return (
    <>
      <div className="container">
        
        <div className="quotes">
          <div className="quotes_heading">
            <h1>Ouotes</h1>
          <div className="Yellow_underline"></div>
          </div>
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
              <div className="quote_box" key={index}>
                <div className="openingcomma">
                  <IoMdQuote />
                </div>
                <p>{item.quote}</p>
                <div className="closingomma">
                  <IoMdQuote />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default quotes;
