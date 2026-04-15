import { RechartsDevtools } from '@recharts/devtools';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { theme } from '../Type/Theme';
import type { props } from '../Type/Props';

function ErrorRateGraph({ Geaphname, descprition }: props) {
    const data = [
        { name: "Page A", uv: 1000 },
        { name: "Page B", uv: 3000 },
        { name: "Page C", uv: 2000 },
        { name: "Page D", uv: 1000 },
        { name: "Page E", uv: 1890 },
        { name: "Page F", uv: 2390 },
        { name: "Page G", uv: 3490 },
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
                    <p className="text-xs text-gray-500">{descprition || 'Real - time API Error Rate'}</p>
                </div>

                {/* 🔹 Chart */}
                <div className="w-full h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={data}
                            margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />

                            <Tooltip
                                contentStyle={{
                                    backgroundColor: theme === "dark" ? "#1f2937" : "#fff",
                                    border: "none",
                                }}
                            />

                            <Legend />

                            <Line
                                type="monotone"
                                dataKey="uv"
                                stroke="#ef4444" // red
                                strokeWidth={2}
                                dot={{ r: 4 }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* 🔹 Devtools */}
                <RechartsDevtools />
            </div>
        </>)
}

export default ErrorRateGraph