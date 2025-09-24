import React, { useState } from "react";
import Sidebar from "../../components/dashboardComponents/Sidebar.jsx";
import Header from "../../components/dashboardComponents/Header.jsx";

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const user = {
    id: "UNI - 2456826",
    name: "Shubham Ray",
    email: "shubhamray@gmail.com",
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
      class: "10th Grade",
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
  };

  const InfoField = ({ label, value }) => (
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="font-semibold text-gray-700 text-base">{value}</p>
    </div>
  );

  return (
    <div className="relative flex bg-gray-50 min-h-screen">
      <img
        src="assets/img/bg-img/bg-4.jpg"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-10"
        alt="background"
      />
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        userRole="student"
      />

      {/* Main Layout */}
      <div className="w-full flex flex-col relative z-10">
        <Header setSidebarOpen={setSidebarOpen} userName={user.name} />
        <main className="w-full">
          <div className="max-w-7xl mx-auto p-4 md:p-8">
            {/* Profile Header */}
            <div className="bg-white rounded-2xl shadow p-6 mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <img
                    src={user.profile}
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover border-4 border-blue-400"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {user.name}
                    </h2>
                    <p className="text-sm text-gray-400">{user.id}</p>
                    <p className="text-sm text-gray-400">{user.email}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="px-5 py-2 text-sm font-semibold text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 shadow transition"
                  >
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    className="px-5 py-2 text-sm font-semibold text-red-600 bg-red-50 rounded-lg hover:bg-red-100 shadow transition"
                  >
                    Delete Profile
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                {/* Personal Information */}
                <div className="bg-white rounded-2xl shadow p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InfoField
                      label="Full Name"
                      value={user.personalInfo.fullName}
                    />
                    <InfoField
                      label="Date of Birth"
                      value={user.personalInfo.dob}
                    />
                    <InfoField
                      label="Gender"
                      value={user.personalInfo.gender}
                    />
                    <InfoField
                      label="Blood Group"
                      value={user.personalInfo.bloodGroup}
                    />
                    <InfoField
                      label="Contact Number"
                      value={user.personalInfo.contact}
                    />
                    <InfoField
                      label="Alternate Contact"
                      value={user.personalInfo.alternateContact}
                    />
                    <div className="sm:col-span-2">
                      <InfoField
                        label="Address"
                        value={user.personalInfo.address}
                      />
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div className="bg-white rounded-2xl shadow p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
                    Academic Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InfoField
                      label="Enrollment Number"
                      value={user.academicInfo.enrollmentNo}
                    />
                    <InfoField
                      label="Class / Grade"
                      value={user.academicInfo.class}
                    />
                    <InfoField
                      label="Section"
                      value={user.academicInfo.section}
                    />
                    <InfoField
                      label="Roll Number"
                      value={user.academicInfo.rollNo}
                    />
                    <InfoField
                      label="Admission Date"
                      value={user.academicInfo.admissionDate}
                    />
                    <InfoField
                      label="Current Status"
                      value={user.academicInfo.status}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-1">
                {/* Parent/Guardian Information */}
                <div className="bg-white rounded-2xl shadow p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
                    Parent/Guardian Information
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">
                        Father's Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <InfoField
                          label="Name"
                          value={user.parentInfo.father.name}
                        />
                        <InfoField
                          label="Occupation"
                          value={user.parentInfo.father.occupation}
                        />
                        <InfoField
                          label="Contact"
                          value={user.parentInfo.father.contact}
                        />
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-semibold text-gray-700 mb-2">
                        Mother's Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <InfoField
                          label="Name"
                          value={user.parentInfo.mother.name}
                        />
                        <InfoField
                          label="Occupation"
                          value={user.parentInfo.mother.occupation}
                        />
                        <InfoField
                          label="Contact"
                          value={user.parentInfo.mother.contact}
                        />
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-semibold text-gray-700 mb-2">
                        Guardian's Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <InfoField
                          label="Name"
                          value={user.parentInfo.guardian.name}
                        />
                        <InfoField
                          label="Relation"
                          value={user.parentInfo.guardian.relation}
                        />
                        <InfoField
                          label="Contact"
                          value={user.parentInfo.guardian.contact}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Section */}
            {isEditing && (
              <div className="bg-white rounded-2xl shadow p-6 mt-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Actions
                </h3>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow transition">
                    Save Changes
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 shadow transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-sm w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Confirm Deletion
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this profile? This action cannot
              be undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 shadow transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  /* Handle delete logic here */
                  setShowDeleteModal(false);
                }}
                className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 shadow transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;