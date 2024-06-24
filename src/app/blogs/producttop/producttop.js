"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./producttop.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const ProductTop = () => {
  const [topBlogs, setTopBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getBlogs`);
        const data = await res.json();
        const { result } = data;

        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

        const filteredBlogs = result.filter((blog) => {
          const createdAt = new Date(blog.createdAt);
          return createdAt >= oneMonthAgo;
        });

        filteredBlogs.sort((a, b) => b.likesCount - a.likesCount);
        setTopBlogs(filteredBlogs.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="container top_container">
        <div className="prod_topheading">
          <h1>Best of the month</h1>
        </div>
        <div className="bg_prod_mainpage">
          <div className="pg_left">
            <div className="pg_left_mainimage pg_most_liked">
              {topBlogs[0] ? (
                <>
                  <Image
                    src={topBlogs[0].images[0].url}
                    height={4500}
                    width={4500}
                    objectFit="contain"
                    alt={topBlogs[0].title}
                  />
                  <Link href={`/blogs/${topBlogs[0].slug}`} className="prod_rightcontentarrow">
                    <BiSolidRightTopArrowCircle />
                  </Link>
                </>
              ) : (
                <p>No top blog available</p>
              )}
            </div>
          </div>
          <div className="pg_right">
            <div className="pg_right_div pg_second_most_liked">
              {topBlogs[1] ? (
                <>
                  <Image
                    src={topBlogs[1].images[0].url}
                    height={300}
                    width={300}
                    objectFit="contain"
                    alt={topBlogs[1].title}
                  />
                  <Link href={`/blogs/${topBlogs[1].slug}`} className="rightimgsecimgicon">
                  <BiSolidRightTopArrowCircle />
                  </Link>
                </>
              ) : (
                <p>No second top blog available</p>
              )}
            </div>
            <div className="pg_right_div pg_third_most_liked">
              {topBlogs[2] ? (
                <>
                  <Image
                    src={topBlogs[2].images[0].url}
                    height={300}
                    width={300}
                    objectFit="contain"
                    alt={topBlogs[2].title}
                  />
                  <Link href={`/blogs/${topBlogs[2].slug}`} className="rightimgsecimgicon">
                  <BiSolidRightTopArrowCircle />
                  </Link>
                </>
              ) : (
                <p>No third top blog available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTop;
