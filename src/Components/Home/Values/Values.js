"use client"
import React, { useState, useEffect } from 'react';
import './Values.css';
import Image from 'next/image';

const Values = () => {
  const [currentValueIndex, setCurrentValueIndex] = useState(0);
  const values = ["Commitment", "Excellence", "Reputation", "Innovation"]; // Define your values here
  const delay = 2000; // Delay between switching values in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValueIndex(prevIndex =>
        prevIndex === values.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const valueElement = document.querySelector('.value');
    valueElement.style.animation = 'none';
    setTimeout(() => {
      valueElement.style.animation = '';
    }, 10);
  }, [currentValueIndex]);

  return (
    <section className='values'>
      <div className="values_bg">
        {/* <Image src={'/imgs/valuesthree.png'} alt='value img' width={1000} height={1000}/> */}
        <div className="values_content">
          <h1 className="values_heading">Our Values</h1>
          <div className="values_container">
            <p className="value">{values[currentValueIndex]}</p>
          </div>
          <p className="values_para">These values give us the foundations we need.</p>
        </div>
      </div>
    </section>
  );
};

export default Values;
