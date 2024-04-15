/* eslint-disable react/prop-types */
import WbButton from "../common/WbButton";

const Login = ({ userType }) => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   const apiEndpoint = userType === 'vendor' ? '/api/vendors/login' : '/api/shoppers/login';

  //   try {
  //     const response = await axios.post(apiEndpoint, {
  //       username,
  //       password
  //     });
  //     console.log('Login successful:', response.data);
  //     // Here you might want to handle what happens after a successful login
  //   } catch (error) {
  //     console.error('Login error:', error);
  //     // Handle errors here, such as displaying a message to the user
  //   }
  // };

  return (
    <form>
      <div className="w-full my-6">
        <label className="text-graywhite-400" htmlFor="email">
          {userType === "vendor" ? "Company" : ""} Email Address
        </label>{" "}
        <br />
        <input
          className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-400"
          type="text"
          name="name"
          id="email"
          placeholder={`Enter your ${
            userType === "vendor" ? "company" : ""
          } email address`}
        />{" "}
      </div>

      <div className="my-6">
        <label className="text-graywhite-400" htmlFor="message">
          Password
        </label>
        <div className="relative">
          <input
            className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-400"
            type="text"
            name="name"
            id="email"
            placeholder="Enter password"
          />{" "}
          <img
            className="absolute right-4 bottom-4 cursor-pointer"
            src="/assets/icons/eyeslash.svg"
            alt="eye slash icon"
          />
        </div>
        <p className="text-burgundy-100 text-sm font-lato">Forgot Password?</p>
      </div>
      <WbButton className="w-full mb-2" size="normal" text="Submit" />
    </form>
  );
};

export default Login;
