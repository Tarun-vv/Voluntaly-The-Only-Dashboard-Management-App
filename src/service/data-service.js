import { supabase } from "./supabase";

export async function getAllCampaigns() {
  const { data, error } = await supabase.from("campaigns").select("*");

  if (error) throw new Error("Campign could not be fetched");

  return data;
}

export async function addCampaign(newCampaign) {
  const { data, error } = await supabase
    .from("campaigns")
    .insert([newCampaign])
    .select();

  if (error) throw new Error("Campaign counld not be added");

  return data;
}

export async function deleteCampaign(id) {
  const { data, error } = await supabase
    .from("campaigns")
    .delete()
    .eq("campaignId", id);

  if (error) throw new Error("Campaign could not be deleted");

  return data;
}

export async function getAllVolunteers() {
  const { data, error } = await supabase.from("volunteers").select("*");

  if (error) throw new Error("Volunteers could not be fetched");

  return data;
}
