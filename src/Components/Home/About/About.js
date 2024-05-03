import React from "react";
import "./About.css";
import Image from "next/image";

const About = () => {
  return (
    <section className="about">
      <div className="about_one">
        <h1 className="about_heading">About us</h1>
        <h2 className="about_sub_heading">
          Your partner for digital innovation
        </h2>
        <div className="about_paras">
        <p className="about_para about_para_one">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, delectus earum. Minima praesentium eligendi dignissimos inventore atque exercitationem iusto magnam iure in! Quaerat possimus id eius sed vel facilis rerum hic eaque dolore animi ipsa voluptates dolor voluptatibus aut quis est laboriosam, eveniet distinctio nobis odit exercitationem debitis. Id alias laudantium, possimus a doloribus nesciunt ipsum est similique nemo voluptates.
        </p>
        <p className="about_para about_para_two">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          repellendus explicabo blanditiis eos, asperiores ducimus itaque sed,
          laudantium ab cupiditate nihil veniam! Consectetur adipisci pariatur
          quo ipsum soluta non aliquid accusamus sapiente vitae similique
          ullam quam obcaecati eos, unde deleniti. Dolore
          eius voluptatem, consectetur quia a veritatis!
        </p>
        </div>
      </div>
      <div className="about_two">
        <div className="about_img">
          <Image src={'/imgs/logo.png'} alt={"logo"} width={1000} height={1000}/>
        </div>
        <div className="about_img_shadow"></div>
        {/* <Image src={'/imgs/fwidth.png'} alt={"logo"} width={1000} height={1000}/> */}
      </div>
    </section>
  );
};

export default About;
