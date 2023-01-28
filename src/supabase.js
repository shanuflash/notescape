import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const supabaseUrl = "https://jvnstfpaokvohgpmuewa.supabase.co";
// const supabaseAnonKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2bnN0ZnBhb2t2b2hncG11ZXdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ5MTI1OTEsImV4cCI6MTk5MDQ4ODU5MX0.b1VxIJqERs6Qfr3JLHxh9IjM_jH-NafUAADM_92ndTI";

export default createClient(supabaseUrl, supabaseAnonKey);
