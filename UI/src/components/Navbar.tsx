import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [dark, setDark] = useState<boolean>(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md px-4 py-3 z-50">
            <div className="flex items-center justify-between">
                {/* 🔹 Logo / Heading */}
                <Link to="/">
                    <h1 className="text-lg md:text-2xl font-bold text-gray-800 dark:text-white">
                        Realtime API Monitoring
                    </h1>
                </Link>

                {/* 🔹 Desktop Menu */}
                <div className="hidden md:flex items-center gap-4">

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setDark(!dark)}
                        className="text-xl text-gray-700 dark:text-white"
                    >
                        {dark ? <MdLightMode /> : <MdDarkMode />}
                    </button>

                    {/* Profile */}
                    <Link to="/profile">
                    <FaUserCircle className="text-2xl text-gray-700 dark:text-white cursor-pointer" />
                    </Link>
                </div>

                {/* 🔹 Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <HiX className="text-2xl text-gray-800 dark:text-white" />
                        ) : (
                            <HiMenu className="text-2xl text-gray-800 dark:text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* 🔹 Mobile Menu */}
            {isOpen && (
                <div className="mt-3 flex flex-col gap-4 md:hidden">

                    {/* Theme */}
                    <button
                        onClick={() => setDark(!dark)}
                        className="flex items-center gap-2 text-gray-700 dark:text-white"
                    >
                        {dark ? <MdLightMode /> : <MdDarkMode />}
                        Toggle Theme
                    </button>

                    {/* Profile */}
                    <div className="flex items-center gap-2 text-gray-700 dark:text-white">
                        <FaUserCircle className="text-2xl" />
                        Profile
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;