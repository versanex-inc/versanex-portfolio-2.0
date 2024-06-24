'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoIosSearch, IoIosArrowDown } from 'react-icons/io';
import '../productscolumncard/productcolumcard.css';
import { MdOutlineArrowForward } from "react-icons/md";
import Link from 'next/link';
import moment from 'moment';

const AllBlogs = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [blogs, setBlogs] = useState([]);
    const getTimeAgo = timestamp => {
        return moment(timestamp).fromNow(); // Using moment.js to get time ago format
      };
    
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
      const filteredBlogs = blogs.filter(blog =>
        (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        blog.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedSubCategory ? blog.subCategory === selectedSubCategory : true) &&
        (selectedCategory ? blog.category === selectedCategory : true)
      );
    
  return (
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
  )
}

export default AllBlogs