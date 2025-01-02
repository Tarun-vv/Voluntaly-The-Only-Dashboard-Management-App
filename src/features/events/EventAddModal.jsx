import { HiXMark } from "react-icons/hi2";
import Heading from "../../components/Heading";
import { useUsers } from "../users/useUsers";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddEvent } from "./useAddEvent";

function EventAddModal({ onCloseAddModal, eventValue }) {
  const { users, isLoading, error } = useUsers();
  const [user, setUser] = useState("");

  const { register, handleSubmit, reset } = useForm();
  const { addEvent, isLoading: isAdding } = useAddEvent();
  function onSubmit(formData) {
    console.table({
      ...formData,
      campaign_id: Number(formData.campaign_id),
      date: new Date(formData.date).toISOString(),
      eventManager: Number(formData.eventManager),
      fundsAllocated: Number(formData.fundsAllocated),
      subManagersAllocated: Number(formData.subManagersAllocated),
      volunteersParticipating: Number(formData.volunteersParticipating),
      location: "test.jpg",
      imgUrl: "test.jpg",
    });
    addEvent(formData, {
      onSuccess: () => {
        reset();
        onCloseAddModal();
      },
    });
  }

  return (
    <div className="overlay">
      <div className="p-5 modal">
        <div className="modal-content">
          <button className="text-3xl modal__button" onClick={onCloseAddModal}>
            <HiXMark />
          </button>

          <Heading type="h2" marginBottom={6}>
            Details of event: {``.padStart(3, "0")}
          </Heading>

          <form onSubmit={handleSubmit(onSubmit)}>
            <ul className="flex flex-col gap-4 ">
              <li className="grid grid-cols-[1fr_1.5fr]">
                <label htmlFor="name" className="text-xl">
                  🎉 Name of the event
                </label>
                <input
                  type="text"
                  name="name"
                  className="p-1 text-xl rounded-lg"
                  placeholder="Name"
                  {...register("name")}
                />
              </li>
              <li className="grid grid-cols-[1fr_1.5fr]">
                <label htmlFor="name" className="text-xl">
                  📅 Date of the event
                </label>
                <input
                  type="date"
                  className="p-1 text-xl rounded-lg"
                  name="date"
                  {...register("date")}
                />
              </li>{" "}
              <li className="grid grid-cols-[1fr_1.5fr]">
                <label htmlFor="name" className="text-xl">
                  💵 Funds allocated for the event
                </label>
                <input
                  type="text"
                  className="p-1 text-xl rounded-lg"
                  placeholder="Funds allocated"
                  name="fundsAllocated"
                  {...register("fundsAllocated")}
                />
              </li>{" "}
              <li className="grid grid-cols-[1fr_1.5fr]">
                <label htmlFor="name" className="text-xl">
                  👬 Volunteers participating in the event
                </label>
                <input
                  type="text"
                  className="p-1 text-xl rounded-lg"
                  placeholder="Volunteers participating"
                  name="volunteersParticipating"
                  {...register("volunteersParticipating")}
                />
              </li>{" "}
              <li className="grid grid-cols-[1fr_1.5fr]">
                <label htmlFor="name" className="text-xl">
                  💪 Goal of the event
                </label>
                <input
                  type="text"
                  className="p-1 text-xl rounded-lg b"
                  placeholder="Goal of the event"
                  name="eventGoal"
                  {...register("eventGoal")}
                />
              </li>
              <li className="grid grid-cols-[1fr_1.5fr]">
                <label htmlFor="name" className="text-xl">
                  👩‍💼 Sub managers allocated for the event
                </label>
                <input
                  type="text"
                  className="p-1 text-xl rounded-lg"
                  placeholder="Sub managers added"
                  name="subManagersAllocated"
                  {...register("subManagersAllocated")}
                />
              </li>{" "}
              <li className="grid grid-cols-[1fr_1.5fr]">
                <label htmlFor="name" className="text-xl">
                  ⛺️ Name of the campaign
                </label>
                <input
                  type="text"
                  className="p-1 text-xl rounded-lg"
                  value={eventValue}
                  name="campaign_id"
                  {...register("campaign_id")}
                />
              </li>
              <li className="grid grid-cols-[1fr_1.5fr]">
                <label htmlFor="name" className="text-xl">
                  🧑‍💼 Event Manager details
                </label>
                <select name="eventManager" {...register("eventManager")}>
                  {users?.map((user) => (
                    <option key={user.user_id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </li>
            </ul>
            <button className="p-2 mt-5 text-xl text-white bg-indigo-500 rounded-lg">
              {isAdding ? "Adding event ..." : "Add new Event"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EventAddModal;
