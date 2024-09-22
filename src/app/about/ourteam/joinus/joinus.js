"use client"
import React, { useState } from "react";
import "./joinus.css";
import { FaCloudUploadAlt } from "react-icons/fa";

const JoinUs = () => {
  const [showForm, setShowForm] = useState(false);

  const handleJoinUsClick = () => {
    setShowForm(true);
  };

  return (
    <>
      <div className="container top_container joining_container_ab">
        <h1 className="heading heading_about_joining">
          <p>
            Become A <span>Team Member</span>
          </p>
          <div className="heading_underline h_underline_mtContainer">
            <span className="heading_underline_dot"></span>
          </div>
        </h1>
        <div className="container_top joinus_content">
          <p>
          Are you ready to take your career to the next level? At VERSANEX, we are always looking for passionate and talented individuals to join our diverse team. By becoming a team member, you will have the opportunity to work on innovative projects, collaborate with industry experts, and contribute to a culture of excellence. We value creativity, initiative, and a commitment to continuous growth, and we provide the resources and support needed to help you thrive. If you’re eager to make an impact and grow your skills in a dynamic environment, we invite you to explore our current openings and become part of our journey.
          </p>
          {showForm && (
            <div className="joining_form_ab">
              <form action="" className="joing_ab_frm">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="phone" placeholder="Phone" required />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  required
                />
                <div className="form_joing_btns">
                  <button className="button button_joining button_joing_sub">
                    <p>
                      Upload CV <i><FaCloudUploadAlt /></i>
                    </p>
                  </button>
                  <button className="button button_joining button_joing_sub">
                    <p>Submit</p>
                  </button>
                </div>
              </form>
            </div>
          )}
          <button
            className="button button_small button_joining button_joing_main"
            onClick={handleJoinUsClick}
          >
            <p>Join Us</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
