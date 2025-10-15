import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const OrganizationRegistration = () => {
  const initialState = {
    organizationName: "",
    organizationType: "",
    street: "",
    city: "",
    state: "",
    pinCode: "",
    adminName: "",
    email: "",
    phone: "",
    memberCount: "",
    plan: "Free",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [logoPreview, setLogoPreview] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error'
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setLogoPreview(URL.createObjectURL(file));
    } else {
      setLogoPreview(null);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.organizationName) newErrors.organizationName = "Organization Name is required.";
    if (!formData.organizationType) newErrors.organizationType = "Organization Type is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus(null);
    if (validateForm()) {
      console.log("Form Submitted:", {
        ...formData,
        logo: fileInputRef.current?.files[0],
      });
      // Simulate API call
      setTimeout(() => {
        setSubmissionStatus("success");
        handleReset();
      }, 1000);
    } else {
      console.log("Validation Failed");
      setSubmissionStatus("error");
    }
  };

  const handleReset = () => {
    setFormData(initialState);
    setErrors({});
    setLogoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="p-6">
      {/* Header and Breadcrumbs */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Register Your Organization
        </h1>
        <nav
          className="text-sm font-medium text-gray-500 mt-2"
          aria-label="Breadcrumb"
        >
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/organization/dashboard" className="hover:text-blue-600">
                Dashboard
              </Link>
              <i className="ri-arrow-right-s-line mx-2"></i>
            </li>
            <li>Organization Registration</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="grid gap-8">
        {/* Form Area */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 rounded-md border border-gray-200 space-y-6"
            noValidate
          >
            {/* Notifications */}
            {submissionStatus === "success" && (
              <div
                className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
                role="alert"
              >
                <p className="font-bold">Success!</p>
                <p>Your organization has been registered successfully.</p>
              </div>
            )}
            {submissionStatus === "error" &&
              Object.keys(errors).length > 0 && (
                <div
                  className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
                  role="alert"
                >
                  <p className="font-bold">Error</p>
                  <p>Please fill in all required fields.</p>
                </div>
              )}

            {/* School Details */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Organization Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="organizationName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Organization Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleChange}
                    placeholder="e.g. xyz public school"
                    className={`w-full px-4 py-2.5 text-sm rounded-md border ${
                      errors.organizationName
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:ring focus:ring-blue-400 focus:border-blue-500 outline-none transition`}
                    required
                  />
                  {errors.organizationName && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.organizationName}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="organizationType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Organization Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="organizationType"
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 text-sm rounded-md border ${
                      errors.organizationType
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:ring focus:ring-blue-400 focus:border-blue-500 outline-none transition`}
                    required
                  >
                    <option value="">Select School Type</option>
                    {["School", "College", "Institute", "Coaching Center", "Other"].map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.organizationType && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.organizationType}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label
                    htmlFor="street"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Street
                  </label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    placeholder="Street Address"
                    className="w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State / Province"
                    className="w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pinCode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pin Code
                  </label>
                  <input
                    type="number"
                    id="pinCode"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    placeholder="Pin Code"
                    className="w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Contact Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="adminName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Admin / Owner Name
                  </label>
                  <input
                    type="text"
                    id="adminName"
                    name="adminName"
                    value={formData.adminName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="admin@example.com"
                    className="w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="memberCount"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Total Members / Students
                  </label>
                  <input
                    type="number"
                    id="memberCount"
                    name="memberCount"
                    value={formData.memberCount}
                    onChange={handleChange}
                    placeholder="Optional"
                    className="w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* Other Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Other Details
              </h2>
              <div className="space-y-6">
                {" "}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Organization Logo
                  </label>
                  <div className="flex items-center gap-4">
                    {logoPreview && (
                      <img
                        src={logoPreview}
                        alt="Logo Preview"
                        className="w-16 h-16 rounded-full object-cover border border-gray-300"
                      />
                    )}
                    <input
                      type="file"
                      id="logo"
                      name="logo"
                      onChange={handleFileChange}
                      accept="image/*"
                      ref={fileInputRef}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                  {errors.logo && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.logo}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    System Plan / Package
                  </label>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {["Free", "Premium", "Custom"].map((plan) => (
                      <label
                        key={plan}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="plan"
                          value={plan}
                          checked={formData.plan === plan}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-800">
                          {plan}
                        </span>
                      </label>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Choose the plan that best fits your organization’s needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition"
              >
                Reset Form
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
              >
                Register Organization
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrganizationRegistration;
