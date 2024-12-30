import { Cell, Pie, PieChart, Tooltip, Legend } from "recharts";

import Heading from "./../../components/Heading";

const data = [
  {
    name: "Food",
    value: 500,
  },
  {
    name: "Water",
    value: 1000,
  },
  {
    name: "Cloth",
    value: 600,
  },
  {
    name: "Books",
    value: 400,
  },
  {
    name: "Teaching lessons",
    value: 300,
  },
];

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF8042"];

const RenderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const Radian = Math.PI / 180;
  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * Radian);
  const y = cy + radius * Math.sin(-midAngle * Radian);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >{`${(percent * 100).toFixed(0)}%`}</text>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        <p>{`${payload[0].value} users`}</p>
      </div>
    );
  }

  return null;
};

function UserPieGraph() {
  return (
    <div className="p-2 shadow-xl">
      <Heading type="h3">Contributions by users</Heading>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label={RenderCustomizedLabel}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={colors[index]} name={entry.name} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="center"
          iconType="circle"
          iconSize={10}
        />
      </PieChart>
    </div>
  );
}

export default UserPieGraph;
