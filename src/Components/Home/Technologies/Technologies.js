import React from 'react'
import './Technologies.css'
import { FaReact, FaNodeJs , FaHtml5, FaCss3Alt , FaBootstrap, FaGithub    } from "react-icons/fa";
import { SiExpress, SiMongodb  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill  } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { SiNpm } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { SiAdobephotoshop, SiVite ,SiTypescript ,SiAdobeillustrator ,SiAdobeaftereffects ,SiAdobeindesign , SiAdobepremierepro,SiBlender ,SiCanva   } from "react-icons/si";
import { CgFigma } from "react-icons/cg";

const Technologies = () => {
  return (
    <section className='container top_container technologies'>
        <h1 className="heading technologies_heading">Technologies<div className="heading_underline h_underline_mtContainer">
          <span className="heading_underline_dot"></span>
        </div></h1>
      <h2 className="sub_heading technologies_subheading">
       Using latest and advanced technologies to make your appearance strong
      </h2>
      <div className="technolgies_container sub_container">
        <div className="technology technology_react">
            <FaReact/>
        </div>
        <div className="technology technology_next">
            <RiNextjsFill/>
        </div>
        <div className="technology technology_express">
            <SiExpress/>
        </div>
        <div className="technology technology_mongodb">
            <SiMongodb />
        </div>
        <div className="technology technology_nodejs">
            <FaNodeJs />
        </div>
        <div className="technology technology_html">
            <FaHtml5 />
        </div>
        <div className="technology technology_typescript">
            <SiTypescript  />
        </div>
        <div className="technology technology_vite">
            <SiVite  />
        </div>
        <div className="technology technology_github">
            <FaGithub  />
        </div>
        <div className="technology technology_css">
            <FaCss3Alt />
        </div>
        <div className="technology technology_figma">
            <CgFigma />
        </div>
        <div className="technology technology_js">
            <IoLogoJavascript/>
        </div>
        <div className="technology technology_bootstrap">
            <FaBootstrap />
        </div>
        <div className="technology technology_tailwind">
            <RiTailwindCssFill />
        </div>
        <div className="technology technology_mysql">
            <DiMysql/>
        </div>
        <div className="technology technology_npm">
            <SiNpm/>
        </div>
        <div className="technology technology_threejs">
            <TbBrandThreejs/>
        </div>
        <div className="technology technology_photoshop">
            <SiAdobephotoshop/>
        </div>
        <div className="technology technology_illustrator">
            <SiAdobeillustrator />
        </div>
        <div className="technology technology_aftereffect">
            <SiAdobeaftereffects />
        </div>
        <div className="technology technology_indesign">
            <SiAdobeindesign  />
        </div>
        <div className="technology technology_premierpro">
            <SiAdobepremierepro />
        </div>
        <div className="technology technology_blender">
            <SiBlender />
        </div>
        <div className="technology technology_canva">
            <SiCanva />
        </div>
      </div>
    </section>
  )
}

export default Technologies