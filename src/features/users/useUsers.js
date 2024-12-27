import { useQuery } from "@tanstack/react-query";
import { getAllVolunteers } from "../../service/data-service";

export function useUsers() {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllVolunteers,
  });

  return { users, isLoading, error };
}
