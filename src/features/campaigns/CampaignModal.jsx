import { HiXMark } from "react-icons/hi2";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { useAddCampaign } from "./useAddCampaign";
import { useForm } from "react-hook-form";

function CampaignModal({ onClose }) {
  const { isAdding, addCampaign } = useAddCampaign();

  const { register, handleSubmit } = useForm();
  function onSubmit(formdata) {
    addCampaign(
      {
        ...formdata,
        campaignId: Number(formdata.campaignId),
        fundsRaised: Number(formdata.fundsRaised),
        eventManagersCount: Number(formdata.eventManagersCount),
        createdAt: new Date(formdata.createdAt).toISOString(),
      },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  }

  return (
    <div className="overlay">
      <div className="p-5 modal">
        <button className="text-3xl modal__button" onClick={onClose}>
          <HiXMark />
        </button>
        <Heading type="h2" marginBottom={5}>
          Create a new campaign
        </Heading>
        <form
          className="grid grid-cols-[400px_1fr] items-center gap-y-6 mb-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="id" className="text-xl">
            Campaign ID
          </label>
          <input
            type="text"
            id="id"
            placeholder="Campaign id"
            className="p-1 text-lg"
            name="campaignId"
            {...register("campaignId", {
              required: "This field is required",
            })}
          />

          <label htmlFor="campaignName" className="text-xl">
            Name of the campaign
          </label>
          <input
            type="text"
            id="campaignName"
            placeholder="Name"
            className="p-1 text-lg"
            name="name"
            {...register("name", {
              required: "This field is required",
            })}
          />

          <label htmlFor="location" className="text-xl">
            Location of the campaign
          </label>
          <input
            type="text"
            id="location"
            placeholder="Location"
            className="p-1 text-lg"
            name="location"
            {...register("location", {
              required: "This field is required",
            })}
          />

          <label htmlFor="volunteers" className="text-xl">
            Number of volunteers
          </label>
          <input
            type="text"
            id="volunteers"
            placeholder="Volunteers"
            className="p-1 text-lg"
            name="volunteers"
            {...register("volunteers", {
              required: "This field is required",
            })}
          />

          <label htmlFor="fundsRaised" className="text-xl">
            How much funds did you raise so far?
          </label>
          <input
            type="text"
            id="fundsRaised"
            placeholder="Funds raised"
            className="p-1 text-lg"
            name="fundsRaised"
            {...register("fundsRaised", {
              required: "This field is required",
            })}
          />

          <label htmlFor="eventManagerCount" className="text-xl">
            Number of event managers
          </label>
          <input
            type="text"
            id="eventManagerCount"
            placeholder="Event managers count"
            className="p-1 text-lg"
            name="eventManagersCount"
            {...register("eventManagersCount", {
              required: "This field is required",
            })}
          />

          <label className="text-xl">Date of creation of campaign</label>
          <input type="date" name="createdAt" {...register("createdAt")} />
          <Button type="add">
            {isAdding ? "Adding Campaign..." : "Add Campaign"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CampaignModal;
