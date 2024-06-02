import React from "react";
import "./About.css";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="container about">
      <div className="about_headings">
        <h1 className="heading about_heading">
          VERSANEX
          <div className="heading_underline h_underline_mtContainer about_heading_underline">
            <span className="heading_underline_dot"></span>
          </div>
        </h1>
        <h2 className="about_sub_heading">
          You partner for digital innovation.
        </h2>
      </div>
      <div className="about_content">
        <div className="about_paragraph">
          <p>
            Since then, it has evolved and established itself in being at the
            forefront in information and technology supporting competency in
            computing strategies and solutions for Private and Government
            Organizations. Understanding the importance of IT, VERSANEX has been
            involved in, perhaps, some of the most projects in the country.
            Globally, the Company has taken its place among the important market specialties of various countries, offering services and products to a continuously rising number of corporates. In addition to deployment, our current and potential services encompass operations, maintenance, support, and business outsourcing. As a team of talented and hardworking Technology Specialists, we have vast experience in implementing successful solutions using technologies such as Microsoft, Oracle, PHP, ASP, 3D, and MERN stack.
          </p>
          <button className="button button_small nav_link_about">
            <Link  href={"/about"}>
              Read&nbsp;more
            </Link>
          </button>
        </div>
        <div className="about_img">
          <Image
            src={"/imgs/about.png"}
            alt="about img"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
