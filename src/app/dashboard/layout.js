'use client'
import React, { useState } from 'react';
import SideBar from "./DashboardComponents/SideBar/SideBar";
import TopBar from "./DashboardComponents/TopBar/TopBar";
import './dashboard.css';

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard_layout">
      <SideBar isSidebarOpen={isSidebarOpen} />
      <div className={`db_pages_show ${isSidebarOpen ? 'open' : 'closed'}`}>
        <TopBar toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  );
}
