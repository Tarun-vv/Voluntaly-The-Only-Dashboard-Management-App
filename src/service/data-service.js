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

export async function addEvent(newEvent) {
  const { data, error } = await supabase
    .from("events")
    .insert([newEvent])
    .select();

  if (error) console.log(error);

  return data;
}

export async function deleteEvent(id) {
  const { data, error } = await supabase.from("events").delete().eq("id", id);

  if (error) throw new Error("Cabin could not be deleted");

  return data;
}

// NOTE: LOGIN
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
}

export async function getCurrentUser() {
  // checking for active session
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  // getting user
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function getAllEvents() {
  const { data, error } = await supabase.from("events").select("*");

  if (error) throw new Error("Events could not be fecthed");

  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
}
