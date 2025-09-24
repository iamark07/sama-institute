import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/dashboardComponents/Sidebar.jsx";
import Header from "../../../components/dashboardComponents/Header.jsx";

// 1. Import the centralized student data object.
import { studentData } from "../student-data/StudentData.jsx";

const StudentLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative flex bg-gray-50 min-h-screen">
      <img
        src="/assets/img/bg-img/bg-4.jpg"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-10"
        alt="background"
      />
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        userRole="student"
      />

      {/* Main Layout */}
      <div className="w-full flex flex-col relative z-10">
        {/* 2. Pass the student's name directly to the Header. */}
        <Header setSidebarOpen={setSidebarOpen} userName={studentData.name} />
        <main className="w-full">
          {/*
            3. Pass the studentData object and sidebar state down to child routes.
            Child components (like Dashboard, Profile) can access this data
            using the useOutletContext() hook.
          */}
          <Outlet context={{ studentData, sidebarOpen, setSidebarOpen }} />
        </main>
      </div>
    </div>
  );
};

export default StudentLayout;