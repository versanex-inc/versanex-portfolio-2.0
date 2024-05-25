"use client";
import React, { useState,useRef,useEffect } from "react";
import "./Portfolio_Header.css";
import gsap from "gsap";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { useGSAP } from "@gsap/react";

const Portfolio_Header = () => {
  const [openCategories, setOpenCategories] = useState(null);

  useGSAP(() => {
    const headingElement = document.querySelector(".pf_h_heading h1");

    // Apply the GSAP animation to the heading element
    gsap.fromTo(
      headingElement,
      {
        top: "100%",
      },
      {
        top: "0%",
        duration: 1,
        ease: "power3.out",
      }
    );
  });

  const toggleCategories = (index) => {
    const newIndex = openCategories === index ? null : index;
    setOpenCategories(newIndex);
  };











  const topAnimationRef = useRef(null);

  useEffect(() => {
    const topAnimationElement = topAnimationRef.current;

    const animateTop = () => {
      setTimeout(() => {
        gsap.to(topAnimationElement, {
          y: "-16.66%",
          duration: 1,
          ease: "power3.out",
        });
      }, 0);

      setTimeout(() => {
        gsap.to(topAnimationElement, {
          y: "-33.32%",
          duration: 1,
          ease: "power3.out",
        });
      }, 3000);

      setTimeout(() => {
        gsap.to(topAnimationElement, {
          y: "-49.98%",
          duration: 1,
          ease: "power3.out",
        });
      }, 6000);
      setTimeout(() => {
        gsap.to(topAnimationElement, {
          y: "-66.64%",
          duration: 1,
          ease: "power3.out",
        });
      }, 9000);
      setTimeout(() => {
        gsap.to(topAnimationElement, {
          y: "-83.3%",
          duration: 1,
          ease: "power3.out",
        });
      }, 12000);
      setTimeout(() => {
        gsap.to(topAnimationElement, {
          y: "-99.96%",
          duration: 1,
          ease: "power3.out",
        });
        animateTop();
      }, 15000);
    };

    animateTop();

  }, []);

  return (
    <div className="portfolio_header">
      <div className="pf_h_info">
        <div className="pf_h_heading">
          <h1>Portfolio</h1>
        </div>
        <div className="pf_links">
          <div className="pf_link">
            <Link href={"#"}>All</Link>{" "}
            <span
              className="pf_link_categories_show"
              onClick={() => toggleCategories(0)}
            >
              <IoIosArrowDown />
            </span>
            <div
              className={`pf_link_categories ${
                openCategories === 0 ? "visible" : ""
              }`}
            >
              <Link href={'#'} className="pf_link_category">Gfx&nbsp;Design</Link>
              <Link href={'#'} className="pf_link_category">Web&nbsp;Developing</Link>
              <Link href={'#'} className="pf_link_category">Video&nbsp;Editing</Link>
            </div>
          </div>
          <div className="pf_link">
            <Link href={"#"}>Gfx&nbsp;Design</Link>{" "}
            <span
              className="pf_link_categories_show"
              onClick={() => toggleCategories(1)}
            >
              <IoIosArrowDown />
            </span>
            <div
              className={`pf_link_categories ${
                openCategories === 1 ? "visible" : ""
              }`}
            >
              <Link href={'#'} className="pf_link_category">Logos</Link>
              <Link href={'#'} className="pf_link_category">Banners</Link>
            </div>
          </div>
          <div className="pf_link">
            <Link href={"#"}>Video&nbsp;Editing</Link>{" "}
            <span
              className="pf_link_categories_show"
              onClick={() => toggleCategories(2)}
            >
              <IoIosArrowDown />
            </span>
            <div
              className={`pf_link_categories ${
                openCategories === 2 ? "visible" : ""
              }`}
            >
              <Link href={'#'} className="pf_link_category">Motion</Link>
              <Link href={'#'} className="pf_link_category">Blender</Link>
            </div>
          </div>
          <div className="pf_link">
            <Link href={"#"}>Web&nbsp;Developing</Link>{" "}
            <span
              className="pf_link_categories_show"
              onClick={() => toggleCategories(3)}
            >
              <IoIosArrowDown />
            </span>
            <div
              className={`pf_link_categories ${
                openCategories === 3 ? "visible" : ""
              }`}
            >
              <Link href={'#'} className="pf_link_category">Websites</Link>
              <Link href={'#'} className="pf_link_category">Web&nbsp;Apps</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p_header_animation">
        <div
          className="p_header_animation_content p_header_animation_content_top"
          ref={topAnimationRef}
        >
          <div className="p_h_animation_box p_h_animation_one">Web Developing</div>
          <div className="p_h_animation_box p_h_animation_two">GFX Design</div>
          <div className="p_h_animation_box p_h_animation_three">Logo Design</div>
          <div className="p_h_animation_box p_h_animation_one">Web Developing</div>
          <div className="p_h_animation_box p_h_animation_two">GFX Design</div>
          <div className="p_h_animation_box p_h_animation_three">Logo Design</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio_Header;
