"use client";
import React, { useRef, useEffect } from "react";
import "./Portfolio_Header.css";
import gsap from "gsap";
import Link from "next/link";

const Portfolio_Header = () => {
  const topAnimationRef = useRef(null);

  useEffect(() => {
    const topAnimationElement = topAnimationRef.current;

    const animateTop = () => {
      setTimeout(() => {
        gsap.to(topAnimationElement, {
          y: "-16.66%",
          duration: 1,
          ease: "power3.out",
        });
      }, 0);

      setTimeout(() => {
        gsap.to(topAnimationElement, {
          y: "-33.32%",
          duration: 1,
          ease: "power3.out",
        });
      }, 3000);

      setTimeout(() => {
        gsap.to(topAnimationElement, {
          y: "-49.98%",
          duration: 1,
          ease: "power3.out",
        });
      }, 6000);
      setTimeout(() => {
        gsap.to(topAnimationElement, {
          y: "-66.64%",
          duration: 1,
          ease: "power3.out",
        });
      }, 9000);
      setTimeout(() => {
        gsap.to(topAnimationElement, {
          y: "-83.3%",
          duration: 1,
          ease: "power3.out",
        });
      }, 12000);
      setTimeout(() => {
        gsap.to(topAnimationElement, {
          y: "-99.96%",
          duration: 1,
          ease: "power3.out",
        });
        animateTop();
      }, 15000);
    };

    animateTop();

  }, []);

  return (
    <div className="portfolio_header">
      <div className="p_header_info">
        <h1 className="p_h_heading">Portfolio</h1>
        <div className="portfolio_nav">
          <Link href={"/"}>All</Link>
          <Link href={"/"}>Websites</Link>
          <Link href={"/"}>Gfsx&nbsp;Design</Link>
        </div>
      </div>
      <div className="p_header_animation">
        <div
          className="p_header_animation_content p_header_animation_content_top"
          ref={topAnimationRef}
        >
          <div className="p_h_animation_box p_h_animation_one">Web Developing</div>
          <div className="p_h_animation_box p_h_animation_two">GFX Design</div>
          <div className="p_h_animation_box p_h_animation_three">Logo Design</div>
          <div className="p_h_animation_box p_h_animation_one">Web Developing</div>
          <div className="p_h_animation_box p_h_animation_two">GFX Design</div>
          <div className="p_h_animation_box p_h_animation_three">Logo Design</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio_Header;
