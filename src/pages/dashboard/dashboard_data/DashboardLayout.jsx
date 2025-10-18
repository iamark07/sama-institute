import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../../components/dashboardComponents/Sidebar.jsx";
import Header from "../../../components/dashboardComponents/Header.jsx";
import { adminDashboardData } from "../admin/adminData.jsx";
import { studentData } from "../../dashboard/student-data/StudentData.jsx";
import Admin_Dashboard from "../admin/admin_pages/Admin_Dashboard.jsx";
import Dashboard from "./dashboard_pages/Dashboard.jsx";

const DashboardLayout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // State for desktop sidebar collapse
  const [isCollapsed, setIsCollapsed] = useState(false);

  const userRole = adminDashboardData.role === "admin" ? adminDashboardData.role : studentData.role;
  const isAdmin = adminDashboardData.role === "admin";

  const location = useLocation();

  return (
    <div className="bg-gray-50 ">
      <div className="container max-w-[2000px] mx-auto relative flex min-h-screen">
        <Sidebar
          isOpen={isMobileOpen}
          setIsOpen={setIsMobileOpen}
          userRole={userRole}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />

        <div className="w-full flex flex-col relative">
          <Header setSidebarOpen={setIsMobileOpen} />
          <main className="w-full">
            {location.pathname === "/dashboard" ? (
              isAdmin ? (
                <Admin_Dashboard adminDashboardData={adminDashboardData} />
              ) : (
                <Dashboard studentData={studentData} />
              )
            ) : (
              <Outlet context={{ adminDashboardData, studentData }} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
