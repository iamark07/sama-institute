import React from "react";

const Header = ({ setSidebarOpen }) => {
  return (
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
            onClick={() => setSidebarOpen((change) => !change)}
            className="text-gray-200 focus:outline-none xl:hidden"
          >
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
