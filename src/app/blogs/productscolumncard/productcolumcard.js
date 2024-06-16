"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import "./productcolumcard.css";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const Productcolumcard = () => {
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const [selectedService1, setSelectedService1] = useState(
    " Select Category"
  );
  const selectService1 = (service1) => {
    setSelectedService1(service1);
    setDropdownVisible1(false);
  };

  const toggleDropdown1 = () => {
    setDropdownVisible1(!dropdownVisible1);
  };
  const cardata = [
    {
      id: 1,
      image: "/imgs/H_resolution.jpg",
      topHeading: "This is Light top heading",
      heading: "This is the First Card",
      contetn:
        "This is the content of all cards which include some information about the cards Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure impedit dolores recusandae consequatur libero  quidem ullam quaerat?",
      bottomheading: "Show Details",
    },
    {
      id: 2,
      image: "/imgs/a (1).jpg",
      topHeading: "This is Light top heading",
      contetn:
        "This is the content of all cards which include some information about the cards",
      heading: "This is the First Card",
      bottomheading: "Show Details",
    },
    {
      id: 3,
      image: "/imgs/a (4).jpg",
      topHeading: "This is Light top heading",
      heading: "This is the First Card",
      contetn:
        "This is the content of all cards which include some information about the cards",
      bottomheading: "Show Details",
    },
    {
      id: 4,
      image: "/imgs/a (3).jpg",
      topHeading: "This is Light top heading",
      heading: "This is the First Card",
      contetn:
        "This is the content of all cards which include some information about the cards",
      bottomheading: "Show Details",
    },
    {
      id: 5,
      image: "/imgs/a (4).jpg",
      topHeading: "This is Light top heading",
      heading: "This is the First Card",
      contetn:
        "This is the content of all cards which include some information about the cards",
      bottomheading: "Show Details",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="blog_main_page">
          <div className="productsseccardsleft">
            {cardata.map((value) => (
              <div className="mainprdcolbox" key={value.id}>
                <div className="mainprdcolimgsec">
                  <div className="blog_right_img">
                    <Image src={value.image} height={230} width={230}></Image>
                  </div>
                </div>
                <div className="mainprdcolcontetnsec">
                  <div className="mainprdcoltophead">
                    <h6>{value.topHeading}</h6>
                  </div>
                  <div className="mainprdcolmainhead">
                    <h1>{value.heading}</h1>
                  </div>
                  <div className="mainprdcolmaincontent">
                    <p>{value.contetn}</p>
                  </div>
                  <div className="mainprdcolbottomhead">
                    <h6>{value.bottomheading}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="productsseccardsright">
            <div className="productsseccardsrightbox">
              <div className="productsseccardsrightboxsrchbar">
                <input
                  className="productsseccardsrightboxsrchbarinput"
                  placeholder="Search Here"
                ></input>
                <button className="productsseccardsrightboxsrchbarbtn">
                  <IoIosSearch />
                </button>
              </div>
              <div className="blog_right_box_dropdown">
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
                        <div
                          className="contact_dropdown_link"
                          onClick={() => selectService1("Straight")}
                        >
                       Straight
                        </div>
                        <div
                          className="contact_dropdown_link"
                          onClick={() => selectService1("Gay")}
                        >
                          Gay
                        </div>
                        <div
                          className="contact_dropdown_link"
                          onClick={() => selectService1(" Lesbo")}
                        >
                          Lesbo
                        </div>
                        <div
                          className="contact_dropdown_link"
                          onClick={() => selectService1("She Male")}
                        >
                          She Male
                        </div>
                        <div
                          className="contact_dropdown_link"
                          onClick={() => selectService1("  Male She")}
                        >
                         Male She
                        </div>
                        <div
                          className="contact_dropdown_link"
                          onClick={() => selectService1("1 Pussy Man")}
                        >
                          Pussy Man
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcolumcard;
