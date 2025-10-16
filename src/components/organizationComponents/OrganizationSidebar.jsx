import React from "react";
import { NavLink } from "react-router-dom";

// This component receives props from its parent (OrganizationLayout)
// to control its state.
const OrganizationSidebar = ({
  isOpen,
  setIsOpen,
  isCollapsed,
  setIsCollapsed,
}) => {
  // An array of objects for the navigation links.
  const navItems = [
    {
      to: "/org-dashboard",
      to: "/organization/dashboard",
      icon: <i className="ri-dashboard-line text-blue-400"></i>,
      text: "Dashboard",
    },
    {
      to: "/org-registration",
      to: "/organization/register",
      icon: <i className="ri-building-4-line text-green-400"></i>,
      text: "Register Organization",
    },
    {
      to: "/org-list",
      to: "/organization/list",
      icon: <i className="ri-file-list-line text-yellow-400"></i>,
      text: "Organization List",
    },
    {
      to: "/org-profile",
      to: "/organization/profile",
      icon: <i className="ri-user-line text-purple-400"></i>,
      text: "Organization Profile",
    },
    {
      to: "/org-edit",
      icon: <i className="ri-pencil-line text-pink-400"></i>,
      text: "Edit Organization",
    },
    {
      to: "/org-settings",
      to: "/organization/settings",
      icon: <i className="ri-settings-3-line text-indigo-400"></i>,
      text: "Settings",
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-30 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white shadow-lg z-[999] flex flex-col transition-all duration-300 lg:transition-none lg:duration-initial ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:relative lg:z-auto ${isCollapsed ? "min-w-20" : "min-w-64"}`}
      >
        {/* Header Section */}
        <div className={`flex items-center ${isCollapsed ? "justify-center" : "justify-between"} p-4 border-b border-gray-700`}>
          {/* Show logo and text only if not collapsed */}
          {!isCollapsed && (
            <div className="flex flex-col text-nowrap">
              <span className="text-xl font-bold text-white">
                Sama Institute
              </span>
              <span className="text-xs text-gray-400">Organization Panel</span>
            </div>
          )}
          {/* Hamburger/Collapse Icon */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex w-[38px] h-[38px] items-center justify-center rounded-full text-gray-400 hover:bg-gray-700 hover:text-white"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <i className="ri-menu-line text-xl"></i>
            ) : (
              <i className="ri-close-line text-xl"></i>
            )}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white"
            aria-label="Close sidebar"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {/* Loop through navItems to create links */}
          {navItems.map((item) => {
            // This function determines the classes for the NavLink based on whether it's active.
            const linkClasses = ({ isActive }) =>
              `group flex items-center p-3 my-1 rounded-lg transition-colors duration-200 ${
                isActive
                  ? "bg-gray-700 text-white" // Style for active link
                  : "text-gray-300 hover:bg-gray-600 hover:text-white" // Style for normal link
              } ${isCollapsed ? "justify-center" : ""}`;

            return (
              <NavLink key={item.to} to={item.to} className={linkClasses}>
                <div className="relative flex items-center">
                  {item.icon}
                  {/* Show text only if not collapsed */}
                  {!isCollapsed && (
                    <span className="ml-3 text-sm text-nowrap">{item.text}</span>
                  )}
                  {/* Show tooltip on hover when collapsed */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-8 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-nowrap">
                      {item.text}
                    </div>
                  )}
                </div>
              </NavLink>
            );
          })}
        </nav>

        {/* Footer Section (Logout) */}
        <div className="px-2 py-4 border-t border-gray-700 group">
          <a
            href="/logout" // Using a normal `<a>` tag for logout to trigger a page refresh.
            className={`flex items-center p-3 my-1 rounded-lg transition-colors duration-200 bg-gray-700/50 text-red-400 hover:bg-gray-700 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <div className="relative flex items-center">
              <i className="ri-logout-box-r-line"></i>
              {!isCollapsed && (
                <span className="ml-3 text-sm font-medium">Logout</span>
              )}
              {isCollapsed && (
                <div className="absolute left-full ml-8 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Logout
                </div>
              )}
            </div>
          </a>
        </div>
      </aside>
    </>
  );
};

export default OrganizationSidebar;

/**
 * Example Parent Layout Component to demonstrate usage
 *
 * You would typically have a layout component that wraps your organization pages.
 * This layout would manage the state for the sidebar.
 *
 * import React, { useState } from 'react';
 * import { Outlet } from 'react-router-dom';
 * import OrganizationSidebar from './OrganizationSidebar';
 * import { Menu } from 'lucide-react';
 *
 * const OrganizationLayout = () => {
 *   // State for mobile sidebar toggle
 *   const [isMobileOpen, setIsMobileOpen] = useState(false);
 *   // State for desktop sidebar collapse
 *   const [isCollapsed, setIsCollapsed] = useState(false);
 *
 *   return (
 *     <div className="flex h-screen bg-gray-50">
 *       <OrganizationSidebar
 *         isOpen={isMobileOpen}
 *         setIsOpen={setIsMobileOpen}
 *         isCollapsed={isCollapsed}
 *         setIsCollapsed={setIsCollapsed}
 *       />
 *       <main className="flex-1 flex flex-col overflow-hidden">
 *         <header className="flex items-center justify-between p-4 bg-white border-b lg:hidden">
 *           <span className="text-xl font-bold">EduManage</span>
 *           <button onClick={() => setIsMobileOpen(true)}>
 *             <Menu size={24} />
 *           </button>
 *         </header>
 *         <div className="flex-1 overflow-y-auto p-6">
 *           <Outlet />
 *         </div>
 *       </main>
 *     </div>
 *   );
 * };
 *
 * export default OrganizationLayout;
 */
