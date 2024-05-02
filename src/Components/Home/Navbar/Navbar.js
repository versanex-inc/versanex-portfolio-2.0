"use client"
import React, {useEffect} from 'react';
import './Navbar.css';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import { BsCalendar2EventFill, BsPersonArmsUp   } from "react-icons/bs";
import { FaPodcast, FaIndustry,FaStore , FaRegIdCard ,FaAward , FaInfo ,FaBlogger, FaNewspaper  } from "react-icons/fa";
import { FaPager } from "react-icons/fa6";
import { ImEyeBlocked } from "react-icons/im";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="nav_logo">
        Versa<Image src={'/imgs/logo.png'} width={1000} height={1000} />ex
      </div>
      <div className="nav_links">
        <div
          className="nav_link_parent"
        >
          <button className="button nav_link">
            <a className="nav_link_a" href="#">
              Portfolio
            </a>
          </button>
        </div>
        <div
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
        </div>
        <div
          className="nav_link_parent"
        >
          <button className="button nav_link">
            <a className="nav_link_a" href="#">
              Services
            </a>
            <span className="arrow">
              <IoIosArrowDown />
            </span>
          </button>
            <div className="dropdown">
            <div className="linking_dropdown"></div>
            <div className="dropdown_link"><span className="dd_link_icon"><FaStore/></span><span className="dd_link_name">E&nbsp;Commerce&nbsp;Web</span></div>
            <div className="dropdown_link"><span className="dd_link_icon"><FaPager /></span><span className="dd_link_name">Blog&nbsp;Web</span></div>
            <div className="dropdown_link"><span className="dd_link_icon"><FaRegIdCard/></span><span className="dd_link_name">Portfolio&nbsp;Web</span></div>
            <div className="dropdown_link"><span className="dd_link_icon"><ImEyeBlocked/></span><span className="dd_link_name">Membership&nbsp;Web</span></div>
            <div className="dropdown_link"><span className="dd_link_icon"><BsCalendar2EventFill/></span><span className="dd_link_name">Events&nbsp;Web</span></div>
            <div className="dropdown_link"><span className="dd_link_icon"><FaAward /></span><span className="dd_link_name">Fashion&nbsp;Web</span></div>
            <div className="dropdown_link"><span className="dd_link_name">More</span></div>
        </div>
        </div>
        <div
          className="nav_link_parent"
        >
          <button className="button nav_link">
            <a className="nav_link_a" href="#">
              Products
            </a>
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
        </div>
        <div
          className="nav_link_parent"
        >
          <button className="button nav_link">
            <a className="nav_link_a" href="#">
              Company
            </a>
            <span className="arrow">
              <IoIosArrowDown />
            </span>
          </button>
            <div className="dropdown">
            <div className="linking_dropdown"></div>
            <div className="dropdown_link"><span className="dd_link_icon"><FaInfo /></span><span className="dd_link_name">About</span></div>
            <div className="dropdown_link"><span className="dd_link_icon"><BsPersonArmsUp /></span><span className="dd_link_name">Careers</span></div>
            <div className="dropdown_link"><span className="dd_link_icon"><FaBlogger /></span><span className="dd_link_name">Blogs</span></div>
            <div className="dropdown_link"><span className="dd_link_icon"><FaNewspaper /></span><span className="dd_link_name">Newslatter</span></div>
        </div>
        </div>
        <div
          className="nav_link_parent"
        >
          <button className="button nav_link">
            <a className="nav_link_a" href="#">
              Contact
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
