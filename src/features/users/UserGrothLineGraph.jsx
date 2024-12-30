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
  {
    name: 2019,
    "Clean City Initiative": 60,
    "Education for All": 65,
    "Food Distribution Curve": 70,
  },
  {
    name: 2020,
    "Clean City Initiative": 32,
    "Education for All": 23,
    "Food Distribution Curve": 64,
  },
  {
    name: 2021,
    "Clean City Initiative": 20,
    "Education for All": 55,
    "Food Distribution Curve": 89,
  },
  {
    name: 2022,
    "Clean City Initiative": 56,
    "Education for All": 85,
    "Food Distribution Curve": 56,
  },
  {
    name: 2023,
    "Clean City Initiative": 34,
    "Education for All": 45,
    "Food Distribution Curve": 80,
  },
  {
    name: 2024,
    "Clean City Initiative": 76,
    "Education for All": 45,
    "Food Distribution Curve": 93,
  },
];

function UserGrothLineGraph() {
  return (
    <div className="pt-3 pl-0 shadow-xl">
      <Heading type="h3" marginBottom={3}>
        User growth rate for the past 5 years
      </Heading>
      <LineChart width={600} height={300} data={popularityData}>
        <Line type="monotone" dataKey="Clean City Initiative" stroke="red" />
        <Line type="monotone" dataKey="Education for All" stroke="blue" />
        <Line
          type="monotone"
          dataKey="Food Distribution Curve"
          stroke="green"
        />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Legend />
      </LineChart>
    </div>
  );
}

export default UserGrothLineGraph;
