import { useState } from "react";
import { FiUsers, FiFileText, FiHash, FiUserPlus } from "react-icons/fi";
import { userinfo, userRole } from "../servies/apivesrion";
import toast, { Toaster } from "react-hot-toast";
import Input from "./Input";
import { MakeTeam } from "../servies/Team";
import { useNavigate } from "react-router-dom";

function CreateTeam() {
    const [teamName, setTeamName] = useState("");
    const [teamDesc, setTeamDesc] = useState("");
    const [empIds, setEmpIds] = useState("");
    const navigate = useNavigate()
    const handelTeamCreation = async () => {
        const parsedUser = JSON.parse(userinfo)?.userEmpId;
        if (userRole != 'teamLeader') {
            return toast.error("only the Team Leader can Create team")
        }
        const empIdsArray = empIds.split(",");
        const data = { teamName, teamDesc, empIds: empIdsArray, CreatedByID: parsedUser }

        if (!teamName || !teamDesc || !empIds) {
            return toast.error('Fill the required details to make the team')
        }



        try {

            const response: any = await MakeTeam(data)
            console.log(response);
            if (response?.status == 201) {
                toast.success("Team Created.")
                return setTimeout(() => {
                    navigate("/TeamMembers")
                }, 2500);

            }

        }
        catch (err) {
            console.log(err, "err MAKE TEAM");

        }
    }
    const isNewTeam: boolean = false
    return (
        <>
            <Toaster></Toaster>
            {isNewTeam ? "" :
                <div className="min-h-screen flex items-center justify-center bg-[#0b1220] p-4">

                    {/* Card */}
                    <div className="w-full max-w-xl bg-[#111827] border border-gray-800 rounded-2xl p-6 shadow-lg">

                        {/* Header */}
                        <div className="mb-6 text-center">
                            <div className="flex justify-center mb-2 text-blue-400 text-3xl">
                                <FiUserPlus />
                            </div>
                            <h1 className="text-xl font-bold text-white">Create Team</h1>
                            <p className="text-gray-400 text-sm">
                                Add developers using EmpIDs
                            </p>
                        </div>

                        {/* Team Name */}
                        <div className="mb-4">
                            <label className="text-sm text-gray-300 flex items-center gap-2 mb-1">
                                <FiUsers /> Team Name
                            </label>
                            <Input

                                inputtype="text"
                                Inputvalue={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                                placeholder="e.g. Backend Squad"
                                className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Team Description */}
                        <div className="mb-4">
                            <label className="text-sm text-gray-300 flex items-center gap-2 mb-1">
                                <FiFileText /> Team Description
                            </label>
                            <textarea
                                value={teamDesc}
                                onChange={(e) => setTeamDesc(e.target.value)}
                                placeholder="Describe team purpose..."
                                className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Emp IDs */}
                        <div className="mb-6">
                            <label className="text-sm text-gray-300 flex items-center gap-2 mb-1">
                                <FiHash /> Employee IDs (comma separated)
                            </label>
                            <Input
                                inputtype="text"
                                Inputvalue={empIds}
                                onChange={(e) => setEmpIds(e.target.value)}
                                placeholder="E101, E102, E103"
                                className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Button */}
                        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition" onClick={handelTeamCreation}>
                            <FiUserPlus />
                            Create Team
                        </button>

                    </div>
                </div>}

        </>
    );
}

export default CreateTeam;