"use client";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { BsCalendar2EventFill, BsPersonArmsUp } from "react-icons/bs";
import {
  FaPodcast,
  FaIndustry,
  FaStore,
  FaRegIdCard,
  FaAward,
  FaInfo,
  FaBlogger,
  FaNewspaper,
} from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { TbWorldSearch } from "react-icons/tb";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FaPager } from "react-icons/fa6";
import { FiPenTool } from "react-icons/fi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { ImEyeBlocked } from "react-icons/im";
import { FaBars, FaTimes } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { MdOutlineWeb } from "react-icons/md";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);

  const toggleDropdownAbout = () => {
    setIsOpenAbout(!isOpenAbout);
    // setIsOpenServices(false)
  };
  const toggleDropdownServices = () => {
    setIsOpenServices(!isOpenServices);
    // setIsOpenAbout(false)
  };
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useGSAP(() => {
    if (window.innerWidth < 768) {
      var menu = document.querySelector(".open_nav");
      var cross = document.querySelector(".nav_close");
      var overlay = document.querySelector(".overlay");
      var tl = gsap.timeline();

      tl.to(".nav_links", {
        left: 0,
        duration: 0.1,
      });
      tl.from(".nav_links .nav_link_parent", {
        x: -150,
        duration: 0.1,
        stagger: 0.1,
        opacity: 0,
      });
      tl.from(".nav_close", {
        opacity: 0,
      });

      tl.pause();

      menu.addEventListener("click", function () {
        overlay.style.opacity = 1;
        overlay.style.pointerEvents = "auto";
        tl.play();
      });

      cross.addEventListener("click", function () {
        tl.reverse().eventCallback("onReverseComplete", function() {
          overlay.style.opacity = 0;
          overlay.style.pointerEvents = "none";
        });
      });
    }
  });
  

  return (
    <div className={`container navbar${scrolled ? " scrolled" : ""}`}>
      <div className="overlay"></div> 
      <div className="nav_toggle">
        <span className="open_nav">
          <FaBars />
        </span>
      </div>
      <Link href={"/"} className="nav_logo">
        Versa
        {/* <Image src={"/imgs/logo.png"} width={1000} height={1000} /> */}
        <b>N</b>
        ex
      </Link>
      <div className="nav_links">
        <div className="nav_toggle nav_close">
          <span className="nav_close_icon">
            <FaTimes />
          </span>
        </div>
        <div className="nav_link_parent">
          <button className="button nav_link">
            <Link className="nav_link_a" href={"/"}>
              Home
            </Link>
          </button>
        </div>
        <div className="nav_link_parent">
          <button className="button nav_link">
            <Link className="nav_link_a" href={"/portfolio"}>
              Portfolio
            </Link>
          </button>
        </div>
        <div className="nav_link_parent">
          <button className="button nav_link">
            <Link className="nav_link_a" href={"/blogs"}>
              Blogs
            </Link>
          </button>
        </div>
        {/* <div
          className="nav_link_parent"
        >
          <button className="button nav_link">
            <a className="nav_link_a" href="#">
              Discover
            </a>
            <span className="arrow">
              <IoIosArrowDown />
            </span>
          </button>
          <div className="dropdown">
              <div className="linking_dropdown"></div>
                <div className="dropdown_link"><span className="dd_link_icon"><BsCalendar2EventFill/></span><span className="dd_link_name">Events</span></div>
                <div className="dropdown_link"><span className="dd_link_icon"><FaPodcast/></span><span className="dd_link_name">Podcast</span></div>
                <div className="dropdown_link"><span className="dd_link_icon"><FaIndustry/></span><span className="dd_link_name">Industry</span></div>
            </div>
        </div> */}
        <div className="nav_link_parent">
          <button className="button nav_link">
            <Link href={"/services"} className="nav_link_a">
              Services

            </Link>
            <span className="arrow">
              <IoIosArrowDown />
            </span>
            <div className="mobile_toogle_dropdown_arrow" onClick={toggleDropdownServices}><IoIosArrowDown/></div> 
          </button>
          <div
              className={`mobile_nav_dropdown ${isOpenServices ? "open" : ""}`}
            >
              <div className="mobile_nav_links">
              <Link href="/services/website-developing">
                Website&nbsp;Developing
              </Link>
              <Link href="/services/graphics-designing">
                Graphics&nbsp;Designing
              </Link>
              <Link href="/services/video-editing">Video&nbsp;Editing</Link>
              <Link href="/services/digital-marketing">
                Digital&nbsp;Marketing
              </Link>
              <Link href="/services/content-writing">Content&nbsp;Writing</Link>
              <Link href="/services/seo">SEO</Link>
              </div>
            </div>
          <div className="dropdown">
            <div className="linking_dropdown"></div>
            <Link
              href={"/services/website-developing"}
              className="dropdown_link"
            >
              <span className="dd_link_icon">
                <MdOutlineWeb />
              </span>
              <span className="dd_link_name">Website&nbsp;Developing</span>
            </Link>
            <Link
              href={"/services/graphics-designing"}
              className="dropdown_link"
            >
              <span className="dd_link_icon">
                <FiPenTool />
              </span>
              <span className="dd_link_name">Graphics&nbsp;Designing</span>
            </Link>
            <Link href={"/services/video-editing"} className="dropdown_link">
              <span className="dd_link_icon">
                <MdOutlineOndemandVideo />
              </span>
              <span className="dd_link_name">Video&nbsp;Editing</span>
            </Link>
            <Link
              href={"/services/digital-marketing"}
              className="dropdown_link"
            >
              <span className="dd_link_icon">
                <IoAnalyticsSharp />
              </span>
              <span className="dd_link_name">Digital&nbsp;Marketing</span>
            </Link>
            <Link href={"/services/content-writing"} className="dropdown_link">
              <span className="dd_link_icon">
                <TfiWrite />
              </span>
              <span className="dd_link_name">Content&nbsp;Writing</span>
            </Link>
            <Link href={"/services/seo"} className="dropdown_link">
              <span className="dd_link_icon">
                <TbWorldSearch />
              </span>
              <span className="dd_link_name">SEO</span>
            </Link>
          </div>
        </div>
        <div className="nav_link_parent">
          <button className="button nav_link">
            <Link className="nav_link_a" href="/about">
              About
            </Link>
            <span className="arrow">
              <IoIosArrowDown />
            </span>
            <div className="mobile_toogle_dropdown_arrow" onClick={toggleDropdownAbout}><IoIosArrowDown/></div> 
          </button>
          <div
              className={`mobile_nav_dropdown ${isOpenAbout ? "open" : ""}`}
            >
              <div className="mobile_nav_links">
              <Link href="/about">
                Company
              </Link>
              <Link href="/about/testimonials">
                Testimonials
              </Link>
              <Link href="/about/ourteam">Our&nbsp;team</Link>
              </div>
            </div>
          <div className="dropdown">
            <div className="linking_dropdown"></div>
            <div className="dropdown_link">
              <span className="dd_link_icon">
                <FaInfo />
              </span>
              <Link href={"/about"} className="Links">
                <span className="dd_link_name">Company</span>
              </Link>
            </div>
            <div className="dropdown_link">
              <span className="dd_link_icon">
                <FaBlogger />
              </span>
              <Link href={"/about/testimonials"} className="Links">
                <span className="dd_link_name">Testimonials</span>
              </Link>
            </div>
            <div className="dropdown_link">
              <span className="dd_link_icon">
                <BsPersonArmsUp />
              </span>
              <Link href={"/about/ourteam"} className="Links">
                <span className="dd_link_name">Our&nbsp;team</span>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="nav_link_parent">
          <button className="button nav_link">
            <Link href={"/products"} className="nav_link_a">
              Products
            </Link>
            <span className="arrow">
              <IoIosArrowDown />
            </span>
          </button>
          <div className="dropdown">
             <div className="linking_dropdown"></div>
             <div className="dropdown_link"><span className="dd_link_icon"><FaPager /></span><span className="dd_link_name">Blog&nbsp;Web</span></div>
             <div className="dropdown_link"><span className="dd_link_icon"><FaStore/></span><span className="dd_link_name">E&nbsp;Commerce&nbsp;Web</span></div>
             <div className="dropdown_link"><span className="dd_link_icon"><ImEyeBlocked/></span><span className="dd_link_name">Membership&nbsp;Web</span></div>
             <div className="dropdown_link"><span className="dd_link_icon"><FaRegIdCard/></span><span className="dd_link_name">Portfolio&nbsp;Web</span></div>
             <div className="dropdown_link"><span className="dd_link_icon"><FaAward /></span><span className="dd_link_name">Fashion&nbsp;Web</span></div>
             <div className="dropdown_link"><span className="dd_link_icon"><BsCalendar2EventFill/></span><span className="dd_link_name">Events&nbsp;Web</span></div>
             <div className="dropdown_link"><span className="dd_link_name">More</span></div>
         </div>
        </div> */}
        <div className="nav_link_parent">
          <button className="button nav_link">
            <Link className="nav_link_a" href="/contact">
              Contact
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
