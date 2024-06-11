'use client'
import React from 'react'
import './adminNavbar.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
const AdminNavbar = () => {
  const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('user');
        router.push('/admin/adminLogin');
      };
  return (
    <div className="adminNav">
    <div className='adminNavbar'>
        <div className="an_links">
            <Link className='admin_nav_bt' href='/admin'>Admin</Link>
            <Link className='admin_nav_bt' href='/admin/projects/addProject'>Add&nbsp;Projects</Link>
            <Link className='admin_nav_bt' href='/admin/projects'>All&nbsp;Projects</Link>
            <Link className='admin_nav_bt' href='/admin/contacts'>Contacts</Link>
            <Link className='admin_nav_bt' href='/admin/blogs/addBlog'>Add&nbsp;Blog</Link>
            <Link className='admin_nav_bt' href='/admin/blogs'>Get&nbsp;Blog</Link>
        </div>
        <div className='admin_nav_bt admin_nav_btn_logout' onClick={handleLogout}>Logout</div>
    </div>
    </div>
  )
}

export default AdminNavbar