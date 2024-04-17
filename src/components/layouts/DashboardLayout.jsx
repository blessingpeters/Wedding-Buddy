/* eslint-disable react/prop-types */
import { useState } from "react";
import SideNav from "../navs/SideNav";
import { Outlet } from "react-router-dom";
import DashboardTopNav from "../navs/DashboadTopNav";

export const DashboardLayout = ({ userType }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
      <div className="flex h-screen">
        <aside className={`bg-[#A4235E] text-white w-full sm:w-2/5 lg:w-1/4 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <SideNav userType={userType} />
        </aside>
        <div className="flex flex-col w-full">
          <header className="bg-white w-full h-1/10">
            <DashboardTopNav onToggleMobileMenu={toggleMobileMenu} />
          </header>

          <div className="overflow-auto h-9/10">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };