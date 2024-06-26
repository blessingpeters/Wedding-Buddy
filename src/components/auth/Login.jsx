/* eslint-disable react/prop-types */
import { useState } from "react";
import WbButton from "../common/WbButton";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "../../context/UserContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from '/firebase';


const Login = ({ userType }) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const { login } = useUser();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // query the collection based on userType
      const userCollection = userType === "vendor" ? "vendors" : "couples";

      const userDocRef = doc(db, userCollection, user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        throw new Error(`Access denied. This portal is for ${userType}s only.`);
      }

      const userData = userDoc.data();

      if (userDoc.data().role !== userType) {
        throw new Error(`Access denied. This portal is for ${userType}s only.`);
      }

      login(userType, userData);
      navigate(userType === "vendor" ? "/vendor-dashboard" : "/couple-dashboard");
      toast.success("Login successful!");

    } catch (error) {
      console.error("Login error:", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="w-full my-6">
        <label className="text-graywhite-600" htmlFor="email">
          {userType === "vendor" ? "Company" : ""} Email Address
        </label>{" "}
        <br />
        <input
          className={`w-full border border-graywhite-400 outline-none rounded-md bg-transparent ${
            userType === "vendor" ? "p-4" : "p-6"
          } text-sm placeholder:text-graywhite-400`}
          type="text"
          id="email"
          placeholder={`Enter your ${
            userType === "vendor" ? "company" : ""
          } email address`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="my-6">
        <label className="text-graywhite-600" htmlFor="password">
          Password
        </label>
        <div className="relative">
          <input
            className={`w-full border border-graywhite-400 outline-none rounded-md bg-transparent ${
              userType === "vendor" ? "p-4" : "p-6"
            } text-sm placeholder:text-graywhite-400`}
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 bottom-4 cursor-pointer"
            src="/assets/icons/eyeslash.svg"
            alt="eye slash icon"
          />
        </div>
        <a href="#">
          <p className="mt-1 text-burgundy-100 text-sm font-lato">
            Forgot Password?
          </p>
        </a>
      </div>
      <WbButton
        className="w-full mb-2"
        size="normal"
        text={loading ? "Submitting..." : "Submit"}
      />
    </form>
  );
};

export default Login;
