

const Navbar = () => {
  return (
    <div className="navbar bg-[#50112E66] px-10">
      <div className="flex-1">
        <a className="h-16 w-16"><img src="assets/images/wblogo.svg" alt="" /></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-white">
          <li className="mx-4">
            <a>Home</a>
          </li>
          <li className="mx-4">
            <a>Services</a>
          </li>
          <li className="mx-4">
            <a>Portfolio</a>
          </li>
          <li className="mx-4">
            <a>Vendors</a>
          </li>
          <li className="mx-4">
            <a>Contact Us</a>
          </li>
          <li>
            <details>
              <summary> </summary>
              <ul className="p-2 bg-base-100 rounded-t-none text-black">
                <li>
                  <a>Vendor’s Login</a>
                </li>
                <li>
                  <a>Couple’s Login</a>
                </li>
                <li>
                  <a>My Account</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
