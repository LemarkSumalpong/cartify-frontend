import { Outlet } from "react-router-dom"
import NavBar from "../components/ui/NavBar"
import Footer from "../components/ui/Footer"

const MainLayout = () => {
  return (
   <>
   <NavBar />
   <Outlet />
   <Footer />
   </>
  )
}

export default MainLayout