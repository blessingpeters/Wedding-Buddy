/* eslint-disable react/prop-types */
import { useState } from "react";
import SideNav from "../navs/SideNav";
import { Outlet, useLocation } from "react-router-dom";
import DashboardTopNav from "../navs/DashboadTopNav";

export const DashboardLayout = ({ userType }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

      // Function to derive title from pathname
      const deriveTitleFromPath = () => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        if (pathSegments.length === 1 && (pathSegments[0] === "your" || pathSegments[0] === "couple")) {
            return 'Dashboard'; // Dashboard for specific root paths
        }
        if (pathSegments.length > 1) {
            return pathSegments[1].charAt(0).toUpperCase() + pathSegments[1].slice(1);
        }
        return 'Dashboard';
    };

    const title = deriveTitleFromPath();
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
      <div className="flex h-screen">
        <aside className={`bg-[#A4235E] h-full text-white w-full sm:w-2/5 lg:w-1/4 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <SideNav userType={userType} />
        </aside>
        <div className="flex flex-col w-full">
          <header className="bg-white w-full h-1/10">
            <DashboardTopNav onToggleMobileMenu={toggleMobileMenu} title={title} />
          </header>

          <div className="overflow-auto h-9/10">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };