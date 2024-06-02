"use client";
import React, { useRef, useState, useEffect } from "react";
import "./Services.css";
import Image from "next/image";
import { PiArrowRightBold } from "react-icons/pi";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  // Array of service objects
  const servicesData = [
    {
      title: "Website Development",
      serviceUrl: "/services/website-developing",
      description: "Strengthen your online presence with robust websites.",
      imageSrc: "/imgs/services/website.png",
    },
    {
      title: "SEO",
      serviceUrl: "/services/seo",
      description: "Boost your business ranking with our expert SEO skills.",
      imageSrc: "/imgs/services/seo.png",
    },
    {
      title: "Video Editing",
      serviceUrl: "/services/video-editing",
      description: "Engage users with our interactive video editing expertise.",
      imageSrc: "/imgs/services/video.png",
    },
    {
      title: "Digital Marketing",
      serviceUrl: "/services/digital-marketing",
      description: "Enhance your business with our digital marketing strategies.",
      imageSrc: "/imgs/services/digitalmarketing.png",
    },
    {
      title: "Graphics Designing",
      serviceUrl: "/services/graphics-designing",
      description: "Elevate your brand with impactful graphic design services.",
      imageSrc: "/imgs/services/logo.png",
    },
    {
      title: "Content Writing",
      serviceUrl: "/services/content-writing",
      description: "Convey your business message with our content writing skills.",
      imageSrc: "/imgs/services/content.png",
    },
  ];

  // State to manage which services are currently displayed
  const [showAll, setShowAll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  // Toggle function to switch between showing all services and showing only the first few
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const containerRef = useRef(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (container && windowWidth <= 414) {
        const elements = container.querySelectorAll('.service');

        elements.forEach((el, index) => {
          gsap.fromTo(
            el,
            {
              x: index % 2 === 0 ? -100 : 100,
              opacity: 0,
              scale: 0.8,
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 1.5,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                end: 'bottom 40%',
              },
            }
          );
        });
      } else if (container && windowWidth > 414) {
        const elements = container.querySelectorAll('.service');

        elements.forEach((el) => {
          gsap.fromTo(
            el,
            {
              y: 60,
              opacity: 0,
              scale: 0.8,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.5,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                end: 'bottom 40%',
              },
            }
          );
        });
      }
    },
    { scope: containerRef, enabled: windowWidth <= 414 || windowWidth > 414 }
  );


  // useGSAP(
  //   () => {
  //     const container = containerRef.current;
  //     if (container) {
  //       const elements = container.querySelectorAll('.service');

  //       elements.forEach((el) => {
  //         gsap.fromTo(
  //           el,
  //           {
  //             y: 60,
  //             opacity: 0,
  //             scale: 0.8,
  //           },
  //           {
  //             y: 0,
  //             opacity: 1,
  //             scale: 1,
  //             duration: 1.5,
  //             ease: 'power3.out',
  //             scrollTrigger: {
  //               trigger: el,
  //               start: 'top 90%',
  //               end: 'bottom 40%',
  //             },
  //           }
  //         );
  //       });
  //     }
  //   },
  //   { scope: containerRef }
  // );
  // useEffect to update windowWidth state on component mount
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  // useEffect to update windowWidth state on window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="container top_container services" ref={containerRef}>
      <h1 className="heading services_heading">
        Our&nbsp;Services
        <div className="heading_underline h_underline_mtContainer">
          <span className="heading_underline_dot"></span>
        </div>
      </h1>
      <h2 className="sub_heading services_sub_heading">
        We make it easy to begin your online journey and there’s a place for
        everyone. Just take your pick and get started.
      </h2>
      <div className="services_container sub_container">
      {servicesData
  .slice(0, showAll || windowWidth > 768 ? servicesData.length : 4) // Conditionally render based on window width
  .map((service, index) => (
    <Link href={service.serviceUrl} key={index} className={`button service ${index % 2 === 0 ? 'service_left' : 'service_right'}`}>
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
        <Link href={service.serviceUrl} className="service_read_more_btn">
          Read&nbsp;More
        </Link>
      </div>
    </Link>
  ))}
      </div>
      {/* Conditional rendering of "show more" or "show less" button */}
      {servicesData.length > 4 && (
        <button
          className="button button_small show_all_services"
          onClick={toggleShowAll}
        >
          <a className="show_more">
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