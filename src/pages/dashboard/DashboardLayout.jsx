import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/dashboardComponents/Sidebar.jsx";
import Header from "../../components/dashboardComponents/Header.jsx";
import { currentUser } from "./API_Data.jsx"; // Import from the new common file
import { adminDashboardData } from "./admin/AdminData.jsx";
import { brandDashboardData } from "./brands/BrandData.jsx";
import Admin_Dashboard from "./admin/admin_pages/AdminDashboard.jsx";
import BrandDashboard from "./brands/brands-pages/BrandDashboard.jsx";

const DashboardLayout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // State for desktop sidebar collapse
  const [isCollapsed, setIsCollapsed] = useState(false);

  const userRole = currentUser.role;
  const isAdmin = currentUser.role === "admin";

  const location = useLocation();

  // Determine the display name based on the role
  const displayName = isAdmin
    ? adminDashboardData.adminProfile.name
    : brandDashboardData.brandProfile.name;

  return (
    <div className="bg-gray-50 ">
      <div className="container max-w-[2000px] w-full mx-auto relative flex min-h-screen">
        <Sidebar
          isOpen={isMobileOpen}
          setIsOpen={setIsMobileOpen}
          userRole={userRole}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          displayName={displayName}
        />

        <div className="w-full flex flex-col relative">
          <Header setSidebarOpen={setIsMobileOpen} displayName={displayName} />
          <main className="w-full">
            {location.pathname === "/dashboard" ? (
              isAdmin ? (
                <Admin_Dashboard adminDashboardData={adminDashboardData} displayName={displayName}/>
              ) : (
                <BrandDashboard brandDashboardData={brandDashboardData} displayName={displayName}/>
              )
            ) : (
              <Outlet context={{ adminDashboardData, brandDashboardData }} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
