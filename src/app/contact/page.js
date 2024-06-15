"use client";
import React, { useState } from "react";
import "./contact.css";
import { IoIosArrowDown } from "react-icons/io";
import Joins from "./join_us/joinus";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedService, setSelectedService] = useState("Select the service You Need");
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const [selectedService1, setSelectedService1] = useState(" What Is Your Budget");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    details: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      service: selectedService,
      budget: selectedService1,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
       toast.success("Contact sent successfully", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setFormData({
          name: "",
          email: "",
          organization: "",
          details: "",
        });
        setSelectedService("Select the service You Need");
        setSelectedService1(" What Is Your Budget");
      } else {
        alert("Failed to save contact. Error: " + result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <>
     <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      <div className="container">
        <div className="Contact_main">
          <div className="left_con">
            <div className="f_title">
              <h1>Initiate your project with us!</h1>
            </div>
            <div className="content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis commodi minima laudantium impedit magnam sequi qui aspernatur nesciunt tenetur eius.
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
              <form className="form" onSubmit={handleSubmit}>
                <div className="contact_form_parent">
                  <button type="button" className="contact_form_select" onClick={toggleDropdown}>
                    {selectedService}
                    <span className="arrow">
                      <IoIosArrowDown />
                    </span>
                  </button>
                  {dropdownVisible && (
                    <div className="contact_form_dropdown">
                      <div className="contact_dropdown">
                        {["Graphics Designing", "Content Writing", "Website Developing", "Digital Marketing", "Video Editing", "SEO"].map(service => (
                          <div key={service} className="contact_dropdown_link" onClick={() => selectService(service)}>
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="f_group">
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="f_group">
                  <input type="text" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="f_group">
                  <input type="text" name="organization" placeholder="Your Organization" value={formData.organization} onChange={handleChange} />
                </div>
                <div className="f_group">
                  <textarea name="details" placeholder="How can we help you?" value={formData.details} onChange={handleChange} rows={4}></textarea>
                </div>
                <div className="contact_form_parent">
                  <button type="button" className="contact_form_select" onClick={toggleDropdown1}>
                    {selectedService1}
                    <span className="arrow">
                      <IoIosArrowDown />
                    </span>
                  </button>
                  {dropdownVisible1 && (
                    <div className="contact_form_dropdown">
                      <div className="contact_dropdown">
                        {["50$ - 100$", "100$ - 500$", "500$ - 1000$", "1000$ - 5000$", "More"].map(budget => (
                          <div key={budget} className="contact_dropdown_link" onClick={() => selectService1(budget)}>
                            {budget}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="submit_btn">
                  <button className="form_btn" type="submit">
                    Submit
                  </button>
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

export default Contact;
