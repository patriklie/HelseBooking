import { Outlet } from "react-router";
import Navbar from "./Navbar.jsx";
import { Toaster } from "react-hot-toast";
import PWAOppdatering from "./PWAoppdatering.jsx";

const Layout = () => {
  return (
    <>
      <div className="topp-gap"></div>
      <Navbar />
      <Outlet />   
      <PWAOppdatering />
      <Toaster
        position="top-center"
        containerStyle={{
          top: 70
        }}
        toastOptions={{
          style: {
            padding: "10px 32px",
            borderRadius: "50px",
            boxShadow: "rgba(0, 0, 0, 0.4) 0 2px 10px"
          }
        }}
      />
    </>
  )
}

export default Layout