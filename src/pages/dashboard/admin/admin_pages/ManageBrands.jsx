import React from "react";
import { Link } from "react-router-dom";
import ProfileAction from "../../../../components/dashboardComponents/ProfileAction";
import { useOutletContext } from "react-router-dom";

const ManageBrands = () => {
  // Rename for easier use in the component
  const { adminDashboardData } = useOutletContext();
  const data = adminDashboardData;

  return (
    <div className="w-full relative">
      <img
        src="/assets/img/bg-img/bg-4.jpg"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-20 grayscale-100"
        alt="background"
      />
      <div className="lg:px-0 flex flex-col relative">
        {/* Main Content Grid */}
        <div className="w-full flex flex-col gap-8 py-6 sm:py-10 px-5 sm:px-8 bg-white">
          <div className="flex flex-col lg:flex-row justify-between">
            {/* Right: Actions & Profile */}
            <div className="order-1 md:order-2 mb-5">
            <ProfileAction profile={data.adminProfile} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Manage Brands
              </h2>
              <p className="text-gray-600 mt-1">
                Manage your brands effectively from this dashboard.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left: Search Bar */}
            <div className="relative w-full md:max-w-md">
              <input
                type="text"
                placeholder="Search brands, users..."
                className="w-full border pl-11 pr-4 py-3 md:py-3.5 text-sm md:text-base rounded-md border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <i className="ri-search-line text-lg"></i>
              </span>
            </div>
          </div>
          <div>
            {/* Brands List */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="md:text-lg font-semibold text-gray-800">
                  Brands Overview
                </h3>
                <Link to="/dashboard/add-brand">
                  <button className="bg-blue-500 text-white font-semibold px-4 py-2.5 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-1.5 text-xs md:text-sm">
                    <i className="ri-add-line"></i>
                    Add <span className="hidden md:block">New Brand</span>
                  </button>
                </Link>
              </div>
              <div className="overflow-x-auto table-scroll w-full">
                <table className="w-full text-sm">
                  <thead className="text-left text-gray-900 bg-gray-50">
                    <tr>
                      <th className="p-3 font-medium whitespace-nowrap">S.No.</th>
                      <th className="p-3 font-medium whitespace-nowrap">Brand Name</th>
                      <th className="p-3 font-medium whitespace-nowrap">Email</th>
                      <th className="p-3 font-medium whitespace-nowrap">Website</th>
                      <th className="p-3 font-medium whitespace-nowrap text-center">Staffs</th>
                      <th className="p-3 font-medium whitespace-nowrap text-center">
                        Creation Date
                      </th>
                      <th className="p-3 font-medium whitespace-nowrap text-center">Status</th>
                      <th className="p-3 font-medium whitespace-nowrap text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.brandsOverview.brands.map((brand, index) => (
                      <tr key={brand.id} className="border-t border-gray-200">
                        <td className="whitespace-nowrap py-3 px-5 text-gray-600">{index + 1}</td>
                        <td className="whitespace-nowrap p-3 text-gray-600">{brand.name}</td>
                        <td className="whitespace-nowrap p-3 text-gray-600">{brand.email}</td>
                        <td className="whitespace-nowrap p-3 text-blue-600 hover:underline">
                          <a
                            href={brand.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {brand.website}
                          </a>
                        </td>
                        <td className="whitespace-nowrap p-3 text-gray-600 text-center">
                          {data.usersOverview.usersPerBrand.find(
                            (u) => u.brandName === brand.name
                          )?.userCount || 0}
                        </td>
                        <td className="whitespace-nowrap p-3 text-gray-600 text-center">
                          {brand.creationDate}
                        </td>
                        <td className="whitespace-nowrap p-3 text-center">
                          <span
                            className={`font-[500] rounded-full ${
                              brand.status === "Active"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {brand.status}
                          </span>
                        </td>
                        <td className="p-3 whitespace-nowrap text-right">
                          <div className="flex justify-center gap-2">
                            <button
                              className="hidden bg-green-400 rounded text-white w-8 h-8 hover:bg-green-700"
                              title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </button>
                            <button
                              className="bg-blue-400 rounded text-white w-8 h-8 hover:bg-blue-700"
                              title="Edit"
                            >
                              <i className="ri-pencil-line"></i>
                            </button>
                            <button
                              className="bg-red-400 rounded text-white w-8 h-8 hover:bg-red-700"
                              title="Delete"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBrands;
