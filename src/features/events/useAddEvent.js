import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEvent as addEventApi } from "../../service/data-service";
import toast from "react-hot-toast";

export function useAddEvent() {
  const queryClient = useQueryClient();

  const { mutate: addEvent, isLoading } = useMutation({
    mutationFn: (newEvent) => addEventApi(newEvent),
    onSuccess: () => {
      toast.success("Event was successfully added");
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
    },
    onError: () => {
      toast.error("Event could not be added");
    },
  });

  return { addEvent, isLoading };
}
