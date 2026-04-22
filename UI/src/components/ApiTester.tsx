import { useState } from "react"
import axios from "axios"

export default function ApiTester() {
  type responsedata = { status: number, data: string }
  const [url, setUrl] = useState("")
  const [method, setMethod] = useState("GET")
  const [body, setBody] = useState("")
  const [response, setResponse] = useState<null | responsedata>(null)
  const [loading, setLoading] = useState(false)

  const key = ''
  const value = ''
  // const [value, setvalue] = useState<null>()
  const [Params, setParams] = useState<{ key: string, value: string }[]>([{ key: "", value: "" }])
  const handleSend = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams();
      console.log(params, 'paramscheck')

      // ✅ single key-value
      if (key && value) {
        params.append(key, value);
      }

      // ✅ multiple key-values from Params array
      if (Params && Params.length > 0) {
        Params.forEach((item) => {
          if (item.key && item.value) {
            params.append(item.key, item.value);
          }
        });
      }

      const query = params.toString();

      // ✅ clean URL logic
      let orginalurl = url;

      if (query) {
        orginalurl = `${url}?${query}`;
      } else if (Params.length > 0) {
        orginalurl = `${url}?`;
      }

      console.log(orginalurl, "orginalurl");

      setUrl(orginalurl);
      const res = await axios({
        method,
        url: orginalurl,
        data: method !== "GET" ? JSON.parse(body || "{}") : undefined,
      });


      setResponse({
        status: res.status,
        data: res.data,
      });

    } catch (err: any) {
      setResponse({
        status: err.response?.status || "Error",
        data: err.response?.data || err.message,
      });
    } finally {
      setLoading(false);
    }
  };


  const handleChange = (
    index: number,
    field: keyof { key: string; value: string },
    value: string
  ) => {
    const updated = [...Params];

    updated[index][field] = value;

    setParams(updated);
  };

  const addParam = () => {
    setParams([...Params, { key: "", value: "" }])
  }
  const removeParam = (index: number) => {
    const updated = Params.filter((_, i) => i !== index)
    setParams(updated)
  }
  console.log(Params, 'params');

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">API Tester</h1>
        {/* 🔹 Input Section */}
        <div className="bg-white p-4 rounded shadow mb-4">
          <div className="flex gap-2 mb-3">
            {/* Method */}
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="border p-2 rounded"
            >
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>DELETE</option>
            </select>
            {/* URL */}
            <input
              type="text"
              placeholder="Enter API URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="border p-2 flex-1 rounded"
            />
            {/* Send Button */}
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-4 rounded"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>

          {/* Body (only for POST/PUT) */}
          {(method === "POST" || method === "PUT") && (
            <textarea
              placeholder='Enter JSON body { "name": "test" }'
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full border p-2 rounded h-32"
            />
          )}
        </div>

        {
          method === "GET" && (
            <div className="bg-white p-4 rounded shadow mb-4">
              <h2 className="font-semibold mb-3">Query Params</h2>



              <div className="mt-6">
                {Params.map((param, i) => (
                  <div key={i} className="flex gap-3 items-center mb-2">

                    <input
                      type="text"
                      placeholder="Key"
                      value={param.key}
                      onChange={(e) => handleChange(i, "key", e.target.value)}
                      className="border p-2 rounded w-1/2"
                    />

                    <input
                      type="text"
                      placeholder="Value"
                      value={param.value}
                      onChange={(e) => handleChange(i, "value", e.target.value)}
                      className="border p-2 rounded w-1/2"
                    />

                    <button
                      onClick={() => removeParam(i)}
                      className="text-red-500"
                    >
                      ✖
                    </button>
                  </div>
                ))}

                <button
                  onClick={addParam}
                  className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
                >
                  + Add Param
                </button>
              </div>
            </div>
          )
        }

        {/* 🔹 Response Section */}
        {response && (
          <div className="bg-black text-green-400 p-4 rounded">
            <p>Status: {response.status}</p>
            <pre className="mt-2 text-sm overflow-auto">
              {JSON.stringify(response?.data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </>
  )
}
