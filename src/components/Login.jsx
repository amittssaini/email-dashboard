import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* Card */}
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-8">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login
        </h2>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 text-sm font-medium hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="google"
            className="w-4 h-4"
          />
          Login with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">
            or sign up through email
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email ID"
          className="w-full mb-3 px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-5 px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Login Button */}
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
