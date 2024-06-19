'use client';
import React, { useEffect, useState } from 'react';
import "./AllProjects.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiPencilFill } from "react-icons/ri";


const All_Projects_Admin = () => {
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
                const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getProjects`);
                const data = await response.json();

                if (isMounted) {
                    setProjects(data.result.reverse());
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
                <caption>All Projects</caption>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Slug</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Sub Category</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((item) => (
                        <tr key={item._id}>
                            <td className='image_td'><Image src={item.images[0]?.url} alt='admin' width={1000} height='100'/></td>
                            <td className='slug_td'>{item.slug}</td>
                            <td className='date_td'>{item.deadline && formatDeadline(item.deadline)}</td>
                            <td className='category_td'>{item.category}</td>
                            <td className='subcat_td'>{item.subCategory}</td>
                            <td className='edit_td'><Link href={`/dashboard/projects/${item.slug}`}><RiPencilFill/></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default All_Projects_Admin;

function formatDeadline(deadline) {
    const date = new Date(deadline);
    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());
    return `${year}-${month}-${day}`;
}

function padZero(num) {
    return num.toString().padStart(2, "0");
}