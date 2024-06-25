import React from 'react';
import './TopBar.css';
import { FaBars, FaTimes } from "react-icons/fa";
import Image from 'next/image';
import '../../dashboard.css'
import { FaBell } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { IoSearchSharp } from "react-icons/io5";

const TopBar = ({ toggleSidebar }) => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/adminLogin');
  };
  return (
    <div className='db_container db_topbar'>
      <div className="tb_side tb_left">
      <div className="db_nav_toggler">
        <span className="nav_open_cl" onClick={toggleSidebar}>
          <FaBars className="open-icon" />
          <FaTimes className="close-icon" />
        </span>
      </div>
      <div className="db_search_topbar">
        <input type="search" name="" id="" placeholder='Search Here'/>
        <span className="db_tb_search_icon_button"><IoSearchSharp /></span>
      </div>
      </div>
      <div className="tb_side tb_right">
      <div className="db_profile_noti">
        <span className="db_profile_noti_icon">
          <FaBell/>
        </span>
        <span className="db_profile_noti_hm">99+</span>
      </div>
      <div className="db_profile">
        <Image src={'/imgs/img2.png'} alt='admin' width={100} height={100} />
      </div>
      <button className="top_bar_logout" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default TopBar;
