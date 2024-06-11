"use client";
import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AllBlogs = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if user exists in localStorage
    const user = localStorage.getItem("user");
    if (!user) {
      // Redirect to /admin/adminLogin page if user doesn't exist
      router.push("/admin/adminLogin");
    }
  }, []);

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/getBlogs`
        );
        const data = await response.json();

        if (isMounted) {
          setProjects(data.result);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        if (isMounted) {
          setLoading(false); // Ensure loading state is set to false in case of error
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container all_blogs">
      <h1 className="top_container admin_blogs_heading">All Blogs</h1>
      <div className="top_container blogs_container">
        {projects.map((item) => (
          <div className="blog_content" key={item._id}>
            <div className="blog_image">
              <Image
                src={item.images[0]?.url}
                alt="admin"
                width={1000}
                height={1000}
              />
            </div>
            <p className="blog_title">{item.title}</p>
            <p className="blog_category">{item.category}</p>
            <span className="blog_edit">
              <Link href={`/admin/blogs/${item.slug}`}>Edit</Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
