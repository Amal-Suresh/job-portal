import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing'
import Onboarding from './pages/onboarding'
import JobPage from './pages/job'
import JobListingPage from './pages/job-listing'
import PostJobPage from './pages/post-job'
import SavedJobsPage from './pages/saved-job'
import MyJobs from './pages/my-jobs'

const router =createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      },
      {
        path:'/onborading',
        element:<Onboarding/>
      }, {
        path:'/jobs',
        element:<JobListingPage/>
      },
      {
        path:'/job/:id',
        element:<JobPage/>
      },
      {
        path:'/post-job',
        element:<PostJobPage/>
      },
      {
        path:'/saved-job',
        element:<SavedJobsPage/>
      },
      {
        path:'/my-jobs',
        element:<MyJobs/>
      },
    ]
  }

])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
