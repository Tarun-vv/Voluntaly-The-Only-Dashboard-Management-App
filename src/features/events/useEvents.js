import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "../../service/data-service";

export function useEvents() {
  const { isLoading, data: events, error } = useQuery({
    queryKey: ["events"],
    queryFn: getAllEvents,
  });

  return { isLoading, events, error };
}
