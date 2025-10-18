import React, { useState } from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
  // States for the new password and confirmation
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // This function runs when the user submits the form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // For now, it just logs the new password.
    // Later, you'll add logic here to update the password.
    console.log("New password set:", password);
    alert("Your password has been reset successfully!");
  };

  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src="/assets/img/bg-img/bg-4.jpg"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-30 grayscale-100"
        alt=""
      />
      <div className="container mx-auto md:px-10 px-5 py-14 relative z-10 flex items-center justify-center min-h-screen">
        {/* Main Form Card */}
        <div className="w-full max-w-lg bg-white border border-gray-200 rounded-lg">
          <div className="flex flex-col justify-center px-6 py-12 md:px-10">
            <div className="text-center mb-8 space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Set a New Password
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                Your new password must be different from previous ones.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* New Password Field */}
              <div>
                <label className="block mb-1 font-medium text-gray-700 text-xs md:text-sm">
                  NEW PASSWORD
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="ri-lock-line text-gray-400 text-xl"></i>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full border pl-11 pr-10 py-3.5 text-sm md:text-base rounded-md border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <i
                      className={`text-gray-500 text-xl ${
                        showPassword ? "ri-eye-line" : "ri-eye-off-line"
                      }`}
                    ></i>
                  </button>
                </div>
              </div>

              {/* Confirm New Password Field */}
              <div>
                <label className="block mb-1 font-medium text-gray-700 text-xs md:text-sm">
                  CONFIRM NEW PASSWORD
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="ri-lock-password-line text-gray-400 text-xl"></i>
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full border pl-11 pr-10 py-3.5 text-sm md:text-base rounded-md border-gray-300 focus:ring focus:ring-blue-400 outline-none transition"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <i
                      className={`text-gray-500 text-xl ${
                        showConfirmPassword ? "ri-eye-line" : "ri-eye-off-line"
                      }`}
                    ></i>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="cursor-pointer text-sm md:text-base w-full bg-blue-600 text-white font-bold py-3.5 rounded-lg hover:bg-blue-700 transition"
              >
                Reset Password
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

export default ResetPassword;
