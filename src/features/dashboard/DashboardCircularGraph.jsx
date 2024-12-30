import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useUsers } from "../users/useUsers";
import { useCampaigns } from "../campaigns/useCampaigns";

import Heading from "./../../components/Heading";

const startDataLight = [
  {
    campaignName: "Clean City Initiative",
    value: 7000,
    color: "#ef4444",
  },
  {
    campaignName: "Education for All",
    value: 5000,
    color: "#f97316",
  },
  {
    campaignName: "Tree Planting Drive",
    value: 3000,
    color: "#eab308",
  },
  {
    campaignName: "Disaster Relief Program",
    value: 4000,
    color: "#84cc16",
  },
  {
    campaignName: "Community Health Camp",
    value: 7000,
    color: "#22c55e",
  },
  {
    campaignName: "Animal Rescue Mission",
    value: 2000,
    color: "#14b8a6",
  },
  {
    campaignName: "Food Distribution Camp",
    value: 4700,
    color: "#3b82f6",
  },
];

const colors = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#14b8a6",
  "#3b82f6",
];

function DashboardCircularGraph() {
  const { users, isLoading, error } = useUsers();
  const { campaigns } = useCampaigns();

  function volunteerCountGenerator(campaignId) {
    const x = users?.filter((user) => user.campaign_id === campaignId);
    return x?.length;
  }

  function findCampaignFromId(id) {
    const campaign = campaigns?.find((campaign) => campaign.campaignId === id);
    return campaign?.name;
  }

  const data = users?.map((user, i) => {
    return {
      campaignName: findCampaignFromId(user?.campaign_id),
      value: volunteerCountGenerator(user?.campaign_id),
      color: colors[i],
    };
  });

  if (isLoading) return <p>{isLoading}</p>;

  return (
    <div className="p-3 shadow-xl">
      <Heading type="h3">Funds allocated for each campaign</Heading>
      <ResponsiveContainer height={240} width="100%">
        <PieChart>
          <Pie
            data={startDataLight}
            nameKey="campaignName"
            dataKey="value"
            innerRadius={85}
            outerRadius={120}
            cx="40%"
            cy="50%"
            paddingAngle={3}
          >
            {data?.map((entry) => (
              <Cell
                fill={entry.color}
                stroke={entry.color}
                key={entry.campaignName}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardCircularGraph;
