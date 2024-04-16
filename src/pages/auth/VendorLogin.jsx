import Login from "../../components/auth/Login.jsx";
import { useNavigate } from "react-router-dom";

const VendorLogin = () => {
  const navigate = useNavigate()
  return (
    <section className="auth-bg h-screen flex items-center justify-center">
      <div className=" lg:w-2/5 sm:w-9/12 w-11/12 mx-auto  font-inter bg-[#DDCCCC] rounded-2xl shadow-2.5xl shadow-[#00000026] sm:px-6 px-3 py-10" >
          <div className="flex justify-center items-center divide-burgundy-200 divide-x-4">
                <img
                  onClick={()=> navigate("/")}
                  className="h-28 w-24 py-4 mx-auto"
                  src="/assets/images/wblogoedit.png"
                  alt=""
                />
                <h4 className=" basis-1/2 font-raleway py-6 pl-6 text-2xl text-burgundy-100 font-semibold">
                Vendor Sign in
                </h4>
          </div>

        <Login userType="vendor" />
        <p className="text-center font-lato text-sm text-graywhite-400">Don’t have an account? <a className="text-burgundy-100" href="/vendorSignup"> Sign up</a></p>

      </div>
    </section>
  );
};

export default VendorLogin;
