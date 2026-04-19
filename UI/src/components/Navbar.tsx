import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  FiUserPlus,
  FiUsers,
  FiActivity,
  FiDatabase,
  FiBarChart2,
} from "react-icons/fi";
import Sidebar from "./Sidebar";
import { socket } from "../servies/Scokets";
import toast, { Toaster } from "react-hot-toast";
import { userinfo, userRole } from "../servies/apivesrion";
type currentpage = {
  page?: any
}
function Navbar({ page }: currentpage) {


  // Realtime Notification
  useEffect(() => {

    const handleCheck = (data: any) => {
      console.count(`FAILURE in the Api ${data.originalUrl} method ${data.method}`);


      if (data.status == 'SUCCESS') {
        toast.custom(() => (
          <div className="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <span>🚨 API Failure</span>
            <span className="text-sm opacity-80">
              {data.method} {data.originalUrl}
            </span>
          </div>
        ));

      }
    };


    const handleCheckuser = (data: any) => {
      console.log(data);

      const text: boolean = data.msg.split("-")[1].split(" ")[0] == JSON.parse(userinfo).userEmpId
      if (text) {
        toast.success("You are in online")
        return localStorage.setItem("userInfo", JSON.stringify(data.userUpdateActive))

      }
      toast.success(data)

    }
    const handleCheckuserDeactivation = (data: any) => {
      const text: boolean = data.split("-")[1].split(" ")[0] == JSON.parse(userinfo).userEmpId
      if (text) {
        return toast.error("You are in Offline")
      }
      toast.error(data)
    }

    socket.on("CheckLogsNotif", handleCheck);
    socket.on("UserActiveNotification", handleCheckuser);
    socket.on("UserDeactiveNotification", handleCheckuserDeactivation);
    socket.on("updatelocalstatus", handleCheckuserDeactivation);
    return () => {
      socket.off("CheckLogsNotif", handleCheck);
      socket.off("UserDeactiveNotification", handleCheckuserDeactivation);
      socket.off("UserActiveNotification", handleCheckuser);
      socket.off("disconnect", handleCheckuserDeactivation);

    };
  }, []);





  const [isOpen, setIsOpen] = useState(true);
  const [dark, setDark] = useState(false);

  const menu = [
    { name: "API Monitoring", icon: <FiActivity />, url: "/" },
    { name: "Team Members", icon: <FiUsers />, url: "/TeamMembers" },
    { name: "Team Member Management", icon: <FiUserPlus />, url: "/TeamMembersManagemenet" ,disable:userRole=='developer'},
    { name: "Analytics", icon: <FiBarChart2 />, url: "/Analytics" },
    { name: "Logs", icon: <FiDatabase />, url: "/Logs" },
    // { name: "Settings", icon: <FiSettings />,url:"/" },

  ];

  return (
    <>
      <Toaster></Toaster>
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
                <MdLightMode className="text-xl text-white" />
              ) : (
                <MdDarkMode className="text-xl text-white" />
              )}
            </button>

            <Link to="/profile">
              <FaUserCircle className="text-2xl cursor-pointer text-white " />
            </Link>
          </div>
        </div>
      </nav>

      {/* SIDEBAR DRAWER */}
      <Sidebar isOpen={isOpen} menu={menu} page={page}></Sidebar>


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