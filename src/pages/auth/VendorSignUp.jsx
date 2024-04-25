import { useState } from "react";
import WbButton from "../../components/common/WbButton";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from 'firebase/firestore';
import { db } from '/firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useUser } from '../../context/UserContext';


const VendorSignUp = () => {
  const auth = getAuth();
  const { setUserType } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    category: '',
    fullName: '',
    companyEmail: '',
    businessNumber: '',
    country: '',
    address: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.companyEmail, formData.password);
      const user = userCredential.user;
      await setDoc(doc(db, "vendors", user.uid), {
        ...formData,
        uid: user.uid,
        role: 'vendor'
      });
      setUserType('vendor');
      toast.success("Vendor registration successful!", {
        onClose: () => navigate('/'),
        autoClose: 2000
      });
      console.log("Vendor Registration successful, user:", user);

    } catch (error) {
      console.error("Error in vendor registration:", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

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

        <form onSubmit={handleSubmit}>
          <div className="w-full my-6">
            <label className="text-graywhite-600" htmlFor="companyName">
              Company Name
            </label>{" "}
            <br />
            <input
              className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-400"
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Enter company name"
              onChange={handleInputChange}
              required
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
              <option value="phography">Photography/Videographer</option>
              <option value="planner">Wedding Planner</option>
              <option value="planner">Cake Vendor</option>
              <option value="planner">Catering</option>
              <option value="planner">Decoration</option>
              <option value="planner">Bridal wear</option>
              <option value="planner">Grooms wear</option>
              <option value="planner">Florist</option>
              <option value="planner">Hotel Bookings</option>
              <option value="planner">Favours + Gifts</option>
              <option value="planner">Bridal Salon</option>
              <option value="planner">Venue</option>
              <option value="planner">Beauty/Makeup</option>
            </select>
          </div>
          <div className="w-full my-6">
            <label className="text-graywhite-600" htmlFor="fullName">
              Full Name
            </label>{" "}
            <br />
            <input
              className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-400"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter your full name"
              onChange={handleInputChange}
              required
            />{" "}
          </div>
          <div className="w-full my-6">
            <label className="text-graywhite-600" htmlFor="companyEmail">
              Company Email
            </label>{" "}
            <br />
            <input
              className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-400"
              type="text"
              name="companyEmail"
              id="companyEmail"
              placeholder="Enter your company email address"
              onChange={handleInputChange}
              required
            />{" "}
          </div>
          <div className="w-full my-6">
            <label className="text-graywhite-600" htmlFor="businessNumber">
              Business Registration Number
            </label>{" "}
            <br />
            <input
              className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-400"
              type="text"
              name="businessNumber"
              id="businessNumber"
              placeholder="Enter business registration number"
              onChange={handleInputChange}
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
            <label className="text-graywhite-600" htmlFor="address">
              Addreess
            </label>{" "}
            <br />
            <input
              className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-400"
              type="text"
              name="address"
              id="address"
              placeholder="City, Street Number"
              onChange={handleInputChange}
            />{" "}
          </div> <div className="w-full my-6">
            <label className="text-graywhite-600" htmlFor="phoneNumber">
              Phone Number
            </label>{" "}
            <br />
            <input
              className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-400"
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Enter your phone number"
              onChange={handleInputChange}
              required
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
                onChange={handleInputChange}
                required
              />{" "}
              <img
                onClick={() => togglePassword('password')}
                className="absolute right-4 bottom-4 cursor-pointer"
                src="/assets/icons/eyeslash.svg"
                alt="eye slash icon"
              />
            </div>
            <p className="text-xs text-burgundy-200">Password must be atleast 6 characters</p>
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
                onChange={handleInputChange}
                required
              />{" "}
              <img
                onClick={() => togglePassword('confirmPassword')}
                className="absolute right-4 bottom-4 cursor-pointer"
                src="/assets/icons/eyeslash.svg"
                alt="eye slash icon"
              />
            </div>

          </div>
          <WbButton className="w-full mt-8 mb-2" size="normal" text={loading ? "Submitting..." : "Submit"}  disabled={loading} />
          <p className="text-center font-lato text-sm text-graywhite-400">Already have an account?<a className="text-burgundy-100" href="/auth/vendorLogin"> Sign in</a> </p>
        </form>
      </div>
    </section>
  );
};

export default VendorSignUp;
