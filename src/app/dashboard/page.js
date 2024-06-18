'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './dashboard.css'
import MainDetails from './DashboardComponents/MainDetails/MainDetails';
import ActiveProjects from './DashboardComponents/ActiveProjects/ActiveProjects';
import TeamMembers from './DashboardComponents/TeamMembers/TeamMembers';
const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/adminLogin');
    }
  }, [router]);

  return (
    <div className="dashboard">
      <MainDetails/>
      <ActiveProjects/>
      <TeamMembers/>
    </div>
  );
}

export default AdminPage;