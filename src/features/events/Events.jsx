import { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import EventModal from "./EventModal";
import { useEvents } from "./useEvents";
import { useCampaigns } from "../campaigns/useCampaigns";
import { useSearchParams } from "react-router-dom";

function Events() {
  const { isLoading, error, events } = useEvents();
  const { campaigns, isLoading: isCampaigns } = useCampaigns();

  const [selectedEvent, setSelectedEvent] = useState(null);
  function handleClose() {
    setSelectedEvent(null);
  }

  const [searchParams, setSearchParams] = useSearchParams();
  function handleChange(e) {
    searchParams.set("campaign", e.target.value);
    setSearchParams(searchParams);
  }
  const eventValue = +searchParams.get("campaign") || 1;
  console.log(typeof eventValue);
  const eventSortedCampaigns = events?.filter(
    (event) => event.campaign_id === eventValue
  );
  console.log(eventSortedCampaigns);

  if (isLoading || isCampaigns) return <p>Loading...</p>;

  return (
    <div>
      <div className="mb-7">
        <select
          className="p-2 text-xl bg-gray-100 rounded-lg"
          onChange={handleChange}
        >
          {campaigns.map((campaign) => (
            <option key={campaign.name} value={campaign.campaignId}>
              {campaign.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {selectedEvent && (
          <EventModal selectedEvent={selectedEvent} onClose={handleClose} />
        )}

        {eventSortedCampaigns.length > 0 ? (
          eventSortedCampaigns?.map((event) => (
            <div key={event.name} className="p-2 shadow-xl">
              <ul className="mb-3">
                <li className="text-2xl font-bold">{event.name}</li>
                <li className="text-lg">
                  📅 Date of campaign: {formatDate(event.date)}
                </li>
                <li className="text-lg">
                  🙋 Volnteers participating: {event.volunteersParticipating}{" "}
                  volunteers
                </li>
                <li className="text-lg">📍 Location: {event.location}</li>
                <li className="text-lg">
                  👩‍💼 Sub manager count: {event.subManagersAllocated}
                </li>
              </ul>
              <button
                className="p-2 text-white transition-all duration-150 bg-blue-400 rounded-lg hover:bg-blue-500"
                onClick={() => setSelectedEvent(event)}
              >
                View details &rarr;
              </button>
            </div>
          ))
        ) : (
          <p className="text-lg text-red-400">There are no events planned for this campaign</p>
        )}
      </div>
    </div>
  );
}

export default Events;
