import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [dob, setDob] = useState('');

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-72px)] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Creating an account is fast and easy!</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Date of Birth Section */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth*</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <div className="flex gap-4">
              <label>
                <input type="radio" name="gender" value="male" className="mr-1" /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" className="mr-1" /> Female
              </label>
              <label>
                <input type="radio" name="gender" value="other" className="mr-1" /> Other
              </label>
            </div>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Mobile Number*"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email ID*"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Set 6 digit security PIN*"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6 text-sm text-gray-600">
            I agree to the <a href="#" className="text-blue-500 hover:underline">PMSSS Terms of Service.</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account? <Link to="/sign-in" className="text-blue-500 hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
