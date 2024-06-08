'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './admin.css'

const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/admin/adminLogin');
    }
  }, [router]);

  return (
    <div className='admin'>
      HAHAHA
    </div>
  );
}

export default AdminPage;