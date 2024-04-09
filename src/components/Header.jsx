import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <section className="hero-section h-screen font-raleway w-full">
      <Navbar />

      <div className="md:w-max my-40 mx-auto max-md:mx-3 p-10 max-md:p-4 rounded-lg text-center text-white backdrop-blur">
        <h1 className="mb-5 text-6xl max-md:text-3xl font-bold">
          Plan The Perfect Wedding
        </h1>
        <p className="mb-5 text-4xl max-md:text-xl">
          Connecting Couples to the right <br /> Vendors
        </p>
        <div className="mt-4 mb-20">
          <button className="btn border-none bg-burgundy-100 rounded-md mx-4 hover:bg-burgundy-50">
            Become a Vendor
          </button>
          <button className="btn btn-outline border border-burgundy-100 rounded-md">
            Vendor Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
