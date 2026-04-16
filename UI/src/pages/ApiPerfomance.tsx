import React from 'react';

function ApiPerfomance() {
    
    const apiData = [
        {
            endpoint: "/login",
            status: "OK",
            responseTime: "120ms",
            errorRate: "0%",
        },
        {
            endpoint: "/fetchUser",
            status: "Slow",
            responseTime: "850ms",
            errorRate: "2%",
        },
        {
            endpoint: "/createPost",
            status: "Error",
            responseTime: "—",
            errorRate: "15%",
        },
        {
            endpoint: "/getProjects",
            status: "OK",
            responseTime: "200ms",
            errorRate: "0%",
        },
    ];

    const getStatusStyle = (status: string) => {
        switch (status) {
            case "OK":
                return "bg-green-100 text-green-700";
            case "Slow":
                return "bg-yellow-100 text-yellow-700";
            case "Error":
                return "bg-red-100 text-red-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <>


            <div className="min-w-full max-w-4xl mx-auto p-4 bg-white shadow-md rounded-xl mt-10">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    API Performance
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600 uppercase text-xs">
                                <th className="p-3">Endpoint</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Response Time</th>
                                <th className="p-3">Error Rate</th>
                            </tr>
                        </thead>

                        <tbody>
                            {apiData.map((api, index) => (
                                <tr
                                    key={index}
                                    className="border-b hover:bg-gray-50 transition"
                                >
                                    <td className="p-3 font-medium text-gray-800">
                                        {api.endpoint}
                                    </td>

                                    <td className="p-3">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                                                api.status
                                            )}`}
                                        >
                                            {api.status}
                                        </span>
                                    </td>

                                    <td className="p-3 text-gray-700">
                                        {api.responseTime}
                                    </td>

                                    <td className="p-3 text-gray-700">
                                        {api.errorRate}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ApiPerfomance;