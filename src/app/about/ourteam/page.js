'use client'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import "./teamsec.css";
import Link from "next/link";
import Image from "next/image";
import Joinus from "./joinus/joinus";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import Quotes from "./quotes/quotes";
const Page = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const imgs = [
    {
    src: '/imgs/btchi.png',
    dets:'Founder & Ceo',
    sub_dets:'Graphic Designer and video editopr',
    link:'/',
    },
  //   {
  //   src: '/imgs/img2.png',
  //   dets:'Co-Founder & Ceo',
  //   sub_dets:'Seo Wordpress and  DBMS',
  // },
  {
      src: '/imgs/btchi.png',
      dets:'Nalla',
      sub_dets:'Pikora Man and Chapri man',
      link:'/',
  },
{
    src: '/imgs/btchi.png',
    dets:'Founding Member',
    sub_dets:'React Database and Api Master',
    link:'/',
},
{
    src: '/imgs/img3.png',
    dets:'Chapri',
    sub_dets:'Batton ka Mater',
    link:'/',
},
{
    src: '/imgs/im2.png',
    dets:'Barozgaar ',
    sub_dets:'Graphic Designer and video editopr',
    link:'/',
}
  ];

  return (
    <div>
      <div className="container team_Main">
        <div className="team_title">
          <h1>
            Meet Our <span>Team</span>
          </h1>
        </div>
        <span className="Team_Yellow_underline"></span>
        <div className="teammain_con">
          <div className="team_about_con">
            <p>
              Since then, it has evolved and established itself in being at the
              forefront in information and technology supporting competency in
              computing strategies and solutions for Private and Government
              Organizations. Understanding the importance of IT, VERSANEX has
              been involved in, perhaps, some of the most projects in the
              country.
            </p>
            <p>
              <br />
              Globally, the Company has taken its place among the important
              market specialties of various countries, offering services and
              products to a continuously rising number of corporates. In
              addition to deployment, our current and potential services
              encompass operations, maintenance, support, and business
              outsourcing. As a team of talented and hardworking Technology
              Specialists, we have vast experience in implementing successful
              solutions using technologies such as Microsoft, Oracle, PHP, ASP,
              3D, and MERN stack.
            </p>
          </div>
        </div>
      </div>
      <div className="container Mission">
        <div className="team_culture_val">
          <div className="team_culture_title">
            <h1>Team Culture and Values</h1>
          </div>
          <span className="White_underline"></span>
          <div className="team_culture_main_con">
            <div className="teamculutre_about_con">
              <p>
                Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam, ratione. ipsum dolor sit amet consectetur
                adipisicing elit. Vel blanditiis aliquid dicta ipsam beatae
                placeat? Ea dicta quisquam amet, eum quos sint alias, cumque
                vitae nobis fuga magnam, voluptates possimus!
              </p>
              <p style={{ marginTop: "1rem" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus quaerat cupiditate aperiam animi. Numquam incidunt
                corrupti suscipit maxime, ipsa tempore explicabo quis,
                voluptates unde excepturi obcaecati quam quas eligendi
                molestias?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container Card_sec">
        <div className="card_sec_con">
          <div className="button_sec">
            <button
              className={`btns ${activeButton === 'LEADERSHIP' ? 'clicked' : ''}`}
              onClick={() => handleClick('LEADERSHIP')}
            >
              LEADERSHIP
            </button>
            <button
              className={`btns ${activeButton === 'CREATIVE' ? 'clicked' : ''}`}
              onClick={() => handleClick('CREATIVE')}
            >
              CREATIVE
            </button>
            <button
              className={`btns ${activeButton === 'DEVELOPMENT' ? 'clicked' : ''}`}
              onClick={() => handleClick('DEVELOPMENT')}
            >
              DEVELOPMENT
            </button>
            <button
              className={`btns ${activeButton === 'MARKETING' ? 'clicked' : ''}`}
              onClick={() => handleClick('MARKETING')}
            >
              MARKETING
            </button>
            <button
              className={`btns ${activeButton === 'ALL' ? 'clicked' : ''}`}
              onClick={() => handleClick('ALL')}
            >
              ALL
            </button>
          </div>
        </div>
        <div className="card_container">
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
            {imgs.map((item, index) => (
              <div key={index} className="card-sec">
              <div className="card1" key={index}>
                <div className="card">
                  <Image
                    src={item.src}
                    width={273}
                    height={273}
                    className="team-image"
                    alt={`Team Member ${index + 1}`}
                  />
                </div>
              </div>
                {/* <div className="Team_Seperator"/> */}
                  <div className="card_dets">
                    <div className="card1_dets">
                      <div className="card_con">
                        <p > {item.dets}</p>
                        <p className="cardsub_dets" >{item.sub_dets}</p>
                        <Link href={'/'} style={{
                          color:'black',
                          height:'20px',
                          widows:'20px',
                        }}><BiLogoLinkedinSquare/>{item.link}</Link>
                      </div>
                    </div>
                  </div>
              </div>
            ))}
          </Carousel>  
        </div>
      </div>
      <div className="quotes">
        <Quotes/>
      </div>
      <div className="joinus">
            <Joinus/>
      </div>
    </div>
  );
};

export default Page;
