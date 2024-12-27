import { useQuery } from "@tanstack/react-query";
import { getAllCampaigns } from "../../service/data-service";

export function useCampaigns() {
  const {
    data: campaigns,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["campaigns"],
    queryFn: getAllCampaigns,
  });

  return { campaigns, isLoading, error };
}
