'use client'
import React, { useEffect, useRef } from "react";
import "./joinus.css";

const Joinus = () => {
  
  return (
    <>
      <div className="container joinus_main">
        <div className="joincontent">
          <div className="joinus_lft">
            <div className="main_heading">
              <h1>What Occurs subsequently</h1>
            </div>
            <div className="content">
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur accusantium eligendi natus cupiditate reiciendis quis?
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur quasi incidunt a.
                </p>
              </li>
              <li>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores earum tenetur consequatur, eum quidem eveniet iure
                  rem! Nihil, distinctio dignissimos.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, illo?
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur accusantium eligendi natus cupiditate reiciendis quis?
                </p>
              </li>
            </div>
          </div>
          <div className="joinus_right">
          <div className="joinus_lft_con">
            <h1 className="anim-text">TOGETHER</h1>
            <h1 className="anim-text">EVERYONE</h1>
            <h1 className="anim-text">ACHIEVES</h1>
            <h1 className="anim-text">MORE</h1>
          </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Joinus;
