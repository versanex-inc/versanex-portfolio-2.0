"use client";
import React, { useState} from "react";
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

  return (
    <div className="portfolio_layout_header">
      <div className="pf_h_info">
        <div className="pf_h_heading">
          <h1>Portfolio</h1>
        </div>
        <div className="pf_links">
          <div className="pf_link">
            <Link href={"/portfolio"}>All</Link>{" "}
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
              <Link href={'/portfolio/graphics-designing'} className="pf_link_category">Gfx&nbsp;Design</Link>
              <Link href={'/portfolio/website-developing'} className="pf_link_category">Web&nbsp;Developing</Link>
              <Link href={'/portfolio/video-editing'} className="pf_link_category">Video&nbsp;Editing</Link>
            </div>
          </div>
          <div className="pf_link">
            <Link href={"/portfolio/graphics-designing"}>Gfx&nbsp;Design</Link>{" "}
            {/* <span
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
            </div> */}
          </div>
          <div className="pf_link">
            <Link href={"/portfolio/website-developing"}>Website&nbsp;developing</Link>{" "}
            {/* <span
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
            </div> */}
          </div>
          <div className="pf_link">
            <Link href={"/portfolio/video-editing"}>Video&nbsp;Editing</Link>{" "}
            {/* <span
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
            </div> */}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Portfolio_Header;
