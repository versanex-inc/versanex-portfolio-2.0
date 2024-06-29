'use client'
import React, { useState, useEffect } from 'react';
import './Technologies.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiVite, SiTypescript, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiAdobeindesign, SiAdobepremierepro, SiBlender, SiCanva } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri';
import { DiMysql } from 'react-icons/di';
import { SiNpm } from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';
import { CgFigma } from 'react-icons/cg';

const Technologies = () => {
  const [showMore, setShowMore] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 500);
    };

    // Set initial screen size
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const displayedTechnologies = [
    <div key="react" className="technology technology_react"><FaReact /></div>,
    <div key="nextjs" className="technology technology_next"><RiNextjsFill /></div>,
    <div key="express" className="technology technology_express"><SiExpress /></div>,
    <div key="mongodb" className="technology technology_mongodb"><SiMongodb /></div>,
    <div key="nodejs" className="technology technology_nodejs"><FaNodeJs /></div>,
    <div key="html5" className="technology technology_html"><FaHtml5 /></div>
  ];

  const additionalTechnologies = [
    <div key="typescript" className="technology technology_typescript"><SiTypescript /></div>,
    <div key="vite" className="technology technology_vite"><SiVite /></div>,
    <div key="github" className="technology technology_github"><FaGithub /></div>,
    <div key="css3" className="technology technology_css"><FaCss3Alt /></div>,
    <div key="figma" className="technology technology_figma"><CgFigma /></div>,
    <div key="javascript" className="technology technology_js"><IoLogoJavascript /></div>,
    <div key="bootstrap" className="technology technology_bootstrap"><FaBootstrap /></div>,
    <div key="tailwind" className="technology technology_tailwind"><RiTailwindCssFill /></div>,
    <div key="mysql" className="technology technology_mysql"><DiMysql /></div>,
    <div key="npm" className="technology technology_npm"><SiNpm /></div>,
    <div key="threejs" className="technology technology_threejs"><TbBrandThreejs /></div>,
    <div key="photoshop" className="technology technology_photoshop"><SiAdobephotoshop /></div>,
    <div key="illustrator" className="technology technology_illustrator"><SiAdobeillustrator /></div>,
    <div key="aftereffects" className="technology technology_aftereffect"><SiAdobeaftereffects /></div>,
    <div key="indesign" className="technology technology_indesign"><SiAdobeindesign /></div>,
    <div key="premierepro" className="technology technology_premierpro"><SiAdobepremierepro /></div>,
    <div key="blender" className="technology technology_blender"><SiBlender /></div>,
    <div key="canva" className="technology technology_canva"><SiCanva /></div>
  ];

  return (
    <section className='container top_container technologies'>
      <h1 className="heading technologies_heading">Technologies
        <div className="heading_underline h_underline_mtContainer">
          <span className="heading_underline_dot"></span>
        </div>
      </h1>
      <h2 className="sub_heading technologies_subheading">
        Using latest and advanced technologies to make your appearance strong
      </h2>
      <div className="technolgies_container sub_container">
        {displayedTechnologies}
        {isSmallScreen && showMore && additionalTechnologies}
        {!isSmallScreen && additionalTechnologies}
      </div>
      {isSmallScreen && (
        <button className='button button_small show_all_technologies' onClick={() => setShowMore(!showMore)}>
          <b>{showMore ? 'Show Less' : 'Show More'}</b>
        </button>
      )}
    </section>
  );
};

export default Technologies;
