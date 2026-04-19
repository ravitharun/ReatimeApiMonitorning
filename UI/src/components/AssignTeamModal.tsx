import { FaTimes, FaUsers } from "react-icons/fa";
type Assigin = {
    isOpen: boolean,
    setisopen: any
}
const AssignTeamModal = ({ isOpen, setisopen }: Assigin) => {
    if (!isOpen) return null;
    const onAssign = () => {
        alert("onAssign")
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

            {/* Modal Box */}
            <div className="bg-white w-[400px] rounded-2xl shadow-lg p-6 relative">

                {/* Close Button */}
                <button
                    onClick={() => setisopen(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                >
                    <FaTimes size={18} />
                </button>

                {/* Title */}
                <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
                    <FaUsers /> Assign Team
                </h2>

                {/* Dropdown */}
                <div className="mb-4">
                    <label className="block text-sm mb-1">Select Team</label>
                    <select className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400">
                        <option value="">-- Select Team --</option>
                        {/* {teams?.map((team, index) => (
              <option key={index} value={team.teamName}>
                {team.teamName}
              </option>
            ))} */}
                    </select>
                </div>

                {/* Employee IDs Input */}
                <div className="mb-4">
                    <label className="block text-sm mb-1">
                        Employee IDs (comma separated)
                    </label>
                    <input
                        type="text"
                        placeholder="emp1, emp2, emp3"
                        className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Button */}
                <button
                    onClick={onAssign}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Assign
                </button>
            </div>
        </div>
    );
};

export default AssignTeamModal;