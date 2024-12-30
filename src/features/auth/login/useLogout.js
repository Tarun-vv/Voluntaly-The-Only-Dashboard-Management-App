import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../../service/data-service";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login");
    },
  });

  return { logout, isLoading };
}
