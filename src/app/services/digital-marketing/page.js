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
          question: "What digital marketing services do you offer?",
          answer: "We offer a full range of digital marketing services, including SEO, PPC (Pay-Per-Click), social media marketing, content marketing, email marketing, and online reputation management. Our strategies are customized to meet the specific needs of your business.",
        },
        {
          question: "How do you ensure the success of your digital marketing strategies?",
          answer: "We base our strategies on data and performance analytics. By using industry-leading tools and regularly monitoring key performance indicators (KPIs), we ensure our campaigns are optimized for the best results. Additionally, we continuously test and adjust strategies to meet your business goals.",
        },
        {
          question: "How long does it take to see results from digital marketing?",
          answer: "The timeline for seeing results can vary based on the type of service. For SEO, it may take 3 to 6 months to see significant improvements, whereas PPC and social media campaigns can deliver quicker results, often within a few weeks. We aim to provide a balance of short-term gains and long-term success.",
        },
        {
          question: "Do you offer social media management as part of your services?",
          answer: "Yes, we offer comprehensive social media management services, including content creation, audience engagement, and paid advertising on platforms such as Facebook, Instagram, LinkedIn, and Twitter. We work to ensure your brand message reaches your target audience effectively.",
        },
        {
          question: "How do you measure the ROI of digital marketing campaigns?",
          answer: "We measure ROI by tracking metrics like website traffic, conversion rates, lead generation, and sales. Detailed analytics reports are provided, showing the performance of each campaign, the return on your investment, and areas for improvement.",
        },
        {
          question: "Can you help with SEO for my website?",
          answer: "Absolutely! We specialize in both on-page and off-page SEO to help your website rank higher in search engine results. Our services include keyword research, content optimization, backlink building, technical SEO improvements, and more.",
        },
        {
          question: "Do you provide custom strategies for each business?",
          answer: "Yes, every business is unique, and we tailor our digital marketing strategies to fit your specific goals, industry, and target audience. Our approach is to develop a custom plan that addresses your challenges and drives growth.",
        },
        {
          question: "How do you handle content creation for digital marketing?",
          answer: "We have a team of experienced content creators who can develop high-quality, engaging content tailored to your brand. This includes blog posts, social media content, articles, infographics, and videos. Our content strategies focus on providing value and building trust with your audience.",
        },
        {
          question: "Can you manage paid advertising campaigns?",
          answer: "Yes, we offer PPC management services for platforms such as Google Ads, Facebook Ads, Instagram Ads, and more. Our team optimizes ad copy, targets the right audience, and monitors performance to maximize the return on your advertising spend.",
        },
        {
          question: "What platforms do you specialize in for social media marketing?",
          answer: "We specialize in a variety of platforms, including Facebook, Instagram, LinkedIn, Twitter, and Pinterest. Depending on your business and target audience, we develop a tailored social media strategy to reach potential customers where they are most active.",
        },
        {
          question: "Do you offer analytics and reporting for digital marketing efforts?",
          answer: "Yes, we provide detailed analytics and reporting for all digital marketing campaigns. This includes insights on traffic, engagement, conversions, and other important metrics. Our reports help you understand the effectiveness of our strategies and guide future decisions.",
        },
      ];
  return (
    <div className="services_service">
      <h1 className="heading container services_service_heading">Digital Marketing</h1>
      <div className="container services_media_wrapper">
      <Image
          className="services_service_image"
            src={
              "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            }
            alt="service"
            width={1000}
            height={1000}
            quality={100}
          />
        <div className="services_media_text_boxex">
        <p className="service_headline">
        Grow Your Business and Maximize Online Visibility with Our Tailored Digital Marketing Services.
          </p>
          <p className="service_subheadline">
          Unlock the potential of your brand with data-driven strategies in SEO, PPC, social media marketing, and content marketing, designed to increase engagement, generate leads, and boost conversions. Our customized digital marketing solutions target your audience and ensure measurable results that align with your business goals.
          </p>
          <p className="service_overview">
          We prioritize the success of your online presence, making sure your business thrives in an ever-changing digital landscape. Trust our expertise to elevate your brand, and we will make sure your message reaches the right audience at the right time.
          </p>
        </div>
      </div>
      <div className="container service_detail">
        <h2>Technologies we are using</h2>
        <ul className="service_technologies">
          <li className="service_technology">
            <b>SEO (Search Engine Optimization):</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
              Optimize your website’s on-page and off-page elements to rank higher in search engine results.
              </li>
              <li className="service_technology_detail">
              Implement keyword strategies and link-building techniques to drive organic traffic.
              </li>
            </ul>
          </li>
          <li className="service_technology">
            <b>PPC (Pay-Per-Click Advertising):</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
              Run targeted ad campaigns on platforms like Google Ads and Bing Ads to reach potential customers.
              </li>
              <li className="service_technology_detail">
              Optimize your ad spend with A/B testing and detailed analytics.
              </li>
            </ul>
          </li>
          <li className="service_technology">
            <b>Social Media Marketing:</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
              Leverage platforms like Facebook, Instagram, LinkedIn, and Twitter to engage with your audience.
              </li>
              <li className="service_technology_detail">
              Create and manage content that builds brand loyalty and increases visibility.
              </li>
            </ul>
          </li>
          <li className="service_technology">
            <b>Content Marketing:</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
              Develop high-quality content strategies that resonate with your audience and build brand authority.
              </li>
              <li className="service_technology_detail">
              Create blog posts, articles, infographics, and videos to increase engagement and drive traffic.
              </li>
            </ul>
          </li>
          <li className="service_technology">
            <b>Email Marketing:</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
              Design personalized email campaigns that nurture leads and improve customer retention.
              </li>
              <li className="service_technology_detail">
              Use automation tools to manage subscriber lists and track campaign performance.
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="service_additional_features">Additional Features:</h2>
        <ul className="service_additional_features">
          <li className="service_additional_feature">
            <b>Advanced Analytics & Reporting:</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
              Gain detailed insights into your campaign’s performance with real-time analytics, helping you make data-driven decisions and optimize your marketing strategy.
              </li>
            </ul>
          </li>
          <li className="service_additional_feature">
            <b>Conversion Rate Optimization (CRO):</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
              Implement strategies to enhance user experience and increase the percentage of website visitors who take desired actions, such as making a purchase or filling out a form.
              </li>
            </ul>
          </li>
          <li className="service_additional_feature">
            <b>Custom Campaign Management:</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
              Tailor each marketing campaign to your business needs with our flexible approach, ensuring that every effort is aligned with your goals and delivers maximum impact.
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
