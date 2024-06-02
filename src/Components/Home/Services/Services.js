"use client";
import React, { useState } from "react";
import "./Services.css";
import Image from "next/image";
import { PiArrowRightBold } from "react-icons/pi";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import Link from "next/link";

const Services = () => {
  // Array of service objects
  const servicesData = [
    {
      title: "Website Development",
      description: "Making your online appearance strong through websites.",
      imageSrc: "/imgs/services/website.png",
    },
    {
      title: "SEO",
      description: "Make your business rank high through our SEO skills.",
      imageSrc: "/imgs/services/seo.png",
    },
    {
      title: "Video Editing",
      description:
        "Make your users engage with you through our interactive video making skill.",
      imageSrc: "/imgs/services/video.png",
    },
    {
      title: "Digital Marketing",
      description:
        "Make your business appearance strong and profitable through our digital marketing skills.",
      imageSrc: "/imgs/services/digitalmarketing.png",
    },
    {
      title: "Logo Designing",
      description:
        "Make your brand symbolize through our meaningful logo making skills.",
      imageSrc: "/imgs/services/logo.png",
    },
    {
      title: "Content Writing",
      description:
        "Make your business meaningful through our content writing skills.",
      imageSrc: "/imgs/services/content.png",
    },
    {
      title: "E-commerce Store",
      description:
        "Make your business online through your digital store website.",
      imageSrc: "/imgs/services/ecommerce.png",
    },
    {
      title: "BLog Website",
      description:
        "Make your beneficial content access to the puvlic through blog website.",
      imageSrc: "/imgs/services/blog.png",
    },
  ];

  // State to manage which services are currently displayed
  const [showAll, setShowAll] = useState(false);

  // Toggle function to switch between showing all services and showing only the first few
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="container top_container services">
      <h1 className="heading services_heading">Our&nbsp;Services<div className="heading_underline h_underline_mtContainer">
          <span className="heading_underline_dot"></span>
        </div></h1>
      <h2 className="sub_heading services_sub_heading">
        We make it easy to begin your online journey and there’s a place for
        everyone. Just take your pick and get started.
      </h2>
      <div className="services_container sub_container">
        {servicesData
          .slice(0, showAll ? servicesData.length : 6)
          .map((service, index) => (
            <div key={index} className="button service">
              <div className="service_content">
                <div className="service_image">
                  <Image
                    src={service.imageSrc}
                    alt="service img"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="service_title">{service.title}</div>
                <div className="service_description">{service.description}</div>
                <Link href={'/services/websiteDeveloping'} className="service_read_more_btn">
                  Read&nbsp;More
                  <b className="service_arrow">
                    <PiArrowRightBold />
                  </b>
                </Link>
              </div>
            </div>
          ))}
      </div>
      {/* Conditional rendering of "show more" or "show less" button */}
      {servicesData.length > 6 && (
        <button
          className="button nav_link show_all_services"
          onClick={toggleShowAll}
        >
          <a className="nav_link_a show_more">
            <p>
              {showAll ? "Show less" : "Show more"}{" "}
              <b className="show_more_arrow arrow">
                {showAll ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
              </b>
            </p>
          </a>
        </button>
      )}
    </section>
  );
};

export default Services;
