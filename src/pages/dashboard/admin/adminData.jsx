// This object holds all the data for the Admin dashboard.
// Exporting it allows us to import and use this data in any component.
export const adminDashboardData = {
  // role: "admin", // The role of the current user

  // Overview of all brands managed in the system
  brandsOverview: {
    totalBrands: 5,
    activeBrands: 4,
    inactiveBrands: 1,
    brands: [
      {
        id: "brand-01",
        name: "Brand A",
        status: "Active",
        creationDate: "2023-10-01",
      },
      {
        id: "brand-02",
        name: "Brand B",
        status: "Inactive",
        creationDate: "2023-09-15",
      },
      {
        id: "brand-03",
        name: "Brand C",
        status: "Active",
        creationDate: "2023-11-05",
      },
      {
        id: "brand-04",
        name: "Brand D",
        status: "Active",
        creationDate: "2024-01-10",
      },
      {
        id: "brand-05",
        name: "Brand E",
        status: "Active",
        creationDate: "2024-02-20",
      },
    ],
  },

  // Overview of all users/staff across all brands
  usersOverview: {
    totalUsers: 150,
    usersPerBrand: [
      { brandName: "Brand A", userCount: 50 },
      { brandName: "Brand B", userCount: 30 },
      { brandName: "Brand C", userCount: 70 },
    ],
  },

  // Summary of staff attendance
  staffAttendance: {
    summaryPerBrand: [
      {
        brandName: "Brand A",
        today: { present: 48, absent: 2 },
        thisMonth: { present: 1200, absent: 50 },
      },
      {
        brandName: "Brand B",
        today: { present: 28, absent: 2 },
        thisMonth: { present: 800, absent: 40 },
      },
    ],
  },

  // A log of recent activities for the admin to see
  recentActivities: [
    {
      type: "new_brand",
      description: "Brand D was added to the system.",
      date: "2024-01-10",
    },
    {
      type: "user_update",
      description: "John Doe from Brand A updated their profile.",
      date: "2024-01-09",
    },
    {
      type: "alert",
      description: "Brand B subscription is expiring soon.",
      date: "2024-01-08",
    },
  ],
};