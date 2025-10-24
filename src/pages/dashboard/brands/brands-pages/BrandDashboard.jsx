import React from "react";
import { Link } from "react-router-dom";
import ProfileAction from "../../../../components/dashboardComponents/ProfileAction";

const BrandDashboard = ({ brandDashboardData }) => {
  const data = brandDashboardData;

  return (
    <div className="w-full relative">
      <img
        src="/assets/img/bg-img/bg-4.jpg"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-20 grayscale-100"
        alt="background"
      />
      <div className="xl:px-0 flex flex-col relative">
        {/* Main Content Grid */}
        <div className="w-full flex flex-col gap-8 py-6 sm:py-10 px-5 sm:px-8 bg-white">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold text-gray-800">
                {data.brandProfile.name} Dashboard
              </h2>
              <p className="text-gray-600 mt-1">
                Welcome back, {data.brandProfile.name} here’s your daily
                summary.
              </p>
            </div>
            <div className="order-1 md:order-2">
                <ProfileAction profile={data.brandProfile} />
            </div>
          </div>

          {/* 1. Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-blue-100 rounded-lg p-4 flex flex-col justify-center text-center items-center gap-3">
              <div className="bg-blue-400 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <i className="ri-group-line text-xl"></i>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-800">
                  {data.summary.totalStaff}
                </div>
                <div className="text-sm text-gray-900">Total Staff</div>
              </div>
            </div>
            <div className="bg-green-100 rounded-lg p-4 flex flex-col justify-center text-center items-center gap-3">
              <div className="bg-green-400 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <i className="ri-user-follow-line text-xl"></i>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-800">
                  {data.summary.activeStaff}
                </div>
                <div className="text-sm text-gray-900">Active Staff</div>
              </div>
            </div>
            <div className="bg-red-100 rounded-lg p-4 flex flex-col justify-center text-center items-center gap-3">
              <div className="bg-red-400 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <i className="ri-user-unfollow-line text-xl"></i>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-800">
                  {data.summary.inactiveStaff}
                </div>
                <div className="text-sm text-gray-900">Inactive Staff</div>
              </div>
            </div>
            <div className="bg-yellow-100 rounded-lg p-4 flex flex-col justify-center text-center items-center gap-3">
              <div className="bg-yellow-400 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <i className="ri-calendar-check-line text-xl"></i>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-800">
                  {data.summary.todayAttendance}
                </div>
                <div className="text-sm text-gray-900">Today's Attendance</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 2xl:grid-cols-3 gap-8">
            <div className="2xl:col-span-2 flex flex-col gap-8">
              {/* 2. Attendance Overview */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="md:text-lg font-semibold text-gray-800">
                    Attendance Overview
                  </h3>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-green-600">
                      {data.attendanceOverview.summary.presentPercent}% Present
                    </span>{" "}
                    /{" "}
                    <span className="font-semibold text-red-500">
                      {data.attendanceOverview.summary.absentPercent}% Absent
                    </span>
                  </div>
                </div>
                <div className="overflow-x-auto table-scroll w-full">
                  <table className="w-full text-sm">
                    <thead className="text-left text-gray-900 bg-gray-50">
                      <tr>
                        <th className="p-3 font-medium whitespace-nowrap">
                          Staff Name
                        </th>
                        <th className="p-3 font-medium whitespace-nowrap">
                          Date
                        </th>
                        <th className="p-3 font-medium whitespace-nowrap text-center">
                          Status
                        </th>
                        <th className="p-3 font-medium whitespace-nowrap text-center">
                          Check-in
                        </th>
                        <th className="p-3 font-medium whitespace-nowrap text-center">
                          Check-out
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.attendanceOverview.recentEntries.map((entry) => (
                        <tr key={entry.id} className="border-t border-gray-200">
                          <td className="p-3 text-gray-600 whitespace-nowrap">
                            {entry.staffName}
                          </td>
                          <td className="p-3 text-gray-600 whitespace-nowrap">
                            {entry.date}
                          </td>
                          <td className="p-3 text-center whitespace-nowrap">
                            <span
                              className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                entry.status === "Present"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {entry.status}
                            </span>
                          </td>
                          <td className="p-3 text-gray-600 text-center whitespace-nowrap">
                            {entry.checkIn}
                          </td>
                          <td className="p-3 text-gray-600 text-center whitespace-nowrap">
                            {entry.checkOut}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3. Staff Overview */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="md:text-lg font-semibold text-gray-800">
                    Staff Overview
                  </h3>
                  <Link to="/dashboard/add-staff">
                    <button className="bg-blue-500 text-white font-semibold px-4 py-2.5 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-1.5 text-xs md:text-sm">
                      <i className="ri-add-line"></i>
                      Add <span className="hidden md:block">New Staff</span>
                    </button>
                  </Link>
                </div>
                <div className="overflow-x-auto table-scroll w-full">
                  <table className="w-full text-sm">
                    <thead className="text-left text-gray-900 bg-gray-50">
                      <tr>
                        <th className="p-3 font-medium whitespace-nowrap">
                          Staff Name
                        </th>
                        <th className="p-3 font-medium whitespace-nowrap">
                          Role
                        </th>
                        <th className="p-3 font-medium whitespace-nowrap">
                          Contact
                        </th>
                        <th className="p-3 font-medium whitespace-nowrap text-center">
                          Last Login
                        </th>
                        <th className="p-3 font-medium whitespace-nowrap text-right">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.staffOverview.staff.map((staff) => (
                        <tr key={staff.id} className="border-t border-gray-200">
                          <td className="p-3 text-gray-800 font-medium whitespace-nowrap">
                            {staff.name}
                          </td>
                          <td className="p-3 text-gray-600 whitespace-nowrap">
                            {staff.role}
                          </td>
                          <td className="p-3 text-gray-600 whitespace-nowrap">
                            {staff.contact}
                          </td>
                          <td className="p-3 text-gray-600 whitespace-nowrap text-center">
                            {staff.lastLogin}
                          </td>
                          <td className="p-3 whitespace-nowrap text-right">
                            <span
                              className={`font-[500] ${
                                staff.status === "Active"
                                  ? "text-green-500"
                                  : "text-red-500"
                              }`}
                            >
                              {staff.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="2xl:col-span-1 gap-8 grid md:grid-cols-2 2xl:grid-cols-1 h-fit">
              {/* 4. Performance Overview */}
              <div className="bg-white rounded-lg border border-gray-200 px-6 pt-6 pb-12 h-fit">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="md:text-lg font-semibold text-gray-800">
                    Performance Overview
                  </h3>
                  <span className="text-xs text-gray-500">Last 7 Days</span>
                </div>
                <div className="flex gap-2 sm:gap-3 h-48 items-end">
                  {data.performance.attendanceTrend.map((item, index) => {
                    const percentage = (item.present / item.total) * 100;
                    return (
                      <div
                        key={index}
                        className="group relative flex-1 h-full flex items-end justify-center"
                      >
                        <div
                          className="relative w-full bg-blue-200 rounded-t-md hover:bg-blue-400 transition-all duration-300"
                          style={{ height: `${percentage}%` }}
                        >
                          {/* Tooltip */}
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-center">
                            {item.present} Present
                            <div className="absolute left-1/2 -bottom-1 w-2 h-2 bg-gray-800 transform rotate-45 -translate-x-1/2"></div>
                          </div>
                        </div>
                        {/* Day Label */}
                        <span className="absolute -bottom-6 text-xs text-gray-500">
                          {item.day}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 5. Brand Profile Snapshot */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 h-fit">
                <h3 className="md:text-lg font-semibold text-gray-800 mb-4">
                  Brand Profile
                </h3>
                <div className="space-y-3 text-xs md:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Brand Name:</span>
                    <span className="font-[500] text-gray-800">
                      {data.brandProfile.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Email:</span>
                    <span className="font-[500] text-gray-800">
                      {data.brandProfile.email}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Registration Date:</span>
                    <span className="font-[500] text-gray-800">
                      {data.brandProfile.registrationDate}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Total Staff:</span>
                    <span className="font-[500] text-gray-800">
                      {data.brandProfile.totalStaff}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Status:</span>
                    <span
                      className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                        data.brandProfile.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {data.brandProfile.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDashboard;
