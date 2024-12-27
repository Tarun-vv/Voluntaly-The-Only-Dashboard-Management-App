import { useSearchParams } from "react-router-dom";
import CampaignTable from "./CampaignTable";
import Table from "./CampaignTable";
import { useCampaigns } from "./useCampaigns";
import Filter from "../../components/Filter";
import CampaignModal from "./CampaignModal";
import { useState } from "react";

function CampaignDataset() {
  const { campaigns, isLoading, error } = useCampaigns();

  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen((open) => !open);
  }
  function handleClose() {
    setOpen(false);
  }

  const [searchParams] = useSearchParams();
  let filterCampaigns;
  const filterValue = searchParams.get("funds") || "all";
  if (filterValue === "all") {
    filterCampaigns = campaigns;
  } else if (filterValue === "small") {
    filterCampaigns = campaigns.filter(
      (campaign) => campaign.fundsRaised <= 7000
    );
  } else if (filterValue === "medium") {
    filterCampaigns = campaigns.filter(
      (campaign) => campaign.fundsRaised > 7000 && campaign.fundsRaised <= 15000
    );
  } else if (filterValue === "large") {
    filterCampaigns = campaigns.filter(
      (campaign) => campaign.fundsRaised > 15000
    );
  }

  const filterData = [
    { label: "All", value: "all" },
    { label: "Small funds", value: "small" },
    { label: "Medium funds", value: "medium" },
    { label: "Large funds", value: "large" },
  ];

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        {open && <CampaignModal onClose={handleClose} />}
        <button
          className="p-2 text-lg text-white transition-all duration-100 rounded-lg bg-emerald-500 "
          onClick={handleOpen}
        >
          Add Campaign
        </button>
        <Filter data={filterData} filterValue={filterValue} />
      </div>
      <CampaignTable data={filterCampaigns} />
    </div>
  );
}

export default CampaignDataset;
