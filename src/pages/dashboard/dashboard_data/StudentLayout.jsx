import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/dashboardComponents/Sidebar.jsx";
import Header from "../../../components/dashboardComponents/Header.jsx";
import { studentData } from "../student-data/StudentData.jsx";

const StudentLayout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // State for desktop sidebar collapse
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="bg-gray-50 ">
      <div className="container max-w-[2000px] mx-auto relative flex min-h-screen">
        <Sidebar
          isOpen={isMobileOpen}
          setIsOpen={setIsMobileOpen}
          userRole={studentData.role}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />

        <div className="w-full flex flex-col relative">
          <Header setSidebarOpen={setIsMobileOpen} />
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
