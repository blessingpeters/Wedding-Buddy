/* eslint-disable react/prop-types */
import { useState } from "react";
import SideNav from "../navs/SideNav";
import { Outlet, useLocation } from "react-router-dom";
import DashboardTopNav from "../navs/DashboadTopNav";

export const DashboardLayout = ({ userType }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const pathSegments = location.pathname.split('/').filter(Boolean);

  const isYourPath = pathSegments[0] === "your";
  
  const title = pathSegments.length === 1 && (isYourPath || pathSegments[0] === "couple")
    ? 'Dashboard'
    : pathSegments[1].charAt(0).toUpperCase() + pathSegments[1].slice(1);

  const usernames = isYourPath ? 'Arevo Events' : 'Faith & Daniel';
  const pathType = isYourPath ? 'your' : 'couple';

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="flex">
      <aside className={`fixed bg-[#A4235E] h-full text-white sm:w-2/5 lg:w-1/4 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block overflow-auto z-10`}>
        <SideNav userType={userType} />
      </aside>
      <div className="flex flex-col w-full lg:ml-[25%] md:ml-[40%]">
        <header className="bg-white h-1/10 shadow-xl">
          <DashboardTopNav onToggleMobileMenu={toggleMobileMenu} title={title} usernames={usernames} path={pathType} />
        </header>

        <div className="overflow-auto h-screen" onClick={() => setIsMobileMenuOpen(false)}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
