import Header from "@/components/header"
import { Outlet } from "react-router-dom"


const AppLayout = () => {
  return (
    <div>
      <div className="grid-backgound"></div>
      <main className="min-h-screen container">
        <Header/>
        <Outlet/>
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        by AMAL SURESH
      </div>
    </div>
  )
}

export default AppLayout