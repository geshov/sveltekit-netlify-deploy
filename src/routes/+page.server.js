import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data, error } = await supabase.from("countries").select();
  return {
    countries: data ?? []
  };
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const { error } = await supabase.from("countries").insert({ name: data.get("country") });
  }
};
