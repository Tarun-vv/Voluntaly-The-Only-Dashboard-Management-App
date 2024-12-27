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
  { name: "Clean City Initiative", volunteers: 45 },
  { name: "Education for All", volunteers: 30 },
  { name: "Tree Planting Drive", volunteers: 50 },
  { name: "Disaster Relief Program", volunteers: 60 },
  { name: "Community Health Camp", volunteers: 40 },
  { name: "Animal Rescue Mission", volunteers: 20 },
  { name: "Food Distribution Drive", volunteers: 35 },
];

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF8042",
  "#00C49F",
  "#FFBB28",
];

function VolunteerChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* Custom fill logic for each bar */}
        <Bar dataKey="volunteers">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default VolunteerChart;
