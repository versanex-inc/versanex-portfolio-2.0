'use client'
import Services from '@/Components/Home/Services/Services'
import React, {useRef} from 'react'
import { FaPeopleRobbery } from "react-icons/fa6";
import { FaClipboardList,FaPencilAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdRocketLaunch } from "react-icons/md";
import { HiMiniChartBarSquare } from "react-icons/hi2";
import { MdFeedback } from "react-icons/md";
import { FaFileCircleCheck } from "react-icons/fa6";
import './ServiceSection.css'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Service_main = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (container) {
      const elements = container.querySelectorAll('.sm_animate');
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          {
            y: 60,
            opacity: 0,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              end: 'bottom 40%',
            },
          }
        );
      });
    }
  }, [containerRef]);

  return (
    <section className="service_main">
      <div className="container sm_headings" ref={containerRef}>
        <div className="sm_litte_quote sm_animate">
          <span className="sm_little_quote_animations">
            <span className="sm_little_quote_bar"></span>
          </span>
          <p className="sm_little_quote_para">Beyond Boundaries, Beyond Expectations:</p>
        </div>
        <h1 className="sm_service_main_heading sm_animate">Elevate Your Online Presence with Our Diverse Services</h1>
        <p className="sm_service_subheading sm_animate">Explore strategic digital solutions for a powerful and impactful brand representation tailored to you.</p>
      </div>
      <Services />
      <div className="container top_container sm_steps">
        <div className="sm_steps_heading">
          <h2 className="heading sm_steps_heading">Our step by step process</h2>
        </div>
        <div className="sub_container sm_steps_container">
            <div className="sm_step">
              <span className="sm_step_no">1</span>
              <span className="sm_step_icon"><FaPeopleRobbery/></span>
              <h3 className="sm_step_heading">Consultation</h3>
              <ul className="sm_step_describe">
                <li>&#x2022; Initial Assessment and Requirements Gathering</li>
                <li>&#x2022; Understand Client Needs</li>
              </ul>
            </div>
            <div className="sm_step">
              <span className="sm_step_no">2</span>
              <span className="sm_step_icon"><FaClipboardList/></span>
              <h3 className="sm_step_heading">Planning</h3>
              <ul className="sm_step_describe">
                <li>&#x2022; Strategy Development</li>
                <li>&#x2022; Roadmap and Timeline Creation</li>
              </ul>
            </div>
            <div className="sm_step">
              <span className="sm_step_no">3</span>
              <span className="sm_step_icon"><FaPencilAlt /></span>
              <h3 className="sm_step_heading">Design</h3>
              <ul className="sm_step_describe">
                <li>&#x2022; Conceptualization and Ideation</li>
                <li>&#x2022; Detailed Design and Prototyping</li>
              </ul>
            </div>
            <div className="sm_step">
              <span className="sm_step_no">4</span>
              <span className="sm_step_icon"><IoMdSettings /></span>
              <h3 className="sm_step_heading">Implementation</h3>
              <ul className="sm_step_describe">
                <li>&#x2022; Development and Execution</li>
                <li>&#x2022; Resource Allocation and Management</li>
              </ul>
            </div>
            <div className="sm_step">
              <span className="sm_step_no">5</span>
              <span className="sm_step_icon"><FaFileCircleCheck /></span>
              <h3 className="sm_step_heading">Testing</h3>
              <ul className="sm_step_describe">
                <li>&#x2022; Quality Assurance and Testing</li>
                <li>&#x2022; Performance Evaluation and Adjustments</li>
              </ul>
            </div>
            <div className="sm_step">
              <span className="sm_step_no">6</span>
              <span className="sm_step_icon"><MdRocketLaunch /></span>
              <h3 className="sm_step_heading">Launch</h3>
              <ul className="sm_step_describe">
                <li>&#x2022; Deployment and Rollout</li>
                <li>&#x2022; Training and Handover</li>
              </ul>
            </div>
            <div className="sm_step">
              <span className="sm_step_no">7</span>
              <span className="sm_step_icon"><HiMiniChartBarSquare /></span>
              <h3 className="sm_step_heading">Monitoring</h3>
              <ul className="sm_step_describe">
                <li>&#x2022; Ongoing Support and Maintenance</li>
                <li>&#x2022; Performance Monitoring and Reporting</li>
              </ul>
            </div>
            <div className="sm_step">
              <span className="sm_step_no">8</span>
              <span className="sm_step_icon"><MdFeedback /></span>
              <h3 className="sm_step_heading">Feedback</h3>
              <ul className="sm_step_describe">
                <li>&#x2022; Client Feedback Collection</li>
                <li>&#x2022; Continuous Improvement and Updates</li>
              </ul>
            </div>
        </div>
      </div>
      <div className="container top_container sm_take_step">
        <div className="sm_take_step_content">
        <p className="take_step_para">Explore Digital Excellence –<br/> Reach Out to VersaNex!</p>
        <div className="sm_take_step_btns">
          <button className='sm_step_btn'>Call&nbsp;Now</button>
          <button className='sm_step_btn'>Get&nbsp;a&nbsp;Quote</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service_main