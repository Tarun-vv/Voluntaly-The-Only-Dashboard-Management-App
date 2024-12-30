import { HiTrash } from "react-icons/hi2";
import { formatDate } from "../../utils/formatDate";
import { useDeleteCampaign } from "./useDeleteCampaign";
import CampaignDeleteModal from "./CampaignDeleteModal";
import { useState } from "react";

function CampaignTable({ data }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="grid grid-cols-[70px_150px_250px_200px_200px_200px_250px_200px] w-[930px] overflow-x-scroll">
      <div></div>
      <div className="text-xl font-[500] bg-blue-300 px-3 py-3">
        Campaign ID
      </div>
      <div className="text-xl font-[500] bg-red-300 px-3 py-3">
        Campaign name
      </div>
      <div className="text-xl font-[500] bg-yellow-300 px-3 py-3">Location</div>
      <div className="text-xl font-[500] bg-pink-300 px-3 py-3">Volunteers</div>
      <div className="text-xl font-[500] bg-green-300 px-3 py-3">
        Funds raised
      </div>
      <div className="text-xl font-[500] bg-violet-300 px-3 py-3">
        Event Manager Count
      </div>
      <div className="text-xl font-[500] bg-gray-300 px-3 py-3">Created at</div>

      {data?.map((col, i) => (
        <>
          <button
            className="p-2 text-lg hover:cursor-pointer"
            onClick={() => setSelectedId(col.campaignId)}
          >
            <HiTrash />
          </button>
          <div className="p-2 text-lg" key={i}>
            {`${col.campaignId}`.padStart(3, "0")}
          </div>
          <div className="p-2 text-lg" key={i + 1}>
            {col.name}
          </div>
          <div className="p-2 text-lg" key={i + 2}>
            {col.location}
          </div>
          <div className="p-2 text-lg" key={i + 3}>
            {col.volunteers}
          </div>
          <div className="p-2 text-lg" key={i + 4}>
            ${col.fundsRaised}
          </div>
          <div className="p-2 text-lg" key={i + 5}>
            {col.eventManagersCount} managers
          </div>
          <div className="p-2 text-lg" key={i + 6}>
            {formatDate(col.createdAt)}
          </div>
        </>
      ))}
      {selectedId && (
        <CampaignDeleteModal
          id={`${selectedId}`.padStart(3, "0")}
          onClose={setSelectedId}
        />
      )}
    </div>
  );
}

export default CampaignTable;
