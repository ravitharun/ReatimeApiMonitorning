import { RechartsDevtools } from '@recharts/devtools';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts';

import type { props } from '../Type/Props';
import { theme } from '../Type/Theme';

function ErrorRateGraph({ Geaphname, descprition }: props) {
  const data = [
    { name: "10:00", uv: 20 },
    { name: "12:00", uv: 30 },
    { name: "1:00", uv: 50 },
    { name: "2:00", uv: 20 },
    { name: "4:00", uv: 70 },
    { name: "6:00", uv: 40 },
    { name: "10:00", uv: 60 },
    { name: "10:00", uv: 60 },
    { name: "10:00", uv: 60 },
  ];

  return (
    <div
      className={`w-full max-w-3xl shadow-md rounded-xl p-4 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* 🔹 Header */}
      <div className="mb-4">
        <h4
          className={`text-lg md:text-xl font-semibold ${
            theme === "dark" ? "text-white" : "text-gray-800"
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
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" barSize={20} fill="red" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 🔹 Devtools */}
      <RechartsDevtools />
    </div>
  );
}

export default ErrorRateGraph;