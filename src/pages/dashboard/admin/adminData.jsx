// This object holds all the data for the Admin dashboard.
// Exporting it allows us to import and use this data in any component.
export const adminDashboardData = {
  adminProfile: {
    name: "Admin",
    email: "admin@rapms.com",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  // Overview of all brands managed in the system
  brandsOverview: {
    totalBrands: 6,
    activeBrands: 5,
    inactiveBrands: 1,
    pendingRequests: 2,
    brands: [
      {
        id: "brand-01",
        name: "Megamart 99",
        email: "contact@megamart99.com",
        status: "Active",
        creationDate: "2023-10-01",
        website: "https://megamart99.com",
      },
      {
        id: "brand-02",
        name: "Gridxbazaar",
        email: "support@gridxbazaar.com",
        status: "Inactive",
        creationDate: "2023-09-15",
        website: "https://gridxbazaar.com",
      },
      {
        id: "brand-03",
        name: "Megamart Ventures",
        email: "info@megamartventures.com",
        status: "Active",
        creationDate: "2023-11-05",
        website: "https://megamartventures.com",
      },
      {
        id: "brand-04",
        name: "Sasta Kirana",
        email: "help@sastakirana.co",
        status: "Active",
        creationDate: "2024-01-10",
        website: "https://sastakirana.co",
      },
      {
        id: "brand-05",
        name: "Rapms360",
        email: "admin@rapms360.com",
        status: "Active",
        creationDate: "2024-02-20",
        website: "https://rapms360.com",
      },
      {
        id: "brand-06",
        name: "Varnika Glam",
        email: "hello@varnikaglam.in",
        status: "Active",
        creationDate: "2024-03-15",
        website: "https://varnikaglam.in",
      },
    ],
  },

  // Overview of all users/staff across all brands
  usersOverview: {
    totalUsers: 150,
    usersPerBrand: [
      { brandName: "Megamart 99", userCount: 40 },
      { brandName: "Gridxbazaar", userCount: 20 },
      { brandName: "Megamart Ventures", userCount: 35 },
      { brandName: "Sasta Kirana", userCount: 25 },
      { brandName: "Rapms360", userCount: 15 },
      { brandName: "Varnika Glam", userCount: 15 },
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
};