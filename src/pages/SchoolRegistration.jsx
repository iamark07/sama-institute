import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

// Reusable Input Component
const Input = ({ label, name, type, value, onChange, placeholder, error, required }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-2.5 text-sm rounded-md border ${
        error ? "border-red-500" : "border-gray-300"
      } focus:ring focus:ring-blue-400 focus:border-blue-500 outline-none transition`}
      aria-required={required}
    />
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

// Reusable Select Component
const Select = ({ label, name, value, onChange, options, error, required }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2.5 text-sm rounded-md border ${
        error ? "border-red-500" : "border-gray-300"
      } focus:ring focus:ring-blue-400 focus:border-blue-500 outline-none transition`}
      aria-required={required}
    >
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

// Reusable File Input Component
const FileInput = ({ label, name, onChange, preview, error }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="flex items-center gap-4">
      {preview && (
        <img src={preview} alt="Logo Preview" className="w-16 h-16 rounded-full object-cover border border-gray-300" />
      )}
      <input
        type="file"
        id={name}
        name={name}
        onChange={onChange}
        accept="image/*"
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    </div>
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

const SchoolRegistration = () => {
  const initialState = {
    schoolName: "",
    schoolType: "",
    street: "",
    city: "",
    state: "",
    pinCode: "",
    adminName: "",
    email: "",
    phone: "",
    studentCount: "",
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

  // const validateForm = () => {
  //   const newErrors = {};
  //   if (!formData.schoolName) newErrors.schoolName = "School Name is required.";
  //   if (!formData.schoolType) newErrors.schoolType = "School Type is required.";
  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus(null);
    // Validation logic is commented out as requested.
    // if (validateForm()) {
    console.log("Form Submitted:", { ...formData, logo: fileInputRef.current?.files[0] });
    // Simulate API call
    setTimeout(() => {
      setSubmissionStatus("success");
      handleReset();
    }, 1000);
    // } else {
    //   console.log("Validation Failed");
    //   setSubmissionStatus("error");
    // }
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
    <>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header and Breadcrumbs */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Register Your School</h1>
            <nav className="text-sm font-medium text-gray-500 mt-2" aria-label="Breadcrumb">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link to="/" className="hover:text-blue-600">Home</Link>
                  <i className="ri-arrow-right-s-line mx-2"></i>
                </li>
                <li>School Registration</li>
              </ol>
            </nav>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Area */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-md space-y-6"
                noValidate
              >
                {/* Notifications */}
                {submissionStatus === "success" && (
                  <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                    <p className="font-bold">Success!</p>
                    <p>Your school has been registered successfully.</p>
                  </div>
                )}
                {submissionStatus === "error" && Object.keys(errors).length > 0 && (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                    <p className="font-bold">Error</p>
                    <p>Please fill in all required fields.</p>
                  </div>
                )}

                {/* School Details */}
                <div className="border-b border-gray-200 pb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">School Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="School Name"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      placeholder="e.g., Sama International School"
                      error={errors.schoolName}
                      required
                    />
                    <Select
                      label="School Type"
                      name="schoolType"
                      value={formData.schoolType}
                      onChange={handleChange}
                      options={["Public", "Private", "International"]}
                      error={errors.schoolType}
                      required
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="border-b border-gray-200 pb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Address</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <Input label="Street" name="street" value={formData.street} onChange={handleChange} placeholder="Street Address" />
                    </div>
                    <Input label="City" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
                    <Input label="State" name="state" value={formData.state} onChange={handleChange} placeholder="State / Province" />
                    <Input label="Pin Code" name="pinCode" type="number" value={formData.pinCode} onChange={handleChange} placeholder="Pin Code" />
                  </div>
                </div>

                {/* Contact Details */}
                <div className="border-b border-gray-200 pb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Principal / Admin Name" name="adminName" value={formData.adminName} onChange={handleChange} placeholder="Full Name" />
                    <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="admin@example.com" />
                    <Input label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" />
                    <Input label="Number of Students" name="studentCount" type="number" value={formData.studentCount} onChange={handleChange} placeholder="Optional" />
                  </div>
                </div>

                {/* Other Details */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Other Details</h2>
                  <div className="space-y-6">
                    <FileInput label="School Logo" name="logo" onChange={handleFileChange} preview={logoPreview} ref={fileInputRef} />
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">System Plan / Package</label>
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {["Free", "Premium", "Custom"].map((plan) => (
                          <label key={plan} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="plan"
                              value={plan}
                              checked={formData.plan === plan}
                              onChange={handleChange}
                              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-800">{plan}</span>
                          </label>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">Choose the plan that best fits your school's needs.</p>
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition"
                  >
                    Reset Form
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
                  >
                    Register School
                  </button>
                </div>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-blue-800">Why Register with Us?</h3>
                <ul className="space-y-3 text-sm text-blue-700">
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-blue-600 mt-1 mr-2"></i>
                    <span>Streamline all your administrative tasks in one place.</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-blue-600 mt-1 mr-2"></i>
                    <span>Enhance communication between teachers, students, and parents.</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-blue-600 mt-1 mr-2"></i>
                    <span>Access powerful analytics and reporting tools.</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-blue-600 mt-1 mr-2"></i>
                    <span>Secure, reliable, and easy-to-use platform.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white mt-auto py-4 border-t">
          <div className="container mx-auto px-4 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Sama Institute. All Rights Reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default SchoolRegistration;