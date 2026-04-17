import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  FiUserPlus,
  FiUsers,
  FiActivity,
  FiDatabase,
  FiSettings,
  FiBarChart2,
  FiUser,
} from "react-icons/fi";
import Sidebar from "./Sidebar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const menu = [
    { name: "Team Member Management", icon: <FiUserPlus /> },
    { name: "Team Members", icon: <FiUsers /> },
    { name: "API Monitoring", icon: <FiActivity /> },
    { name: "Analytics", icon: <FiBarChart2 /> },
    { name: "Logs", icon: <FiDatabase /> },
    { name: "Settings", icon: <FiSettings /> },
    
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md px-4 py-3 z-50">
        <div className="flex items-center justify-between">

          {/* LEFT: Menu + Brand */}
          <div className="flex items-center gap-3">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiX className="text-2xl text-gray-800 dark:text-white" />
              ) : (
                <HiMenu className="text-2xl text-gray-800 dark:text-white" />
              )}
            </button>

            <Link to="/">
              <h1 className="text-lg md:text-2xl font-bold text-gray-800 dark:text-white">
                API Monitor
              </h1>
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <button onClick={() => setDark(!dark)}>
              {dark ? (
                <MdLightMode className="text-xl" />
              ) : (
                <MdDarkMode className="text-xl" />
              )}
            </button>

            <Link to="/profile">
              <FaUserCircle className="text-2xl cursor-pointer" />
            </Link>
          </div>
        </div>
      </nav>

      {/* SIDEBAR DRAWER */}
      <Sidebar isOpen={isOpen} menu={menu}></Sidebar>
  

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-30"
        />
      )}
    </>
  );
}

export default Navbar;