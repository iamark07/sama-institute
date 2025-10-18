import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  // This state holds the user's email.
  const [email, setEmail] = useState("");

  // This function runs when the user clicks the "Send" button.
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, it just shows an alert. Later, you'll add logic to send a reset link.
    console.log("Password reset request for:", email);
    alert("If an account with this email exists, a reset link will be sent.");
  };

  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src="assets/img/bg-img/bg-4.jpg"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-30 grayscale-100"
        alt=""
      />
      <div className="container mx-auto md:px-10 px-5 py-14 relative z-10 flex items-center justify-center min-h-screen">
        {/* Main Form Card */}
        <div className="w-full max-w-lg bg-white border border-gray-200">
          <div className="flex flex-col justify-center px-6 py-12 md:px-10">
            <div className="text-center mb-8 space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Forgot Password?
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                No worries, we'll send you reset instructions.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block mb-1 font-medium text-gray-700 text-xs md:text-sm">
                  EMAIL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="ri-mail-line text-gray-400 text-xl"></i>
                  </div>
                  <input
                    type="email"
                    className="w-full border pl-11 pr-4 py-3.5 text-sm md:text-base rounded-md border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    autoFocus
                  />
                </div>
              </div>

              <button
                type="submit"
                className="hidden cursor-pointer text-sm md:text-base w-full bg-blue-600 text-white font-bold py-3.5 rounded-lg hover:bg-blue-700 transition"
              >
                Send Reset Link
              </button>
              <button className="w-full">
                <Link
                  to="/reset-password"
                  className="cursor-pointer text-sm md:text-base w-full inline-block bg-blue-600 text-white font-bold py-3.5 rounded-lg hover:bg-blue-700 transition"
                >
                Send Reset Link</Link>
              </button>

              <div className="mt-6 text-center text-xs md:text-sm text-gray-500">
                <Link
                  to="/"
                  className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1"
                >
                  <i className="ri-arrow-left-line"></i>
                  <span>Back to Login</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
