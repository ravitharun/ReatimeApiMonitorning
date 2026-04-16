import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import { Download } from "./Download";

function ResponseTimeData() {
    // ✅ Sample Response Time Data
    const responseTimeData = [
        { time: "10:00", responseTime: 120 },
        { time: "10:01", responseTime: 200 },
        { time: "10:02", responseTime: 80 },
        { time: "10:03", responseTime: 300 },
        { time: "10:04", responseTime: 150 },
    ];

    // ✅ Sample RPS Data
    const rpsData = [
        { time: "10:00", rps: 5 },
        { time: "10:01", rps: 12 },
        { time: "10:02", rps: 8 },
        { time: "10:03", rps: 15 },
        { time: "10:04", rps: 10 },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">

            {/* 🔹 Response Time */}
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-4">
                <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-white">
                    Response Time (ms)
                </h2>

                <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={responseTimeData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="responseTime" stroke="#3b82f6" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
                  <button
                    onClick={() => Download(responseTimeData, "rps-data")}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    Download RPS Excel
                </button>
            </div>

            {/* 🔹 Requests Per Second */}
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-4">
                <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-white">
                    Requests Per Second (RPS)
                </h2>

                <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={rpsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="rps" stroke="#10b981" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
                <button
                    onClick={() => Download(rpsData, "rps-data")}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    Download RPS Excel
                </button>
            </div>

        </div>
    );
}

export default ResponseTimeData;