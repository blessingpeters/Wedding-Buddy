import { useState } from "react";
import WbButton from "../../components/common/WbButton";
import { useNavigate } from "react-router-dom";

const VendorSignUp = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false })
  const togglePassword = (field) => {
    setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <section className="auth-bg py-40">
      <div className=" lg:w-2/5 sm:w-9/12 w-11/12 mx-auto  font-inter bg-[#DDCCCC] rounded-2xl shadow-2.5xl shadow-[#00000026] sm:px-6 px-3 py-10">
        <div className="flex justify-center items-center divide-burgundy-200 divide-x-4">
          <img
            onClick={()=> navigate("/")}
            className="h-28 w-24 py-4 mx-auto"
            src="/assets/images/wblogoedit.png"
            alt=""
          />
          <h4 className=" basis-1/2 font-raleway py-6 pl-6 text-2xl text-burgundy-100 font-semibold">
            Vendor Portal Create Account
          </h4>
        </div>

        <form>
          <div className="w-full my-6">
            <label className="text-graywhite-600" htmlFor="email">
              Company Name
            </label>{" "}
            <br />
            <input
              className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-400"
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Enter company name"
            />{" "}
          </div>
          <div className="w-full my-6">
            <label
              className="text-graywhite-600" htmlFor="category" >
              Category
            </label>
            <select
              className="w-full text-graywhite-400 border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm"
              name="category"
              id="category"
            >
              <option value="nigeria">Select One</option>
              <option value="phography">Photography</option>
              <option value="planner">Wedding Planner</option>
            </select>
          </div>
          <div className="w-full my-6">
            <label className="text-graywhite-600" htmlFor="email">
              Full Name
            </label>{" "}
            <br />
            <input
              className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-400"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter your full name"
            />{" "}
          </div>
          <div className="w-full my-6">
            <label className="text-graywhite-600" htmlFor="email">
              Company Email
            </label>{" "}
            <br />
            <input
              className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-400"
              type="text"
              name="companyEmail"
              id="companyEmail"
              placeholder="Enter your company email address"
            />{" "}
          </div> <div className="w-full my-6">
            <label className="text-graywhite-600" htmlFor="email">
              Business Registration Number
            </label>{" "}
            <br />
            <input
              className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-400"
              type="text"
              name="businessNumber"
              id="businessNumber"
              placeholder="Enter business registration number"
            />{" "}

          </div>
          <div className="w-full my-6">
            <label
              className="text-graywhite-600" htmlFor="category" >
              Country
            </label>
            <select
              className="w-full text-graywhite-400 border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm"
              name="country"
              id="country"
            >
              <option value="nigeria">Select your country</option>
              <option value="NG">Nigeria</option>
              <option value="GH">Ghana</option>
            </select>
          </div>
          <div className="w-full my-6">
            <label className="text-graywhite-600" htmlFor="email">
              Addreess
            </label>{" "}
            <br />
            <input
              className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-400"
              type="text"
              name="address"
              id="address"
              placeholder="City, Street Number"
            />{" "}
          </div> <div className="w-full my-6">
            <label className="text-graywhite-600" htmlFor="email">
              Phone Number
            </label>{" "}
            <br />
            <input
              className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-400"
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="my-6">
            <label className="text-graywhite-600" htmlFor="message">
              Password
            </label>
            <div className="relative">
              <input
                className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-400"
                type={showPassword.password ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Enter password"
              />{" "}
              <img
                onClick={() => togglePassword('password')}
                className="absolute right-4 bottom-4 cursor-pointer"
                src="/assets/icons/eyeslash.svg"
                alt="eye slash icon"
              />
            </div>
          </div>
          <div className="my-6">
            <label className="text-graywhite-600" htmlFor="message">
              Confirm Password
            </label>
            <div className="relative">
              <input
                className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-400"
                type={showPassword.confirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Type your password to confirm"
              />{" "}
              <img
                onClick={() => togglePassword('confirmPassword')}
                className="absolute right-4 bottom-4 cursor-pointer"
                src="/assets/icons/eyeslash.svg"
                alt="eye slash icon"
              />
            </div>

          </div>
          <WbButton className="w-full mt-8 mb-2" size="normal" text="Submit" />
          <p className="text-center font-lato text-sm text-graywhite-400">Already have an account?<a className="text-burgundy-100" href="/auth/vendorLogin"> Sign in</a> </p>
        </form>
      </div>
    </section>
  );
};

export default VendorSignUp;
