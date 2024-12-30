import { useSearchParams } from "react-router-dom";
import CampaignTable from "./CampaignTable";
import Table from "./CampaignTable";
import { useCampaigns } from "./useCampaigns";
import Filter from "../../components/Filter";
import CampaignModal from "./CampaignModal";
import { useState } from "react";
import CampaignSorting from "./CampaignSorting";

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
    filterCampaigns = campaigns?.filter(
      (campaign) => campaign.fundsRaised <= 7000
    );
  } else if (filterValue === "medium") {
    filterCampaigns = campaigns?.filter(
      (campaign) => campaign.fundsRaised > 7000 && campaign.fundsRaised <= 15000
    );
  } else if (filterValue === "large") {
    filterCampaigns = campaigns?.filter(
      (campaign) => campaign.fundsRaised > 15000
    );
  }

  const filterData = [
    { label: "All", value: "all" },
    { label: "Small funds", value: "small" },
    { label: "Medium funds", value: "medium" },
    { label: "Large funds", value: "large" },
  ];

  const sortData = [
    { value: "name-asc", label: "Sort by campaign name (A-Z)" },
    { value: "name-desc", label: "Sort by campaign name (Z-A)" },
    {
      value: "volunteers-asc",
      label: "Sort by volunteer count (low to high)",
    },
    {
      value: "volunteers-desc",
      label: "Sort by volunteer count (high to low)",
    },
    {
      value: "fundsRaised-asc",
      label: "Sort by funds raised amount (low to high)",
    },
    {
      value: "fundsRaised-desc",
      label: "Sort by funds raised amount (high to low)",
    },
    {
      value: "eventManagersCount-asc",
      label: "Sort by event manager count (low to high)",
    },
    {
      value: "eventManagersCount-desc",
      label: "Sort by event manager count (high to low)",
    },
  ];

  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCampaigns = field.startsWith("name")
    ? filterCampaigns?.sort(
        (a, b) => a[field].localeCompare(b[field]) * modifier
      )
    : filterCampaigns?.sort((a, b) => (a[field] - b[field]) * modifier);
  console.log(sortedCampaigns);

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
        <div className="flex items-center gap-2">
          <Filter data={filterData} filterValue={filterValue} />
          <CampaignSorting data={sortData} />
        </div>
      </div>
      <CampaignTable data={sortedCampaigns} />
    </div>
  );
}

export default CampaignDataset;
