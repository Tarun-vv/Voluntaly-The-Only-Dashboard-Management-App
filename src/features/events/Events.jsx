import { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import EventModal from "./EventModal";
import { useEvents } from "./useEvents";
import { useCampaigns } from "../campaigns/useCampaigns";
import { useSearchParams } from "react-router-dom";
import EventAddModal from "./EventAddModal";
import { HiTrash } from "react-icons/hi2";
import { useDeleteEvent } from "./useDeleteEvent";

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

  const [open, setOpen] = useState(false);
  function handleSetOpen() {
    setOpen((open) => !open);
  }
  function handleCloseAddModal() {
    setOpen(false);
  }

  const { isDeleting, deleteEvent } = useDeleteEvent();

  if (isLoading || isCampaigns) return <p>Loading...</p>;

  return (
    <div>
      {open && (
        <EventAddModal
          onCloseAddModal={handleCloseAddModal}
          eventValue={eventValue}
        />
      )}
      <div className="flex items-center justify-between mb-7">
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
        <button
          className="p-2 text-base text-white bg-green-500 rounded-lg"
          onClick={handleSetOpen}
        >
          Add a new event
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {selectedEvent && (
          <EventModal selectedEvent={selectedEvent} onClose={handleClose} />
        )}

        {eventSortedCampaigns.length > 0 ? (
          eventSortedCampaigns?.map((event) => (
            <div key={event.name} className="relative p-2 shadow-xl">
              <button
                className="absolute top-3 right-3"
                onClick={() => deleteEvent(event.id)}
              >
                <HiTrash className="p-1 text-3xl bg-gray-200 rounded-full" />
              </button>
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
          <p className="text-lg text-red-400">
            There are no events planned for this campaign
          </p>
        )}
      </div>
    </div>
  );
}

export default Events;
