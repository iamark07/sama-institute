import React, { useState } from "react";
import { Link } from "react-router-dom";
// import leftImg from "../assets/img/register-side.png"; // Add your left image here
// import logo from "../assets/img/logo/sama-institute-logo.png"; // Add your logo here

const initialStudent = {
  role: "student",
  fullName: "",
  class: "",
  mobile: "",
  email: "",
  password: "",
};

const initialParent = {
  role: "parent",
  parentName: "",
  email: "",
  mobile: "",
  password: "",
  childName: "",
  childClass: "",
};

function Register() {
  const [role, setRole] = useState("student");
  const [form, setForm] = useState(initialStudent);
  const [showPassword, setShowPassword] = useState(false);

  // Handle role switch and reset form
  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setForm(newRole === "student" ? initialStudent : initialParent);
  };

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // You can add validation here if needed
  };

  return (
    <div className="relative">
      <img
        src="assets/img/bg-img/bg-4.jpg"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-30 grayscale-100"
        alt=""
      />
      <div className="container mx-auto md:px-10 px-5 py-14 relative z-10 flex items-center justify-center">
        <div className="w-full max-w-9xl bg-white border border-gray-200 grid xl:grid-cols-11 overflow-hidden">
          {/* Left Side Image & Text */}
          <div className="xl:col-span-4 hidden xl:flex flex-col justify-between bg-blue-50 py-10 px-7 relative">
            <img
              src="assets/img/bg-img/bg-2.jpg"
              alt="School ERP Illustration"
              className="absolute top-0 left-0 w-full h-full object-cover object-[-220px_0px]"
            />
            {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
          </div>
          {/* Right Side Form */}
          <div className="xl:col-span-7 flex flex-col justify-center px-6 md:px-10 py-10 lg:px-16">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Register Now
            </h2>
            <p className="text-center text-gray-400 mb-6 text-sm md:text-base">
              Choose your category to access tailored features and resources
            </p>
            {/* Role Selector */}
            <div className="flex justify-center gap-4 mb-7">
              <button
                type="button"
                onClick={() => handleRoleChange("student")}
                className={`cursor-pointer flex items-center gap-1 sm:gap-2 px-5 py-3 rounded-md border font-medium text-xs sm:text-sm transition
                    ${
                      role === "student"
                        ? "bg-blue-50 border-blue-500 text-blue-700 shadow ring ring-blue-300"
                        : "bg-gray-50 border-gray-200 text-gray-500 hover:border-blue-300"
                    }
                `}
              >
                <span
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-0.5
                    ${
                      role === "student" ? "border-blue-600" : "border-gray-300"
                    }
                    `}
                >
                  {role === "student" && (
                    <span className="w-3 h-3 bg-blue-600 rounded-full block"></span>
                  )}
                </span>
                <span role="img" aria-label="student" className="mr-1">
                  <img
                    src="assets/img/other-objects/student.png"
                    className="w-5 hidden sm:block"
                    alt=""
                  />
                </span>
                <div className="flex">
                  <span className="hidden sm:block mr-0.5">I'M A</span> STUDENT
                </div>
              </button>
              <button
                type="button"
                onClick={() => handleRoleChange("parent")}
                className={`cursor-pointer flex items-center gap-1 sm:gap-2 px-5 py-3 rounded-md border font-medium text-xs sm:text-sm transition
                    ${
                      role === "parent"
                        ? "bg-blue-50 border-blue-500 text-blue-700 shadow ring ring-blue-300"
                        : "bg-gray-50 border-gray-200 text-gray-500 hover:border-blue-300"
                    }
                `}
              >
                <span
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-0.5
                    ${role === "parent" ? "border-blue-600" : "border-gray-300"}
                    `}
                >
                  {role === "parent" && (
                    <span className="w-3 h-3 bg-blue-600 rounded-full block"></span>
                  )}
                </span>
                <span role="img" aria-label="parent" className="mr-1">
                  <img
                    src="assets/img/other-objects/parents.png"
                    className="w-5 hidden sm:block"
                    alt=""
                  />
                </span>
                <div className="flex">
                  <span className="hidden sm:block mr-0.5">I'M A</span> PARENT
                </div>
              </button>
            </div>
            {/* Registration Form */}
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {role === "student" ? (
                  <>
                    <div className="md:col-span-2">
                      <label className="block mb-1 font-medium text-gray-700 text-xs md:text-sm">
                        FULL NAME
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i className="ri-user-line text-gray-400 text-lg md:text-xl"></i>
                        </div>
                        <input
                          type="text"
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 md:py-3.5 text-sm md:text-base rounded-md border border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1 font-medium text-gray-700 text-xs md:text-sm">
                        CLASS
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i className="ri-book-read-line text-gray-400 text-lg md:text-xl"></i>
                        </div>
                        <select
                          name="class"
                          value={form.class}
                          onChange={handleChange}
                          className={`cursor-pointer w-full pl-11 pr-10 py-3 md:py-3.5 text-sm md:text-base rounded-md border border-gray-300 focus:ring focus:ring-blue-400 outline-none transition appearance-none ${
                            form.class ? "text-gray-800" : "text-gray-400"
                          }`}
                        >
                          <option value="">Select Class</option>
                          {[8, 9, 10, 11, 12].map((cls) => (
                            <option key={cls} value={cls}>
                              {cls}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <i className="ri-arrow-down-s-line text-gray-400 text-lg md:text-xl"></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1 font-medium text-gray-700 text-xs md:text-sm">
                        MOBILE
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i className="ri-phone-line text-gray-400 text-lg md:text-xl"></i>
                        </div>
                        <input
                          type="tel"
                          name="mobile"
                          value={form.mobile}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 md:py-3.5 text-sm md:text-base rounded-md border border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
                          placeholder="Enter your mobile number"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block mb-1 font-medium text-gray-700 text-xs md:text-sm">
                        EMAIL
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i className="ri-mail-line text-gray-400 text-lg md:text-xl"></i>
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 md:py-3.5 text-sm md:text-base rounded-md border border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block mb-1 font-medium text-gray-700 text-xs md:text-sm">
                        PASSWORD
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i className="ri-lock-line text-gray-400 text-lg md:text-xl"></i>
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={form.password}
                          onChange={handleChange}
                          className="w-full pl-11 pr-10 py-3 md:py-3.5 text-sm md:text-base rounded-md border border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
                          placeholder="Create a password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3"
                        >
                          <i className={`text-gray-500 text-lg md:text-xl ${showPassword ? "ri-eye-line" : "ri-eye-off-line"}`}></i>
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:col-span-2">
                      <label className="block mb-1 font-medium text-gray-700 text-xs md:text-sm">
                        PARENT FULL NAME
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i className="ri-user-line text-gray-400 text-lg md:text-xl"></i>
                        </div>
                        <input
                          type="text"
                          name="parentName"
                          value={form.parentName}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 md:py-3.5 text-sm md:text-base rounded-md border border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-1 font-medium text-gray-700 text-xs md:text-sm">
                        CHILD CLASS
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i className="ri-book-read-line text-gray-400 text-lg md:text-xl"></i>
                        </div>
                        <select
                          name="childClass"
                          value={form.childClass}
                          onChange={handleChange}
                          className={`w-full pl-11 pr-10 py-3 md:py-3.5 text-sm md:text-base rounded-md border border-gray-300 focus:ring focus:ring-blue-400 outline-none transition appearance-none ${
                            form.childClass ? "text-gray-800" : "text-gray-400"
                          }`}
                        >
                          <option value="">Select Class</option>
                          {[1, 2, 3, 4, 5, 6, 7].map((cls) => (
                            <option key={cls} value={cls}>
                              {cls}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <i className="ri-arrow-down-s-line text-gray-400 text-lg md:text-xl"></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1 font-medium text-gray-700 text-xs md:text-sm">
                        CHILD NAME
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i className="ri-user-line text-gray-400 text-lg md:text-xl"></i>
                        </div>
                        <input
                          type="text"
                          name="childName"
                          value={form.childName}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 md:py-3.5 text-sm md:text-base rounded-md border border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
                          placeholder="Enter your child's name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1 font-medium text-gray-700 text-xs md:text-sm">
                        EMAIL
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i className="ri-mail-line text-gray-400 text-lg md:text-xl"></i>
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 md:py-3.5 text-sm md:text-base rounded-md border border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1 font-medium text-gray-700 text-xs md:text-sm">
                        MOBILE
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i className="ri-phone-line text-gray-400 text-lg md:text-xl"></i>
                        </div>
                        <input
                          type="tel"
                          name="mobile"
                          value={form.mobile}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 md:py-3.5 text-sm md:text-base rounded-md border border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
                          placeholder="Enter your mobile number"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block mb-1 font-medium text-gray-700 text-xs md:text-sm">
                        PASSWORD
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i className="ri-lock-line text-gray-400 text-lg md:text-xl"></i>
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={form.password}
                          onChange={handleChange}
                          className="w-full pl-11 pr-10 py-3 md:py-3.5 text-sm md:text-base rounded-md border border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
                          placeholder="Create a password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3"
                        >
                          <i className={`text-gray-500 text-lg md:text-xl ${showPassword ? "ri-eye-line" : "ri-eye-off-line"}`}></i>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="cursor-pointer w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-3.5 rounded-md shadow transition text-sm md:text-base"
                >
                  Register now
                </button>
              </div>
            </form>
            <div className="mt-6 text-center text-xs md:text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/" className="text-blue-600 hover:underline font-medium">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
