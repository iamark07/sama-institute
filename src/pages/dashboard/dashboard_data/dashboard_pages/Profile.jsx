import React, { useState, useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = () => {
  const { studentData: user } = useOutletContext();

  const [editingSection, setEditingSection] = useState(null); // 'personal', 'academic', 'parent', 'security'
  const [editData, setEditData] = useState(JSON.parse(JSON.stringify(user))); // Deep copy
  const [imagePreview, setImagePreview] = useState(null);

  // Refs for focusing on the first input of each section
  const personalRef = useRef(null);
  const academicRef = useRef(null);
  const parentRef = useRef(null);
  const securityRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const refs = {
      personal: personalRef,
      academic: academicRef,
      parent: parentRef,
      security: securityRef,
    };
    if (editingSection && refs[editingSection]?.current) {
      refs[editingSection].current.focus();
    }
    // Reset data if no section is being edited
    if (!editingSection) {
      setEditData(JSON.parse(JSON.stringify(user)));
      setImagePreview(null);
    }
  }, [editingSection, user]);

  // Helper for editable fields
  const EditableField = ({ label, value, name, type = "text" }) => (
    <tr>
      <td className="py-2 pr-4 text-xs text-gray-400">{label}</td>
      <td className="py-2">
        {isEditing ? (
          <input
            type={type}
            name={name}
            value={editData[name] || ""}
            onChange={(e) =>
              setEditData({ ...editData, [name]: e.target.value })
            }
            className="w-full border px-7 py-2 md:py-2.5 text-sm md:text-base rounded-md border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
          />
        ) : (
          <span className="font-[500] text-gray-800 text-base">{value}</span>
        )}
      </td>
    </tr>
  );

  const handleSave = (section) => {
    console.log(`Saving ${section} data:`, editData);
    if (section === "profileImage") {
      // Here you would typically make an API call to upload the new image.
      // For this example, we'll just log it and update the state.
      console.log("New image to upload:", editData.profile);
    }
    setEditingSection(null);
    setImagePreview(null);
    // Here you would typically make an API call to save the data
  };

  const handleCancel = () => {
    setEditData(JSON.parse(JSON.stringify(user))); // Reset data from original user object
    setImagePreview(null);
    setEditingSection(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setEditData({ ...editData, profile: reader.result });
        setEditingSection("profileImage");
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => fileInputRef.current.click();

  const isSectionEditing = (section) => editingSection === section;

  // Personal Info fields
  const personalFields = [
    { label: "Full Name", value: user.personalInfo.fullName, name: "fullName" },
    { label: "Date of Birth", value: user.personalInfo.dob, name: "dob" },
    { label: "Gender", value: user.personalInfo.gender, name: "gender" },
    {
      label: "Blood Group",
      value: user.personalInfo.bloodGroup,
      name: "bloodGroup",
    },
    {
      label: "Contact Number",
      value: user.personalInfo.contact,
      name: "contact",
    },
    {
      label: "Alternate Contact",
      value: user.personalInfo.alternateContact,
      name: "alternateContact",
    },
    { label: "Address", value: user.personalInfo.address, name: "address" },
    { label: "Email", value: user.email, name: "email" },
  ];

  // Academic Info fields
  const academicFields = [
    {
      label: "Enrollment No.",
      value: user.academicInfo.enrollmentNo,
      name: "enrollmentNo",
    },
    { label: "Class", value: user.academicInfo.class, name: "class" },
    { label: "Section", value: user.academicInfo.section, name: "section" },
    { label: "Roll No.", value: user.academicInfo.rollNo, name: "rollNo" },
    { label: "Status", value: user.academicInfo.status, name: "status" },
  ];

  // Parent Info fields
  const parentFields = user.parents.map((p, i) => ({
    label: `${p.relation} Name`,
    value: p.name,
    name: `parent_${i}_name`,
    img: p.img,
    relation: p.relation,
  }));

  return (
    <div className="w-full min-h-screen bg-white relative">
      {/* Profile Header */}

      <div className="w-full relative py-8">
        <img
          src="/assets/img/bg-img/bg-5.jpg"
          alt=""
          className="w-full h-full absolute top-0 left-0 object-cover opacity-30"
        />
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative group z-10">
            <img
              src={imagePreview || user.profile}
              alt="Profile"
              className="w-32 h-32 rounded-md object-cover"
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
              accept="image/*"
            />
            <button
              onClick={triggerFileSelect}
              className="absolute inset-0 bg-black/70 bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-md"
            >
              <i className="ri-camera-line text-2xl"></i>
            </button>
          </div>
          {isSectionEditing("profileImage") && (
            <div className="flex justify-center gap-3 mt-4">
              <button
                onClick={handleCancel}
                className="text-xs text-gray-600 hover:text-gray-800 font-medium px-3 py-1 rounded-md bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSave("profileImage")}
                className="text-xs bg-blue-600 text-white font-medium px-3 py-1 rounded-md hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          )}
          <div className="flex items-center gap-2 mt-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              {user.name}
            </h2>
          </div>
          <div className="mt-2 text-xs font-medium text-white bg-blue-500 inline-block px-2 py-1 rounded-md">
            Class: {user.academicInfo.class} - Section{" "}
            {user.academicInfo.section}
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="w-full relative">
        <img
          src="/assets/img/bg-img/bg-4.jpg"
          alt="background"
          className="w-full h-full object-cover absolute top-0 left-0 opacity-20 grayscale-100"
        />
        <div className="w-full md:px-10 grid 2xl:grid-cols-2 gap-6 relative z-10 mt-8">
          <div>
            {/* Personal Details */}
            <div className="bg-white rounded-md border border-gray-200 p-0 overflow-hidden mb-6">
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                <h3 className="text-sm md:text-base font-[650] text-gray-800">
                  Personal Details
                </h3>
                <button
                  onClick={() =>
                    setEditingSection(
                      isSectionEditing("personal") ? null : "personal"
                    )
                  }
                  className="text-blue-600 hover:text-blue-800"
                  title="Edit Personal Details"
                >
                  <i className="ri-pencil-line text-lg"></i>
                </button>
              </div>

              <table className="w-full text-sm">
                <tbody>
                  {personalFields.map((field, idx) => (
                    <tr
                      key={field.name}
                      className={
                        idx !== personalFields.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }
                    >
                      <td className="py-4 px-6 text-gray-500 w-2/5 md:w-1/3 text-[10px] md:text-sm">
                        {field.label}
                      </td>
                      <td className="font-[500] text-gray-700">
                        <input
                          type="text"
                          name={field.name}
                          value={
                            isSectionEditing("personal")
                              ? editData.personalInfo[field.name] ??
                                editData[field.name] ??
                                ""
                              : field.value
                          }
                          readOnly={!isSectionEditing("personal")}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              personalInfo: {
                                ...editData.personalInfo,
                                [e.target.name]: e.target.value,
                              },
                            })
                          }
                          className={`w-full border-l px-6 py-4 text-[10px] md:text-sm focus:outline-none ${
                            isSectionEditing("personal")
                              ? "border-gray-200 bg-white"
                              : "border-transparent bg-transparent cursor-default"
                          }`}
                          ref={idx === 0 ? personalRef : null}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {isSectionEditing("personal") && (
                <div className="px-6 py-3 border-t border-gray-200 bg-[#fcfcfc] flex justify-end gap-3">
                  <button
                    onClick={handleCancel}
                    className="text-xs md:text-sm text-gray-600 hover:text-gray-800 font-medium px-4 py-1.5 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleSave("personal")}
                    className="text-xs md:text-sm bg-blue-600 text-white font-medium px-4 py-1.5 rounded-md hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
            {/* Security Settings */}
            <div className="bg-white rounded-md border border-gray-200 p-0 overflow-hidden mb-6">
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                <h3 className="text-sm md:text-base font-[650] text-gray-800">
                  Security Settings
                </h3>
                <button
                  onClick={() =>
                    setEditingSection(
                      isSectionEditing("security") ? null : "security"
                    )
                  }
                  className="text-blue-600 hover:text-blue-800"
                  title="Change Password"
                >
                  <i className="ri-pencil-line text-lg"></i>
                </button>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-500 w-2/5 md:w-1/3 text-[10px] md:text-sm">
                      Password
                    </td>
                    <td className="font-[500] text-gray-700">
                      <input
                        type="password"
                        name="password"
                        value={
                          isSectionEditing("security") ? "" : user.password
                        }
                        readOnly={!isSectionEditing("security")}
                        placeholder={
                          isSectionEditing("security") ? "Current Password" : ""
                        }
                        className={`w-full border-l px-6 py-4 text-[10px] md:text-sm focus:outline-none ${
                          isSectionEditing("security")
                            ? "border-gray-200 bg-white"
                            : "border-transparent bg-transparent cursor-default"
                        }`}
                        ref={securityRef}
                      />
                    </td>
                  </tr>
                  {isSectionEditing("security") && (
                    <tr>
                      <td className="py-4 px-6 text-gray-500 w-2/5 md:w-1/3 text-[10px] md:text-sm">
                        New Password
                      </td>
                      <td className="font-[500] text-gray-700">
                        <input
                          type="password"
                          name="newPassword"
                          placeholder="New Password"
                          className="border-l border-gray-200 px-6 py-4 text-[10px] md:text-sm w-full focus:outline-none"
                        />
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              {isSectionEditing("security") && (
                <div className="px-6 py-3 border-t border-gray-200 bg-[#fcfcfc] flex justify-between items-center gap-3">
                  <Link
                    to="/forgot-password"
                    className="text-[10px] md:text-xs text-blue-600 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                  <div className="flex gap-3">
                    <button
                      onClick={handleCancel}
                      className="text-xs md:text-sm text-gray-600 hover:text-gray-800 font-medium px-4 py-1.5 rounded-md"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSave("security")}
                      className="text-xs md:text-sm bg-blue-600 text-white font-medium px-4 py-1.5 rounded-md hover:bg-blue-700"
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            {/* Academic Details */}
            <div className="bg-white rounded-md border border-gray-200 p-0 overflow-hidden mb-6">
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                <h3 className="text-sm md:text-base font-[650] text-gray-800">
                  Academic Details
                </h3>
                <button
                  onClick={() =>
                    setEditingSection(
                      isSectionEditing("academic") ? null : "academic"
                    )
                  }
                  className="text-blue-600 hover:text-blue-800"
                  title="Edit Academic Details"
                >
                  <i className="ri-pencil-line text-lg"></i>
                </button>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {academicFields.map((field, idx) => (
                    <tr
                      key={field.name}
                      className={
                        idx !== academicFields.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }
                    >
                      <td className="py-4 px-6 text-gray-500 w-2/5 md:w-1/3 text-[10px] md:text-sm">
                        {field.label}
                      </td>
                      <td className="font-[500] text-gray-700">
                        <input
                          type="text"
                          name={field.name}
                          value={
                            isSectionEditing("academic")
                              ? editData.academicInfo[field.name] || ""
                              : field.value
                          }
                          readOnly={!isSectionEditing("academic")}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              academicInfo: {
                                ...editData.academicInfo,
                                [field.name]: e.target.value,
                              },
                            })
                          }
                          className={`w-full border-l px-6 py-4 text-[10px] md:text-sm focus:outline-none ${
                            isSectionEditing("academic")
                              ? "border-gray-200 bg-white"
                              : "border-transparent bg-transparent cursor-default"
                          }`}
                          ref={idx === 0 ? academicRef : null}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {isSectionEditing("academic") && (
                <div className="px-6 py-3 border-t border-gray-200 bg-gray-[#fcfcfc] flex justify-end gap-3">
                  <button
                    onClick={handleCancel}
                    className="text-xs md:text-sm text-gray-600 hover:text-gray-800 font-medium px-4 py-1.5 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleSave("academic")}
                    className="text-xs md:text-sm bg-blue-600 text-white font-medium px-4 py-1.5 rounded-md hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
            {/* Parent Details */}
            <div className="bg-white rounded-md border border-gray-200 p-0 overflow-hidden mb-6">
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                <h3 className="text-sm md:text-base font-[650] text-gray-800">
                  Parent's Information
                </h3>
                <button
                  onClick={() =>
                    setEditingSection(
                      isSectionEditing("parent") ? null : "parent"
                    )
                  }
                  className="text-blue-600 hover:text-blue-800"
                  title="Edit Parent's Information"
                >
                  <i className="ri-pencil-line text-lg"></i>
                </button>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {user.parents.map((p, i) => (
                    <tr
                      key={i}
                      className={
                        i !== user.parents.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }
                    >
                      <td className="py-4 px-6 text-gray-500 w-2/5 md:w-1/3 text-[10px] md:text-sm">
                        {p.relation}
                      </td>
                      <td className="font-[500] text-gray-700">
                        <div className="flex items-center gap-3">
                          <input
                            type="text"
                            value={
                              isSectionEditing("parent")
                                ? editData.parents?.[i]?.name || p.name
                                : p.name
                            }
                            readOnly={!isSectionEditing("parent")}
                            onChange={(e) => {
                              const updatedParents = [
                                ...(editData.parents || user.parents),
                              ];
                              updatedParents[i] = {
                                ...updatedParents[i],
                                name: e.target.value,
                              };
                              setEditData({
                                ...editData,
                                parents: updatedParents,
                              });
                            }}
                            className={`w-full border-l px-6 py-4 text-[10px] md:text-sm focus:outline-none ${
                              isSectionEditing("parent")
                                ? "border-gray-200 bg-white"
                                : "border-transparent bg-transparent cursor-default"
                            }`}
                            ref={i === 0 ? parentRef : null}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {isSectionEditing("parent") && (
                <div className="px-6 py-3 border-t border-gray-200 bg-[#fcfcfc] flex justify-end gap-3">
                  <button
                    onClick={handleCancel}
                    className="text-xs md:text-sm text-gray-600 hover:text-gray-800 font-medium px-4 py-1.5 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleSave("parent")}
                    className="text-xs md:text-sm bg-blue-600 text-white font-medium px-4 py-1.5 rounded-md hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
