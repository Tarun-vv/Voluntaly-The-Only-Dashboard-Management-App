import { HiCash, HiUser } from "react-icons/hi";
import DashboardBarGraph from "./DashboardBarGraph";
import DashboardLineGraph from "./DashboardLineGraph";
import DashboardPieGraph from "./DashboardPieGraph";
import DashboardCircularGraph from "./DashboardCircularGraph";

function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-[1.5fr_0.8fr] gap-x-3 gap-y-6 mt-5">
        <DashboardLineGraph />
        <DashboardBarGraph />
        <DashboardCircularGraph />
        <DashboardPieGraph />
      </div>
    </div>
  );
}

export default Dashboard;
