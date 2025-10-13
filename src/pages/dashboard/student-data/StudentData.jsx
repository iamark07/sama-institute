// This object holds all the information for a single student.
// Exporting it allows us to import and use this data in any component.
export const studentData = {
  role: "student",
  id: "UNI - 2456826",
  name: "Shubham Ray",
  number: "+91 6325343125",
  email: "shubhamray@gmail.com",
  address: "245 Delo Street, New York, USA",
  password: "password@123",
  profile: "https://randomuser.me/api/portraits/men/32.jpg",
  personalInfo: {
    fullName: "Shubham Ray",
    dob: "15 Aug, 2008",
    gender: "Male",
    bloodGroup: "B+",
    contact: "+91 6325343125",
    alternateContact: "+91 9876543210",
    address: "245 Delo Street, New York, USA",
  },
  academicInfo: {
    enrollmentNo: "UNI - 2456826",
    class: "10th",
    section: "A",
    rollNo: "25",
    admissionDate: "12 Apr, 2020",
    status: "Active",
  },
  parentInfo: {
    father: {
      name: "Ramesh Ray",
      occupation: "Software Engineer",
      contact: "+91 9876543211",
    },
    mother: {
      name: "Shrishti Singh",
      occupation: "Doctor",
      contact: "+91 9876543212",
    },
    guardian: {
      name: "Suresh Ray",
      relation: "Uncle",
      contact: "+91 9876543213",
    },
  },
  fees: {
    totalFees: 50000,
    paid: 30000,
    due: 20000,
    transactions: [
      { id: "TXN12345", date: "15 Apr, 2024", amount: 15000, status: "Paid" },
      { id: "TXN12346", date: "15 May, 2024", amount: 15000, status: "Paid" },
      { id: "TXN12347", date: "15 Jun, 2024", amount: 10000, status: "Upcoming" },
    ],
  },
  attendance: { total: 25, last: 10, absent: 2, percent: 85 },
  parents: [
    {
      name: "Shrishti Singh",
      relation: "Mother",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Ramesh Ray",
      relation: "Father",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ],
  grades: [
    { subject: "Mathematics", grade: 160 },
    { subject: "English", grade: 200 },
    { subject: "Science", grade: 80 },
    { subject: "ICT", grade: 70 },
    { subject: "Sports", grade: 50 },
  ],
  assignments: [
    { subject: "Mathematics", last: "A", avg: "B+", improvement: "Improved" },
    { subject: "English", last: "B+", avg: "B", improvement: "Stable" },
    { subject: "Science", last: "C", avg: "A", improvement: "Improved" },
    { subject: "Sports", last: "A", avg: "A", improvement: "Improved" },
  ],
  notices: [
    {
      name: "Barney Rojas",
      role: "English teacher",
      avatar: "https://randomuser.me/api/portraits/men/36.jpg",
      title: "Book Fair",
      date: "23, sep,2025",
      desc: "Your education path is an adventure filled with challenges, opportunities, and endless possibilities. Embrace each moment, stay focused.",
      likes: 10,
      loves: 9,
      comments: 24,
    },
  ],
};