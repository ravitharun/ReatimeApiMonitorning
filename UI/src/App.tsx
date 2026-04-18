import { useEffect } from "react";
import Navbar from "./components/Navbar";
import ApiPerfomance from "./pages/ApiPerfomance";
import ApiStatus from "./pages/ApiStatus";
import Graph from "./pages/Graph";
import RecentApilogs from "./pages/RecentApilogs";
import toast, { Toaster } from "react-hot-toast";

import { socket } from "./servies/Scokets";
import { userinfo } from "./servies/apivesrion";



export default function App() {
  // console.log(JSON.parse(userinfo).userEmpId,'userinfo');

  useEffect(() => {

    const handleCheck = (data: any) => {
      console.count(`FAILURE in the Api ${data.originalUrl} method ${data.method}`);


      if (data.status == 'SUCCESS') {
        toast.custom(() => (
          <div className="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <span>🚨 API Failure</span>
            <span className="text-sm opacity-80">
              {data.method} {data.originalUrl}
            </span>
          </div>
        ));

      }
    };


    const handleCheckuser = (data: any) => {
      const text: boolean = data.split(" ")[1] == JSON.parse(userinfo).username
      console.log(text, 'text');
      if (text) {
        return toast.success("your are in online")
      }
      toast.success(data)
    }
    const handleCheckuserDeactivation = (data: any) => {
      const text: boolean = data.split(" ")[1] == JSON.parse(userinfo).username
      console.log(text, 'text');
      if (text) {
        return toast.error("your are in Offline")
      }
      toast.error(data)
    }
    socket.on("CheckLogsNotif", handleCheck);
    socket.on("UserActiveNotification", handleCheckuser);
    socket.on("UserDeactiveNotification", handleCheckuserDeactivation);
    return () => {
      socket.off("CheckLogsNotif", handleCheck);
      socket.off("UserDeactiveNotification", handleCheckuserDeactivation);
      socket.off("UserActiveNotification", handleCheckuser);
      socket.off("disconnect", handleCheckuserDeactivation);

    };
  }, []);



  return (
    <>
      <Toaster />

      <Navbar />


      {/* <AddMembers></AddMembers> */}

      <ApiStatus />
      <Graph />
      <ApiPerfomance />
      <RecentApilogs />


    </>
  );
}