import React from "react";
import { FiLock, FiUsers, FiArrowLeft } from "react-icons/fi";

function NoAccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full text-center">
        
        {/* ICON */}
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-4 rounded-full">
            <FiLock className="text-red-500 text-3xl" />
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-xl font-semibold text-gray-800">
          Access Restricted
        </h2>

        {/* MESSAGE */}
        <p className="text-sm text-gray-500 mt-2">
          Only <span className="font-medium text-gray-700">Team Leaders</span> can create a team.
        </p>

        {/* INFO BOX */}
        <div className="mt-4 flex items-center justify-center gap-2 bg-blue-50 text-blue-600 px-3 py-2 rounded-lg text-sm">
          <FiUsers />
          Contact your team leader for access
        </div>

        {/* BUTTON */}
        <button
          onClick={() => window.history.back()}
          className="mt-5 flex items-center justify-center gap-2 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
        >
          <FiArrowLeft />
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NoAccess;