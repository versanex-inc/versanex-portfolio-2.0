import React from 'react'
import './Footer.css'
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='container footer'>
        <div className="footer_content">
            <div className="footer_container footer_container_one">
                <img src="/imgs/logo.png" alt="footer logo" className="footer_logo" />
                <p className="footer_about">At VersaNex Technologies we are served with all IT services, you may call it one-stop solution.</p>
                <button className="footer_quote">Get&nbsp;A&nbsp;Quote</button>
            </div>
            <div className="footer_container footer_container_two">
                <h4 className="footer_container_heading">Company</h4>
                <ul className="footer_list list_company_footer">
                    <li className="footer_list_item item_company_footer"><a href="">About</a></li>
                    <li className="footer_list_item item_company_footer"><a href="">Work</a></li>
                    <li className="footer_list_item item_company_footer"><a href="">Services</a></li>
                    <li className="footer_list_item item_company_footer"><a href="">Blog</a></li>
                    <li className="footer_list_item item_company_footer"><a href="">Contact</a></li>
                </ul>
            </div>
            <div className="footer_container footer_container_three">
            <h4 className="footer_container_heading">Services</h4>
                <ul className="footer_list list_services_footer">
                    <li className="footer_list_item item_services_footer"><a href="">Web Development</a></li>
                    <li className="footer_list_item item_services_footer"><a href="">SEO</a></li>
                    <li className="footer_list_item item_services_footer"><a href="">Video Editing</a></li>
                    <li className="footer_list_item item_services_footer"><a href="">Logo making</a></li>
                    <li className="footer_list_item item_services_footer"><a href="">Digital Marketing</a></li>
                </ul>
            </div>
            <div className="footer_container footer_container_four">
            <h4 className="footer_container_heading">Contact</h4>
                {/* <ul className="footer_list list_contact_footer">
                    <li className="footer_list_item item_contact_footer"><a href=""><b className='footer_contact_icon'><FaPhone/></b>+92 3450000000</a></li>
                    <li className="footer_list_item item_contact_footer"><a href=""><b className='footer_contact_icon'><IoLogoWhatsapp/></b>+92 3470000000</a></li>
                    <li className="footer_list_item item_contact_footer"><a href=""><b className='footer_contact_icon'><IoMdMail/></b>versanexinc@gmail.com</a></li>
                    <li className="footer_list_item item_contact_footer"><a href=""><b className='footer_contact_icon'><FaLocationDot/></b>GM-Abad,Faisalabd,Pakistan</a></li>
                </ul> */}
                <ul className="footer_list list_services_footer">
                    <li className="footer_list_item item_services_footer"><a href=""><FaPhone/>&nbsp;&nbsp;+92 3450000000</a></li>
                    <li className="footer_list_item item_services_footer"><a href=""><IoLogoWhatsapp/>&nbsp;&nbsp;+92 3470000000</a></li>
                    <li className="footer_list_item item_services_footer"><a href=""><IoMdMail/>&nbsp;&nbsp;versanexinc@gmail.com</a></li>
                    <li className="footer_list_item item_services_footer"><a href=""><FaLocationDot/>&nbsp;GM-Abad,Faisalabd,Pakistan</a></li>
                </ul>
            </div>
            <div className="footer_container footer_container_five">
                <p className="footer_copyright">&#169;2024 VersnEX Technologies. All Rights Reserved.</p>
                <div className="footer_scials">
                    <span className="footer_social_icon"><FaInstagramSquare/></span>
                    <span className="footer_social_icon"><FaFacebook/></span>
                    <span className="footer_social_icon"><FaLinkedin/></span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer