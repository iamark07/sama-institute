import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/dashboardComponents/Sidebar.jsx";
import Header from "../../../components/dashboardComponents/Header.jsx";
import { studentData } from "../student-data/StudentData.jsx";

const StudentLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-50 ">
      <div className="container max-w-[2000px] mx-auto relative flex min-h-screen">
        <img
          src="/assets/img/bg-img/bg-4.jpg"
          className="w-full h-full object-cover absolute top-0 left-0 opacity-10"
          alt="background"
        />
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          userRole={studentData.role}
        />

        <div className="w-full flex flex-col relative z-10">
          <Header setSidebarOpen={setSidebarOpen} />
          <main className="w-full">
            {/* Child routes will be rendered here and can access the context */}
            <Outlet context={{ studentData }} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default StudentLayout;
