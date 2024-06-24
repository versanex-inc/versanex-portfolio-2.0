'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './productscard.css'
import { MdOutlineArrowForward } from "react-icons/md";

const ProductCards = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getBlogs`);
      const data = await res.json();
      const { result } = data;

      // Reverse the blogs to get the latest ones first and take the first 10
      const latestBlogs = result.reverse().slice(0, 10);
      setLatestBlogs(latestBlogs);
    };

    fetchBlogs();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
    Medtablet: {
      breakpoint: { max: 779, min: 0 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 551, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="container">
        <div className="productcardmain">
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
            focusOnSelect={false}
            rewind={true}
            rewindWithAnimation={true}
          >
            {latestBlogs.map((content) => (
              <div className="productcard" key={content._id}>
                <div className="prodcardimg">
                  <Image
                    src={content.images[0].url}
                    height={230}
                    width={230}
                    alt={content.title}
                  />
                </div>
                <div className="prodcardconhead">
                  <h4>{content.title}</h4>
                </div>
                <div className="prodcardconcontent">
                  <p>{content.descriptions[0]}</p>
                </div>
                <div className="prodcardbtn">
                  <Link href={`/blogs/${content.slug}`}>Show Details <span className="proecard_arrrow"><MdOutlineArrowForward/></span></Link>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default ProductCards;
