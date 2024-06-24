'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoIosSearch, IoIosArrowDown } from 'react-icons/io';
import './productcolumcard.css';
import { MdOutlineArrowForward } from "react-icons/md";
import Link from 'next/link';
import moment from 'moment';

const Productcolumcard = () => {
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const [selectedService1, setSelectedService1] = useState("Select Subcategory");
  const [dropdownVisible2, setDropdownVisible2] = useState(false);
  const [selectedService2, setSelectedService2] = useState("Select Category");
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getBlogs`);
      const data = await res.json();
      const { result } = data;

      // Reverse the blogs to get the latest ones first
      const reversedBlogs = result.reverse();
      setBlogs(reversedBlogs);
    };

    fetchBlogs();
  }, []);

  const selectService1 = (service1) => {
    setSelectedService1(service1);
    setDropdownVisible1(false);
  };

  const selectSubCategory = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setDropdownVisible1(false);
  };

  const toggleDropdown1 = () => {
    setDropdownVisible1(!dropdownVisible1);
  };

  const selectService2 = (service2) => {
    setSelectedService2(service2);
    setDropdownVisible2(false);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setDropdownVisible2(false);
  };

  const toggleDropdown2 = () => {
    setDropdownVisible2(!dropdownVisible2);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBlogs = blogs.filter(blog =>
    (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    blog.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedSubCategory ? blog.subCategory === selectedSubCategory : true) &&
    (selectedCategory ? blog.category === selectedCategory : true)
  );
  const getTimeAgo = timestamp => {
    return moment(timestamp).fromNow(); // Using moment.js to get time ago format
  };

  return (
      <div className="container">
        <div className="blog_main_page">
          <div className="productsseccardsleft">
            {filteredBlogs.map((value) => (
              <div className="mainprdcolbox" key={value._id}>
                <div className="mainprdcolimgsec">
                  <div className="blog_right_img">
                    <Image src={value.images[0].url} height={230} width={230} alt={value.title} />
                  </div>
                </div>
                <div className="mainprdcolcontetnsec">
                    <p className='all_blg_hding'>{value.title}</p>
                    <p className='mainprdcolmaincontent'>{value.descriptions[0]}</p>
                    <div className="link_show_date">
                  <Link href={`/blogs/${value.slug}`} className="mainprdcolbottomhead">
                    show details <span><MdOutlineArrowForward/></span>
                  </Link>
                  <span className="blg_time_created">{getTimeAgo(value.createdAt)}</span>
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
                  value={searchTerm}
                  onChange={handleSearch}
                />
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
                          onClick={() => selectSubCategory("Illustration")}
                        >
                          Illustration
                        </div>
                        <div
                          className="contact_dropdown_link"
                          onClick={() => selectSubCategory("Gfx")}
                        >
                          Gfx
                        </div>
                        <div
                          className="contact_dropdown_link"
                          onClick={() => selectSubCategory("Logo Design")}
                        >
                          Logo Design
                        </div>
                        <div
                          className="contact_dropdown_link"
                          onClick={() => selectSubCategory("3d")}
                        >
                          3d
                        </div>
                        <div
                          className="contact_dropdown_link"
                          onClick={() => selectSubCategory("E-shop")}
                        >
                          E-shop
                        </div>
                        <div
                          className="contact_dropdown_link"
                          onClick={() => selectSubCategory("Buisness")}
                        >
                          Buisness
                        </div>
                        <div
                          className="contact_dropdown_link"
                          onClick={() => selectSubCategory("Portfolio")}
                        >
                          Portfolio
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="blog_right_box_dropdown">
                <div className="contact_form_parent">
                  <button
                    type="button"
                    className="contact_form_select"
                    onClick={toggleDropdown2}
                  >
                    {selectedService2}
                    <span className="arrow">
                      <IoIosArrowDown />
                    </span>
                  </button>
                  {dropdownVisible2 && (
                    <div className="contact_form_dropdown">
                      <div className="contact_dropdown">
                        <div
                          className="contact_dropdown_link"
                          onClick={() => selectCategory("Gfx Design")}
                        >
                          Gfx Design
                        </div>
                        <div
                          className="contact_dropdown_link"
                          onClick={() => selectCategory("Web Developing")}
                        >
                          Web Developing
                        </div>
                        <div
                          className="contact_dropdown_link"
                          onClick={() => selectCategory("Video Editing")}
                        >
                          Video Editing
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
  );
};

export default Productcolumcard;