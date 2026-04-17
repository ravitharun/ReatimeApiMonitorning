import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import toast, { Toaster } from "react-hot-toast";
import { AuthUsernewAccount } from "../servies/Auth";
function Sign() {
  const [username, setUsername] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [userProfile, setUserProfile] = useState<any>(null);
  const [UserProfileview, setUserProfileview] = useState<string | null>(null);

  const handleLogin = async () => {
    if (!username || !userEmail || !userPassword || !userProfile) {
      return toast.error("fill the required")
    }
    const formData = new FormData();
    formData.append("username", username);
    formData.append("userEmail", userEmail);
    formData.append("userPassword", userPassword);
    formData.append("userProfile", userProfile); // file


    try {
      const response_newAccount = await AuthUsernewAccount(formData);
      console.log(response_newAccount, 'response_newAccount');
    } catch (error) {
      console.log(error);

    }

  };

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // /monitoring/AuthUser/NewAccount
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserProfile(file);
      setUserProfileview(imageUrl);
    }
  };

  return (
    <>
      <Toaster></Toaster>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">

        <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl space-y-5">

          {/* Header */}
          <div className="text-center space-y-1">
            <h2 className="text-3xl font-bold text-white">New Account</h2>
            <p className="text-gray-300 text-sm">
              Create a new account for monitoring APIs
            </p>
          </div>

          {/* Profile Preview */}
          <div className="flex justify-center">
            {UserProfileview ? (
              <img
                src={UserProfileview}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-400 text-xs">
                No Image
              </div>
            )}
          </div>

          {/* File Upload */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 border border-white/20">
            <FaUser className="text-gray-300" />
            <Input
              inputtype="file"
              onChange={handleImageChange}
              className="w-full bg-transparent text-white outline-none"
              accept="image/*"
            />
          </div>

          {/* Username */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 border border-white/20">
            <FaUser className="text-gray-300" />
            <Input
              inputtype="text"
              placeholder="Enter your name"
              className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 border border-white/20">
            <FaEnvelope className="text-gray-300" />
            <Input
              inputtype="email"
              placeholder="Email address"
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 border border-white/20">
            <FaLock className="text-gray-300" />
            <Input
              inputtype="password"
              placeholder="Password"
              onChange={(e) => setUserPassword(e.target.value)}
              className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition font-semibold text-white shadow-lg"
          >
            Sign Up
          </button>

          {/* Footer */}
          <p className="text-center text-gray-400 text-sm">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-blue-400 cursor-pointer">Sign in</span>
            </Link>
          </p>

        </div>
      </div>
    </>

  );
}

export default Sign;