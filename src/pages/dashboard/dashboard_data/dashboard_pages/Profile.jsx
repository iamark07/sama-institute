import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Profile = () => {
  // 1. Get the shared data from the parent layout's context.
  // The context provides `studentData`, which we alias to `user`.
  const { studentData: user } = useOutletContext();
  // State for managing UI interactions within this page.
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Helper component for displaying information fields.
  const InfoField = ({ label, value }) => (
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="font-[500] text-gray-800 text-base">{value}</p>
    </div>
  );

  return (
    // 2. The component now returns only its content, without the layout wrappers.
    <>
      <div className="container mx-auto lg:px-0 flex flex-col 2xl:flex-row gap-8">
        {/* Left Side (wider) */}
        <div className="w-full 2xl:w-[60%] flex flex-col gap-8 py-6 sm:py-10 px-5 sm:px-8 bg-white">
          {/* Top Info Row */}
          <div className="flex items-center justify-between mb-4">
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
          {/* Profile Card */}
          <div className="bg-white rounded-md px-4 py-6 sm:p-6 flex flex-col gap-4 border border-gray-200">
            <div className="flex flex-col md:flex-row xl:flex-col 2xl:flex-row items-center gap-6">
              <img
                src={user.profile}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border-4 border-blue-400"
              />
              <div className="text-sm text-gray-500 w-full">
                <div className="text-center md:text-left xl:text-center 2xl:text-left mb-5 md:mb-0 xl:mb-5 2xl:mb-0">
                  <div className="text-sm text-gray-500">{user.id}</div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                    {user.name}
                  </h2>
                  <div className="text-xs text-gray-400">{user.email}</div>
                  <div className="mt-2 text-xs font-medium text-white bg-blue-500 inline-block px-2 py-1 rounded">
                    {user.academicInfo.class} - Section{" "}
                    {user.academicInfo.section}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
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
          {/* Personal Information */}
          <div className="bg-white rounded-md border border-gray-200 px-4 py-6 sm:p-6">
            <h3 className="sm:text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
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
              <InfoField label="Gender" value={user.personalInfo.gender} />
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
          <div className="bg-white rounded-md border border-gray-200 px-4 py-6 sm:p-6">
            <h3 className="sm:text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
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
        {/* Right Side (narrower) */}
        <div className="w-full 2xl:w-[40%] flex flex-col gap-8 bg-transparent px-5 xl:pl-0 xl:pr-8 py-6 sm:py-8">
          {/* Parent/Guardian Information */}
          <div className="bg-white rounded-md border border-gray-200 px-4 py-6 sm:p-6">
            <h3 className="sm:text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
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
        <div className="container mx-auto lg:px-0 px-5 xl:pr-8">
          <div className="bg-white rounded-md border border-gray-200 px-4 py-6 sm:p-6 mt-8">
            <h3 className="sm:text-lg font-semibold text-gray-800 mb-4">
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
        </div>
      )}
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
    </>
  );
};

export default Profile;