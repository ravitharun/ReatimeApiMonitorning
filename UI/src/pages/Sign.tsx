import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthUsernewAccount } from "../servies/Auth";

function Sign() {
  type userRole = "developer" | "teamLeader";

  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userEmpId, setuserEmpId] = useState("");
  const [role, setUserole] = useState<userRole | "">("");
  const [userPassword, setUserPassword] = useState("");
  const [userProfile, setUserProfile] = useState<any>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setloading] = useState<boolean>(false)
  const navigate = useNavigate()
  const handleLogin = async () => {
    if (!username || !userEmpId || !userEmail || !userPassword || !userProfile || !role) {
      return toast.error("Fill all fields");
    }

    const formData = new FormData();
    formData.append("username", username);
    formData.append("userRole", role);
    formData.append("userEmpId", userEmpId);
    formData.append("userEmail", userEmail);
    formData.append("userPassword", userPassword);
    formData.append("userProfile", userProfile);

    try {
      setloading(true)
      const response: any = await AuthUsernewAccount(formData);
      console.log(response.data.status, 'response');
      if (response.data.status) {
        setloading(false)

        toast.success("Account created 🚀");
        localStorage.setItem("token", response.data.token)
        setTimeout(() => {
          navigate("/login")
        }, 2500);

      }

    } catch {
      toast.error("Error creating account");
    }
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setUserProfile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Toaster />

      <div className="min-h-screen flex bg-black text-white">

        {/* LEFT SIDE (Branding) */}
        <div className="hidden md:flex w-1/2 flex-col justify-center px-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20">
          <h1 className="text-5xl font-bold mb-4">Welcome 🚀</h1>
          <p className="text-gray-300 text-lg">
            Build and monitor your APIs with a clean dashboard experience.
          </p>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="flex w-full md:w-1/2 items-center justify-center px-6">

          <div className="w-full max-w-md space-y-8">

            {/* TITLE */}
            <div>
              <h2 className="text-3xl font-bold">Create Account</h2>
              <p className="text-gray-400 text-sm">
                Start your journey now
              </p>
            </div>

            {/* PROFILE */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-800 overflow-hidden">
                {preview && <img src={preview} className="w-full h-full object-cover" />}
              </div>
              <input type="file" onChange={handleImageChange} />
            </div>

            {/* ROLE SELECT (PILLS 🔥) */}
            <div className="flex gap-3">
              {["developer", "teamLeader"].map((r) => (
                <button
                  key={r}
                  onClick={() => setUserole(r as userRole)}
                  className={`px-4 py-2 rounded-full border ${role === r
                    ? "bg-blue-600 border-blue-600"
                    : "border-gray-600 text-gray-400"
                    }`}
                >
                  {r}
                </button>
              ))}
            </div>

            {/* INPUTS */}
            <div className="space-y-6">

              <input
                placeholder="Full Name"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-blue-500"
              />

              <input
                placeholder="Employee ID"
                onChange={(e) => setuserEmpId(e.target.value)}
                className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-blue-500"
              />

              <input
                placeholder="Email"
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-blue-500"
              />

              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setUserPassword(e.target.value)}
                className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-blue-500"
              />

            </div>

            {/* BUTTON */}
            <button
              onClick={handleLogin}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition"
            > 
              {loading ? "creating" : "Create Account"}
            </button>

            {/* FOOTER */}
            <p className="text-sm text-gray-400 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400">
                Login
              </Link>
            </p>

          </div>
        </div>
      </div>
    </>
  );
}

export default Sign;