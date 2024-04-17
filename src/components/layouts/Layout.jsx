/* eslint-disable react/prop-types */
// Layout.js
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
//import SideNav from "../navs/SideNav";
// import DashboadNav from "../navs/DashboadNav";

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

// export const DashboardLayout = ({ userType }) => (
//   <main className="">
//     <SideNav userType={userType} />
//     <div className="flex-1 p-4">
//       <DashboadNav />
//       <Outlet />
//     </div>
//   </main>
// );
