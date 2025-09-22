import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logic will be added later
    console.log("Login attempt with:", { emailOrMobile, password });
  };

  return (
    <div className="relative">
      <img
        src="assets/img/bg-img/bg-4.jpg"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-30 grayscale-100"
        alt=""
      />
      <div className="container mx-auto md:px-10 px-5 py-14 relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-7xl bg-white border border-gray-200 flex overflow-hidden">
          {/* Left Side Form */}
          <div className="flex-1 flex flex-col justify-center px-6 py-20 md:px-10 lg:px-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Welcome Back!
              </h2>
              <p className="text-gray-500 mt-1 text-sm md:text-base">Please sign in to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1 font-medium text-gray-700 text-xs md:text-sm">
                  EMAIL / MOBILE
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="ri-contacts-book-3-line text-gray-400 text-lg md:text-xl"></i>
                  </div>
                  <input
                    type="text"
                    className="w-full border pl-11 pr-4 py-3 md:py-3.5 text-sm md:text-base rounded-md border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
                    value={emailOrMobile}
                    onChange={(e) => setEmailOrMobile(e.target.value)}
                    placeholder="Enter your email or mobile"
                    autoFocus
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700 text-xs md:text-sm">
                  PASSWORD
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="ri-lock-line text-gray-400 text-lg md:text-xl"></i>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full border pl-11 pr-10 py-3 md:py-3.5 text-sm md:text-base rounded-md border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <i className="ri-eye-line text-gray-500 text-lg md:text-xl"></i>
                    ) : (
                      <i className="ri-eye-off-line text-gray-500 text-lg md:text-xl"></i>
                    )}
                  </button>
                </div>
              </div>
              <div className="text-right">
                <Link
                  to="/forgot-password"
                  className="text-blue-600 text-xs md:text-sm hover:underline font-medium"
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="cursor-pointer text-sm md:text-base w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
              >
                Login
              </button>
              <div className="mt-6 text-center text-xs md:text-sm text-gray-500">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Register Now
                </Link>
              </div>
            </form>
          </div>
          {/* Right Side Image */}
          <div className="hidden xl:flex flex-col justify-center bg-blue-50 w-1/2 py-10 px-7 relative">
            <img
              src="assets/img/bg-img/bg-2.jpg"
              alt="Sama Institute Illustration"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
