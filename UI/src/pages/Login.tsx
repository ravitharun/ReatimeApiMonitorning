import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { AuthLoginUser } from "../servies/Auth";
import type { userRole } from "../Type/Login";
import toast, { Toaster } from "react-hot-toast";

const LoginForm = () => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [role, setUserole] = useState<userRole | "">("");

    const handleLogin = async () => {
        // console.log();
        const userinfo = { userEmail, userPassword, role }
        console.log(userinfo, 'userinfo');

        try {
            const response: any = await AuthLoginUser(userinfo)
            console.log('login response', response.data);
            if (response.data.message = "ok") {
                return toast.success("hey user")
            }
            if (response.data.message = "role  is incorrect") {
                return toast.success("role  is incorrect")
            }
        } catch (error: any) {
            if (error) {
                console.log("error --->", error.message);
                return toast.success("role  is incorrect")
            }
        }

    };

    return (
        <>
            <Toaster></Toaster>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">

                {/* Glass Card */}
                <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl space-y-5">

                    {/* Header */}
                    <div className="text-center space-y-1">
                        <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
                        <p className="text-gray-300 text-sm">Login to continue monitoring APIs</p>
                    </div>

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

                    {/* Email */}
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus-within:border-blue-400 transition">
                        <FaEnvelope className="text-gray-300" />
                        <Input
                            inputtype="email"
                            placeholder="Email address"
                            required
                            onChange={(e) => setUserEmail(e.target.value)}
                            className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus-within:border-blue-400 transition">
                        <FaLock className="text-gray-300" />
                        <Input
                            // inputtype=""
                            inputtype="password"
                            placeholder="Password"
                            required
                            onChange={(e) => setUserPassword(e.target.value)}
                            className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
                        />
                    </div>

                    {/* Button */}
                    <button
                        onClick={handleLogin}
                        className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition font-semibold text-white shadow-lg"
                    >
                        Sign In
                    </button>

                    {/* Footer */}
                    <p className="text-center text-gray-400 text-sm">
                        Don’t have an account? <Link to="/SignUp">
                            <span className="text-blue-400 cursor-pointer">Sign up</span>
                        </Link>
                    </p>

                </div>
            </div >
        </>
    );
};

export default LoginForm;