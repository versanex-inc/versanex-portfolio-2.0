'use client';
import React, { useState } from 'react';
import "../Service.css";
import Image from "next/image";
import Reviews from "@/Components/Home/Reviews/Reviews";
import Achievements from "@/Components/Home/Achievements/Achievements";
import Partnerships from "@/Components/Home/Partnerships/Partnerships";
import { FaPlus, FaMinus } from "react-icons/fa";

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
            question: "What is SEO and why is it important?",
            answer: "Search Engine Optimization (SEO) is the process of optimizing your website to rank higher in search engine results, driving organic traffic and improving visibility. It is essential for increasing online presence, attracting potential customers, and boosting conversion rates."
        },
        {
            question: "How long does it take to see SEO results?",
            answer: "SEO is a long-term strategy that typically takes 3-6 months to show significant results. The timeline depends on factors such as the competitiveness of your industry, the keywords targeted, and the current state of your website’s SEO."
        },
        {
            question: "What SEO services do you offer?",
            answer: "We offer a full range of SEO services, including on-page optimization, off-page SEO, technical SEO, keyword research, content strategy, and link-building. Our goal is to create a comprehensive strategy that increases your website’s visibility and ranking."
        },
        {
            question: "How do you ensure the quality of SEO practices?",
            answer: "We adhere to Google’s best practices for SEO, including ethical white-hat techniques. Our team conducts regular audits, tracks performance, and continuously updates strategies to ensure your website ranks well and avoids penalties."
        },
        {
            question: "What makes your SEO service stand out?",
            answer: "Our SEO service stands out through personalized strategies, a data-driven approach, and a focus on achieving measurable results. We tailor each SEO plan to the unique goals and needs of your business."
        },
        {
            question: "Do you provide SEO analytics and reporting?",
            answer: "Yes, we provide regular, detailed reports on your website's SEO performance, including keyword rankings, traffic analysis, and suggestions for improvements. This transparency helps track progress and ROI effectively."
        }
    ];

    return (
        <div className="services_service">
            <h1 className="heading container services_service_heading">
                Search Engine Optimization
            </h1>

            <div className="container services_media_wrapper">
                <Image
                    className="services_service_image"
                    src={
                        "https://images.unsplash.com/photo-1616469829718-0faf16324280?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt="SEO services"
                    width={1000}
                    height={1000}
                    quality={100}
                />

                <div className="services_media_text_boxex">
                    <p className="service_headline">
                        Boost Your Websites Visibility with Professional SEO Services
                    </p>
                    <p className="service_subheadline">
                        Maximize Your Online Presence with Customized SEO Strategies That Deliver Results
                    </p>
                    <p className="service_overview">
                        Our SEO services are designed to help your business rank higher on search engines, drive more organic traffic, and convert visitors into customers. We use the latest techniques in on-page SEO, keyword research, and content optimization to ensure your website performs well. Trust us to make your business more visible online, and let the results speak for themselves.
                    </p>
                </div>
            </div>

            <div className="container service_detail">
                <h2>Our SEO Services Include</h2>
                <ul className="service_technologies">
                    <li className="service_technology">
                        <b>Keyword Research:</b>
                        <ul className="service_technology_details">
                            <li className="service_technology_detail">
                                In-depth research to identify the most relevant and high-converting keywords for your business.
                            </li>
                            <li className="service_technology_detail">
                                Target keywords that boost your rankings and attract qualified leads.
                            </li>
                        </ul>
                    </li>
                    <li className="service_technology">
                        <b>On-Page SEO:</b>
                        <ul className="service_technology_details">
                            <li className="service_technology_detail">
                                Optimize meta tags, headers, and content to align with SEO best practices.
                            </li>
                            <li className="service_technology_detail">
                                Improve site structure, internal linking, and load speed for better user experience and rankings.
                            </li>
                        </ul>
                    </li>
                    <li className="service_technology">
                        <b>Content Optimization:</b>
                        <ul className="service_technology_details">
                            <li className="service_technology_detail">
                                Enhance your websites content to ensure it’s both engaging for users and optimized for search engines.
                            </li>
                            <li className="service_technology_detail">
                                Regular updates to keep your content relevant and impactful.
                            </li>
                        </ul>
                    </li>
                    <li className="service_technology">
                        <b>Technical SEO:</b>
                        <ul className="service_technology_details">
                            <li className="service_technology_detail">
                                Address technical issues like indexing, crawlability, and website architecture.
                            </li>
                            <li className="service_technology_detail">
                                Improve site speed, mobile-friendliness, and security protocols.
                            </li>
                        </ul>
                    </li>
                </ul>

                <h2 className="service_additional_features">Additional Features:</h2>
                <ul className="service_additional_features">
                    <li className="service_additional_feature">
                        <b>Local SEO:</b>
                        <ul className="service_additional_feature_detail">
                            <li className="additional_feature_detail">
                                Optimize for local searches to help your business get found by customers in your area.
                            </li>
                        </ul>
                    </li>
                    <li className="service_additional_feature">
                        <b>Link-Building:</b>
                        <ul className="service_additional_feature_detail">
                            <li className="additional_feature_detail">
                                Build high-quality backlinks from reputable sites to boost domain authority.
                            </li>
                        </ul>
                    </li>
                    <li className="service_additional_feature">
                        <b>Ongoing SEO Maintenance:</b>
                        <ul className="service_additional_feature_detail">
                            <li className="additional_feature_detail">
                                Continuous optimization and updates to keep your site ranking well.
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
