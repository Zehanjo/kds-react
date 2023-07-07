import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://damxqzchahzuvsproxmc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhbXhxemNoYWh6dXZzcHJveG1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2MTI3OTUsImV4cCI6MjAwNDE4ODc5NX0.uDrsGeR9THVB3VfbblcHt2ODalQK5xN0-dOk-E57mkE"
);