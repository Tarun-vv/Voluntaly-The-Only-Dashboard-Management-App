import Filter from "../../components/Filter";
import Heading from "../../components/Heading";
import CampaignBarGraph from "./CampaignBarGraph";
import { useCampaigns } from "./useCampaigns";
import { useSearchParams } from "react-router-dom";

function CampaignAnalytics() {
  const { campaigns, isLoading } = useCampaigns();

  const [searchParams, setSearchParams] = useSearchParams();

  const filterValue = searchParams.get("funds") || "all";
  const filterData = [
    { value: "all", label: "All" },
    { value: "lastWeek", label: "2-4 weeks ago" },
    {
      value: "lastMonth",
      label: "Last Month",
    },
    {
      value: "older",
      label: "Older...",
    },
  ];

  let filterCampaigns;
  if (filterValue === "all") {
    filterCampaigns = campaigns;
  } else if (filterValue === "lastWeek") {
    filterCampaigns = campaigns?.filter(
      (campaign) =>
        Math.round(
          (Date.now() - new Date(campaign.createdAt).getTime()) /
            (1000 * 60 * 60 * 24)
        ) <= 30
    );
  } else if (filterValue === "lastMonth") {
    filterCampaigns = campaigns?.filter(
      (campaign) =>
        Math.round(
          (Date.now() - new Date(campaign.createdAt).getTime()) /
            (1000 * 60 * 60 * 24)
        ) <= 60 &&
        Math.round(
          (Date.now() - new Date(campaign.createdAt).getTime()) /
            (1000 * 60 * 60 * 24)
        ) > 30
    );
  } else if (filterValue === "older") {
    filterCampaigns = campaigns?.filter(
      (campaign) =>
        Math.round(
          (Date.now() - new Date(campaign.createdAt).getTime()) /
            (1000 * 60 * 60 * 24)
        ) >= 60
    );
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <Heading type="h3" marginBottom="5">
          Track your campiagns at a glance
        </Heading>

        <Filter
          data={filterData}
          filterValue={filterValue}
          end={true}
          marginBottom={4}
        />

        <div className="grid grid-cols-[130px_250px_1fr] bg-gray-100">
          <div className="p-2 text-lg bg-green-400">Campaign ID</div>
          <div className="p-2 text-lg bg-yellow-400">Name of the campaign</div>
          <div className="p-2 text-lg bg-red-400">Funds</div>

          {filterCampaigns?.map((campaign) => (
            <>
              <div className="p-1 text-lg">{campaign.campaignId}</div>
              <div className="p-1 text-lg">{campaign.name}</div>
              <div className="p-1 text-lg">${campaign.fundsRaised}</div>
            </>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <Heading type="h3">Volunteers in each campaign</Heading>
        <CampaignBarGraph />
      </div>
    </div>
  );
}

export default CampaignAnalytics;
