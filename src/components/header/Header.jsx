import Navbar from "../navs/Navbar";
import WbButton from "../common/WbButton";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, userType } = useUser();

  const getDashboardRoute = () => {
    if (userType === 'vendor') {
      return '/vendor-dashboard';
    } else if (userType === 'couple') {
      return '/couple-dashboard';
    }
    return '/';
  };
  return (
    <section className="hero-section h-full  font-raleway w-full">
      <Navbar />
        <div className="md:py-44 py-28">


        <div className="sm:w-max w-11/12 lg:my-10 mx-auto px-4  py-12 md:p-10 rounded-2xl text-center text-white backdrop-blur-sm bg-white/20">
            <h1 className="my-5 lg:text-6xl text-4xl font-bold">
            Plan The Perfect Wedding
            </h1>
            <p className="my-10 lg:text-4xl text-xl">
            Connecting Couples to the right <br className="hidden md:block" /> Vendors
            </p>
            <div className="mt-4 md:mb-24 ">
            {isAuthenticated ? (
              <WbButton text="Go to Dashboard" onClick={() => navigate(getDashboardRoute())} />
            ) : (
              <>
                <WbButton className="max-sm:mb-4" text="Become a Vendor" onClick={() => navigate("/auth/vendorSignup")} />
                <WbButton className="mx-4" text="Couple's SignUp" variant="outline" onClick={() => navigate("/auth/coupleSignup")} />
              </>
            )}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Header;
