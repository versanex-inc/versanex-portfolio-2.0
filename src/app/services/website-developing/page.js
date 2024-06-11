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
          question: "What technologies do you use for web development?",
          answer: "We specialize in using the MERN stack (MongoDB, Express.js, React, Node.js) for developing robust and scalable web applications. We also work with other technologies like HTML, CSS, JavaScript, and various frameworks and libraries as needed.",
        },
        {
          question: "How long does it take to develop a web application?",
          answer: "The timeline for web development varies depending on the complexity and scope of the project. A basic website might take a few weeks, while a more complex web application could take several months. We provide a detailed timeline after understanding your requirements.",
        },
        {
          question: "How much does a web development project cost?",
          answer: "The cost of web development depends on various factors, including the project’s complexity, the technologies used, and the time required to complete it. We offer customized quotes based on your specific needs and budget.",
        },
        {
          question: "Do you offer custom web development services?",
          answer: "Yes, we provide custom web development services tailored to your unique business requirements. Whether you need a simple website or a complex web application, we can deliver a solution that fits your needs.",
        },
        {
          question: "Will my website be mobile-friendly?",
          answer: "Absolutely. We prioritize responsive design to ensure that your website functions seamlessly on all devices, including desktops, tablets, and smartphones.",
        },
        {
          question: "Can you redesign my existing website?",
          answer: "Yes, we offer website redesign services to improve the look, feel, and functionality of your existing site. We can update the design, enhance user experience, and implement new features.",
        },
        {
          question: "Will you maintain and update my website after its launched?",
          answer: "Yes, we offer ongoing maintenance and support services to ensure your website remains up-to-date, secure, and functioning optimally. This includes updates, bug fixes, performance optimization, and more.",
        },
        {
          question: "How do you ensure the security of the web application?",
          answer: "We implement best practices for web security, including data encryption, secure authentication, regular security audits, and vulnerability assessments to protect your web application from threats.",
        },
        {
          question: "Can you integrate third-party services and APIs?",
          answer: "Yes, we can integrate various third-party services and APIs into your web application to extend its functionality. This includes payment gateways, social media platforms, analytics tools, and more.",
        },
        {
          question: "Do you provide SEO services for my website?",
          answer: "While our primary focus is on web development, we can implement basic SEO best practices during development to help your website rank better in search engines. We also collaborate with SEO specialists for advanced SEO services.",
        },
        {
          question: "How do you handle project management and communication during development?",
          answer: "We use project management tools like Jira, Trello, or Asana to track progress and keep you updated. Regular meetings and status reports ensure clear communication and transparency throughout the development process.",
        },
        {
          question: "How do you ensure the quality of the web application?",
          answer: "We follow a rigorous quality assurance process that includes automated and manual testing to ensure the application is bug-free and performs well. This includes functional testing, performance testing, security testing, and usability testing.",
        },
      ];
  return (
    <div className="services_service">
      <h1 className="heading container services_service_heading">Website Developing</h1>
      <div className="container services_media_wrapper">
      <Image
          className="services_service_image"
            src={
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYnNpdGUlMjBkZXZlbG9waW5nfGVufDB8fDB8fHww"
            }
            alt="service"
            width={1000}
            height={1000}
            quality={100}
          />
        <div className="services_media_text_boxex">
        <p className="service_headline">
            Build Robust and Scalable Web Applications with Our MERN Stack
            Development Services.
          </p>
          <p className="service_subheadline">
            Unlock the Full Potential of Your Business with Custom Solutions
            Using MongoDB, Express.js, React, and Node.js.
          </p>
          <p className="service_overview">
            Our MERN stack development service is designed for businesses
            looking to create dynamic, high-performance web applications. By
            leveraging the power of MongoDB, Express.js, React, and Node.js, we
            deliver seamless, end-to-end solutions that meet your specific needs
            and help you achieve your business goals.Our first priority is to make you buisness ranked high in that online dominating world.We will trust the process you can trust us.
          </p>
        </div>
      </div>
      <div className="container service_detail">
        <h2>Technologies we are using</h2>
        <ul className="service_technologies">
          <li className="service_technology">
            <b>Mongodb:</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
                Design and implement scalable, NoSQL databases tailored to your
                application’s requirements.
              </li>
              <li className="service_technology_detail">
                Ensure high availability and performance with optimized data
                structures and queries.
              </li>
            </ul>
          </li>
          <li className="service_technology">
            <b>Express.js Framework:</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
                Develop robust back-end solutions with our expertise in
                Express.js.
              </li>
              <li className="service_technology_detail">
                Create efficient, secure APIs to handle data exchange between
                the server and client.
              </li>
            </ul>
          </li>
          <li className="service_technology">
            <b>React Front-End Development:</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
                Build responsive, user-friendly interfaces using React.
              </li>
              <li className="service_technology_detail">
                Implement component-based architecture for maintainable and
                scalable applications.
              </li>
              <li className="service_technology_detail">
                Ensure high performance with optimized rendering and state
                management.
              </li>
            </ul>
          </li>
          <li className="service_technology">
            <b>Node.js Server-Side Development:</b>
            <ul className="service_technology_details">
              <li className="service_technology_detail">
                Develop high-performance, scalable server-side solutions with
                Node.js.
              </li>
              <li className="service_technology_detail">
                Utilize asynchronous programming to handle multiple requests
                efficiently.
              </li>
              <li className="service_technology_detail">
                Integrate third-party services and APIs seamlessly.
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="service_additional_features">Additional Features:</h2>
        <ul className="service_additional_features">
          <li className="service_additional_feature">
            <b>Real-Time Applications:</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
                Implement real-time features such as live chat, notifications,
                and updates using WebSockets.
              </li>
            </ul>
          </li>
          <li className="service_additional_feature">
            <b>Deployment and Maintenance:</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
                Deploy your application on cloud platforms like AWS, Azure, or
                Heroku.
              </li>
              <li className="additional_feature_detail">
                Provide ongoing maintenance and support to ensure your
                application remains up-to-date and secure.
              </li>
            </ul>
          </li>
          <li className="service_additional_feature">
            <b>Custom Solutions:</b>
            <ul className="service_additional_feature_detail">
              <li className="additional_feature_detail">
                Tailor our services to meet your specific business needs,
                whether you’re a startup or an established enterprise.
              </li>
              <li className="additional_feature_detail">
                Offer custom integrations with existing systems and third-party
                services.
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
