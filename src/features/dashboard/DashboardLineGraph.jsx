import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Heading from "./../../components/Heading";

const popularityData = [
  { name: 2019, Volunteers: 60, Coordinators: 65, Managers: 70 },
  { name: 2020, Volunteers: 32, Coordinators: 23, Managers: 60 },
  { name: 2021, Volunteers: 85, Coordinators: 55, Managers: 30 },
  { name: 2022, Volunteers: 55, Coordinators: 65, Managers: 50 },
  { name: 2023, Volunteers: 34, Coordinators: 45, Managers: 80 },
  { name: 2024, Volunteers: 76, Coordinators: 67, Managers: 90 },
];

function DashboardLineGraph() {
  return (
    <div className="p-2 shadow-xl">
      <Heading type="h3">
        Growth rate of different user roles over the past 5 years
      </Heading>
      <LineChart width={600} height={300} data={popularityData}>
        <Line type="monotone" dataKey="Volunteers" stroke="red" />
        <Line type="monotone" dataKey="Coordinators" stroke="blue" />
        <Line type="monotone" dataKey="Managers" stroke="green" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Legend />
      </LineChart>
    </div>
  );
}

export default DashboardLineGraph;
