import { supabase } from "$lib/supabaseClient";
import { USER_EMAIL, USER_PASSWORD } from "$env/static/private";

await supabase.auth.signInWithPassword({
  email: USER_EMAIL,
  password: USER_PASSWORD
});

export async function load() {
  const { data } = await supabase.from("countries").select();
  return {
    countries: data ?? []
  };
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    await supabase.from("countries").insert({ name: data.get("country") });
  }
};
