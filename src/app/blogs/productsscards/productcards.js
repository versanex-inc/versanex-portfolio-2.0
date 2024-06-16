'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './productscard.css'
const productcards = () => {



    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
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

    const cardata = [
        {
            id:1,
            image:'/imgs/H_resolution.jpg',
            heading:'This is the First Card',
            contetn:'This is the content of all cards which include some information about the cards',
            buttonName:'Show Details',
        },
        {
            id:2,
            image:'/imgs/H_resolution.jpg',
            contetn:'This is the content of all cards which include some information about the cards',
            heading:'This is the First Card',
            buttonName:'Show Details',
        },
        {
            id:3,
            image:'/imgs/H_resolution.jpg',
            heading:'This is the First Card',
            contetn:'This is the content of all cards which include some information about the cards',
            buttonName:'Show Details',
        },
        {
            id:4,
            image:'/imgs/H_resolution.jpg',
            heading:'This is the First Card',
            contetn:'This is the content of all cards which include some information about the cards',
            buttonName:'Show Details',
        }
    ]
  return (
    <>
    <div className="container">
        <div className="productcardmain">
        <Carousel
            // swipeable={true}
            // draggable={true}
            // showDots={false}
            // responsive={responsive}
            // ssr={true}
            // infinite={true}
            // autoPlay={false}
            // autoPlaySpeed={1000}
            // keyBoardControl={true}
            // customTransition="all .5"
            // transitionDuration={500}
            // containerClass="carousel-container"
            // removeArrowOnDeviceType={['tablet', 'mobile']}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
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
            autoPlaySpeed={500}
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
                {cardata.map((content) =>(
            <div className="productcard" key={content.id}>
                <div className="prodcardimg">
                    <Image
                    src={content.image}
                    height={230}
                    width={230}>
                    </Image>
                </div>
                <div className="prodcardconhead">
                        <h1>{content.heading}</h1>
                </div>
                <div className="prodcardconcontent">
                    <p>{content.contetn}</p>
                </div>
                <div className="prodcardbtn">
                <Link href={'/blogs/Inkipinkiponki'}>{content.buttonName} </Link> 
                </div>
            </div>
            ))}
            </Carousel>
        </div>
    </div>
    </>
  )
}

export default productcards