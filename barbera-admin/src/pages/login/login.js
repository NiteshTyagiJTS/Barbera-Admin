import React, { useState } from 'react';
import axios from 'axios';
import LoginPageImage from './LoginPageImage.svg';

function Login () {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleFocus = () => {
    if (phoneNumber === 'Enter Mobile Number') {
      setPhoneNumber('');
    }
  }

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSendOtp = async () => {
    try {
      setLoading(true);
      setError(null);

      // Make API call to generate OTP
      const response = await axios.post('API_URL/GenerateOTP', {
        phoneNumber: phoneNumber,
      });

      if (response.data.success) {
        setOtpSent(true);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError(null);

      // Make API call to check OTP
      const response = await axios.post('API_URL/CheckOTP', {
        phoneNumber: phoneNumber,
        otp: otp,
      });

      if (response.data.success) {
        // Redirect to dashboard page
        // You can use react-router-dom or any other method to handle navigation
        // For example: history.push('/dashboard');
        console.log('Redirect to dashboard');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Failed to verify OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-stone-900 min-h-screen">
    <div className="absolute inset-y-0 left-20 w-30">
        <h2 className="relative top-1/4 left-1/2 font-jost font-normal text-base leading-6 text-yellow-500">Welcome the Barbera</h2>
        <br></br>
        <br></br>
        {otpSent ? (
          <>
            <div className="mb-4">
              <label htmlFor="otp" className="relative left-1/2 block font-medium mb-2">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                className="relative left-1/2 w-full border-gray-300 rounded-md shadow-sm"
                value={otp}
                onChange={handleOtpChange}
              />
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <button
              className="relative left-1/2 bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Login'}
            </button>
          </>
        ) : (
          <>
            <div className="relative top-1/4 mb-4"> 
              <label htmlFor="phoneNumber" className="relative left-1/2 font-jost font-normal text-xs leading-4 text-white">
              Login with Mobile
              </label>
              <br></br>
              <input
                type="text"
                className="relative left-1/2 h-10 pl-10 pr-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-black"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                onFocus={handleFocus}
              />
            </div>
            {error && <div className="relative left-1/2 text-red-500 mb-4">{error}</div>}
            <button
              className="relative top-1/4 left-1/2 h-10 pl-10 pr-9 w-full bg-yellow-500 rounded-lg"
              onClick={handleSendOtp}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send OTP'}
            </button>
          </>
        )}
      </div>
    <img src={LoginPageImage} className="fixed bottom-0 right-0 w-2/4 md:w-3/5 lg:w-3/6 xl:w-4/8"></img>
    </div>
  );
};

export default Login;
