"use client";
import React, { useState } from "react";
import "./reviews.css";
import { IoStarSharp } from "react-icons/io5";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import Image from "next/image";
import { FaLock } from "react-icons/fa";
import { MdPublic } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
const reviews = () => {
    const [dropdown, setdropdown] = useState(false)
    const toggledropdown = () =>{
        setdropdown(!dropdown)
    }

    const [selectedOption, setSelectedOption] = useState({
        text: 'Public',
    icon: <MdPublic />
    });
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (option, icon) => {
      setSelectedOption({ text: option, icon: icon });
      setIsOpen(false);
    };

  const reviews = [
    {
      id: 1,
      userimg: "/imgs/btchi.png",
      username: "Maaz Jutt",
      reviwcount: "5",
      reviewcontent:
        "                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facere perspiciatis earum voluptate temporibus, dolorem accusamus magni culpa. Provident neque praesentium in excepturi, ducimus quasi non ratione debitis doloremque a animi accusantium est autem qui? Consequuntur, voluptatum. Architecto, alias velit ad quos eos nihil vitae optio at unde, eum dolorem.",
    },
    {
      id: 2,
      userimg: "/imgs/im2.png",
      username: "Hisham Hussain",
      reviwcount: "2",
      reviewcontent:
        "                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facere perspiciatis earum voluptate temporibus, dolorem accusamus magni culpa. Provident neque praesentium in excepturi, ducimus quasi non ratione debitis doloremque a animi accusantium est autem qui? Consequuntur, voluptatum. Architecto, alias velit ad quos eos nihil vitae optio at unde, eum dolorem.",
    },
    {
      id: 3,
      userimg: "/imgs/img3.png",
      username: "Ahmad Jutt",
      reviwcount: "8",
      reviewcontent:
        "                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facere perspiciatis earum voluptate temporibus, dolorem accusamus magni culpa. Provident neque praesentium in excepturi, ducimus quasi non ratione debitis doloremque a animi accusantium est autem qui? Consequuntur, voluptatum. Architecto, alias velit ad quos eos nihil vitae optio at unde, eum dolorem.",
    },
    {
      id: 4,
      userimg: "/imgs/flash.webp",
      username: "Jami",
      reviwcount: "3",
      reviewcontent:
        "                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facere perspiciatis earum voluptate temporibus, dolorem accusamus magni culpa. Provident neque praesentium in excepturi, ducimus quasi non ratione debitis doloremque a animi accusantium est autem qui? Consequuntur, voluptatum. Architecto, alias velit ad quos eos nihil vitae optio at unde, eum dolorem.",
    },
    {
      id: 5,
      userimg: "/imgs/H_resolution.jpg",
      username: "Ali Ahmad",
      reviwcount: "15",
      reviewcontent:
        "                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facere perspiciatis earum voluptate temporibus, dolorem accusamus magni culpa. Provident neque praesentium in excepturi, ducimus quasi non ratione debitis doloremque a animi accusantium est autem qui? Consequuntur, voluptatum. Architecto, alias velit ad quos eos nihil vitae optio at unde, eum dolorem.",
    },
  ];
  return (
    <div className="container">
      <div className="reviews_top_header">
        <div className="reviews_header_content">
          <div className="reviews_heading_personinfo">
            <h1>Jon Doe</h1>
            <span>1294 Civil Rd, Pakistan</span>
          </div>

          <div className="reviews_heading_writereview">
            
            <button className="writereview_btn" onClick={toggledropdown}>
              <PiPencilSimpleLineFill />
              <span>Write a review</span>
            </button>
            {/* {isopen && ( */}
            {dropdown && (
            <div className="reviews_heading_writereview_content">
              <div className="writereview_content_brandname">VersaNex</div>
              <div className="writereview_content_user">
                <div className="reviewed_user">
                  <div className="reviewed_user_image">
                    <Image
                      src={"/imgs/flash.webp"}
                      height={50}
                      width={50}
                      alt="user image"
                    ></Image>
                  </div>
                  <div className="reviewed_user_name">
                    <h5>Fahad Joyia</h5>
                    <div className="visibility_dropdown">
                      <label htmlFor="visibility">Visibility: </label>
                      <span onClick={toggleDropdown}> {selectedOption.text} {selectedOption.icon}</span>
                      {isOpen && (
                        <ul className="visibility_dropdown_options">
                        <li onClick={() => handleOptionClick('Public',  <MdPublic/>)}> Public   <MdPublic/></li>
                        <li  onClick={() => handleOptionClick('Private', <FaLock/>)}>Private  <FaLock/> </li>
                        <li  onClick={() => handleOptionClick('Friends', <FaUserFriends/>)}>Friends <FaUserFriends/></li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                <div className="reviewed_user_stars">
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  </div>
                  <div className="reviewed_user_content_box">
                    <textarea name="" id="" rows={5} placeholder="Share details of your own experience at this place"></textarea>
                  </div>
                  <div className="reviewed_user_close">
                    <button>Cancel</button>
                    <button>Post</button>
                    </div>
              </div>
            </div>
            // {/* )} */}
        )}
          </div>
        </div>

        <div className="reviews_rating_filter">
          <div className="reviews_rating">
            <div className="reviews_rating_number">5.0</div>
            <div className="reviews_rating_stars">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
            <div className="reviews_count">
              16 <span>reviews</span>
            </div>
          </div>
          <div className="reviews_filter">
            <div className="reviews_filter_box">
              <span>Sort by:</span>
              <select name="" id="">
                <option value="all-reviews">All reviews</option>
                <option value="last-week">Last week</option>
                <option value="last-month">Last month</option>
                <option value="last-month">Last year</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="main-reviews">
        {reviews.map((val) => (
          <div className="review_one" key={val.id}>
            <div className="reviewed_user">
              <div className="reviewed_user_image">
                <Image
                  src={val.userimg}
                  height={50}
                  width={50}
                  alt="user image"
                ></Image>
              </div>
              <div className="reviewed_user_name">
                <h5>{val.username}</h5>
                <p>
                  {val.reviwcount} <span>review</span>
                </p>
              </div>
            </div>
            <div className="review_user_main_review_content">
              <div className="review_user_rating">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <span>1 day ago</span>
              </div>
              <div className="review_user_content">{val.reviewcontent}</div>
              <div className="like_review_reply">
                <div className="like_review">
                  <FaThumbsUp /> <p>Like</p>
                </div>
                <div className="review_reply">Reply</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default reviews;
