import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import './SideBar.css';
import '../../dashboard.css'
import { RiHome4Fill } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { FaBlogger } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdGeneratingTokens } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";

const SideBar = ({ isSidebarOpen }) => {
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const [isBlogsDropdownOpen, setIsBlogsDropdownOpen] = useState(false);

  const toggleProjectsDropdown = () => {
    setIsProjectDropdownOpen(!isProjectDropdownOpen);
  };
  const toggleBlogsDropdown = () => {
    setIsBlogsDropdownOpen(!isBlogsDropdownOpen);
  };
  return (
    <div className={`db_nav_links ${isSidebarOpen ? 'open' : 'closed'}`}>
      <Link href={'/dashboard'} className="db_nav_link db_nav_img">VersaNex</Link>
      <Link className="db_nav_link" href="/dashboard">
        <span className="db_nav_link_icon"><RiHome4Fill/></span>Dashboard
      </Link>
      <div className="db_nav_menus">
        <h4 className="db_nav_heading">Management</h4>
        <div className="db_nav_menu">
          <span className="db_nav_link db_nav_dd_link" onClick={toggleProjectsDropdown}>
            <Link href="/dashboard/projects"><span className="db_nav_link_icon"><GrProjects/></span>Projects</Link>
            <span className="db_nav_dd_open_close">
              {isProjectDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </span>
          </span>
          <div className={`db_nav_dropdown ${isProjectDropdownOpen ? 'open' : 'closed'}`}>
            <Link className="db_nav_link db_nav_ddd_link" href="/dashboard/projects/addProject">
            Add&nbsp;Project
            </Link>
            <Link className="db_nav_link db_nav_ddd_link" href="/dashboard/projects/activeProjects">
            Active&nbsp;Projects
            </Link>
          </div>
        </div>
        <div className="db_nav_menu">
          <span className="db_nav_link db_nav_dd_link" onClick={toggleBlogsDropdown}>
            <Link href="/dashboard/blogs"><span className="db_nav_link_icon"><FaBlogger/></span>Blogs</Link>
            <span className="db_nav_dd_open_close">
              {isBlogsDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </span>
          </span>
          <div className={`db_nav_dropdown ${isBlogsDropdownOpen ? 'open' : 'closed'}`}>
            <Link className="db_nav_link db_nav_ddd_link" href="/dashboard/blogs/addBlog">
            Add&nbsp;Blog
            </Link>
          </div>
        </div>
        <div className="db_nav_menu">
          <Link className="db_nav_link" href="/dashboard/contacts">
          <span className="db_nav_link_icon"><FaMessage/></span>Contacts
          </Link>
        </div>
        <div className="db_nav_menu">
          <Link className="db_nav_link" href="/dashboard/testimonials">
          <span className="db_nav_link_icon"><MdGeneratingTokens/></span>Testimonials
          </Link>
        </div>
        <div className="db_nav_menu">
          <Link className="db_nav_link" href="/dashboard/users">
          <span className="db_nav_link_icon"><FaUserShield/></span>Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
