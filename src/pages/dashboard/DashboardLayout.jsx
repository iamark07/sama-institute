import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/dashboardComponents/Sidebar.jsx";
import Header from "../../components/dashboardComponents/Header.jsx";
import { currentUser } from "./API_Data.jsx"; // Import from the new common file
import { adminDashboardData } from "./admin/adminData.jsx";
import { studentData } from "./student-data/StudentData.jsx"; // This is still needed for the student dashboard component
import Admin_Dashboard from "./admin/admin_pages/Admin_Dashboard.jsx";
import Dashboard from "./dashboard_pages/Dashboard.jsx";

const DashboardLayout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // State for desktop sidebar collapse
  const [isCollapsed, setIsCollapsed] = useState(false);

  const userRole = currentUser.role;
  const isAdmin = currentUser.role === "admin";

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
