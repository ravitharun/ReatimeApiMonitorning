
import Navbar from "./components/Navbar";
import ApiPerfomance from "./pages/ApiPerfomance";
import ApiStatus from "./pages/ApiStatus";
import Graph from "./pages/Graph";
import RecentApilogs from "./pages/RecentApilogs";



export default function App() {




  return (
    <>

      <Navbar page={'API Monitoring'} />


      {/* <AddMembers></AddMembers> */}

      <ApiStatus />
      <Graph />
      <ApiPerfomance />
      <RecentApilogs />


    </>
  );
}