'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./joinus.css";

const Joinus = () => {
  const textRefs = useRef([]);

  useEffect(() => {
    // Add each p element to the textRefs array
    const textElements = document.querySelectorAll(".anim-text");
    textRefs.current = textElements;

    // Create the GSAP timeline
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Loop through each text element and add it to the timeline
    textRefs.current.forEach((el, index) => {
      tl.to(el, { color: "#efeae3", duration: 0.5 }, index * 0.5);
    });

  }, []);

  return (
    <div className="container joinus_main">
      <div className="joincontent">
      <div className="joinus_lft">
  <div className="main_heading">
    <p>What Happens Next</p>
  </div>
  <div className="content_sbsq">
    <li>
      <p>
        After submitting the form, our team will review your project details and assess your specific needs.
      </p>
    </li>
    <li>
      <p>
        We’ll get in touch with you within 24-48 hours to discuss your project goals and gather more information.
      </p>
    </li>
    <li>
      <p>
        A tailored proposal will be created to outline our strategy, services, and timeline for your project.
      </p>
    </li>
    <li>
      <p>
        Upon approval, we’ll begin the development or implementation process, keeping you informed at every stage.
      </p>
    </li>
    <li>
      <p>
        Continuous support will be provided throughout the project to ensure the best outcomes and meet your expectations.
      </p>
    </li>
  </div>
</div>

        <div className="joinus_right">
          <div className="joinus_lft_con">
            <p className="anim-text">TOGETHER</p>
            <p className="anim-text">EVERYONE</p>
            <p className="anim-text">ACHIEVES</p>
            <p className="anim-text">MORE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
