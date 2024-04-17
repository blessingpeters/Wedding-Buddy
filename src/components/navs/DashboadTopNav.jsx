/* eslint-disable react/prop-types */

const DashboardTopNav = ({ onToggleMobileMenu }) => {
  return (
    <div className="bg-white flex justify-between items-center px-4 py-6 h-full w-full shadow-xl">
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
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <div>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};
export default DashboardTopNav;
