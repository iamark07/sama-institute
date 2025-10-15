import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({
  isOpen,
  setIsOpen,
  isCollapsed,
  setIsCollapsed,
  userRole,
}) => {
  const studentLinks = [
    {
      to: "/dashboard",
      icon: <i className="ri-home-4-line text-blue-400"></i>,
      text: "Dashboard",
      end: true,
    },
    {
      to: "/profile",
      icon: <i className="ri-user-line text-green-400"></i>,
      text: "Profile",
    },
    {
      to: "/courses",
      icon: <i className="ri-book-open-line text-yellow-400"></i>,
      text: "Courses",
    },
    {
      to: "/assignments",
      icon: <i className="ri-file-list-3-line text-purple-400"></i>,
      text: "Assignments",
    },
    {
      to: "/attendance",
      icon: <i className="ri-calendar-check-line text-pink-400"></i>,
      text: "Attendance",
    },
    {
      to: "/exams",
      icon: <i className="ri-pencil-ruler-2-line text-indigo-400"></i>,
      text: "Exam Schedule",
    },
    {
      to: "/messages",
      icon: <i className="ri-message-2-line text-teal-400"></i>,
      text: "Messages",
    },
  ];

  const parentLinks = [
    ...studentLinks.slice(0, 2), // Dashboard, Profile
    {
      to: "/child-courses",
      icon: <i className="ri-book-open-line text-yellow-400"></i>,
      text: "Subjects",
    },
    {
      to: "/child-homework",
      icon: <i className="ri-file-list-3-line text-purple-400"></i>,
      text: "Homework",
    },
    {
      to: "/child-attendance",
      icon: <i className="ri-calendar-check-line text-pink-400"></i>,
      text: "Attendance",
    },
    {
      to: "/child-exams",
      icon: <i className="ri-pencil-ruler-2-line text-indigo-400"></i>,
      text: "Exam Schedule",
    },
    {
      to: "/messages",
      icon: <i className="ri-message-2-line text-teal-400"></i>,
      text: "Messages",
    },
    {
      to: "/fees",
      icon: <i className="ri-wallet-3-line text-orange-400"></i>,
      text: "Fee / Payments",
    },
  ];

  const navLinks = userRole === "student" ? studentLinks : parentLinks;

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-30 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 h-[100dvh] bg-gray-800 text-white flex flex-col !z-[999] transition-all duration-300 lg:transition-none lg:duration-initial ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:relative ${isCollapsed ? "min-w-20" : "min-w-64"}`}
      >
        {/* Header Section */}
        <div className={`flex items-center ${isCollapsed ? "justify-center" : "justify-between"} p-4 border-b border-gray-700`}>
          {!isCollapsed && (
            <span className="text-xl font-bold text-white text-nowrap">
              Sama Institute
            </span>
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

        <nav className="flex-1 px-2 py-4 space-y-1">
          {navLinks.map((link) => {
            const linkClasses = ({ isActive }) =>
              `group relative flex items-center p-3 my-1 rounded-lg transition-colors duration-200 ${
                isActive
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-600 hover:text-white"
              } ${isCollapsed ? "justify-center" : ""}`;

            return (
              <NavLink key={link.to} to={link.to} className={linkClasses}>
                <div className="relative flex items-center">
                  {link.icon}
                  {/* Show text only if not collapsed */}
                  {!isCollapsed && (
                    <span className="ml-3 text-sm text-nowrap">
                      {link.text}
                    </span>
                  )}
                  {/* Show tooltip on hover when collapsed */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-8 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-nowrap">
                      {link.text}
                    </div>
                  )}
                </div>
              </NavLink>
            );
          })}
        </nav>

        <div className="px-2 py-4 border-t border-gray-700">
          <a
            href="/logout"
            className={`group relative flex items-center p-3 my-1 rounded-lg transition-colors duration-200 bg-gray-700/50 text-red-400 hover:bg-gray-700 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <i className="ri-logout-box-r-line"></i>
            {!isCollapsed && (
              <span className="ml-3 text-sm font-medium">Logout</span>
            )}
            {isCollapsed && (
              <div className="absolute left-full ml-4 px-2 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Logout
              </div>
            )}
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
