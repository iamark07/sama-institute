// This object holds all the data for the Brand User dashboard.
export const brandDashboardData = {
  // 1. Brand Profile Snapshot
  brandProfile: {
    name: "Megamart 99",
    email: "contact@megamart99.com",
    registrationDate: "2023-10-01",
    totalStaff: 40,
    status: "Active",
    avatar: "https://i.pravatar.cc/150?u=megamart99",
  },

  // Summary Cards Data
  summary: {
    totalStaff: 40,
    activeStaff: 38,
    inactiveStaff: 2,
    todayAttendance: 35,
  },

  // 2. Attendance Overview
  attendanceOverview: {
    summary: {
      presentPercent: 87.5,
      absentPercent: 12.5,
    },
    recentEntries: [
      {
        id: "att-01",
        staffName: "John Doe",
        date: "2024-05-21",
        status: "Present",
        checkIn: "09:00 AM",
        checkOut: "06:05 PM",
      },
      {
        id: "att-02",
        staffName: "Jane Smith",
        date: "2024-05-21",
        status: "Present",
        checkIn: "08:55 AM",
        checkOut: "05:58 PM",
      },
      {
        id: "att-03",
        staffName: "Mike Johnson",
        date: "2024-05-21",
        status: "Absent",
        checkIn: "-",
        checkOut: "-",
      },
      {
        id: "att-04",
        staffName: "Emily Brown",
        date: "2024-05-20",
        status: "Present",
        checkIn: "09:02 AM",
        checkOut: "06:00 PM",
      },
    ],
  },

  // 3. Staff Overview / User Summary
  staffOverview: {
    staff: [
      {
        id: "user-01",
        name: "John Doe",
        role: "Manager",
        contact: "john.doe@megamart99.com",
        status: "Active",
        lastLogin: "2024-05-21 10:00 AM",
      },
      {
        id: "user-02",
        name: "Jane Smith",
        role: "Cashier",
        contact: "+91 9876543210",
        status: "Active",
        lastLogin: "2024-05-21 09:45 AM",
      },
      {
        id: "user-03",
        name: "Peter Jones",
        role: "Stocker",
        contact: "peter.jones@megamart99.com",
        status: "Inactive",
        lastLogin: "2024-05-15 03:12 PM",
      },
      {
        id: "user-04",
        name: "Mary Williams",
        role: "Supervisor",
        contact: "+91 9988776655",
        status: "Active",
        lastLogin: "2024-05-21 08:30 AM",
      },
    ],
  },

  // 6. Performance Overview Data
  performance: {
    attendanceTrend: [
      { day: "Mon", present: 35, total: 40 },
      { day: "Tue", present: 38, total: 40 },
      { day: "Wed", present: 32, total: 40 },
      { day: "Thu", present: 39, total: 40 },
      { day: "Fri", present: 37, total: 40 },
      { day: "Sat", present: 30, total: 40 },
      { day: "Sun", present: 25, total: 40 },
    ],
  },
};
