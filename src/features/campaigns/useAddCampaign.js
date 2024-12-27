import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCampaign as addCampaignApi } from "../../service/data-service";
import toast from "react-hot-toast";

export function useAddCampaign() {
  const queryClient = useQueryClient();

  const { isLoading: isAdding, mutate: addCampaign } = useMutation({
    mutationFn: (newCampaign) => addCampaignApi(newCampaign),
    onSuccess: () => {
      toast.success("Campaign was successfully added");
      queryClient.invalidateQueries({
        queryKey: ["campaigns"],
      });
    },
    onError: () => {
      toast.error("Campaign could not be added");
    },
  });

  return { isAdding, addCampaign };
}
