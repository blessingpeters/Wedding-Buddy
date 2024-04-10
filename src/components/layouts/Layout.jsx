// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      <>
        <Outlet /> {/* Child routes will be rendered here */}
      </>
      <Footer />
    </>
  );
};

export default Layout;
