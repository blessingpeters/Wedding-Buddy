import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(); // Ref for the navbar to detect outside clicks
  const toggleButtonRef = useRef(); // Ref for the toggle button
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Portfolio",
      href: "/about",
    },
    {
        name: "Vendors",
        href: "/vendors"
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  const dropdownItems = [
    { name: "Vendor’s Login", href: "#" },
    { name: "Couple’s Login", href: "#" },
    { name: "My Account", href: "#" },
  ];
  const toggleSidebar = () => setIsOpen(!isOpen);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      <nav className="bg-burgundy-100/40 z-40">
        <div className="max-w-screen-2xl w-full flex flex-wrap items-center justify-between mx-auto max-md:px-3 relative">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse h-20 w-32"
          >
            <img
              className="w-full"
              src="assets/images/wblogo.svg"
              alt="Wedding buddy Logo"
            />
          </Link>

          <button
            ref={toggleButtonRef}
            onClick={toggleSidebar}
            className="md:hidden text-white z-50 mr-3"
          >
            {isOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
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
            )}
          </button>
          <div
            ref={navbarRef}
            className={`${
              isOpen ? "right-0" : "-right-full"
            } fixed top-0 bottom-0 w-[75%] bg-burgundy-100/90 p-5 transition-all duration-300 ease-in-out z-40 md:static md:w-auto md:bg-transparent md:p-0 md:z-auto`}
          >
            <ul className="flex flex-col md:flex-row text-white md:text-lg font-inter">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="my-2 md:mx-4 hover:border-b border-white transition-transform ease-in-out delay-1000 duration-1000"
                >
                  <Link to={item.href}>{item.name}</Link>
                </li>
              ))}

              {dropdownItems.map((dropItem, dropIndex) => (
                <li key={`mobile-${dropIndex}`} className="md:hidden my-2">
                  <Link to={dropItem.href}>{dropItem.name}</Link>
                </li>
              ))}

              <li className="hidden md:block my-2 md:mx-4 relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {isDropdownOpen && (
                  <ul className="absolute right-0 text-center bg-white text-graywhite-600 mt-2 rounded-xl shadow-lg w-40 h-30">
                    {dropdownItems.map((dropItem, dropIndex) => (
                      <li key={dropIndex} className="px-4 py-2">
                        <Link to={dropItem.href}>{dropItem.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
