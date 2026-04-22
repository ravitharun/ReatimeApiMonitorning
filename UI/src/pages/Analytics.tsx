import Navbar from '../components/Navbar'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts'
import ApiTester from "../components/ApiTester"
function Analytics() {

  // 📊 Sample Data (replace with API later)
  const requestData = [
    { time: '10AM', requests: 120, errors: 10 },
    { time: '11AM', requests: 200, errors: 25 },
    { time: '12PM', requests: 150, errors: 15 },
    { time: '1PM', requests: 300, errors: 40 },
    { time: '2PM', requests: 250, errors: 30 },
  ]

  const responseData = [
    { name: 'Fast (<200ms)', value: 400 },
    { name: 'Medium (200-500ms)', value: 300 },
    { name: 'Slow (>500ms)', value: 150 },
  ]

  return (
    <>
      <Navbar page='Analytics' />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">API Analytics Dashboard</h1>

        {/* 🔹 Charts Section */}
        <div className="grid grid-cols-2 gap-6">

          {/* 📈 Requests & Errors Line Chart */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="mb-3 font-semibold">Requests vs Errors</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={requestData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="requests" stroke="#4CAF50" />
                <Line type="monotone" dataKey="errors" stroke="#F44336" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* 📊 Response Time Bar Chart */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="mb-3 font-semibold">Response Time Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={responseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#2196F3" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
      <ApiTester></ApiTester>
    </>
  )
}

export default Analytics