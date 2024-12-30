import { HiXMark } from "react-icons/hi2";
import Heading from "../../components/Heading";
import { formatDate } from "../../utils/formatDate";

function EventModal({ selectedEvent, onClose }) {
  return (
    <div className="overlay">
      <div className="p-5 modal">
        <div className="modal-content">
          <button className="text-3xl modal__button" onClick={onClose}>
            <HiXMark />
          </button>

          <Heading type="h2" marginBottom={6}>
            Details of event: {`${selectedEvent.id}`.padStart(3, "0")}
          </Heading>

          <ul className="flex flex-col gap-4 ">
            <li className="grid grid-cols-[1fr_1.5fr]">
              <label htmlFor="name" className="text-xl">
                🎉 Name of the event
              </label>
              <input
                type="text"
                value={selectedEvent.name}
                className="p-1 text-xl bg-gray-100 rounded-lg"
                disabled
              />
            </li>
            <li className="grid grid-cols-[1fr_1.5fr]">
              <label htmlFor="name" className="text-xl">
                📅 Date of the event
              </label>
              <input
                type="text"
                value={formatDate(selectedEvent.date)}
                className="p-1 text-xl bg-gray-100 rounded-lg"
                disabled
              />
            </li>{" "}
            <li className="grid grid-cols-[1fr_1.5fr]">
              <label htmlFor="name" className="text-xl">
                💵 Funds allocated for the event
              </label>
              <input
                type="text"
                value={selectedEvent.fundsAllocated}
                className="p-1 text-xl bg-gray-100 rounded-lg"
                disabled
              />
            </li>{" "}
            <li className="grid grid-cols-[1fr_1.5fr]">
              <label htmlFor="name" className="text-xl">
                👬 Volunteers participating in the event
              </label>
              <input
                type="text"
                value={selectedEvent.volunteersParticipating}
                className="p-1 text-xl bg-gray-100 rounded-lg"
                disabled
              />
            </li>{" "}
            <li className="grid grid-cols-[1fr_1.5fr]">
              <label htmlFor="name" className="text-xl">
                💪 Goal of the event
              </label>
              <input
                type="text"
                value={selectedEvent.eventGoal}
                className="p-1 text-xl bg-gray-100 rounded-lg"
                disabled
              />
            </li>
            <li className="grid grid-cols-[1fr_1.5fr]">
              <label htmlFor="name" className="text-xl">
                👩‍💼 Sub managers allocated for the event
              </label>
              <input
                type="text"
                value={selectedEvent.subManagersAllocated}
                className="p-1 text-xl bg-gray-100 rounded-lg"
                disabled
              />
            </li>{" "}
            <li className="grid grid-cols-[1fr_1.5fr]">
              <label htmlFor="name" className="text-xl">
                ⛺️ Name of the campaign
              </label>
              <input
                type="text"
                value={selectedEvent.campaign_id}
                className="p-1 text-xl bg-gray-100 rounded-lg"
                disabled
              />
            </li>
            <li className="grid grid-cols-[1fr_1.5fr]">
              <label htmlFor="name" className="text-xl">
                🧑‍💼 Event Manager details
              </label>
              <input
                type="text"
                value={selectedEvent.eventManager}
                className="p-1 text-xl bg-gray-100 rounded-lg cursor-not-allowed"
                disabled
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventModal;
