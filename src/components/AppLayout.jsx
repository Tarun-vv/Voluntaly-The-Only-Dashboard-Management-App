import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

function AppLayout() {
  return (
    <div className="grid grid-cols-[300px_1fr] h-screen grid-rows-[70px_1fr]">
      <Sidebar />
      <NavBar />
      <main className="p-4 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
