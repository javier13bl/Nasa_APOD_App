import LeftSide from "../components/LeftSide"
import RightSide from "../components/RightSide"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <main className='main'>
        <LeftSide/>
        <RightSide/>
        <Outlet/>
    </main>
  )
}

export default Layout