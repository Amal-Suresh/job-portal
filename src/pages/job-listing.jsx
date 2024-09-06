import { getJobs } from "@/api/jobs-api"
import { useSession } from "@clerk/clerk-react"
import { useEffect } from "react"

const JobListingPage = () => {
  const { session } = useSession()

  const fetchJobs = async () => {

    const supabaseAccessToken = await session.getToken({
      template:"supabase"
    })

    const data = getJobs(supabaseAccessToken)

    console.log(data);
    

  }
  useEffect(() => {
    fetchJobs()
  }, [])
  return (
    <div>JobListingPage</div>
  )
}

export default JobListingPage