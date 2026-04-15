import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { FaArrowTrendDown } from "react-icons/fa6";

function ApiStatus() {
  return (
    <div className="flex flex-wrap gap-4 p-4 mt-5">

      {/* 🔹 Total Requests */}
      <div className="flex-1 min-w-[220px] bg-white shadow-md rounded-xl p-4 flex items-center gap-4">
        <IoStatsChart className="text-3xl text-blue-500" />
        <div>
          <p className="text-gray-500 text-sm">Total Requests</p>
          <h2 className="text-xl font-bold">12,340</h2>
        </div>
      </div>

      {/* 🔹 Errors */}
      <div className="flex-1 min-w-[220px] bg-white shadow-md rounded-xl p-4 flex items-center gap-4">
        <FaTimesCircle className="text-3xl text-red-500" />
        <div>
          <p className="text-gray-500 text-sm">Errors</p>

          {/* FIXED ALIGNMENT */}
          <div className="flex items-center gap-2 mt-1">
            <h2 className="text-xl font-bold text-red-500">120</h2>
            <FaArrowTrendDown className="text-red-500 text-lg" />
          </div>
        </div>
      </div>

      {/* 🔹 Avg Response Time */}
      <div className="flex-1 min-w-[220px] bg-white shadow-md rounded-xl p-4 flex items-center gap-4">
        <MdSpeed className="text-3xl text-yellow-500" />
        <div>
          <p className="text-gray-500 text-sm">Avg Response Time</p>
          <h2 className="text-xl font-bold">320 ms</h2>
        </div>
      </div>

      {/* 🔹 Uptime */}
      <div className="flex-1 min-w-[220px] bg-white shadow-md rounded-xl p-4 flex items-center gap-4">
        <FaCheckCircle className="text-3xl text-green-500" />
        <div>
          <p className="text-gray-500 text-sm">Uptime</p>
          <h2 className="text-xl font-bold">99.9%</h2>
        </div>
      </div>

    </div>
  );
}

export default ApiStatus;
// https://recharts.github.io/en-US/examples/SimpleLineChart/