/* eslint-disable react/prop-types */
import { useState } from "react";
import SideNav from "../navs/SideNav";
import { Outlet, useLocation } from "react-router-dom";
import DashboardTopNav from "../navs/DashboadTopNav";

export const DashboardLayout = ({ userType }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const deriveTitleFromPath = () => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        if (pathSegments.length === 1 && (pathSegments[0] === "your" || pathSegments[0] === "couple")) {
            return 'Dashboard';
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
        <div className="flex">
            <aside className={`fixed bg-[#A4235E] h-full text-white sm:w-2/5 lg:w-1/4 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block overflow-auto z-10`}>
                <SideNav userType={userType} />
            </aside>
            <div className="flex flex-col w-full ml-0 lg:ml-[25%] md:ml-[40%]">
                <header className=" bg-white h-1/10 shadow-xl">
                    <DashboardTopNav onToggleMobileMenu={toggleMobileMenu} title={title} />
                </header>

                <div className="overflow-auto h-screen"  onClick={()=> setIsMobileMenuOpen(false)}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
