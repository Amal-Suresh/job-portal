import supabaseClient from "@/utils/supabase";
// { location, company_id, searchQuery }
export async function getJobs(token) {
    const supabase = await supabaseClient(token)

    let query = supabase.from("jobs").select("*")
    const { data, error } = await query

    if(error){
        console.error("Error fetching Jobs:", error)
        return null
    }
    return data
}