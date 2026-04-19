import Navbar from "../components/Navbar";
import { FaUsers, FaPlus, FaCheckCircle } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import { userRole } from "../servies/apivesrion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getallTeamsInfo } from "../servies/Team";

type Member = {
    _id: string;
    username: string;
    userRole: string;
    userEmpId: string;
    userProfile: string;
    isActive?: boolean;
    lastSeen?: string;
};

type Team = {
    _id: string;
    teamName: string;
    teamDesc: string;
    teamId: string;
    CreatedByID: string;
    empIds: string[];
    members: Member[];
};

function TeamMembers() {
    const [allTeams, setAllTeams] = useState<Team[]>([]);

    useEffect(() => {
        const getTeams = async () => {
            try {
                const response: any = await getallTeamsInfo();
                setAllTeams(response?.data?.Teamdata || []);
            } catch (error) {
                console.log(error);
            }
        };

        getTeams();
    }, []);

    return (
        <>
            <Navbar page="Team Members" />

            <div className="p-6 bg-gray-100 min-h-screen mt-10">
                {/* HEADER */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <FaUsers /> Teams Overview
                    </h1>

                    {userRole === "teamLeader" && (
                        <Link to="/TeamMembersManagemenet">
                            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                <FaPlus /> Create Team
                            </button>
                        </Link>
                    )}
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allTeams.map((team) => (
                        <div
                            key={team._id}
                            className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition"
                        >
                            {/* TEAM HEADER */}
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-lg font-semibold">
                                    {team.teamName}
                                </h2>

                                <span className="flex items-center gap-1 text-green-600 text-sm">
                                    <FaCheckCircle /> Active
                                </span>
                            </div>

                            {/* DESCRIPTION */}
                            <p className="text-gray-500 text-sm mb-4">
                                {team.teamDesc}
                            </p>

                            {/* MEMBERS */}
                            <div className="space-y-3">
                                <h3 className="font-medium text-gray-700">
                                    Members
                                </h3>

                                {team.members?.map((m) => (
                                    <div
                                        key={m._id}
                                        className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition"
                                    >
                                        {/* LEFT */}
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={
                                                    m.userProfile ||
                                                    `https://ui-avatars.com/api/?name=${m.username}`
                                                }
                                                className={`w-10 h-10 rounded-full object-cover border-2 ${
                                                    m.isActive
                                                        ? "border-green-500"
                                                        : "border-gray-300"
                                                }`}
                                            />

                                            <div>
                                                <p className="text-sm font-semibold text-gray-800">
                                                    {m.username}
                                                </p>

                                                <p className="text-xs text-gray-500">
                                                    {m.userRole}
                                                </p>

                                                <div
                                                    className={`mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] ${
                                                        m.isActive
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-red-100 text-red-600"
                                                    }`}
                                                >
                                                    <span
                                                        className={`w-2 h-2 rounded-full ${
                                                            m.isActive
                                                                ? "bg-green-500 animate-pulse"
                                                                : "bg-red-500"
                                                        }`}
                                                    ></span>
                                                    {m.isActive
                                                        ? "active"
                                                        : "offline"}
                                                </div>
                                            </div>
                                        </div>

                                        {/* RIGHT TAG */}
                                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                            {m.userEmpId}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* FOOTER */}
                            <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-black transition">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default TeamMembers;