import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SIGNIN_ROUTE } from '../utils/constants';
import { apiClient } from '../lib/api-client';
import useAuthStore from '../store';
import toast from 'react-hot-toast';

const SignInForm = () => {
  const [activeTab, setActiveTab] = useState('mobile');
  const [inputValue, setInputValue] = useState('');
  const [isNextClicked, setIsNextClicked] = useState(false);
  const [pin, setPin] = useState('');
  const { setIsLoggedIn, isLoggedIn } = useAuthStore();
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setInputValue('');
  };

  const handleNextClick = () => {
    if (inputValue.trim()) {
      setIsNextClicked(true);
    } else {
      toast.error('Please enter a valid input');
    }
  };

  const handleSignInClick = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post(SIGNIN_ROUTE, { username: inputValue, password: pin }, { withCredentials: true });
      setIsLoggedIn(true);
      console.log(isLoggedIn);
      toast.success(response.data);
      navigate('/');
    } catch (error) {
      console.error('Signin failed', error);
      toast.error(error.response?.data || error.message); // Extract and display the error message
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-72px)] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In to your account!</h2>

        <form onSubmit={handleSignInClick}>
          {!isNextClicked ? (
            <>
              <div className="flex justify-center mb-4">
                {['mobile', 'username', 'aadhaar'].map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 rounded-t-lg ${
                      activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => handleTabChange(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="mb-4">
                <input
                  type={activeTab === 'mobile' ? 'text' : 'text'}
                  placeholder={
                    activeTab === 'mobile' ? 'Enter Mobile Number' : 
                    activeTab === 'username' ? 'Enter Username' : 
                    'Enter Aadhaar Number'
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="text-sm mt-2">
                  {activeTab === 'mobile' && 'Demo Mobile Number: 1234567890'}
                  {activeTab === 'username' && 'Demo Username: demoUser'}
                  {activeTab === 'aadhaar' && 'Demo Aadhaar Number: 1234 5678 9012'}
                </div>
              </div>

              <button
                type="button"
                onClick={handleNextClick}
                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Next
              </button>
            </>
          ) : (
            <>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="6 digit security PIN*"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  required
                />
                <small className="text-gray-500">Enter your 6 digit security PIN</small>
              </div>
              <p className="text-blue-500 cursor-pointer hover:underline text-sm mb-4">Forgot security PIN?</p>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Sign In
              </button>
            </>
          )}
        </form>

        <p className="mt-4 text-center text-sm">
          Do not have an account? <Link to="/sign-up" className="text-blue-500 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
