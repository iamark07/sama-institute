import React from "react";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const { studentData: user } = useOutletContext();

  return (
    <div className="container mx-auto lg:px-0 flex flex-col 2xl:flex-row gap-8">
      {/* Left Side (wider) */}
      <div className="w-full 2xl:w-[60%] flex flex-col gap-8 py-6 sm:py-10 px-5 sm:px-8 bg-white">
        {/* mobile Search bar */}
        <div className="flex xl:hidden items-center justify-between">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full border pl-11 pr-10 py-3 md:py-3.5 text-sm md:text-base rounded-md border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <i className="ri-search-line text-lg"></i>
            </span>
          </div>
        </div>
        {/* Top Info Row */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg md:text-2xl font-semibold text-gray-800">
              {user.id}
            </div>
            <div className="text-xs text-gray-400">
              Student unique identifier
            </div>
          </div>
          <div className="flex gap-3">
            <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#f3eeff] flex items-center justify-center transition">
              <i className="ri-phone-fill text-2xl text-purple-400"></i>
            </button>
          </div>
        </div>
        {/* Top Profile Card */}
        <div className="bg-white rounded-md px-4 py-6 sm:p-6 flex flex-col gap-4 border border-gray-200">
          <div className="flex flex-col md:flex-row xl:flex-col 2xl:flex-row items-center gap-6">
            <img
              src={user.profile}
              alt="Profile"
              className="w-32 h-32 rounded-md object-cover"
            />
            <div className="text-sm text-gray-500 w-full">
              <div className="text-center md:text-left xl:text-center 2xl:text-left mb-5 md:mb-0 xl:mb-5 2xl:mb-0">
                <div className="text-sm text-gray-500">{user.id}</div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                  {user.name}
                </h2>
                <div className="mt-2 text-xs font-medium text-white bg-blue-500 inline-block px-2 py-1 rounded">
                  Class: {user.academicInfo.class} - Section{" "}
                  {user.academicInfo.section}
                </div>
              </div>
              <div className="flex flex-wrap xl:flex-col 2xl:flex-row gap-4 md:gap-8 xl:gap-4 2xl:gap-8 mt-3 w-full">
                <div className="flex flex-col gap-1 text-gray-500">
                  Number{" "}
                  <span className="font-[500] text-gray-800">
                    {user.number}
                  </span>
                </div>
                <div className="flex flex-col gap-1 text-gray-500">
                  Email{" "}
                  <span className="font-[500] text-gray-800">
                    {user.email}
                  </span>
                </div>
                <div className="flex flex-col gap-1 text-gray-500">
                  Address{" "}
                  <span className="font-[500] text-gray-800">
                    {user.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-blue-100 rounded-lg p-4 flex flex-col justify-center text-center items-center gap-3">
              <div className="bg-blue-400 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <i className="ri-calendar-check-line text-xl"></i>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-800">
                  {user.attendance.total} Days
                </div>
                <div className="text-sm text-gray-900">Total Present</div>
              </div>
            </div>
            <div className="bg-green-100 rounded-lg p-4 flex flex-col justify-center text-center items-center gap-3">
              <div className="bg-green-400 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <i className="ri-time-line text-xl"></i>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-800">
                  {user.attendance.last} Days
                </div>
                <div className="text-sm text-gray-900">Last Session</div>
              </div>
            </div>
            <div className="bg-red-100 rounded-lg p-4 flex flex-col justify-center text-center items-center gap-3">
              <div className="bg-red-400 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <i className="ri-close-circle-line text-xl"></i>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-800">
                  {user.attendance.absent} Days
                </div>
                <div className="text-sm text-gray-900">Total Absent</div>
              </div>
            </div>
          </div>
        </div>
        {/* Academic Performance */}
        <div className="bg-white rounded-md border border-gray-200 px-4 sm:px-6 pt-6 pb-12 sm:pb-14">
          <div className="flex items-center justify-between mb-4">
            <h3 className="sm:text-lg font-semibold text-gray-800">
              Academic Performance
            </h3>
            <select className="border px-3 sm:px-4 py-2 text-xs sm:text-base rounded-md border-gray-300 focus:ring focus:ring-blue-400 outline-none transition cursor-pointer">
              <option>All</option>
            </select>
          </div>
          {/* New Attractive Bar Chart with Y-axis */}
          <div className="flex gap-2 sm:gap-4 mt-8">
            {/* Y-axis Labels */}
            <div className="flex flex-col justify-between h-48 text-[10px] sm:text-xs text-gray-500">
              <span>200</span>
              <span>150</span>
              <span>100</span>
              <span>50</span>
              <span>0</span>
            </div>
            <div className="relative h-48 w-full">
              {/* Background Lines */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="border-t border-dashed border-gray-200"
                  ></div>
                ))}
              </div>
              {/* Bars */}
              <div className="relative flex items-end gap-4 md:gap-8 h-full w-full">
                {user.grades.map((g, i) => (
                  <div
                    key={i}
                    className="group flex flex-col items-center flex-1 h-full justify-end"
                  >
                    <div
                      className="relative w-full flex justify-center"
                      style={{ height: "100%" }}
                    >
                      {/* Bar */}
                      <div
                        className={`self-end relative w-10 md:w-20 cursor-pointer rounded-t-md transition-all duration-500 ease-out group-hover:shadow-lg ${
                          [
                            "bg-blue-400",
                            "bg-pink-400",
                            "bg-yellow-400",
                            "bg-green-400",
                            "bg-purple-400",
                          ][i % 5]
                        }`}
                        style={{
                          height: `${(g.grade / 200) * 100}%`,
                          minHeight: "16px",
                        }}
                        title={`Grade ${g.grade}`}
                      >
                        {/* Tooltip */}
                        <div className="absolute -top-8 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          {g.grade} Grade
                          <div className="absolute left-1/2 -bottom-1 w-2 h-2 bg-gray-800 transform rotate-45 -translate-x-1/2"></div>
                        </div>
                      </div>
                    </div>
                    <span className="absolute -bottom-6 sm:-bottom-8 mt-3 text-[9px] sm:text-xs md:text-sm font-medium text-gray-600 text-center">
                      {g.subject}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Parent Info & Attendance Summary */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Parent Info */}
          <div className="flex-1 bg-white border border-gray-200 rounded-md px-4 py-6 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                Parent's Information
              </h4>
            </div>
            <div className="flex flex-col gap-3">
              {user.parents.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-pink-50 rounded-md px-3 py-3 "
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-sm sm:text-base text-gray-800">
                      {p.name}
                    </div>
                    <div className="text-xs text-gray-600">
                      {p.relation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Attendance Summary */}
          <div className="flex-1 bg-purple-50 rounded-md px-4 py-6 sm:p-6 flex flex-col items-center">
            <div className="flex items-center justify-between w-full mb-4">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                Attendance Summary
              </h4>
            </div>
            <div className="relative w-28 h-28 mb-2">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#e5e7eb"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#7c3aed"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="251.2"
                  strokeDashoffset={
                    251.2 - (251.2 * user.attendance.percent) / 100
                  }
                  strokeLinecap="round"
                />
                <text
                  x="50"
                  y="55"
                  textAnchor="middle"
                  fontSize="22"
                  fill="#7c3aed"
                  fontWeight="bold"
                >
                  {user.attendance.percent}%
                </text>
              </svg>
            </div>
            <div className="flex gap-4 mt-2 text-xs">
              <span className="flex items-center gap-1 text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                Present {user.attendance.total * 5}
              </span>
              <span className="flex items-center gap-1 text-red-500">
                <span className="w-2 h-2 bg-red-500 rounded-full inline-block"></span>
                Absent {user.attendance.absent * 5}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Right Side (narrower) */}
      <div className="w-full 2xl:w-[40%] flex flex-col gap-8 bg-transparent px-5 xl:pl-0 xl:pr-8 py-6 sm:py-8">
        {/* Desktop Search bar */}
        <div className="hidden xl:flex items-center justify-between bg-white rounded-md border border-gray-200 px-4 py-6 sm:p-6 w-full">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full border pl-11 pr-10 py-3 md:py-3.5 text-sm md:text-base rounded-md border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 mt-[1px]">
              <i className="ri-search-line text-xl"></i>
            </span>
          </div>
        </div>
        {/* Grades & Assignments */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-md font-semibold text-gray-800">
              Grades & Assignments
            </h4>
          </div>
          <div className="bg-white rounded-md border border-gray-200 px-4 py-6 sm:p-6 w-full">
            <div className="overflow-x-auto table-scroll w-full">
              <table className="text-xs sm:text-sm table-auto w-full">
                <thead>
                  <tr className="text-gray-500">
                    <th className="p-2 font-[500] whitespace-nowrap text-left">
                      Subject
                    </th>
                    <th className="p-2 font-[500] whitespace-nowrap text-left">
                      Last Grade
                    </th>
                    <th className="p-2 font-[500] whitespace-nowrap text-left">
                      Avg Grade
                    </th>
                    <th className="p-2 font-[500] whitespace-nowrap text-left">
                      Improvement
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {user.assignments.map((a, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      <td className="p-2.5 whitespace-nowrap font-[500]">
                        {a.subject}
                      </td>
                      <td className="p-2.5 whitespace-nowrap">
                        {a.last}
                      </td>
                      <td className="p-2.5 whitespace-nowrap">{a.avg}</td>
                      <td
                        className={`p-2.5 whitespace-nowrap font-[500] ${
                          a.improvement === "Improved"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {a.improvement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white rounded-md border border-gray-200 px-4 py-6 sm:p-6 mt-8 w-full">
            <div className="overflow-x-auto  table-scroll w-full">
              <table className="text-xs sm:text-sm table-auto w-full">
                <thead>
                  <tr className="text-gray-500">
                    <th className="p-2 font-[500] whitespace-nowrap text-left">
                      Subject
                    </th>
                    <th className="p-2 font-[500] whitespace-nowrap text-left">
                      Task
                    </th>
                    <th className="p-2 font-[500] whitespace-nowrap text-left">
                      Due Date
                    </th>
                    <th className="p-2 font-[500] whitespace-nowrap text-left">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {user.tasks.map((t, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      <td className="p-2.5 whitespace-nowrap font-[500]">
                        {t.subject}
                      </td>
                      <td className="p-2.5 whitespace-nowrap">
                        {t.task}
                      </td>
                      <td className="p-2.5 whitespace-nowrap">{t.due}</td>
                      <td
                        className={`p-2.5 whitespace-nowrap font-[500] ${
                          t.status === "Completed"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {t.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Recent Notice */}
        <div className="relative flex justify-center">
          <h4 className="text-lg font-semibold text-gray-800 tracking-tight text-center px-5 bg-gray-50 w-fit">
            Recent Notice
          </h4>
          <span className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[1px] bg-gray-200"></span>
        </div>
        <div className="flex items-center justify-between mb-6 bg-white rounded-md border border-gray-200 px-4 py-6 sm:p-6">
          {user.notices.map((n, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={n.avatar}
                    alt={n.name}
                    className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">
                      {n.name}
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-400">
                      {n.role}
                    </div>
                  </div>
                </div>
                <button className="flex items-center mt-2 gap-1 text-gray-400 hover:text-blue-500 text-xs sm:text-sm font-medium">
                  <span className="sm:text-lg font-[500]">+</span> Comment
                </button>
              </div>
              <div className="bg-gray-50 rounded-md px-4 py-3">
                <div className="flex gap-5 w-full justify-between mb-2">
                  <div className="text-blue-600 font-semibold text-base cursor-pointer mb-1">
                    {n.title}
                  </div>
                  <div className="text-xs text-gray-400 whitespace-nowrap ml-4">
                    {n.date}
                  </div>
                </div>
                <div className="text-gray-600 text-xs">{n.desc}</div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-2 sm:gap-6 text-sm sm:text-base">
                  <span className="flex items-center gap-1 text-yellow-500 font-medium">
                    <span role="img" aria-label="like">
                      👍
                    </span>{" "}
                    {n.likes}
                  </span>
                  <span className="flex items-center gap-1 text-red-500 font-medium">
                    <span role="img" aria-label="love">
                      ❤️
                    </span>{" "}
                    {n.loves}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-[11px] sm:text-sm">
                  <span>{n.comments} comments</span>
                  <span className="flex -space-x-2 ml-2">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt=""
                      className="w-7 h-7 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt=""
                      className="w-7 h-7 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/45.jpg"
                      alt=""
                      className="w-7 h-7 rounded-full border-2 border-white"
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
