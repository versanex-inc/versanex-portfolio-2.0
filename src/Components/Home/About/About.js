import React from "react";
import "./About.css";
import Image from "next/image";

const About = () => {
  return (
    <section className="about">
      <div className="about_headings">
        <h1 className="heading about_heading">
          VERSANEX
          <div className="heading_underline h_underline_mtContainer">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            sequi omnis accusamus deserunt dolores, enim iste veniam praesentium
            consequatur deleniti tenetur a quidem esse voluptatum earum cumque
            atque eligendi ipsam hic? Rem obcaecati expedita totam quaerat quasi
            laudantium praesentium iusto beatae maxime facere, eos officia
            harum, sunt delectus aspernatur ipsa cumque dolorum cupiditate
            repellat ipsum commodi. Voluptates tempore optio aliquid
            reprehenderit incidunt ipsum porro mollitia quo laboriosam
            explicabo, aperiam provident nemo quidem dolore ea. Pariatur
            corporis porro explicabo, velit harum iure voluptatem non distinctio
            consequatur! Laudantium pariatur dolor omnis enim fugit ut! Quam
            illum voluptas in voluptatum reprehenderit aperiam autem.
          </p>
          <button className="about_button">Read More</button>
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
