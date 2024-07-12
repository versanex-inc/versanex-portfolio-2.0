import React from 'react'
import './personal.css'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";

const PersonalContact = () => {
  return (
    <div className="container top_container contact_personal">
    <h1 className="heading c_per_hading">Get in touch and let us know how we can help.</h1>
    <div className="container_top per_divs">
        <div className="button button_small pers_div">
            <span className="per_icon"><MdEmail/></span>
            <p className="per_heading_per">Email</p>
            <div className="pers_details_more">versanexinc.contact@gmail</div>
        </div>
        <div className="button button_small pers_div">
            <span className="per_icon"><FaLocationDot/></span>
            <p className="per_heading_per">Loaction</p>
            <div className="pers_details_more">GM Abad Fsd,Pakistan</div>
        </div>
        <div className="button button_small pers_div">
            <span className="per_icon"><BiSolidPhoneCall/></span>
            <p className="per_heading_per">Call Now</p>
            <div className="pers_details_more"><span>+92 3456696766</span><span>041 779799</span></div>
        </div>
    </div>
    </div>
  )
}

export default PersonalContact