'use client';
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Achievements.css';
import { PiUsersThreeFill } from 'react-icons/pi';
import { BsPersonHearts } from 'react-icons/bs';
import { FaGlobeAfrica, FaHandshake } from 'react-icons/fa';
import { GiAchievement } from 'react-icons/gi';

gsap.registerPlugin(ScrollTrigger);

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

  const achievementSectionRef = useRef(null);

  useEffect(() => {
    const employeeCount = 10;
    const clientCount = 100;
    const projectsCount = 150;
    const countryCount = 10;

    let employeeTimer, clientTimer, projectsTimer, countryTimer;

    const startCounting = () => {
      employeeTimer = setInterval(() => {
        setEmployeeAchievementCount((prevCount) => {
          if (prevCount < employeeCount) return prevCount + 1;
          clearInterval(employeeTimer);
          return employeeCount;
        });
      }, 100);

      clientTimer = setInterval(() => {
        setClientAchievementCount((prevCount) => {
          if (prevCount < clientCount) return prevCount + 1;
          clearInterval(clientTimer);
          return clientCount;
        });
      }, 100);

      projectsTimer = setInterval(() => {
        setProjectsAchievementCount((prevCount) => {
          if (prevCount < projectsCount) return prevCount + 1;
          clearInterval(projectsTimer);
          return projectsCount;
        });
      }, 100);

      countryTimer = setInterval(() => {
        setCountryAchievementCount((prevCount) => {
          if (prevCount < countryCount) return prevCount + 1;
          clearInterval(countryTimer);
          return countryCount;
        });
      }, 100);
    };

    ScrollTrigger.create({
      trigger: achievementSectionRef.current,
      start: 'top 90%',
      onEnter: startCounting,
    });

    return () => {
      clearInterval(employeeTimer);
      clearInterval(clientTimer);
      clearInterval(projectsTimer);
      clearInterval(countryTimer);
    };
  }, []);

  return (
    <section ref={achievementSectionRef} className="container top_container achievements">
      <h1 className="heading heading_achievements">
        Our Achievements
        <div className="heading_underline h_underline_mtContainer">
          <span className="heading_underline_dot"></span>
        </div>
      </h1>
      <h2 className="sub_heading achievements">
      Ready to Transform Your Vision into Reality? Start Your Project Today with Our Expert Team!
      </h2>
      <div className="achievements_container sub_container">
        <Achievement
          icon={<PiUsersThreeFill />}
          count={employeeAchievementCount}
          name="Dedicated Employees"
        />
        <Achievement
          icon={<FaHandshake />}
          count={clientAchievementCount}
          name="Happy Clients"
        />
        <Achievement
          icon={<GiAchievement />}
          count={projectsAchievementCount}
          name="Completed Projects"
        />
        <Achievement
          icon={<FaGlobeAfrica />}
          count={countryAchievementCount}
          name="Global Reach"
        />
      </div>
    </section>
  );
};

export default Achievements;
