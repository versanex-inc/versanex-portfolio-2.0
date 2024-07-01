"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./slug_page.css";
import { IoMdShareAlt } from "react-icons/io";
import moment from 'moment';
import { FaThumbsUp } from 'react-icons/fa';
import { useSession } from "next-auth/react";
import CommentSection from "./Comment_section/Comment_section";

const BlogsSug = ({ params }) => {
  const [blogData, setBlogData] = useState(null);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const { status, data: session } = useSession();

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
          setError(`Blog with slug ${params.slug} not found.`);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError("Error fetching blog data");
      }
    };

    const fetchUserData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getUsers`);
        const data = await response.json();
        setUsers(data.result);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
    fetchUserData();
  }, [params]);

  const handleLike = async () => {
    if (status !== 'authenticated' || !session?.user?.email) {
      alert('Please sign in first to like a blog.');
      return;
    }
  
    try {
      const currentUserEmail = session.user.email;
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addBlogLike`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ blogId: blogData._id, userEmail: currentUserEmail })
      });
  
      const data = await response.json();
      if (data.success) {
        setBlogData(data.blog);
      } else {
        console.error('Error liking the blog:', data.error);
      }
    } catch (error) {
      console.error('Error liking the blog:', error);
    }
  };

  const handleShare = () => {
    const shareData = {
      title: blogData.title,
      text: blogData.descriptions[0],
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).then(() => {
        console.log('Blog shared successfully');
      }).catch((error) => {
        console.error('Error sharing blog:', error);
      });
    } else {
      // Fallback for browsers that do not support the Web Share API
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('URL copied to clipboard');
      }).catch((error) => {
        console.error('Error copying URL to clipboard:', error);
      });
    }
  };

  const getTimeAgo = timestamp => {
    return moment(timestamp).fromNow();
  };

  if (!blogData && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container top_container">
        <div className="slug_blog_container">
          <h1 className="blog_slug_heading">Details of blog</h1>
          <div className="slug_blog_img">
            <Image
              src={blogData.images[0].url}
              alt={blogData.title}
              width={1000}
              height={1000}
            />
          </div>
          <div className="blog_slug_after_img">
            <p className="slg_blg_title">{blogData.title}</p>
            <div className="slg_posted_blog_person">
              <div className="slug_blog_persn_img">
                <Image
                  src={blogData.creatorPicture}
                  alt={blogData.creatorName}
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <div className="person_slg_name_date">
                <span className="slg_person_name">{blogData.creatorName}</span>
                <span className="slg_person_postedDate">{getTimeAgo(blogData.createdAt)}</span>
              </div>
              <div className="blog_slg_like_share">
                <div className="blog_slg_like" onClick={handleLike}>
                  <span className={`blg_slg_like_icon ${blogData.likes.some(like => like.userId === session?.user?.id) ? 'liked' : ''}`}>
                    <FaThumbsUp />
                  </span>
                  <span className="blg_slug_like_count">{blogData.likesCount}</span>
                </div>
                <div className="blog_slug_share" onClick={handleShare}>
                  <IoMdShareAlt />&nbsp;Share
                </div>
              </div>
            </div>
          </div>
          <div className="details_slug_blog">
            {blogData.descriptions.map((description, index) => (
              <p key={index} className="slug_setail_para">{description}</p>
            ))}
          </div>
          <ul className="summarize_list_slug_blog">
            <p className="list_heading_slug_blg">Summarize the details of blog.</p>
            {blogData.list.map((item, index) => (
              <li key={index} className='blog_lsug_aummarize_para'>{item}</li>
            ))}
          </ul>
          <CommentSection blogId={blogData._id} users={users} session={session} />
        </div>
      </div>
    </>
  );
};

export default BlogsSug;
