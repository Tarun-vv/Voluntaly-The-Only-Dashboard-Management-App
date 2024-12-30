import Heading from "./../../components/Heading";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Education for All", count: 10 },
  { name: "Clean City Initiative", count: 12 },
  { name: "Beach Cleaning", count: 20 },
];

const colors = ["#8884d8", "#82ca9d", "#ffc658"];

function DashboardBarGraph() {
  return (
    <div className="p-3 pb-0 shadow-xl">
      <Heading type="h3">Track the highest performing campaigns</Heading>
      <ResponsiveContainer width={260} height={270}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* Custom fill logic for each bar */}
          <Bar dataKey="count">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardBarGraph;
