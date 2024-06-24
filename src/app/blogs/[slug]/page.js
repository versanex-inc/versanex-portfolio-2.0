"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./slug_page.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";

const BlogsSug = ({ params }) => {
  const [onclickhover, setonclickhover] = useState(false);
  const toggleonclick = () => {
    setonclickhover(!onclickhover);
  };
  const [onclickshowcoment, setonclickshowcoment] = useState(false);
  const toggleonclickshowcoment = () => {
    setonclickshowcoment(!onclickshowcoment);
    setonclickshowcoment1(false);
    setonclickshowcoment2(false);
    setonclickshowcoment3(false);
  };
  const [onclickshowcoment1, setonclickshowcoment1] = useState(false);
  const toggleonclickshowcoment1 = () => {
    setonclickshowcoment1(!onclickshowcoment1);
    setonclickshowcoment(false);
    setonclickshowcoment2(false);
    setonclickshowcoment3(false);
  };
  const [onclickshowcoment2, setonclickshowcoment2] = useState(false);
  const toggleonclickshowcoment2 = () => {
    setonclickshowcoment2(!onclickshowcoment2);
    setonclickshowcoment1(false);
    setonclickshowcoment(false);
    setonclickshowcoment3(false);
  };
  const [onclickshowcoment3, setonclickshowcoment3] = useState(false);
  const toggleonclickshowcoment3 = () => {
    setonclickshowcoment3(!onclickshowcoment3);
    setonclickshowcoment1(false);
    setonclickshowcoment2(false);
    setonclickshowcoment(false);
  };
  const [blogData, setBlogData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/getBlogs`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const blogsResponse = await response.json();
        const blog = blogsResponse.result.find(
          (blog) => blog.slug === params.slug
        );
        if (blog) {
          setBlogData(blog);
        } else {
          setError(`blog with slug ${params.slug} not found.`);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError("Error fetching blog data");
      }
    };

    fetchData();
  }, [params]);

  if (!blogData && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container">
        <div className="blog_detail_main">
          <div className="blog_detail_beforimg_sec">
            <div className="blog_detail_main_hading">
              <h1>{blogData.title}</h1>
            </div>
            <div className="blog_detail_account_social">
              <div className="reviewed_user">
                <div className="reviewed_user_image">
                  <Image
                    src={"/imgs/flash.webp"}
                    height={50}
                    width={50}
                    alt="user image"
                  />
                </div>
                <div className="reviewed_user_name">
                  <h5>Fahad Joyia</h5>
                  <div className="visibility_dropdown">
                    <span>Jan 13, 2022</span>
                  </div>
                </div>
              </div>
              <div className="blog_social_media_icons">
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <FaTwitter />
                </span>
                <span>
                  <IoShareSocialSharp />
                </span>
              </div>
            </div>
          </div>
          <div className="blog_main_img_sec">
            <div className="blog_main">
              <Image
                src={"/imgs/abc.jpg"}
                height={500}
                width={500}
                alt="Main Image"
              />
            </div>
          </div>
          <div className="picture_source">
            <p>Image By VersaNex</p>
          </div>
          <div className="blog_read_page_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            similique perspiciatis iusto, dicta ab expedita magni aliquam
            necessitatibus illum temporibus?
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsSug;
