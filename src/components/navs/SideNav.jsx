/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SideNav = ({ userType }) => {
  const menu = userType === "vendor" ? vendorMenu : coupleMenu;

  return (
    <nav className="flex flex-col h-screen">
      <>
        <div className="">
          <img
            className="h-20 my-7 mx-auto"
            src="/assets/images/wblogoedit.png"
            alt="wedding buddy logo"
          />
        </div>
        <hr />

        <div className="mt-5 mb-16 px-3 md:px-10">
          {menu.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center p-4 hover:bg-[#50112E33] my-2 rounded-2xl transition-colors text-sm md:text-xl"
            >
              <img className="mr-2" src={item.icon} alt={item.name} />

              {item.name}
            </Link>
          ))}
        </div>
      </>

      <div className=" flex items-center p-4 hover:bg-[#50112E33] rounded-2xl transition-colors text-sm md:text-xl mb-5 md:mx-10 mx-3">
        <img
          className="mr-2"
          src="/assets/icons/logout-icon.svg"
          alt="logout"
        />
        <span>Logout</span>
      </div>
    </nav>
  );
};

const coupleMenu = [
  {
    name: "Dashboard",
    icon: "/assets/icons/dashboard.svg",
    href: "/couple"
},
  {
    name: "Budget",
    icon: "/assets/icons/serviceIcon.svg",
    href: "/couple/budget",
  },
  {
    name: "Vendors",
    icon: "/assets/icons/suticaseIcon.svg",
    href: "/couple/vendors",
  },
  {
    name: "Checklist",
    icon: "/assets/icons/bookIcon.svg",
    href: "/couple/checklist",
  },
  {
    name: "Guestlist",
    icon: "/assets/icons/suitcaseicon2.svg",
    href: "/couple/guestList",
  },
  {
    name: "Planning Tips",
    icon: "/assets/icons/reviewicon.svg",
    href: "/couple/tips",
  },

];

const vendorMenu = [
  {
    name: "Dashboard",
    icon: "/assets/icons/dashboard.svg",
    href: "/your/",
  },
  {
    name: "Clients",
    icon: "/assets/icons/clients.svg",
    href: "/your/clients",
  },
  {
    name: "Vendors",
    icon: "/assets/icons/suticaseIcon.svg",
    href: "/your/subvendors",
  },
  {
    name: "Services",
    icon: "/assets/icons/serviceIcon.svg",
    href: "/your/services",
  },
  {
    name: "Booking",
    icon: "/assets/icons/bookIcon.svg",
    href: "/your/booking",
  },
  {
    name: "Portfolio",
    icon: "/assets/icons/suitcaseicon2.svg",
    href: "/your/portfolio",
  },
  {
    name: "Reviews",
    icon: "/assets/icons/reviewicon.svg",
    href: "/your/reviews",
  },
];
export default SideNav;
