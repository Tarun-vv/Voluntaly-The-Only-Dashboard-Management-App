import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEvent as deleteEventApi } from "../../service/data-service";
import toast from "react-hot-toast";

export function useDeleteEvent() {
  const queryClient = useQueryClient();

  const { mutate: deleteEvent, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteEventApi(id),
    onSuccess: () => {
      toast.success("Event was successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
    },
    onError: () => {
      toast.error("Event could not be deleted");
    },
  });

  return { deleteEvent, isDeleting };
}
