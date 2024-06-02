"use client";
import React from "react";
import "./contact.css";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Joins from "./join_us/joinus";
const contact = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(
    "Select the service You Need"
  );
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const [selectedService1, setSelectedService1] = useState(
    " What Is Your Budget"
  );
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    setDropdownVisible1(false);
  };
  const selectService = (service) => {
    setSelectedService(service);
    setDropdownVisible(false);
  };
  const toggleDropdown1 = () => {
    setDropdownVisible1(!dropdownVisible1);
    setDropdownVisible(false);
  };
  const selectService1 = (service1) => {
    setSelectedService1(service1);
    setDropdownVisible1(false);
  };
  return (
    <>
      <div className="container">
        <div className="Contact_main">
          <div className="left_con">
            <div className="f_title">
              <h1>Initiate your project with us!</h1>
            </div>
            <div className="content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              commodi minima laudantium impedit magnam sequi qui aspernatur
              nesciunt tenetur eius.
            </div>
            <div className="s_title">
              <h1>Complete the contact form to inform us of your needs</h1>
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="form_arrow"></div>
          <div className="right_con">
            <div className="form_main">
              <form className="form">
                {/* <select className='form_cel' name="" id="">
                            <option hidden>Select the service You Need</option>
                            <option value="">Graphic Designer</option>
                            <option value="">Contact Writer</option>
                            <option value="">SEO Master</option>
                        </select> */}
                <div className="contact_form_parent">
                  <button
                    type="button"
                    className="contact_form_select"
                    onClick={toggleDropdown}
                  >
                    {selectedService}
                    <span className="arrow">
                      <IoIosArrowDown />
                    </span>
                  </button>
                  {dropdownVisible && (
                    <div className="contact_form_dropdown">
                      <div className="contact_dropdown">
                        <div
                          className="contact_dropdown_link"
                          onClick={() => selectService("Graphic Designer")}
                        >
                          Graphic Designer
                        </div>
                        <div
                          className="contact_dropdown_link"
                          onClick={() => selectService("Contact Writer")}
                        >
                          Contact Writer
                        </div>
                        <div
                          className="contact_dropdown_link"
                          onClick={() => selectService("SEO Master")}
                        >
                          SEO Master
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="f_group">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="f_group">
                  <input type="text" placeholder="Yout Email" />
                </div>
                <div className="f_group">
                  <input type="text" placeholder="Your Organization" />
                </div>
                <div className="f_group">
                  <textarea
                    name=""
                    placeholder="How can we help you?"
                    id=""
                    rows={4}
                  ></textarea>
                </div>
                {/* <select name="" className='form_cel' id="">
                            <option hidden>What Is Your Budget</option>
                            <option value="">3000$</option>
                            <option value="">8000$</option>
                            <option value="">12000$</option>
                        </select> */}
                <div className="contact_form_parent">
                  <button
                    type="button"
                    className="contact_form_select"
                    onClick={toggleDropdown1}
                  >
                 {selectedService1}
                    <span className="arrow">
                      <IoIosArrowDown />
                    </span>
                  </button>
                  {dropdownVisible1 && (
                    <div className="contact_form_dropdown">
                      <div className="contact_dropdown">
                        <div className="contact_dropdown_link"  onClick={() => selectService1("3000$")}>3000$</div>
                        <div className="contact_dropdown_link"  onClick={() => selectService1("8000$")}>8000$</div>
                        <div className="contact_dropdown_link"  onClick={() => selectService1("12000$")}>12000$</div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="submit_btn">
                  <button className="form_btn ">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_joinus_page">
        <Joins />
      </div>
    </>
  );
};

export default contact;
