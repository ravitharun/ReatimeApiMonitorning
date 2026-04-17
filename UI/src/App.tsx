import { useEffect } from "react";
import Navbar from "./components/Navbar";
import ApiPerfomance from "./pages/ApiPerfomance";
import ApiStatus from "./pages/ApiStatus";
import Graph from "./pages/Graph";
import RecentApilogs from "./pages/RecentApilogs";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Profile from "./pages/Profile";
import { socket } from "./servies/Scokets";
import Sidebar from "./components/Sidebar";
import AddMembers from "./pages/AddMembers";


export default function App() {

  useEffect(() => {

    const handleCheck = (data: any) => {
      console.count(`FAILURE in the Api ${data.originalUrl} method ${data.method}`);


      if (data.status == 'SUCCESS') {
        toast.custom((t) => (
          <div className="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <span>🚨 API Failure</span>
            <span className="text-sm opacity-80">
              {data.method} {data.originalUrl}
            </span>
          </div>
        ));

      }
    };
    socket.on("CheckLogsNotif", handleCheck);

    return () => {
      socket.off("CheckLogsNotif", handleCheck);

    };
  }, []);



  return (
    <>
  <Toaster />

  <Navbar />


<AddMembers></AddMembers>

      <ApiStatus />
      <Graph />
      <ApiPerfomance />
      <RecentApilogs />
    
  
</>
  );
}