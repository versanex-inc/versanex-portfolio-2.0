"use client";
import React, { useEffect, useState } from "react";
import "../projects/AllProjects.css";  // Assuming the same CSS file is used
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiPencilFill } from "react-icons/ri";

const AllBlogs = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if user exists in localStorage
    const user = localStorage.getItem("user");
    if (!user) {
      // Redirect to /admin/adminLogin page if user doesn't exist
      router.push("/adminLogin");
    }
  }, []);

  const [blogs, setBlogs] = useState([]);
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
          setBlogs(data.result.reverse());
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
    <div className="db_container admin_all_projects">
      <table className="top_container aap_container">
        <caption>All Blogs</caption>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((item) => (
            <tr key={item._id}>
              <td className="image_td">
                <Image src={item.images[0]?.url} alt="admin" width={1000} height="100" />
              </td>
              <td className="slug_td">{item.title}</td>
              <td className="category_td">{item.category}</td>
              <td className="edit_td">
                <Link href={`/dashboard/blogs/${item.slug}`}>
                  <RiPencilFill />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBlogs;
