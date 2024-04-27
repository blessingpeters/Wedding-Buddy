/* eslint-disable react/prop-types */
import { useState } from "react";
import SideNav from "../navs/SideNav";
import { Outlet, useLocation } from "react-router-dom";
import DashboardTopNav from "../navs/DashboadTopNav";
import { useUser } from "../../context/UserContext";

export const DashboardLayout = () => {
  const { userType, userData } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const pathSegments = location.pathname.split('/').filter(Boolean);

  const isVendor = pathSegments[0] === "vendor-dashboard";

  const title = pathSegments.length === 1 && (isVendor || pathSegments[0] === "couple-dashboard")
    ? 'Dashboard'
    : pathSegments[1].charAt(0).toUpperCase() + pathSegments[1].slice(1);

    const usernames = userType === 'vendor' ? userData.companyName : `${userData.brideName} & ${userData.groomName}`;
    const shortName = userType === 'vendor' ? userData.companyName.split(' ').map(n => n[0]).join('').toUpperCase() :
      `${userData.brideName[0].toUpperCase()}${userData.groomName[0].toUpperCase()}`;
  const pathType = isVendor ? 'vendor-dashboard' : 'couple-dashboard';

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="flex">
      <aside className={`fixed bg-[#A4235E] h-full text-white sm:w-2/5 lg:w-1/4 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block overflow-auto z-10`}>
        <SideNav userType={userType} />
      </aside>
      <div className="flex flex-col w-full lg:ml-[25%] md:ml-[40%]">
        <header className="bg-white h-1/10 shadow-xl">
          <DashboardTopNav onToggleMobileMenu={toggleMobileMenu} title={title} usernames={usernames} shortName={shortName} path={pathType} />
        </header>

        <div className="overflow-auto h-screen" onClick={() => setIsMobileMenuOpen(false)}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
