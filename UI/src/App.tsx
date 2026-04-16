import { useEffect } from "react";
import Navbar from "./components/Navbar";
import ApiPerfomance from "./pages/ApiPerfomance";
import ApiStatus from "./pages/ApiStatus";
import Graph from "./pages/Graph";
import RecentApilogs from "./pages/RecentApilogs";

import socket from "./servies/Scokets";
import axios from "axios";
import Login from "./pages/Login";
import Sign from "./pages/Sign";

export default function App() {

  useEffect(() => {

    const handleCheck = (data:string) => {
      console.log("RECEIVED:", data);
      alert(data);
    };
    const handleheyCheck = (data:string) => {
      console.log("RECEIVED:", data);
      alert("handleheyCheck"+data);
    };
    socket.on("check", handleCheck);
    socket.on("hey", handleheyCheck);
    return () => {
      socket.off("check", handleCheck);
      socket.off("hey", handleheyCheck);
    };
  }, []);

  useEffect(() => {
    const callAPI = async () => {
      try {
        await axios.get("http://localhost:8000/AppExp/check");
      } catch (err) {
        console.error(err);
      }
    };

    callAPI();
  }, []);

  return (
    <>
      <Navbar />
      <Login></Login>
      <Sign></Sign>
      <ApiStatus />
      <Graph />
      <ApiPerfomance />
      <RecentApilogs />
    </>
  );
}