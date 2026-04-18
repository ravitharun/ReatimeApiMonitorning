import React from "react";
import { APP_INFO } from "../constants/appInfo";
import { token } from "../user";
import { Link } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { handelLogout } from "../features/Logout";

type MenuItem = {
    name: string;
    icon: React.ReactNode;
    desc?: string;
    url: string
};

type Props = {
    isOpen: boolean;
    menu: MenuItem[];
    page: string
};

function Sidebar({ isOpen, menu, page }: Props) {
    return (
        <div
            className={`fixed top-0 left-0 h-full w-72 bg-[#0f172a] text-white p-5 pt-20 border-r border-gray-800
      transform transition-transform duration-300 z-40
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-xl font-bold">API Monitor</h1>
                <p className="text-gray-400 text-sm">Dev Dashboard</p>
            </div>

            {/* Menu */}
            <div className="space-y-2">
                {menu.map((item, index) => (
                    <>
                        <Link to={item.url}>


                            <div
                                key={index}
                                className={`flex items-center gap-3 p-3 rounded-lg hover:bg-[#1e293b] cursor-pointer transition  ${page == item.name ? 'bg-[#1e290b]' : ''}`}
                            >
                                <div className="text-lg">{item.icon}</div>

                                <div>
                                    <h3 className="text-sm font-medium">{item.name}</h3>
                                    {item.desc && (
                                        <p className="text-xs text-gray-400">{item.desc}</p>
                                    )}
                                </div>
                            </div>
                        </Link>
                    </>

                ))}
                {/* login */}
                <div

                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1e293b] cursor-pointer transition"
                >
                    <div className="text-lg">{!token ? <IoMdLogIn className="text-green-500" /> : <IoMdLogOut className="text-red-300" />}</div>

                    <div onClick={handelLogout}>
                        <h3 className="text-sm font-medium">{!token ? "login" : "Logout"}</h3>

                    </div>
                </div>

            </div>

            {/* Footer */}
            <div className="absolute bottom-4 text-xs text-gray-500">
                {APP_INFO.version}-{APP_INFO.name}
            </div>
        </div>
    );
}

export default Sidebar;