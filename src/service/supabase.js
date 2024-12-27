import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lpmakjdbuoiozmefdhst.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwbWFramRidW9pb3ptZWZkaHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4Mjg2NDQsImV4cCI6MjA1MDQwNDY0NH0.28xaA0iY5o3xYICKDzWi7Eg3WgGlc5CMSkqr8MwMdSs";
export const supabase = createClient(supabaseUrl, supabaseKey);
