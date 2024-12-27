import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCampaign as deleteCampaignApi } from "../../service/data-service";
import toast from "react-hot-toast";

export function useDeleteCampaign() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCampaign } = useMutation({
    mutationFn: (id) => deleteCampaignApi(id),
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["campaigns"],
      });
    },
    onError: () => {
      toast.error("Cabin could not be deleted");
    },
  });

  return { isDeleting, deleteCampaign };
}
