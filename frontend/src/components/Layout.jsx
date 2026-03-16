import { Outlet } from "react-router";
import Navbar from "./Navbar.jsx";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "112px" }}>
      <Outlet />   
      </div>
    </>
  )
}

export default Layout