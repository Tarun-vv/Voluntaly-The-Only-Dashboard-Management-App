import { useCampaigns } from "../campaigns/useCampaigns";
import { useUsers } from "./useUsers";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Volunteer", count: 10 },
  { name: "Coordinator", count: 12 },
  { name: "Manager", count: 20 },
];

const colors = ["#8884d8", "#82ca9d", "#ffc658"]; // Array of colors for bars

function UserRoleBarGraph() {
  const { users, isLoading, error } = useUsers();
  const { campaigns } = useCampaigns();

  return (
    <ResponsiveContainer width="100%" height={270}>
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* Custom fill logic for each bar */}
        <Bar dataKey="count">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default UserRoleBarGraph;
