import { NavLink, Outlet } from "react-router-dom";
import Heading from "../../components/Heading";

function Users() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <Heading type="h2">Your users</Heading>
        <div className="text-lg font-[550] flex">
          <NavLink className="p-2 rounded-lg nav-link" to="analytics">
            Analytics
          </NavLink>
          <NavLink className="p-2 rounded-lg nav-link" to="dataset">
            Dataset
          </NavLink>
        </div>
      </div>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Users;
