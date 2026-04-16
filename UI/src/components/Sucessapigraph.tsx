import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { theme } from "../Type/Theme";
import type { props } from "../Type/Props";
import { Download } from "./Download";

// Sample data
const responseTimeData = [
 { time: "10:00", rps: 20 },
  { time: "10:01", rps: 35 },
  { time: "10:02", rps: 25 },
  { time: "10:03", rps: 40 },
  { time: "10:04", rps: 30 }
];

export default function Example({ Geaphname, descprition }: props) {
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
                    <p className="text-xs text-gray-500">{descprition}</p>
                </div>

                {/* 🔹 Chart Container (FIXED HEIGHT) */}
                <div className="w-full h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={responseTimeData}
                            margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <YAxis />

                            <Tooltip />
                            <Legend />

                            <Line
                                type="monotone"
                                dataKey="rps"
                                stroke="#10b981"
                                strokeWidth={2}
                                dot={{ r: 4 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                    <button
                              onClick={() => Download(responseTimeData, "rps-data")}
                              className="bg-green-600 text-white px-4 py-2 rounded"
                            >
                              Download RPS Excel
                            </button>
                </div>

                {/* 🔹 Devtools */}
                <RechartsDevtools />
            </div>
        </>
    );
}