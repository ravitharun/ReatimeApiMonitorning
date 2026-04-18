import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sign from "./pages/Sign.tsx";
import LoginForm from "./pages/Login.tsx";
import Profile from "./pages/Profile.tsx";
import Maintenance from "./components/Maintenance.tsx";
import TeamMembersManagemenet from "./pages/TeamMembersManagemenet.tsx";
import TeamMembers from "./pages/TeamMembers.tsx";
import Logs from "./pages/Logs.tsx";
import Analytics from "./pages/Analytics.tsx";

const isMaintenance = 0; // change this when needed

createRoot(document.getElementById("root")!).render(
  
  isMaintenance ? (
 
    <Maintenance />
  ) : (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/TeamMembersManagemenet" element={<TeamMembersManagemenet />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/TeamMembers" element={<TeamMembers />} />
        <Route path="/Logs" element={<Logs />} />
        <Route path="/SignUp" element={<Sign />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  )
);