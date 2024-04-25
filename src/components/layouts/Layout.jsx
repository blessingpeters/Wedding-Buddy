/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

export const Layout = () => {
  return (
    <>
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );
};

export const AuthLayout = () => (
  <div>
    <Outlet />
  </div>
);

