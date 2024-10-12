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
          question: "What software do you use for video editing?",
          answer: "We specialize in using industry-leading software such as Adobe Premiere Pro, DaVinci Resolve, and Blender for comprehensive video editing services. Each tool allows us to create high-quality, engaging content tailored to your needs.",
      },
      {
          question: "How long does it take to edit a video?",
          answer: "The timeline for video editing varies depending on the length and complexity of the project. A short promotional video may take a few days, while a longer or more complex project could take several weeks. We provide a detailed timeline after understanding your requirements.",
      },
      {
          question: "How much does video editing cost?",
          answer: "The cost of video editing depends on various factors, including the project's length, complexity, and required services (like motion graphics or special effects). We offer customized quotes based on your specific needs and budget.",
      },
      {
          question: "Do you offer custom video editing services?",
          answer: "Yes, we provide custom video editing services tailored to your unique requirements. Whether you need a simple edit or a complex production with animations and effects, we can deliver a solution that fits your needs.",
      },
      {
          question: "Will my video be optimized for social media?",
          answer: "Absolutely! We prioritize creating videos that are optimized for various platforms, ensuring that your content looks great on social media channels, websites, and presentations.",
      },
      {
          question: "Can you enhance the audio in my video?",
          answer: "Yes, we offer professional audio enhancement services, including noise reduction, mixing, and mastering, to ensure that your audio quality matches the visual elements perfectly.",
      },
      {
          question: "Will you provide revisions after the initial edit?",
          answer: "Yes, we offer multiple revision rounds to ensure the final product meets your expectations. We value your feedback and work collaboratively to achieve the best results.",
      },
      {
          question: "How do you ensure the quality of the video editing?",
          answer: "We follow a rigorous quality assurance process that includes reviewing each edit for visual and audio quality. Our team uses professional standards and best practices to ensure your video is polished and engaging.",
      },
      {
          question: "Can you create motion graphics for my video?",
          answer: "Yes, we specialize in creating custom motion graphics that enhance your video content. Whether you need animated logos, text animations, or special effects, we can add them seamlessly to your project.",
      },
      {
          question: "Do you offer color grading services?",
          answer: "Absolutely! We provide professional color grading to enhance the mood and aesthetics of your video, ensuring that the visuals are striking and cohesive.",
      },
      {
          question: "How do you handle project management and communication during editing?",
          answer: "We use project management tools and maintain regular communication through email, calls, or video conferences to keep you updated on the editing process and ensure transparency throughout the project.",
      },
  ];
  
  return (
    <div className="services_service">
      <h1 className="heading container services_service_heading">Video Editing</h1>
      <div className="container services_media_wrapper">
      <Image
          className="services_service_image"
            src={
              "https://images.unsplash.com/photo-1614963326505-843868e1d83a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fHww"
            }
            alt="service"
            width={1000}
            height={1000}
            quality={100}
          />
        <div className="services_media_text_boxex">
        <p className="service_headline">
        Transform Your Brand with Our Professional Video Editing Services.
          </p>
          <p className="service_subheadline">
          Unlock the Power of Engaging Content with Custom Video Solutions Tailored to Your Needs.
          </p>
          <p className="service_overview">
          Our video editing service is designed for businesses and creators looking to produce stunning, high-quality videos. By utilizing the latest editing software and techniques, we deliver captivating visual content that aligns with your brand’s vision and engages your audience. Our top priority is to enhance your message and ensure your videos stand out in today’s competitive landscape. Trust us to handle the editing process while you focus on growing your business.
          </p>
        </div>
      </div>
      <div className="container service_detail">
        <h2>Technologies we are using</h2>
        <ul className="service_technologies">
          <li className="service_technology">
            <b>Blender:</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
              Create stunning 3D animations and visual effects tailored to your project’s needs.
              </li>
              <li className="service_technology_detail">
              Leverage powerful rendering capabilities for high-quality graphics and immersive experiences.
              </li>
            </ul>
          </li>
          <li className="service_technology">
            <b>Premiere Pro:</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
              Edit videos with precision and flexibility using industry-leading tools in Premiere Pro.
              </li>
              <li className="service_technology_detail">
              Craft seamless transitions and effects to enhance storytelling and visual appeal.
              </li>
            </ul>
          </li>
          <li className="service_technology">
            <b>DaVinci Resolve:</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
              Achieve professional color grading and correction for vibrant, cinematic visuals.
              </li>
              <li className="service_technology_detail">
              Utilize advanced audio post-production tools to ensure crystal-clear sound quality.
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="service_additional_features">Additional Features:</h2>
        <ul className="service_additional_features">
          <li className="service_additional_feature">
            <b>High-Quality Rendering:</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
              Deliver videos in multiple resolutions, including 4K, for stunning visual quality.
              </li>
              <li className="additional_feature_detail">
              Utilize advanced compression techniques to ensure optimal playback across devices.
              </li>
            </ul>
          </li>
          <li className="service_additional_feature">
            <b>Custom Motion Graphics:</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
              Create engaging animations and graphics that enhance your videos’ storytelling.
              </li>
              <li className="additional_feature_detail">
              Incorporate brand elements and visual effects for a cohesive look and feel.
              </li>
            </ul>
          </li>
          <li className="service_additional_feature">
            <b>Audio Enhancement:</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
              Improve sound quality with professional audio editing, mixing, and mastering.
              </li>
              <li className="additional_feature_detail">
              Add voiceovers, background music, and sound effects to elevate the viewers experience.
              </li>
            </ul>
          </li>
          <li className="service_additional_feature">
            <b>Flexible Delivery Formats:</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
              Provide videos in various formats, including MP4, MOV, and AVI, for versatile usage.
              </li>
              <li className="additional_feature_detail">
              Ensure compatibility for social media platforms, websites, and broadcasting.
              </li>
            </ul>
          </li>
          <li className="service_additional_feature">
            <b>FFeedback and Revisions:</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
              Implement a collaborative review process to gather client feedback on drafts.
              </li>
              <li className="additional_feature_detail">
              Offer multiple revision rounds to ensure the final product meets your expectations.
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
