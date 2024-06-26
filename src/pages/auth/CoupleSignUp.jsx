import { useState } from "react";
import WbButton from "../../components/common/WbButton";
import { doc, setDoc } from 'firebase/firestore';
import { db } from '/firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useUser } from '../../context/UserContext';

const CoupleSignUp = () => {
  const navigate = useNavigate()
  const auth = getAuth();
  const { login } = useUser();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    groomName: '',
    brideName: '',
    email: '',
    password: '',
    Bridedob: '',
    Groomdob: '',
    weddingDate: '',
    weddingLocation: '',
    budget: '',
    weddingPreference: '',
    relationshipStatus: '',
    role: 'couple'
  });
  const [showPassword, setShowPassword] = useState(false);
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
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      const userData = {
        ...formData,
        uid: user.uid
      }

      await setDoc(doc(db, "couples", user.uid), userData);

      login('couple', userData);
      navigate('/vendors')
      toast.success("Couple registration successful!");

    } catch (error) {
      console.error("Error in registration:", error.message);
      toast.error(error.message);
      setCurrentStep(1);
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Final step reached, waiting for manual submit");
    }
  };



  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
          <h2 className="text-center font-raleway text-2xl text-burgundy-100 font-semibold mb-10 mt-6">Sign up as couples to book vendors and their services</h2>
          <div>
            <div className="w-full my-6">
              <label className="text-graywhite-400" htmlFor="groomName">Groom’s Full Name</label>
              <input
                className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-6 text-sm placeholder:text-graywhite-400"
                type="text"
                name="groomName"
                id="groomName"
                value={formData.groomName}
                placeholder="Enter Groom’s full name"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full my-6">
              <label className="text-graywhite-400" htmlFor="brideName">Bride’s Full Name</label>
              <input
                className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-6 text-sm placeholder:text-graywhite-400"
                type="text"
                name="brideName"
                id="brideName"
                value={formData.brideName}
                placeholder="Enter Bride’s full name"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full my-6">
              <label className="text-graywhite-400" htmlFor="email">Email Address</label>
              <input
                className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-6 text-sm placeholder:text-graywhite-400"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                placeholder="Email address"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="my-6">
              <label className="text-graywhite-400" htmlFor="password">Password</label>
              <div className="relative">
                <input
                  className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-6 text-sm placeholder:text-graywhite-400"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  value={formData.password}
                  placeholder="Enter password"
                  onChange={handleInputChange}
                  required
                />
                <img
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 bottom-4 cursor-pointer"
                  src="/assets/icons/eyeslash.svg"
                  alt="eye slash icon"
                />
              </div>
              <p className="text-xs text-burgundy-200">Password must be atleast 6 characters</p>
            </div>
            <WbButton className="w-full mt-8 mb-2" size="normal" text="Proceed" onClick={nextStep} type="button"/>
          </div>
          </>
        );
      case 2:
        return (
          <>
          <h2 className="text-center font-raleway text-2xl text-burgundy-100 font-semibold mb-10 mt-6">To Help us know you better, provide more information about you and your spouse</h2>
          <div>
            <div className="w-full my-6">
              <label className="text-graywhite-600" htmlFor="Bridedob">Bride DOB</label>
              <input
                className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-6 text-sm text-graywhite-400"
                type="date"
                name="Bridedob"
                id="Bridedob"
                placeholder="Enter bride’s date of birth"
                value={formData.Bridedob}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full my-6">
              <label className="text-graywhite-600" htmlFor="Groomdob">Groom DOB</label>
              <input
                className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-6 text-sm text-graywhite-400"
                type="date"
                name="Groomdob"
                id="Groomdob"
                placeholder="Enter groom’s date of birth"
                value={formData.Groomdob}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full my-6">
              <label className="text-graywhite-600" htmlFor="weddingDate">Wedding Date</label>
              <input
                className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-6 text-sm text-graywhite-400"
                type="date"
                name="weddingDate"
                id="weddingDate"
                placeholder="Enter scheduled wedding date"
                value={formData.weddingDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full my-6">
              <label className="text-graywhite-600" htmlFor="weddingLocation">Wedding Location</label>
              <input
                className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-6 text-sm placeholder:text-graywhite-400"
                type="text"
                name="weddingLocation"
                id="weddingLocation"
                value={formData.weddingLocation}
                placeholder="Enter wedding location"
                onChange={handleInputChange}
              />
            </div>
            <WbButton className="w-full mt-8 mb-2" size="normal" text="Proceed" onClick={nextStep} type="button"/>
          </div>
          </>
        );
      case 3:
        return (
          <>
          <h2 className="text-center font-raleway text-2xl text-burgundy-100 font-semibold mb-10 mt-6">To Help us know you better, provide more information about you and your spouse</h2>
          <form onSubmit={handleSubmit}>
            <div className="w-full my-6">
              <label className="text-graywhite-400" htmlFor="budget">Budget Range for wedding</label>
              <input
                className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-6 text-sm placeholder:text-graywhite-400"
                type="number"
                name="budget"
                id="budget"
                value={formData.budget}
                placeholder="Enter your budget range for wedding"
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full my-6">
              <label className="text-graywhite-600" htmlFor="weddingPreference">Wedding Preference</label>
              <input
                className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-6 text-sm placeholder:text-graywhite-400"
                type="text"
                name="weddingPreference"
                id="weddingPreference"
                value={formData.weddingPreference}
                placeholder="Describe wedding preference e.g theme, style, color."
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full my-6">
              <label className="text-graywhite-600" htmlFor="relationshipStatus">Relationship Status</label>

              <select
              className="w-full text-graywhite-400 border border-graywhite-400 outline-none rounded-md bg-transparent p-6 text-sm"
              name="relationshipStatus"
              id="relationshipStatus"
              value={formData.relationshipStatus}
              onChange={handleInputChange}
            >
              <option value="">Select wedding status, e.g Engaged, Married</option>
              <option value="engaged">Engaged</option>
              <option value="married">Married</option>
            </select>
            </div>
            <div className="w-full my-6">
              <label className="text-graywhite-600" htmlFor="role">Role</label>
              <input
                className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-6 text-sm placeholder:text-graywhite-400"
                type="text"
                name="role"
                id="role"
                value={formData.role}
                placeholder="Enter your role in the wedding, e.g. Bride, Groom, Bridesmaid."
                onChange={handleInputChange}
              />
            </div>
            <WbButton className="w-full mt-8 mb-2" size="normal" text={loading ? "Submitting..." : "Submit"}  disabled={loading} type="submit"/>
          </form> </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="auth-bg h-full py-20 flex flex-col items-start justify-center">
      <a href="/" className="lg:pl-36 md:pl-10 pl-3">
        <img
          className="h-28 w-24 py-4"
          src="/assets/images/wblogoedit.png"
          alt=""
        />
      </a>
      <div className="lg:w-3/5 sm:w-9/12 w-11/12 mx-auto font-inter bg-[#DDCCCC] rounded-2xl shadow-2.5xl shadow-[#00000026] sm:px-6 px-3 py-6">
        {renderStep()}
        <p className="text-center text-burgundy-100 text-lg font-raleway font-semibold">Step {currentStep} of 3</p>
        <p className="text-center font-lato text-sm text-graywhite-400 mb-3">Already have an account?<a className="text-burgundy-100" href="/auth/coupleLogin"> Log in</a> </p>
      </div>
    </section>
  );
}

export default CoupleSignUp;
