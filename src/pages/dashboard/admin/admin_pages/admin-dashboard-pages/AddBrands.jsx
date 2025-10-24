import React from "react";
import { Link } from "react-router-dom";

const AddBrands = () => {
  // Reusable input style consistent with the dashboard theme
  const inputStyle =
    "w-full pl-11 pr-4 py-3 md:py-3.5 text-xs md:text-base rounded-md border border-gray-300 focus:ring focus:ring-blue-400 outline-none transition ";

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
            <h2 className="text-2xl font-bold text-gray-800">Add New Brand</h2>
            <p className="text-gray-600 mt-1">
              Register a new brand on the platform.
            </p>
          </div>
        </div>

        {/* Card container */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 w-full max-w-4xl mx-auto">
          {/* Form Header */}
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 leading-6">
              Brand Information
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Enter the details for the new brand below.
            </p>
          </div>

          {/* Form element */}
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Grid for two-column responsive layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              {/* Brand Name */}
              <div>
                <label
                  htmlFor="brandName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Brand Name
                </label>
                <div className="relative">
                  <i className="ri-store-2-line text-gray-400 text-xl absolute left-3 top-1/2 -translate-y-1/2"></i>
                  <input
                    type="text"
                    id="brandName"
                    name="brandName"
                    className={inputStyle}
                    placeholder="Glamour Salon"
                  />
                </div>
              </div>

              {/* Brand Email */}
              <div>
                <label
                  htmlFor="brandEmail"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Brand Email
                </label>
                <div className="relative">
                  <i className="ri-mail-line text-gray-400 text-xl absolute left-3 top-1/2 -translate-y-1/2"></i>
                  <input
                    type="email"
                    id="brandEmail"
                    name="brandEmail"
                    className={inputStyle}
                    placeholder="contact@glamour.com"
                  />
                </div>
              </div>

              {/* Contact Number */}
              <div>
                <label
                  htmlFor="contactNumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contact Number
                </label>
                <div className="relative">
                  <i className="ri-phone-line text-gray-400 text-xl absolute left-3 top-1/2 -translate-y-1/2"></i>
                  <input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    className={inputStyle}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Brand Website (Optional) */}
              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Brand Website <span className="text-gray-400">(Optional)</span>
                </label>
                <div className="relative">
                  <i className="ri-global-line text-gray-400 text-xl absolute left-3 top-1/2 -translate-y-1/2"></i>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    className={inputStyle}
                    placeholder="www.glamour.com"
                  />
                </div>
              </div>

              {/* Registration Date */}
              <div>
                <label
                  htmlFor="regDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Registration Date
                </label>
                <div className="relative">
                  <i className="ri-calendar-line text-gray-400 text-xl absolute left-3 top-1/2 -translate-y-1/2"></i>
                  <input
                    type="date"
                    id="regDate"
                    name="regDate"
                    className={inputStyle}
                  />
                </div>
              </div>

              {/* Brand Type */}
              <div>
                <label
                  htmlFor="brandType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Brand Type
                </label>
                <div className="relative">
                  <i className="ri-price-tag-3-line text-gray-400 text-xl absolute left-3 top-1/2 -translate-y-1/2"></i>
                  <select id="brandType" name="brandType" className={`${inputStyle} appearance-none`} defaultValue="">
                    <option value="" disabled>Select Option</option>
                    <option>Salon</option>
                    <option>Retail</option>
                    <option>Education</option>
                    <option>Service</option>
                    <option>Other</option>
                  </select>
                  <i className="ri-arrow-down-s-line text-gray-400 text-xl absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"></i>
                </div>
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Address / Location
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  className="w-full px-4 py-3 text-sm md:text-base rounded-md border border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
                  placeholder="Enter full address"
                ></textarea>
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

export default AddBrands;