import { useEffect, useState } from "react"
import { FetchAllLogs } from "../servies/GetApiLogs"


function RecentApilogs() {
    const [apilogs, setlogsapidata] = useState<any[]>([])


    useEffect(() => {
        const FetchAllApiLogs = async () => {
            const response = await FetchAllLogs()
            console.log(response.data.data)
            setlogsapidata(response.data.data)
        }
        FetchAllApiLogs()
    }, [])

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "OK":
        return "text-green-600";
      case "Slow":
        return "text-yellow-600";
      case "Error":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };
 const GetApiMethod = (method: string) => {
  switch (method) {
    case "POST":
      return "px-2 py-1 text-xs font-semibold rounded-md border bg-green-100 text-green-700 border-green-300";

    case "GET":
      return "px-2 py-1 text-xs font-semibold rounded-md border bg-yellow-100 text-yellow-700 border-yellow-300";

    case "PUT":
      return "px-2 py-1 text-xs font-semibold rounded-md border bg-blue-100 text-blue-700 border-blue-300";

    case "PATCH":
      return "px-2 py-1 text-xs font-semibold rounded-md border bg-pink-100 text-pink-700 border-pink-300";

    case "DELETE":
      return "px-2 py-1 text-xs font-semibold rounded-md border bg-red-100 text-red-700 border-red-300";

    default:
      return "px-2 py-1 text-xs font-semibold rounded-md border bg-gray-100 text-gray-700 border-gray-300";
  }
};

  return (
    <div className="min-w-full mt-10 max-w-4xl mx-auto p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Recent API Logs
      </h2>

      <div className="space-y-3 max-h-[300px] overflow-y-auto">
        {apilogs?.map((log, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition"
          >
            {/* Left */}
            <div>
              <p className={`text-sm font-medium text-gray-800 ${GetApiMethod(log.method)}`}>
                {log.method} <span>{log.originalUrl}</span>
              </p>
              <p className="text-xs text-gray-500"><span>Apihealth</span> : {log.apihealth}</p>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4 mt-2 md:mt-0">
              <span className="text-xs text-gray-500">{log.timestamp}</span>
              <span
                className={`text-xs font-semibold ${getStatusStyle(
                  log.status
                )}`}
              >
                {log.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentApilogs;