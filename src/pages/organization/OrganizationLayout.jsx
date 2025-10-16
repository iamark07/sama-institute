import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import OrganizationSidebar from "../../components/organizationComponents/OrganizationSidebar";

const OrganizationLayout = () => {
  // State for mobile sidebar toggle
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // State for desktop sidebar collapse
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <OrganizationSidebar
        isOpen={isMobileOpen}
        setIsOpen={setIsMobileOpen}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      {/* Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="sticky top-0 lg:hidden bg-gray-800 shadow-md z-[998]">
            <div className="container mx-auto flex items-center justify-between px-5 py-5">
                {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src="assets/img/logo/logo.png"
            alt="Logo"
            className="h-8 w-auto hidden"
          />
          <span className="text-xl font-bold text-white">
            Sama Institute
          </span>
        </div>

        {/* Right: Menu Icon */}
        <div className="flex items-center">
          <button
            onClick={() => setIsMobileOpen((change) => !change)}
            className="text-gray-200 focus:outline-none xl:hidden"
          >
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
            </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto h-full">
          {/* Outlet will render the active child route, e.g., OrganizationRegistration */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default OrganizationLayout;