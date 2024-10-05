import { getJobs } from "@/api/jobs-api"
import JobCard from "@/components/job-card"
import useFetch from "@/hooks/use-fetch"
import { useUser } from "@clerk/clerk-react"
import { useEffect, useState } from "react"
import { BarLoader } from "react-spinners"

const JobListingPage = () => {

  const [location, setLocation] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [company_id, setCompanyId] = useState("")
  const { isLoaded } = useUser()

  const {
    fn: fnJobs,
    data: jobs,
    loading: loadingJobs
  } = useFetch(getJobs, { location, company_id, searchQuery })


  useEffect(() => {
    if (isLoaded) fnJobs()
  }, [isLoaded, location, company_id, searchQuery])

  if (!isLoaded) {
    return <BarLoader className='mb-4' width={"100%"} color='#36d7b7' />
  }

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">Latest Jobs</h1>

      {/* Add filters here */}
      {loadingJobs && (
        <BarLoader className='mb-4' width={"100%"} color='#36d7b7' />
      )}

      {loadingJobs === false && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs?.length ? (
            jobs.map((job) => (
              <JobCard key={job.id} job={job} savedInit={job?.saved?.length > 0} />


            ))
          ) : (
            <div>No Jobs Found</div>
          )
          }
        </div>
      )}

    </div>
  )
}

export default JobListingPage