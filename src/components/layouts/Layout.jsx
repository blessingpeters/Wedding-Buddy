// Layout.js
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

export const Layout = () => {
  return (
    <>
      <>
        <Outlet /> {/* Child routes will be rendered here */}
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

export const DashboardLayout = () => (
  <>
    <Outlet />
    <Footer />
  </>
);

