"use client";
import React, { useState, useEffect } from "react";
import "./Achievements.css";
import { PiUsersThreeFill } from "react-icons/pi";
import { BsPersonHearts } from "react-icons/bs";
import { FaGlobeAfrica, FaHandshake   } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";
import { GiAchievement } from "react-icons/gi";

const Achievement = ({ icon, count, name, para }) => (
  <div className="achievement">
    <div className="achievement_icon">{icon}</div>
    <div className="achievement_count">
      {count}
      <b>+</b>
    </div>
    <div className="achievement_name">
      <b>{name}</b>
    </div>
    <p className="achievement_para">{para}</p>
  </div>
);

const Achievements = () => {
  const [employeeAchievementCount, setEmployeeAchievementCount] = useState(0);
  const [clientAchievementCount, setClientAchievementCount] = useState(0);
  const [projectsAchievementCount, setProjectsAchievementCount] = useState(0);
  const [countryAchievementCount, setCountryAchievementCount] = useState(0);
  const [employeeCountReached, setEmployeeCountReached] = useState(false);
  const [clientCountReached, setClientCountReached] = useState(false);
  const [projectsCountReached, setProjectsCountReached] = useState(false);
  const [countryCountReached, setCountryCountReached] = useState(false);

  useEffect(() => {
    const employeeCount = 10; // Set the count for employees
    const clientCount = 200; // Set the count for clients
    const projectsCount = 300; // Set the count for clients
    const countryCount = 20; // Set the count for clients

    const employeeTimer = setInterval(() => {
      if (!employeeCountReached && employeeAchievementCount < employeeCount) {
        setEmployeeAchievementCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(employeeTimer);
        setEmployeeCountReached(true); // Set flag indicating employee count reached
      }
    }, 10); // Decreased interval duration to 500 milliseconds

    const clientTimer = setInterval(() => {
      if (!clientCountReached && clientAchievementCount < clientCount) {
        setClientAchievementCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(clientTimer);
        setClientCountReached(true); // Set flag indicating client count reached
      }
    }, 10); // Decreased interval duration to 500 milliseconds
    const projectsTimer = setInterval(() => {
      if (!projectsCountReached && projectsAchievementCount < projectsCount) {
        setProjectsAchievementCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(projectsTimer);
        setProjectsCountReached(true); // Set flag indicating client count reached
      }
    }, 10); // Decreased interval duration to 500 milliseconds
    const countryTimer = setInterval(() => {
      if (!countryCountReached && countryAchievementCount < countryCount) {
        setCountryAchievementCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(countryTimer);
        setCountryCountReached(true); // Set flag indicating client count reached
      }
    }, 10); // Decreased interval duration to 500 milliseconds

    return () => {
      clearInterval(employeeTimer);
      clearInterval(clientTimer);
      clearInterval(projectsTimer);
      clearInterval(countryTimer);
    };
  }, [
    employeeAchievementCount,
    clientAchievementCount,
    projectsAchievementCount,
    countryAchievementCount,
    employeeCountReached,
    clientCountReached,
    projectsCountReached,
    countryCountReached,
  ]);

  return (
    <section className="container top_container achievements">
      <h1 className="heading achievements">Our Achievements<div className="heading_underline h_underline_mtContainer">
          <span className="heading_underline_dot"></span>
        </div></h1>
      <h2 className="sub_heading achievements">
        Are you ready to bring your vision to life, boost your online presence,
        and take your business to new heights? Our expert team is here to make
        it happen. Let&apos;s start your new project today and craft something
        extraordinary together!
      </h2>
      <div className="achievements_container sub_container">
  <Achievement
    icon={<PiUsersThreeFill />}
    count={employeeAchievementCount}
    name="Dedicated Employees"
    para="Our team of 50+ skilled professionals excels in software development, web design, and digital marketing."
  />
  <Achievement
    icon={<FaHandshake />}
    count={clientAchievementCount}
    name="Happy Clients"
    para="In 2024, we proudly served over 150 clients, bringing their digital dreams to life."
  />
  <Achievement
    icon={<GiAchievement />}
    count={projectsAchievementCount}
    name="Completed Projects"
    para="We have completed over 100 projects, showcasing our dedication to quality and innovation."
  />
  <Achievement
    icon={<FaGlobeAfrica />}
    count={countryAchievementCount}
    name="Global Reach"
    para="Our global services allow clients worldwide to benefit from our expertise."
  />
</div>




    </section>
  );
};

export default Achievements;
