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
import { ThemeProvider } from './components/theme-provider'
import ProtectedRoute from './components/protected-route'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/onboarding',
        element:
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
      }, {
        path: '/jobs',
        element:
          <ProtectedRoute>
            <JobListingPage />
          </ProtectedRoute>
      },
      {
        path: '/job/:id',
        element:
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
      },

      {
        path: '/post-job',
        element:
          <ProtectedRoute>
            <PostJobPage />
          </ProtectedRoute>
      },
      {
        path: '/saved-jobs',
        element:
          <ProtectedRoute>
            <SavedJobsPage />
          </ProtectedRoute>
      },
      {
        path: '/my-jobs',
        element:
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
      },
    ]
  }

])

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
