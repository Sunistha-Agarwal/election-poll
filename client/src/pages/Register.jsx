import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    userType: 'voter'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
  };

  return (
    <div
      className="text-[#301e1c] min-h-screen pt-16 px-4 pb-10 bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundColor: '#301e1c',
        backgroundImage: `linear-gradient(rgba(48, 30, 28, 0.4), rgba(48, 30, 28, 0.6)), url("https://media.istockphoto.com/id/863497498/photo/i-need-everyone-to-give-me-their-best-ideas.jpg?s=612x612&w=0&k=20&c=NtuxU9998bWMDsZN8QB0Ox-5AlpQ7NoifOhbuXQWcpo=")`
      }}
    >
      <div className="w-full max-w-md">
        <div className="bg-[#fff6f1] rounded-2xl shadow-2xl p-6 border-[2.5px] border-[#301e1c]">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-[#301e1c]">
              CREATE A NEW ACCOUNT
            </h1>
          </div>

          <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-[#301e1c] mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                autoComplete="off"
                className="w-full px-3 py-2 border border-[#ff6c37] rounded-lg text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#301e1c] mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                autoComplete="off"
                className="w-full px-3 py-2 border border-[#ff6c37] rounded-lg text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#301e1c] mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a strong password"
                autoComplete="off"
                className="w-full px-3 py-2 border border-[#ff6c37] rounded-lg text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="userType" className="block text-sm font-medium text-[#301e1c] mb-1">
                I am registering as
              </label>
              <div className="relative">
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-[#ff6c37] rounded-lg text-gray-700 bg-white cursor-pointer appearance-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
                  required
                >
                  <option value="voter">Voter</option>
                  <option value="register">Register</option>
                  <option value="admin">Admin</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-2.5 px-4 rounded-full hover:from-orange-600 hover:to-orange-700 transform hover:scale-[1.02] transition duration-200 shadow-lg hover:shadow-xl"
            >
              CREATE ACCOUNT
            </button>
          </form>

          <div className="mt-5 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a
                href="/signin"
                className="text-orange-600 hover:text-orange-700 font-medium hover:underline transition-colors duration-200"
              >
                Sign in here
              </a>
            </p>
          </div>

          <div className="mt-5 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#fff6f1] text-gray-500">Or register using</span>
            </div>
          </div>

          <button
            type="button"
            className="mt-5 w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-gray-700 font-medium">Register with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
