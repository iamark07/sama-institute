import React from "react";
import { Link } from "react-router-dom";

const AddStaff = () => {
  // Reusable input style consistent with the dashboard theme
  const inputStyle =
    "w-full pl-11 pr-4 py-3 md:py-3.5 text-xs md:text-base rounded-md border border-gray-300 focus:ring focus:ring-blue-400 outline-none transition";

  return (
    <div className="w-full relative">
      <img
        src="/assets/img/bg-img/bg-4.jpg"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-20 grayscale-100"
        alt="background"
      />
      <div className="w-full flex flex-col gap-8 py-6 sm:py-10 px-5 sm:px-8 relative z-10">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Add New Staff
            </h2>
            <p className="text-gray-600 mt-1">
              Create a new profile for a staff member.
            </p>
          </div>
        </div>

        {/* Card container matching the dashboard's style */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 w-full max-w-4xl mx-auto">
          {/* Form Header */}
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 leading-6">
              Staff Information
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Enter the details of the new staff member below.
            </p>
          </div>

          {/* Form element */}
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Grid for two-column responsive layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <div className="relative">
                  <i className="ri-user-line text-gray-400 text-xl absolute left-3 top-1/2 -translate-y-1/2"></i>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className={inputStyle}
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <div className="relative">
                  <i className="ri-mail-line text-gray-400 text-xl absolute left-3 top-1/2 -translate-y-1/2"></i>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={inputStyle}
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <i className="ri-phone-line text-gray-400 text-xl absolute left-3 top-1/2 -translate-y-1/2"></i>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className={inputStyle}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Role / Designation */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Role / Designation
                </label>
                <div className="relative">
                  <i className="ri-briefcase-4-line text-gray-400 text-xl absolute left-3 top-1/2 -translate-y-1/2"></i>
                  <select id="role" name="role" className={`${inputStyle} appearance-none`} defaultValue="">
                    <option value="" disabled>Select Option</option>
                    <option>Manager</option>
                    <option>Cashier</option>
                    <option>Supervisor</option>
                    <option>Stocker</option>
                  </select>
                  <i className="ri-arrow-down-s-line text-gray-400 text-xl absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"></i>
                </div>
              </div>

              {/* Joining Date */}
              <div className="md:col-span-1">
                <label
                  htmlFor="joiningDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Joining Date
                </label>
                <div className="relative">
                  <i className="ri-calendar-line text-gray-400 text-xl absolute left-3 top-1/2 -translate-y-1/2"></i>
                  <input
                    type="date"
                    id="joiningDate"
                    name="joiningDate"
                    className={inputStyle}
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex justify-end gap-3">
              <Link to="/dashboard">
                <button
                  type="button"
                  className="px-4 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              </Link>
              <button
                type="submit"
                className="px-4 py-2.5 text-sm font-semibold text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStaff;
