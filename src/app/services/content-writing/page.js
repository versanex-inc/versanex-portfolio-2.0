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
          question: "What type of content writing services do you offer?",
          answer: "We offer a range of content writing services including blog posts, SEO content, website copy, social media content, product descriptions, and technical writing.",
        },
        {
          question: "How do you ensure quality in the content?",
          answer: "We have a dedicated team of professional writers and editors who ensure every piece of content is well-researched, engaging, and free from errors before delivery.",
        },
        {
          question: "Do you provide SEO-optimized content?",
          answer: "Yes, we specialize in creating SEO-friendly content that improves your search engine ranking while keeping the reader engaged and informed.",
        },
        {
          question: "Can you write for specific industries?",
          answer: "Absolutely! Our team of experienced writers has expertise in various industries such as tech, finance, healthcare, and lifestyle, ensuring content is relevant and impactful.",
        },
        {
          question: "What is the turnaround time for content writing projects?",
          answer: "The delivery time depends on the project scope. Short blog posts can be delivered within a few days, while larger projects like eBooks or full website content may take a couple of weeks.",
        },
        {
          question: "Do you offer revisions on the content?",
          answer: "Yes, we offer multiple revisions to ensure the content aligns with your vision and meets your expectations.",
        },
        {
          question: "How much do your content writing services cost?",
          answer: "Our pricing varies depending on the type of content and project size. We offer competitive rates and provide customized quotes based on your specific needs.",
        }
      ];

  return (
    <div className="services_service">
      <h1 className="heading container services_service_heading">Content Writing</h1>
      <div className="container services_media_wrapper">
        <Image
          className="services_service_image"
          src={"https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGVudCUyMHdyaXRpbmd8ZW58MHx8MHx8fDA%3D"}
          alt="Content Writing Service"
          width={1000}
          height={1000}
          quality={100}
        />
        <div className="services_media_text_boxex">
          <p className="service_headline">
            Enhance Your Brands Presence with Professional Content Writing Services.
          </p>
          <p className="service_subheadline">
            Captivate Your Audience with Engaging, SEO-Optimized Content Tailored to Your Brand.
          </p>
          <p className="service_overview">
            Our content writing services help you communicate effectively with your audience, driving engagement and conversion. From blogs to product descriptions, we create compelling content that aligns with your business goals and resonates with your target audience.
          </p>
        </div>
      </div>
      <div className="container service_detail">
        <h2>Types of Content We Offer</h2>
        <ul className="service_technologies">
          <li className="service_technology">
            <b>SEO Content Writing:</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
                Create optimized content that ranks high on search engines while engaging your audience.
              </li>
              <li className="service_technology_detail">
                Focus on keywords, readability, and structure to improve SEO performance.
              </li>
            </ul>
          </li>
          <li className="service_technology">
            <b>Website Copywriting:</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
                Write clear, compelling copy that captures your brand voice and converts visitors into customers.
              </li>
              <li className="service_technology_detail">
                Tailor content for different sections like homepage, about, services, and more.
              </li>
            </ul>
          </li>
          <li className="service_technology">
            <b>Technical Writing:</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
                Provide detailed, informative content for industries like tech, finance, and healthcare.
              </li>
              <li className="service_technology_detail">
                Ensure accuracy and clarity, simplifying complex information for easy understanding.
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="service_additional_features">Additional Features:</h2>
        <ul className="service_additional_features">
          <li className="service_additional_feature">
            <b>Content Strategy:</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
                Develop a long-term content plan aligned with your business goals.
              </li>
            </ul>
          </li>
          <li className="service_additional_feature">
            <b>Proofreading & Editing:</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
                Ensure your content is polished, error-free, and professional.
              </li>
            </ul>
          </li>
          <li className="service_additional_feature">
            <b>Social Media Content:</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
                Create engaging posts that reflect your brand and resonate with your followers.
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
