import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLink = ({ icon, text, to, end }) => (
  <NavLink
    end={end}
    to={to}
    className={({ isActive }) =>
      `flex items-center px-4 py-3 rounded-md transition-colors duration-200 text-sm sm:text-base ${
        isActive
          ? "bg-gray-700 text-white"
          : "text-gray-300 hover:bg-gray-600 hover:text-white"
      }`
    }
  >
    {icon}
    <span className="mx-4 font-[400]">{text}</span>
  </NavLink>
);

const Sidebar = ({ sidebarOpen, setSidebarOpen, userRole }) => {
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
        className={`fixed inset-0 bg-black/50 z-20 lg:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed lg:sticky top-0 h-[100dvh] min-w-64 bg-gray-800 text-white px-4 py-5 ${
          sidebarOpen ? "left-0" : "-left-full"
        } -left-full lg:left-0 transition-all duration-300 ease-in-out z-30 flex flex-col`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <img
              src="assets/img/logo/logo-light.png"
              alt="Logo"
              className="h-8 w-auto hidden"
            />
            <span className="text-xl font-bold">Sama Institute</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>

        <nav className="flex-1 space-y-1">
          {navLinks.map((link) => (
            <SidebarLink
              key={link.text}
              to={link.to}
              icon={link.icon}
              end={link.end}
              text={link.text}
            />
          ))}
        </nav>

        <div className="mt-auto">
          <a
            href="/logout"
            className="bg-gray-700 text-red-500 flex items-center px-4 py-3 rounded-md transition-colors duration-200 text-sm sm:text-base"
          >
            <i className="ri-logout-box-r-line"></i>
            <span className="mx-4 font-medium">Logout</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
