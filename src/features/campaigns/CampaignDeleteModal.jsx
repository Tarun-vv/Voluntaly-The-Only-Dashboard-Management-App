import Heading from "../../components/Heading";
import { useDeleteCampaign } from "./useDeleteCampaign";

function CampaignDeleteModal({ id, onClose }) {
  const { isDeleting, deleteCampaign } = useDeleteCampaign();

  return (
    <div className="overlay">
      <div className="modal__mini">
        <Heading type="h2" marginBottom={5}>
          Are you sure you want to delete campaign {id}?
        </Heading>
        <div className="flex gap-5">
          <button
            className="p-2 text-xl bg-gray-100 rounded-xl"
            onClick={() => onClose(null)}
          >
            Cancel
          </button>
          <button
            className="p-2 text-xl text-white bg-red-500 rounded-xl"
            onClick={() =>
              deleteCampaign(id, {
                onSuccess: () => {
                  onClose(null);
                },
              })
            }
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CampaignDeleteModal;
