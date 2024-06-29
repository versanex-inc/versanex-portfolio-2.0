'use client'
import Services from '@/Components/Home/Services/Services'
import React, {useRef, useState, useEffect} from 'react'
import { FaPeopleRobbery } from "react-icons/fa6";
import { FaClipboardList, FaPencilAlt } from "react-icons/fa";
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 500);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 500);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const steps = [
    {
      no: 1,
      icon: <FaPeopleRobbery />,
      heading: 'Consultation',
      description: [
        'Initial Assessment and Requirements Gathering',
        'Understand Client Needs',
      ],
    },
    {
      no: 2,
      icon: <FaClipboardList />,
      heading: 'Planning',
      description: [
        'Strategy Development',
        'Roadmap and Timeline Creation',
      ],
    },
    {
      no: 3,
      icon: <FaPencilAlt />,
      heading: 'Design',
      description: [
        'Conceptualization and Ideation',
        'Detailed Design and Prototyping',
      ],
    },
    {
      no: 4,
      icon: <IoMdSettings />,
      heading: 'Implementation',
      description: [
        'Development and Execution',
        'Resource Allocation and Management',
      ],
    },
    {
      no: 5,
      icon: <FaFileCircleCheck />,
      heading: 'Testing',
      description: [
        'Quality Assurance and Testing',
        'Performance Evaluation and Adjustments',
      ],
    },
    {
      no: 6,
      icon: <MdRocketLaunch />,
      heading: 'Launch',
      description: [
        'Deployment and Rollout',
        'Training and Handover',
      ],
    },
    {
      no: 7,
      icon: <HiMiniChartBarSquare />,
      heading: 'Monitoring',
      description: [
        'Ongoing Support and Maintenance',
        'Performance Monitoring and Reporting',
      ],
    },
    {
      no: 8,
      icon: <MdFeedback />,
      heading: 'Feedback',
      description: [
        'Client Feedback Collection',
        'Continuous Improvement and Updates',
      ],
    },
  ];

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
      {steps.slice(0, isMobileView && !isExpanded ? 3 : steps.length).map((step, index) => (
        <div key={index} className="sm_step">
          <span className="sm_step_no">{step.no}</span>
          <span className="sm_step_icon">{step.icon}</span>
          <h3 className="sm_step_heading">{step.heading}</h3>
          <ul className="sm_step_describe">
            {step.description.map((desc, idx) => (
              <li key={idx}>&#x2022; {desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    {isMobileView && (
        <button onClick={() => setIsExpanded(!isExpanded)} className="button read_more_btn_services_main">
          <p>{isExpanded ? 'Show Less' : 'Read More'}</p>
        </button>
      )}
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
