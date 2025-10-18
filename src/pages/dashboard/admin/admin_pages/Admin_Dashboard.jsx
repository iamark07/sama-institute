import React from "react";

const Admin_Dashboard = ({ adminDashboardData }) => {
  // Rename for easier use in the component
  const data = adminDashboardData;

  return (
    <div className="w-full relative">
      <img
        src="/assets/img/bg-img/bg-4.jpg"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-20 grayscale-100"
        alt="background"
      />
      <div className="lg:px-0 flex flex-col 2xl:flex-row gap-8 relative">
        <div className="w-full flex flex-col gap-8 py-6 sm:py-10 px-5 sm:px-8">
          {/* Top Row Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 flex items-center gap-4">
              <div className="bg-blue-100 text-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
                <i className="ri-building-4-line text-2xl"></i>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {data.brandsOverview.totalBrands}
                </div>
                <div className="text-sm text-gray-500">Total Brands</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 flex items-center gap-4">
              <div className="bg-green-100 text-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                <i className="ri-check-double-line text-2xl"></i>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {data.brandsOverview.activeBrands}
                </div>
                <div className="text-sm text-gray-500">Active Brands</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 flex items-center gap-4">
              <div className="bg-yellow-100 text-yellow-500 w-12 h-12 rounded-full flex items-center justify-center">
                <i className="ri-group-line text-2xl"></i>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {data.usersOverview.totalUsers}
                </div>
                <div className="text-sm text-gray-500">Total Users</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 flex items-center gap-4">
              <div className="bg-red-100 text-red-500 w-12 h-12 rounded-full flex items-center justify-center">
                <i className="ri-user-unfollow-line text-2xl"></i>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {data.staffAttendance.summaryPerBrand[0].today
                    .absent +
                    data.staffAttendance.summaryPerBrand[1].today
                      .absent}
                </div>
                <div className="text-sm text-gray-500">Absent Today</div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Brands List (Left) */}
            <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Brands Overview
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-left text-gray-500">
                    <tr>
                      <th className="p-3 font-medium">Brand Name</th>
                      <th className="p-3 font-medium">Status</th>
                      <th className="p-3 font-medium">Creation Date</th>
                      <th className="p-3 font-medium text-right">Users</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.brandsOverview.brands.map((brand) => (
                      <tr key={brand.id} className="border-t border-gray-200">
                        <td className="p-3 font-medium text-gray-800">
                          {brand.name}
                        </td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              brand.status === "Active"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {brand.status}
                          </span>
                        </td>
                        <td className="p-3 text-gray-600">
                          {brand.creationDate}
                        </td>
                        <td className="p-3 text-gray-600 text-right">
                          {data.usersOverview.usersPerBrand.find(
                            (u) => u.brandName === brand.name
                          )?.userCount || 0}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Activities (Right) */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Activities
              </h3>
              <ul className="space-y-4">
                {data.recentActivities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div
                      className={`mt-1 w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center ${
                        activity.type === "new_brand"
                          ? "bg-blue-100 text-blue-500"
                          : activity.type === "user_update"
                          ? "bg-green-100 text-green-500"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      <i
                        className={`${
                          activity.type === "new_brand"
                            ? "ri-building-4-line"
                            : activity.type === "user_update"
                            ? "ri-user-line"
                            : "ri-alert-line"
                        }`}
                      ></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700">
                        {activity.description}
                      </p>
                      <p className="text-xs text-gray-400">{activity.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_Dashboard;
