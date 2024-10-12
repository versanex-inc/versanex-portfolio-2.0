"use client"
import React, { useState } from "react";
import "./teamsec.css";
import Link from "next/link";
import Image from "next/image";
import Joinus from "./joinus/joinus";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import Quotes from "./quotes/quotes";
import Upper_Details from "./upper_details/Upper_Details";
import { MdKeyboardArrowDown } from "react-icons/md";

const Page = () => {
  const [activeButton, setActiveButton] = useState('ALL');
  const [itemsToShow, setItemsToShow] = useState(3);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    setItemsToShow(3); // Reset items to show when filter changes
  };

  const showMoreItems = () => {
    setItemsToShow(itemsToShow + 3);
  };

  const imgs = [
    {
      img: '/imgs/btchi.png',
      name: 'Moaz Ahmed',
      position: 'Founder',
      role: 'WEB DEVELOPMENT',
      topPositioned: true,
    },
    {
      img: '/imgs/btchi.png',
      name: 'Hisham Hussain',
      position: 'Co Founder',
      role: 'GRAPHICS DESIGNING',
      topPositioned: true,
    },
    {
      img: '/imgs/btchi.png',
      name: 'Fahad Joyia',
      position: 'Co - Founder',
      role: 'WEB DEVELOPMENT',
      topPositioned: true,
    },
    {
      img: '/imgs/btchi.png',
      name: 'Ali Raza',
      position: 'Employee',
      role: 'SEO',
    },
    {
      img: '/imgs/btchi.png',
      name: 'Ahmad Raza',
      position: 'Employee',
      role: 'CONTENT WRITING',
    },
    {
      img: '/imgs/btchi.png',
      name: 'Hassan Ali',
      position: 'Employee',
      role: 'VIDEO EDITING',
    },
    {
      img: '/imgs/btchi.png',
      name: 'Hammad ALi',
      position: 'Employee',
      role: 'DIGITAL MARKETING',
    },
  ];

  const filteredImgs = imgs.filter(img => {
    if (activeButton === 'LEADERSHIP') return img.topPositioned;
    if (activeButton === 'ALL') return true;
    return img.role.toUpperCase().replace(/ /g, "_") === activeButton;
  });

  return (
    <div>
      <Upper_Details />
      <div className="container Card_sec">
        <div className="card_sec_con">
          <div className="button_sec">
            <button
              className={`btns button button_small ${activeButton === 'LEADERSHIP' ? 'clicked' : ''}`}
              onClick={() => handleClick('LEADERSHIP')}
            >
              <p>LEADERSHIP</p>
            </button>
            <button
              className={`btns button button_small button_none_n ${activeButton === 'GRAPHICS_DESIGNING' ? 'clicked' : ''}`}
              onClick={() => handleClick('GRAPHICS_DESIGNING')}
            >
              <p>GFX&nbsp;DESIGNING</p>
            </button>
            <button
              className={`btns button button_small button_none_n ${activeButton === 'WEB_DEVELOPMENT' ? 'clicked' : ''}`}
              onClick={() => handleClick('WEB_DEVELOPMENT')}
            >
              <p>WEB&nbsp;DEVELOPMENT</p>
            </button>
            <button
              className={`btns button button_small button_none ${activeButton === 'VIDEO_EDITING' ? 'clicked' : ''}`}
              onClick={() => handleClick('VIDEO_EDITING')}
            >
              <p>VIDEO&nbsp;EDITING</p>
            </button>
            <select
              className={`btns button button_small button_slection_ot ${activeButton === 'ALL' ? 'clicked' : ''}`}
              value={activeButton.replace(/_/g, " ")}
              onChange={(e) => handleClick(e.target.value.toUpperCase().replace(/ /g, "_"))}
            >
              <option value="ALL">ALL</option>
              <option value="GRAPHICS DESIGNING">GRAPHICS DESIGNING</option>
              <option value="WEB DEVELOPMENT">WEB DEVELOPMENT</option>
              <option value="VIDEO EDITING">VIDEO EDITING</option>
              <option value="CONTENT WRITING">CONTENT WRITING</option>
              <option value="DIGITAL MARKETING">DIGITAL MARKETING</option>
              <option value="SEO">SEO</option>
            </select>
          </div>
<div className="card_card_sm">
          <div className="card_ot_container">
            {filteredImgs.slice(0, itemsToShow).map((img, index) => (
              <div key={index} className="ot_card_data">
                <div className="ot_card_img">
                  <Image src={img.img} width={1000} height={1000} alt="user" />
                  <div className="ot_card_bg"></div>
                </div>
                <div className="ot_card_user_data">
                  <p className="ot_user_name">{img.name}</p>
                  <p className="ot_user_role">{img.position}</p>
                  <p className="ot_user_role_category">{img.role}</p>
                </div>
              </div>
            ))}
          </div>
          {itemsToShow < filteredImgs.length && (
            <button className="button button_small btn_show_card" onClick={showMoreItems}>
              <p>Show more</p>
            </button>
          )}
          </div>
        </div>
      </div>
      <div className="quotes">
        <Quotes />
      </div>
      <div className="joinus">
        <Joinus />
      </div>
    </div>
  );
};

export default Page;
