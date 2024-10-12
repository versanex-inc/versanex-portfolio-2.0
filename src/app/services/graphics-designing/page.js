'use client'
import React, { useState } from "react";
import "../Service.css";
import Image from "next/image";
import Link from "next/link";
import Reviews from "@/Components/Home/Reviews/Reviews";
import Achievements from "@/Components/Home/Achievements/Achievements";
import Partnerships from "@/Components/Home/Partnerships/Partnerships";
import { FaPlus, FaMinus } from "react-icons/fa";
import Contact_Form from "@/Components/Contact_Form/Contact_Form";
const Service = () => {
    const [visibleAnswers, setVisibleAnswers] = useState({});

    const toggleAnswer = (index) => {
      setVisibleAnswers((prevVisibleAnswers) => ({
        ...prevVisibleAnswers,
        [index]: !prevVisibleAnswers[index],
      }));
    };
    const faqData = [
      {
          question: "What design software do you use?",
          answer: "We specialize in using industry-standard software such as Adobe Photoshop, Illustrator, and InDesign to create high-quality graphic designs tailored to your needs.",
      },
      {
          question: "How long does it take to complete a graphic design project?",
          answer: "The timeline for graphic design projects varies depending on the complexity and scope. Simple designs may take a few days, while more intricate projects could take several weeks. We provide a detailed timeline after understanding your requirements.",
      },
      {
          question: "How much does graphic design cost?",
          answer: "The cost of graphic design services depends on various factors, including the project's complexity, the type of designs needed, and the time required to complete them. We offer customized quotes based on your specific needs and budget.",
      },
      {
          question: "Do you offer custom graphic design services?",
          answer: "Yes, we provide custom graphic design services tailored to your unique requirements. Whether you need logos, banners, or marketing materials, we can deliver a solution that fits your vision.",
      },
      {
          question: "Will my designs be optimized for web and print?",
          answer: "Absolutely! We ensure that all designs are optimized for both digital and print media, maintaining visual quality and functionality across different platforms.",
      },
      {
          question: "Can you redesign my existing graphics?",
          answer: "Yes, we offer redesign services to refresh and enhance the look and feel of your existing graphics. We can update designs, improve usability, and implement new features.",
      },
      {
          question: "Will you provide revisions after the initial design?",
          answer: "Yes, we offer multiple revision rounds to ensure the final product meets your expectations. We value your feedback and work collaboratively to achieve the best results.",
      },
      {
          question: "How do you ensure the quality of your designs?",
          answer: "We follow a rigorous quality assurance process that includes design reviews and client feedback to ensure that all graphics are polished and meet professional standards.",
      },
      {
          question: "Can you create motion graphics or animations?",
          answer: "Yes, we specialize in creating custom motion graphics and animations to enhance your visual content and engage your audience more effectively.",
      },
      {
          question: "How do you handle project management and communication during the design process?",
          answer: "We use project management tools and maintain regular communication through email, calls, or video conferences to keep you updated on the design process and ensure transparency throughout the project.",
      },
      {
          question: "Do you provide branding solutions as part of your services?",
          answer: "Yes, we offer comprehensive branding solutions, including logo design, color palettes, and typography, to help you establish a consistent visual identity for your brand.",
      },
  ];
  
  return (
    <div className="services_service">
      <h1 className="heading container services_service_heading">Graphics Designing</h1>
      <div className="container services_media_wrapper">
      <Image
          className="services_service_image"
            src={
              "https://images.unsplash.com/photo-1526050071463-2c476b162a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyYXBoaWNzJTIwZGVzaWduaW5nfGVufDB8fDB8fHww"
            }
            alt="service"
            width={1000}
            height={1000}
            quality={100}
          />
        <div className="services_media_text_boxex">
        <p className="service_headline">
        Create Stunning Visuals with Our Graphic Design Services.
          </p>
          <p className="service_subheadline">
          Unlock Your Brand’s Potential with Custom Designs Tailored to Your Needs.
          </p>
          <p className="service_overview">
          Our graphic design service is designed for businesses and individuals looking to create impactful visuals that resonate with their audience. By specializing in logos, banners, social media graphics, and much more, we deliver creative solutions that elevate your brand identity and engage your customers. Our top priority is to help you stand out in a crowded market, ensuring your visuals are not only eye-catching but also aligned with your business goals. Trust us to bring your vision to life while you focus on what you do best.
          </p>
        </div>
      </div>
      <div className="container service_detail">
        <h2>Technologies we are using</h2>
        <ul className="service_technologies">
          <li className="service_technology">
            <b>Adobe Photoshop:</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
              Create stunning visuals and manipulate images with industry-leading editing tools.
              </li>
              <li className="service_technology_detail">
              Enhance photos, design graphics, and prepare artwork for various media formats.
              </li>
            </ul>
          </li>
          <li className="service_technology">
            <b>Adobe Illustrator:</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
              Design vector graphics for logos, illustrations, and print materials.
              </li>
              <li className="service_technology_detail">
              Utilize advanced drawing tools to create scalable graphics without losing quality.
              </li>
            </ul>
          </li>
          <li className="service_technology">
            <b>Adobe InDesign:</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
              Produce professional layouts for print and digital publications.
              </li>
              <li className="service_technology_detail">
              Combine text and images seamlessly to create visually appealing designs for brochures, magazines, and more.
              </li>
            </ul>
          </li>
          <li className="service_technology">
            <b>Adobe After Effects:</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
              Add motion graphics and visual effects to your projects.
              </li>
              <li className="service_technology_detail">
              Create dynamic animations that capture attention and enhance storytelling.
              </li>
            </ul>
          </li>
          <li className="service_technology">
            <b>Adobe XD:</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
              Design and prototype user-friendly interfaces for web and mobile applications.
              </li>
              <li className="service_technology_detail">
              Collaborate effectively with stakeholders and test designs before development.
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="service_additional_features">Additional Features:</h2>
        <ul className="service_additional_features">
          <li className="service_additional_feature">
            <b>Custom Branding Solutions:</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
              Develop comprehensive branding packages that include logos, color palettes, and typography.
              </li>
              <li className="additional_feature_detail">
              Ensure consistent visual identity across all marketing materials and platforms.
              </li>
            </ul>
          </li>
          <li className="service_additional_feature">
            <b>Print and Digital Media Design:</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
              Create eye-catching designs for both print (brochures, flyers, business cards) and digital media (social media graphics, website banners).
              </li>
              <li className="additional_feature_detail">
              Optimize designs for various formats and platforms to maximize impact.
              </li>
            </ul>
          </li>
          <li className="service_additional_feature">
            <b>Collaborative Design Process:</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
              Involve clients throughout the design process with regular updates and feedback sessions.
              </li>
              <li className="additional_feature_detail">
              Use project management tools to streamline communication and revisions for a smoother workflow.
              </li>
            </ul>
          </li>
          <li className="service_additional_feature">
            <b>Responsive Design:</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
              Ensure that all graphics and layouts are optimized for viewing across devices and screen sizes.
              </li>
              <li className="additional_feature_detail">
              Create flexible designs that maintain visual integrity and functionality, whether on desktop or mobile.
              </li>
            </ul>
          </li>
          <li className="service_additional_feature">
            <b>Fast Turnaround Times:</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
              Deliver high-quality designs within quick timelines without compromising on quality.
              </li>
              <li className="additional_feature_detail">
              Meet tight deadlines to help your business launch marketing campaigns and promotions effectively.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="container service_faqs">
        <h2>FAQ&apos;s</h2>
        <div className="faqs_container">
      {faqData.map((faq, index) => (
        <div className="service_faq" key={index}>
          <span className="service_q" onClick={() => toggleAnswer(index)}>
            <p className="service_question">{faq.question}</p>
            <span className="service_answer_show">
              {visibleAnswers[index] ? <FaMinus /> : <FaPlus />}
            </span>
          </span>
          <p className={`service_answer ${visibleAnswers[index] ? 'show' : ''}`}>
            {faq.answer}
          </p>
        </div>
      ))}
      </div>
    </div>
      <div className="service_testimonials">
        <Reviews />
      </div>
      <div className="service_achievements">
        <Achievements />
      </div>
      <div className="service_partners">
        <Partnerships />
      </div>
    </div>
  );
};

export default Service;
