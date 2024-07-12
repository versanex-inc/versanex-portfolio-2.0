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
              <p>What Occurs subsequently</p>
            </div>
            <div className="content_sbsq">
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
