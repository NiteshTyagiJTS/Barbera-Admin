import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPageImage from './LoginPageImage.svg';

const Login = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = () => {
    setLoading(true);

    // Simulate login process
    setTimeout(() => {
      onLogin(); // Call the onLogin callback
      navigate('/Dashboard'); // Redirect to the dashboard page
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="relative bg-stone-900 min-h-screen">
      <div className="sm:block hidden">
      <div className="absolute inset-y-0 left-20 w-30">
        <h2 className="relative top-1/4 left-1/2 font-jost font-normal text-base leading-6 text-yellow-500 py-2 px-4">Welcome to Barbera</h2>
        <br></br>
        <br></br>
        <div className="relative top-1/4 py-2">
            <label htmlFor="otp" className="relative top-1/4 left-1/2 block text-white py-2 px-4 font-medium mb-2">
              Login with Mobile
            </label>
            <input
              type="text"
              id="otp"
              className="relative top-1/4 left-1/2 w-full border-gray-300 text-white py-2 px-4 rounded-md shadow-sm"
            />
          </div>
        <div className="relative top-1/4">
          <button
            className="relative left-1/2 bg-yellow-500 text-white py-2 px-4 rounded-md"
            onClick={handleRedirect}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Send OTP'}
          </button>
        </div>
      </div>
      </div>

      <div className="sm:hidden">
      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 sm:p-10 md:p-16 lg:p-20 xl:p-24">
        <h2 className="font-jost font-normal text-2xl text-yellow-500 mb-4">Welcome to Barbera</h2>
        <div className="mb-4 w-full">
          <label htmlFor="otp" className="text-white font-medium mb-2 block">
            Login with Mobile
          </label>
          <input
            type="text"
            id="otp"
            className="w-full bg-white text-gray-800 py-2 px-4 rounded-md shadow-sm"
          />
        </div>
        <div className="w-full">
          <button
            className="bg-yellow-500 text-white py-2 px-4 rounded-md w-full"
            onClick={handleRedirect}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Send OTP'}
          </button>
        </div>
      </div>
      </div>
      <div className="absolute inset-0 hidden sm:block left-1/2 justify-end">
        <img src={LoginPageImage} alt="Login page" className="h-full object-cover" />
      </div>
    </div>
  );
};

export default Login;
