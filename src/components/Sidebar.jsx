import { NavLink } from "react-router-dom";

import { HiOutlineHome } from "react-icons/hi2";

function Sidebar() {
  return (
    <div className="row-span-2 p-5 ">
      <h1 className="mb-6 text-5xl font-bold">Voluntaly</h1>
      <ul className="flex flex-col gap-3 text-xl">
        <li>
          <NavLink
            to="/"
            className="flex items-center gap-4 px-6 py-3 hover:bg-gray-200"
          >
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/campaigns"
            className="flex items-center gap-4 px-6 py-3 hover:bg-gray-200"
          >
            <span>campaigns</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className="flex items-center gap-4 px-6 py-3 hover:bg-gray-200"
          >
            <span>events</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className="flex items-center gap-4 px-6 py-3 hover:bg-gray-200"
          >
            <span>users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className="flex items-center gap-4 px-6 py-3 hover:bg-gray-200"
          >
            <span>profile</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
