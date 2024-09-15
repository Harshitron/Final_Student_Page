import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignInForm = () => {
  const [activeTab, setActiveTab] = useState('mobile'); // State to track which tab is active
  const [inputValue, setInputValue] = useState(''); // State for user input
  const [isNextClicked, setIsNextClicked] = useState(false); // State to manage steps

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setInputValue(''); // Reset input when switching tabs
  };

  const handleNextClick = () => {
    if (inputValue.trim()) {
      setIsNextClicked(true); // Move to the next form step
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-72px)] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In to your account!</h2>
        
        {!isNextClicked ? (
          <>
            {/* Tabs for Mobile, Username, Aadhaar */}
            <div className="flex justify-center mb-4">
              {['Mobile', 'Username', 'Aadhaar'].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-t-lg ${
                    activeTab === tab.toLowerCase() ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => handleTabChange(tab.toLowerCase())}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Input Field Based on Active Tab */}
            <div className="mb-4">
              <input
                type={activeTab === 'mobile' ? 'text' : 'password'} // Adjust input type based on tab
                placeholder={
                  activeTab === 'mobile' ? 'Enter Mobile Number' : activeTab === 'username' ? 'Enter Username' : 'Enter Aadhaar Number'
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextClick}
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Next
            </button>
          </>
        ) : (
          <>
            {/* Show the Sign In Section after clicking Next */}
            <div className="mb-4">
              <input
                type="password"
                placeholder="6 digit security PIN*"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <small className="text-gray-500">Enter your 6 digit security PIN</small>
            </div>
            <p className="text-blue-500 cursor-pointer hover:underline text-sm mb-4">Forgot security PIN?</p>
            
            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </>
        )}
        
        {/* Link to Sign Up */}
        <p className="mt-4 text-center text-sm">
          Do not have an account? <Link to="/sign-up" className="text-blue-500 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
