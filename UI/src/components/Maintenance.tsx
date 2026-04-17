import { FiTool, FiClock, FiAlertTriangle } from "react-icons/fi";

function Maintenance() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1220] p-6">

      <div className="text-center max-w-lg bg-[#111827] border border-gray-800 p-8 rounded-2xl shadow-xl">

        {/* Icon */}
        <div className="flex justify-center text-yellow-400 text-5xl mb-4 animate-pulse">
          <FiTool />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-white mb-2">
          System Under Maintenance
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm mb-6">
          We are currently improving the API Monitoring system for better
          performance and reliability. Please check back soon.
        </p>

        {/* Status Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">

          <div className="bg-[#0f172a] p-3 rounded-lg border border-gray-700">
            <FiAlertTriangle className="text-red-400 mx-auto mb-1" />
            <p className="text-xs text-gray-400">API Status</p>
            <p className="text-red-400 font-semibold">Paused</p>
          </div>

          <div className="bg-[#0f172a] p-3 rounded-lg border border-gray-700">
            <FiClock className="text-blue-400 mx-auto mb-1" />
            <p className="text-xs text-gray-400">ETA</p>
            <p className="text-blue-400 font-semibold">~30 mins</p>
          </div>

        </div>

        {/* Message */}
        <div className="text-xs text-gray-500">
          Real-time monitoring will resume automatically once system is stable
        </div>

      </div>
    </div>
  );
}

export default Maintenance;