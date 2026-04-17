import React from "react";
import { FiUser, FiMail, FiEye } from "react-icons/fi";

function AddmemberList() {
  const members = [
    {
      id: "E101",
      name: "Ravi Kumar",
      email: "ravi@example.com",
      img: "https://i.pravatar.cc/150?img=1",
      status: "online",
    },
    {
      id: "E102",
      name: "John Doe",
      email: "john@example.com",
      img: "https://i.pravatar.cc/150?img=2",
      status: "offline",
    },
    {
      id: "E103",
      name: "Priya Sharma",
      email: "priya@example.com",
      img: "https://i.pravatar.cc/150?img=3",
      status: "online",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1220] p-6">

     <div className="mb-6 flex items-center justify-between">

  {/* Left Side - Title */}
  <div>
    <h1 className="text-2xl font-bold text-white">
      Team Members
    </h1>
    <p className="text-gray-400 text-sm">
      Manage and view developer profiles
    </p>
  </div>

  {/* Right Side - Button */}
  <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition shadow-md">
    <span className="text-lg">+</span>
    Assign Team Member
  </button>

</div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-xl border border-gray-800">

        {/* Table Header */}
        <table className="w-full text-left text-sm text-gray-300">

          <thead className="bg-[#111827] text-gray-400 uppercase text-xs">
            <tr>
              <th className="p-4">Developer</th>
              <th className="p-4">Emp ID</th>
              <th className="p-4">Contact Email</th>
              <th className="p-4">Online Status</th>
              <th className="p-4 text-right">Manage Profile</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {members.map((m, i) => (
              <tr
                key={i}
                className="border-b border-gray-800 hover:bg-[#111827] transition"
              >

                {/* Developer */}
                <td className="p-4 flex items-center gap-3">
                  <img
                    src={m.img}
                    alt="avatar"
                    className="w-10 h-10 rounded-full border border-gray-700"
                  />
                  <span className="text-white font-medium flex items-center gap-2">
                    <FiUser /> {m.name}
                  </span>
                </td>

                {/* Emp ID */}
                <td className="p-4">
                  <span className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs">
                    {m.id}
                  </span>
                </td>

                {/* Email */}
                <td className="p-4 flex items-center gap-2">
                  <FiMail className="text-gray-500" />
                  {m.email}
                </td>

                {/* Status */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 w-fit
                      ${
                        m.status === "online"
                          ? "text-green-400 bg-green-500/10"
                          : "text-red-400 bg-red-500/10"
                      }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full
                        ${
                          m.status === "online"
                            ? "bg-green-500 animate-pulse"
                            : "bg-red-500"
                        }`}
                    />
                    {m.status}
                  </span>
                </td>

                {/* Manage Profile */}
                <td className="p-4 text-right">
                  <button className="flex items-center gap-2 ml-auto bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-md transition">
                    <FiEye />
                    Manage Profile
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default AddmemberList;