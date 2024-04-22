/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const DashboardTopNav = ({ onToggleMobileMenu, title, usernames }) => {
  return (
    <div className="bg-white sticky flex justify-between items-center lg:px-16 sm:px-8 px-3 py-6 h-full w-full  shadow-xl">
      <button
        onClick={onToggleMobileMenu}
        className="block md:hidden text-burgundy-100"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="#A4235E"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h-2"
          />
        </svg>
      </button>
      <div className="w-full flex justify-between items-center font-semibold">
        <h1 className="text-xl text-graywhite-600 font-raleway tracking-wide">{title}</h1>
        <div className="flex md:gap-6 gap-2 font-lato text-burgundy-100 text-lg items-center">
          <Link to="/your/profile">
            <p className="text-white text-sm font-light bg-burgundy-100 p-2 rounded-full">FD</p>
          </Link>

          <p>{usernames}</p>
          <Link to="/your/notifications">
            <img src="/assets/icons/bell.svg" alt="notification bell" />
          </Link>

        </div>
      </div>
    </div>
  );
};
export default DashboardTopNav;
