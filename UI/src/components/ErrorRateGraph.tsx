import { RechartsDevtools } from '@recharts/devtools';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Line
} from 'recharts';
import type { props } from '../Type/Props';
import { theme } from '../Type/Theme';
import { Download } from './Download';

function ErrorRateGraph({ Geaphname, descprition }: props) {
  const data =
    [
      { time: "10:00", errorRate: 100 },
      { time: "11:00", errorRate: 23 },
      { time: "11:00", errorRate: 23 },
      { time: "12:00", errorRate: 300 },
      { time: "13:00", errorRate: 12 },
      { time: "13:00", errorRate: 123 },
      { time: "12:00", errorRate: 300 },
      { time: "14:00", errorRate: 82 },
      { time: "13:00", errorRate: 133 },
      { time: "15:00", errorRate: 131 },
      { time: "13:00", errorRate: 153 },
      { time: "13:00", errorRate: 173 },
      { time: "16:00", errorRate: 102 }
    ];

  return (
    <>


      <div
        className={`w-full max-w-3xl shadow-md rounded-xl p-4 ${theme === "dark" ? "bg-gray-900" : "bg-white"
          }`}
      >
        {/* 🔹 Header */}
        <div className="mb-4">
          <h4
            className={`text-lg md:text-xl font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"
              }`}
          >
            {Geaphname}
          </h4>
          <p className="text-xs text-gray-500">
            {descprition || "Real-time API Error Rate"}
          </p>
        </div>

        {/* 🔹 Chart */}
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="errorRate" />
              <Bar dataKey="errorRate" barSize={20} fill="red" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 🔹 Devtools */}
        <RechartsDevtools />
        <button
          onClick={() => Download(data, "rps-data")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Download RPS Excel
        </button>
      </div>



    </>
  );
}

export default ErrorRateGraph;